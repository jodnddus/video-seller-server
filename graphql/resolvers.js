import { Users, getById } from './db';

const resolvers = {
    Query: {
        users: () => Users,
        user: () => getById()
    }
};

export default resolvers;