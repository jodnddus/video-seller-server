import { buildSchema } from 'type-graphql';
import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

/*const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
});*/
async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [resolvers],
    });

    const server = new GraphQLServer({
        schema,
    });

    server.start(() => console.log("GraphQL Server Running 🏃‍"));
}


bootstrap();