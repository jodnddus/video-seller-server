import { buildSchema } from 'type-graphql';
import resolvers from './graphql/resolvers';

/*const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
});*/
async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [resolvers],
    });
}


bootstrap();