import React from "react";
import { useMutation } from "@apollo/client";
import { AUTHENTIFICATE_USER } from "../../../Querys/querys.js";
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

export default function ModalSigin({ ...props }) {
  const toast = useToast();
  const validationSchema = Yup.object().shape({
    password: Yup.string().required("La contraseña es obligatoria"),
    email: Yup.string().required("El correo es obligatorio"),
  });
  const [authenticateUser] = useMutation(AUTHENTIFICATE_USER);
  return (
    <Container
      border="0.1em solid rgba(247, 250, 247, 0.2)"
      rounded="8px"
      py="2em"
      px="2em"
    >
      <Box py="2em" border="1px solid rgba(28, 153, 216, 0.404) " rounded="8px">
        <Formik
          initialValues={{
            password: "",
            email: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, actions) => {
            const { setSubmitting, resetForm } = actions;
            const { email, password } = values;

            try {
              const { data } = await authenticateUser({
                variables: {
                  input: {
                    email,
                    password,
                  },
                },
              });
              const { token } = data.authenticateUser;

              // Pasamos el token de acceso OAuth al token de sesión
              localStorage.setItem("token", token);

              toast({
                title: "Autenficar Usuario",
                description: "Ud ha sido autentificado exitosamente",
                position: "top-right",
                status: "success",
                duration: 5000,
                isClosable: true,
              });

              setTimeout(() => {
                //router.push("/usuarios");
              }, 3000);
            } catch (error) {
              toast({
                title: "Error al Autentificarse",
                description: "Ha ocurrido un error al Autentificarse ",
                position: "top-right",
                status: "error",
                duration: 5000,
                isClosable: true,
              });
              setTimeout(() => {
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
                  <Center>
                    <Button
                      border="border-0"
                      bg="rgba(27, 125, 206, 0.966)"
                      mt={4}
                      color="rgba(250, 251, 253, 0.979)"
                      isLoading={props.isSubmitting}
                      type="submit"
                    >
                      Iniciar Sesion
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
