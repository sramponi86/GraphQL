const { ApolloServer , gql } = require("apollo-server");

const typeDefs = gql`
    scalar Date

    type Query {
        totalDays: Int!
        allDays: [SkiDay!]!
    }

    type SkiDay {
        id: ID!
        date: Date!
        mountain: String!
        conditions: Conditions
    }

    enum Conditions {
        POWDER
        HEAVY
        ICE
        THIN
    }

    type Mutation {
        removeDay(id: ID!): SkiDay!
        addDay(input: AddDayInput!): SkiDay
    }

    input AddDayInput {
        date: Date!
        mountain: String!
        conditions: Conditions
    }

    type Subscription {
        newDay: SkiDay!

    }
`;
// const resolvers = {

// };

const mocks = {
    Date: () => "1/2/2025"
}

const server = new ApolloServer({
    typeDefs,
    mocks
});

server.listen().then(({ url }) => console.log(`Server running at ${ url }`));

