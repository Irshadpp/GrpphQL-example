import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

//db
import db from "./db"

//types
import { typeDefs } from './schema';

const resolvers = {
    Query: {
        games() {
            return db.games
        },
        reviews() {
            return db.reviews
        },
        authors(){
            return db.authors
        }
    }
}

//server setup
const server = new ApolloServer({
    typeDefs,
    resolvers
});

const {url} = await startStandaloneServer(server, {
    listen: {port: 3000}
});

console.log("Server running on port: ", 3000)