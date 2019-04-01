import { getUsers, getVideos, getById } from './db';

const resolvers = {
    Query: {
        users: () => getUsers(),
        videos: () => getVideos(),
        user: (_, { id }) => getById(id)
    },
    Mutation: {
        signUpUser(_, { username, email, password }) => 
    }
};

export default resolvers;