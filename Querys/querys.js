import { gql, useQuery, useMutation } from "@apollo/client";

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
          email
          phone
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
        score
        action
        challenge_ts
        hostname
      }
    }
  }
`;

export { CREATE_USER };
