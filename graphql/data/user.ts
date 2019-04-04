interface userData {
    id: number,
    username: string,
    email: string,
    password: string,
    videoId: number[]
};

let Users: userData[] = [
    {
        id: 0,
        username: "jodnddus",
        email: "lockhost23@gmail.com",
        password: "asdf1145",
        videoId: [100, 102]
    },
    {
        id: 1,
        username: "leechanggeun",
        email: "lee2019@gmail.com",
        password: "abcd1234",
        videoId: [100, 101, 102, 103, 104]
    },
    {
        id: 2,
        username: "gangyeonjo",
        email: "gangyeonjo336@gmail.com",
        password: "bbaaccdd",
        videoId: [100, 104]
    }
];

export { Users, userData };