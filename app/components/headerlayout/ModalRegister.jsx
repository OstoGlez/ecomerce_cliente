import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { CREATE_USER } from "../../../Querys/querys.js";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Input,
  Center,
  Box,
  Container,
  useToast,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

function ModalRegister({ ...props }) {
  console.log("props modal", props);

  const toast = useToast();
  const [mensaje, GuardarMensaje] = useState({});
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Nombre y apellidos es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
    phone: Yup.string().required("El telefono es obligatorio"),
    email: Yup.string().required("El correo es obligatorio"),
    address: Yup.string().required("La direccion es obligatoria"),
  });
  const [createUser] = useMutation(CREATE_USER);
  const mostrarMensaje = () => {
    console.log("se ejecuto el toast");
    toast({
      title: "Crear Usuario",
      description: "El usuario ha sido creado exitosamente ",
      position: "top-right",
      status: success,
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Container
      border="0.1em solid rgba(247, 250, 247, 0.2)"
      rounded="8px"
      py="4em"
      px="4em"
    >
      <Box py="2em" border="1px solid rgba(28, 153, 216, 0.404) " rounded="8px">
        <Formik
          initialValues={{
            fullname: "",
            password: "",
            phone: "",
            email: "",
            address: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, actions) => {
            const { setSubmitting, resetForm } = actions;
            const { fullname, phone, email, password, address } = values;

            try {
              const { data } = await createUser({
                variables: {
                  input: {
                    fullname,
                    phone,
                    email,
                    password,
                    address,
                    captcha_token: props.captcha_token,
                    benefited: [
                      {
                        fullname: "Comando",
                        address: "maceo",
                        email: "gert@has.com",
                        phone: "34567889",
                      },
                    ],
                  },
                },
              });
              console.log(data.createUser.CreatedUser.fullname);
              toast({
                title: "Crear Usuario",
                description: `Ha sido creado el  Usuario ${data.createUser.CreatedUser.fullname}`,
                position: "top-right",
                status: "success",
                duration: 5000,
                isClosable: true,
              });

              setTimeout(() => {
                GuardarMensaje();
                //router.push("/usuarios");
              }, 3000);
            } catch (error) {
              toast({
                title: "Error al crear usuario",
                description: "Ha ocurrido un error al crear el usuario ",
                position: "top-right",
                status: "error",
                duration: 5000,
                isClosable: true,
              });
              setTimeout(() => {
                GuardarMensaje({});
                setSubmitting(false);
                resetForm();
              }, 3000);
            }
          }}
        >
          {(props) => (
            <>
              <Center h="100%">
                <Form>
                  <Field name="fullname">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.fullname && form.touched.fullname
                        }
                      >
                        <FormLabel color="brand.gris.300">
                          Nombre y Apellidos
                        </FormLabel>
                        <Input
                          {...field}
                          placeholder="nombre y apellidos"
                          color="rgba(20, 19, 19, 0.966)"
                          border="1px solid rgba(27, 97, 236, 0.329) "
                        />
                        <FormErrorMessage>
                          {form.errors.fullname}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="phone">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.phone && form.touched.phone}
                      >
                        <FormLabel color="brand.gris.300">Telefono</FormLabel>
                        <Input
                          {...field}
                          placeholder="telefono"
                          color="rgba(20, 19, 19, 0.966)"
                          border="1px solid rgba(27, 97, 236, 0.329) "
                        />
                        <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="email">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.email && form.touched.email}
                      >
                        <FormLabel color="brand.gris.300">Correo</FormLabel>
                        <Input
                          {...field}
                          placeholder="Correo"
                          color="rgba(20, 19, 19, 0.966)"
                          border="1px solid rgba(27, 97, 236, 0.329) "
                        />
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="password">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.password && form.touched.password
                        }
                      >
                        <FormLabel color="brand.gris.300">Contraseña</FormLabel>
                        <Input
                          {...field}
                          placeholder="Contraseña"
                          color="rgba(20, 19, 19, 0.966)"
                          border="1px solid rgba(27, 97, 236, 0.329) "
                        />
                        <FormErrorMessage>
                          {form.errors.password}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="address">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.address && form.touched.address}
                      >
                        <FormLabel color="brand.gris.300">Direccion</FormLabel>
                        <Input
                          {...field}
                          placeholder="Direccion"
                          color="rgba(20, 19, 19, 0.966)"
                          border="1px solid rgba(27, 97, 236, 0.329) "
                        />
                        <FormErrorMessage>
                          {form.errors.address}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Center>
                    <Button
                      border="border-0"
                      bg="rgba(6, 54, 94, 0.966)"
                      mt={4}
                      color="rgba(250, 251, 253, 0.979)"
                      isLoading={props.isSubmitting}
                      type="submit"
                    >
                      Registrarse
                    </Button>
                  </Center>
                </Form>
              </Center>
            </>
          )}
        </Formik>
      </Box>
    </Container>
  );
}

export default ModalRegister;

/*import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../../Querys/querys.js";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Input,
  Center,
  Text,
  Box,
  Flex,
  Container,
  Select,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

function ModalRegister() {
  const [mensaje, GuardarMensaje] = useState({});
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Nombre y apellidos es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
    phone: Yup.string().required("El telefono es obligatorio"),
    email: Yup.string().required("El correo es obligatorio"),
    address: Yup.string().required("La direccion es obligatoria"),
    benefited: Yup.array().of(
      Yup.object().shape({
        fullname: Yup.string().required("El nombre completo es requerido"),
        address: Yup.string().required("La dirección es requerida"),
        email: Yup.string()
          .email("El correo electrónico no es válido")
          .required("El correo electrónico es requerido"),
        phone: Yup.string().required("El número de teléfono es requerido"),
      })
    ),
  });
  const [createUser] = useMutation(CREATE_USER);
  const mostrarMensaje = () => {
    toast({
      title: "Notificacion de Registro.",
      description: { mensaje },
      position: "top-right",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Container
      border="0.1em solid rgba(247, 250, 247, 0.2)"
      rounded="8px"
      py="4em"
      px="4em"
    >
      <Box py="2em" border="1px solid rgba(28, 153, 216, 0.404) " rounded="8px">
        <Formik
          initialValues={{
            fullname: "",
            password: "",
            phone: "",
            email: "",
            address: "",
            benefited: [
              {
                fullname: "",
                address: "",
                email: "",
                phone: "",
              },
            ],
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, actions) => {
            const { setSubmitting, resetForm } = actions;
            const { fullname, phone, email, password, address, benefited } =
              values;
            console.log(values);

            try {
              const { data } = await createUser({
                variables: {
                  input: {
                    fullname,
                    phone,
                    email,
                    password,
                    address,
                    captcha_token,
                    benefited: [
                      {
                        fullname: benefited.fullname,
                        address: benefited.address,
                        email: benefited.email,
                        phone: benefited.phone,
                      },
                    ],
                  },
                },
              });
              GuardarMensaje({
                description: `Se creo correctamente el usuario:${data.nuevoUsuario.nombre}`,
                status: "success",
              });
              setTimeout(() => {
                GuardarMensaje();
                //router.push("/usuarios");
              }, 3000);
            } catch (error) {
              GuardarMensaje({
                description: error.message,
                status: "error",
              });
              setTimeout(() => {
                GuardarMensaje({});
                setSubmitting(false);
                resetForm();
              }, 3000);
            }
          }}
        >
          {(props) => (
            <>
              <Center h="100%">
                <Form>
                  <Field name="fullname">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.fullname && form.touched.fullname
                        }
                      >
                        <FormLabel color="brand.gris.300">
                          Nombre y Apellidos
                        </FormLabel>
                        <Input
                          {...field}
                          placeholder="nombre y apellidos"
                          color="rgba(20, 19, 19, 0.966)"
                          border="1px solid rgba(27, 97, 236, 0.329) "
                        />
                        <FormErrorMessage>
                          {form.errors.fullname}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="phone">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.phone && form.touched.phone}
                      >
                        <FormLabel color="brand.gris.300">Telefono</FormLabel>
                        <Input
                          {...field}
                          placeholder="telefono"
                          color="rgba(20, 19, 19, 0.966)"
                          border="1px solid rgba(27, 97, 236, 0.329) "
                        />
                        <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="email">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.email && form.touched.email}
                      >
                        <FormLabel color="brand.gris.300">Correo</FormLabel>
                        <Input
                          {...field}
                          placeholder="Correo"
                          color="rgba(20, 19, 19, 0.966)"
                          border="1px solid rgba(27, 97, 236, 0.329) "
                        />
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="password">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.password && form.touched.password
                        }
                      >
                        <FormLabel color="brand.gris.300">Contraseña</FormLabel>
                        <Input
                          {...field}
                          placeholder="Contraseña"
                          color="rgba(20, 19, 19, 0.966)"
                          border="1px solid rgba(27, 97, 236, 0.329) "
                        />
                        <FormErrorMessage>
                          {form.errors.password}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="address">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.address && form.touched.address}
                      >
                        <FormLabel color="brand.gris.300">Direccion</FormLabel>
                        <Input
                          {...field}
                          placeholder="Direccion"
                          color="rgba(20, 19, 19, 0.966)"
                          border="1px solid rgba(27, 97, 236, 0.329) "
                        />
                        <FormErrorMessage>
                          {form.errors.address}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  

                  <Field name="benefited">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.benefited && form.touched.benefited
                        }
                      >
                        <FormLabel color="brand.gris.300">
                          Beneficiados
                        </FormLabel>
                        <Input
                          {...field}
                          placeholder="Beneficiados"
                          color="rgba(20, 19, 19, 0.966)"
                          border="1px solid rgba(27, 97, 236, 0.329) "
                        />
                        <FormErrorMessage>
                          {form.errors.benefited}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Center>
                    <Button
                      border="border-0"
                      bg="rgba(6, 54, 94, 0.966)"
                      mt={4}
                      color="rgba(250, 251, 253, 0.979)"
                      isLoading={props.isSubmitting}
                      type="submit"
                    >
                      Registrarse
                    </Button>
                  </Center>
                </Form>
              </Center>
            </>
          )}
        </Formik>
      </Box>
    </Container>
  );
}

export default ModalRegister;
*/
