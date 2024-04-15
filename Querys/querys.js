import { gql } from "@apollo/client";

// ++++++++++++++++++++++++  Querys  +++++++++++++++++++++++++++++

// +++++++++++++++++++++  Mutation  +++++++++++++++++++++++++++++

const CREATE_USER = gql`
  mutation createUser($input: UserInput) {
    createUser(input: $input) {
      CreatedUser {
        id
        fullname
        phone
        email
        role
        address
        benefited {
          fullname
          address
          phone
        }
        accessHistory {
          ipAddress
          accessDateTime
          accessCount
        }
        create
      }
    }
  }
`;

export { CREATE_USER };
