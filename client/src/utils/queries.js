import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user ($username: String!) {
    user(username: $username) {
      _id
      username
      email
      pets {
        _id
        petName
        type
        age
        isClean
        playedWith
        hunger
      }
    }
  }
`;


export const QUERY_PETS = gql`
  query getPets($id: ID!) {
    pets {
      _id
      petName
      type
      age
      isClean
      playedWith
      hunger
    }
  }
`;






