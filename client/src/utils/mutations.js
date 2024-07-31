import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($username: String, $email: String, $password: String) {
    updateUser(username: $username, email: $email, password: $password) {
      _id
      username
      email
    }
  }
`;

export const ADD_PET = gql`
  mutation addPet($petName: String!, $type: String!, $isClean: Boolean, $playedWith: Boolean, $hunger: Int) {
    addPet(petName: $petName, type: $type, isClean: $isClean, playedWith: $playedWith, hunger: $hunger) {
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

export const UPDATE_PET = gql`
  mutation updatePet($id: ID!, $petName: String, $type: String, $isClean: Boolean, $playedWith: Boolean, $hunger: Int) {
    updatePet(id: $id, petName: $petName, type: $type, isClean: $isClean, playedWith: $playedWith, hunger: $hunger) {
      _id
      petName
      type
      isClean
      playedWith
      hunger
    }
  }
`;
