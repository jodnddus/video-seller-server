import { getUsers, getVideos, getById } from './db';

const resolvers = {
    Query: {
        users: () => getUsers(),
        videos: () => getVideos(),
        user: (_, { id }) => getById(id)
    }
};

export default resolvers;