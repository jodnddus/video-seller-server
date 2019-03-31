export const Users = [
    {
        id: 0,
        username: "jodnddus",
        password: "asdf1145",
        email: "lockhost23@gmail.com"
    },
    {
        id: 1,
        username: "leechanggeun",
        password: "abcd1234",
        email: "lee2019@gmail.com"
    },
    {
        id: 2,
        username: "gangyeonjo",
        password: "bbaaccdd",
        email: "gangyeonjo336@gmail.com"
    }
];

export const getById = id => {
    const filteredUsers = Users.filter(user => Users.id === id);
    return filteredUsers;
}