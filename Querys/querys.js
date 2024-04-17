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
          email
        }
        accessHistory {
          ipAddress
          accessDateTime
          accessCount
        }
        create
      }
      RecaptchaResponse {
        success
        challenge_ts
        hostname
      }
    }
  }
`;

const AUTHENTIFICATE_USER = gql`
  mutation authenticateUser($input: AuthenticateInput) {
    authenticateUser(input: $input) {
      token
      expiresOut
    }
  }
`;

export { CREATE_USER, AUTHENTIFICATE_USER };
