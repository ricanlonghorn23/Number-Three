const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
        password: String
        pets: [Pet]
    }

    type Pet {
        _id: ID
        petName: String
        type: String
        age: Int
        isClean: Boolean
        playedWith: Boolean
        hunger: Int
        petOwner: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(username: String!): User
        pet(_id: ID!): Pet
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        updateUser(username: String, email: String, password: String): Auth
        addPet(petName: String!, type: String!, age: Int, isClean: Boolean, playedWith: Boolean, hunger: Int): Pet
        updatePet(id: ID!, petName: String, type: String, isClean: Boolean, playedWith: Boolean, hunger: Int, petOwner: String!): Pet
    }
`;
module.exports = typeDefs;
