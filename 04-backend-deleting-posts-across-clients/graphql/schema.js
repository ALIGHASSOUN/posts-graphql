const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type Post {
        _id : ID!
        title: String!
        content: String!
        imageUrl: String!
        creator: User!
        createdAt: String!
        updatedAt: String!
    }
    
    type User {
        _id: ID!
        name: String!
        email: String!
        password: String
        status: String!
        posts: [Post!]!
    }

    type AuthData { 
        token: String!
        userId: String! 
    }  

    input UserInputData{
        email: String!
        name: String!
        password: String!
    }

    input PostInputData{
        title: String!
        content: String! 
        imageUrl: String! 
    }

    type RootQuery{
        login(email: String!, password: String!): AuthData!
    }

    type RootMutation{
        createUser(userInput: UserInputData): User!
        createPost(postInput: PostInputData): Post!
    }

    schema{
        query: RootQuery    
        mutation: RootMutation
    }
    

`);
