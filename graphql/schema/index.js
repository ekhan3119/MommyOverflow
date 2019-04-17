const {buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Card {
        _id: ID!
        event: Event!
        user: User!
        createdAt: String!
        updatedAt: String!
    }
    type Event {
        _id:ID!
        title: String!
        description: String!
        price: Float!
        date: String!
        creator: User!        
    }

    type User {
        _id:ID!
        email:String!
        password: String
        createdEvents: [Event!]
    }

    type AuthData {
        userId:ID!
        token:String!
        tokenExpiration:Int!
    }

    input EventInput {
        title: String!
        description: String!
        price: Float!
        date: String!
    }

    input UserInput {
        email:String!
        password: String!
    }

    type RootQuery {
        events:[Event!]!
        cards:[Card!]!
        login(email:String!,password:String!):AuthData!
    }
    type  RootMutation {
        createEvent(eventInput:EventInput):Event
        createUser(userInput:UserInput): User
        createCard(eventId: ID!): Card!
        cancelCard(cardId:ID!):Event!
    }
        schema {
             query: RootQuery
             mutation: RootMutation
        }
    `)