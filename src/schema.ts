//datatypes ====> int, float, string, boolean, ID


// The esclamation(!) is for required field and it's not allowed to be null
export const typeDefs = `#graphql
  type Game{
    id: ID!
    title: String!
    platfrom: [String!]!
  }
  type Review{
    id: ID!
    rating: Int!
    content: String!
  }
  type Author{
    id: ID!
    name: String!
    verified: Boolean!
  }
  type Query{
    reviews: [Review]
    games: [Game]
    authors: [Author]
  }
`
// type Query is the entry point