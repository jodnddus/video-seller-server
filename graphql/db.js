let Users = [
    {
        id: 0,
        username: "jodnddus",
        password: "asdf1145",
        email: "lockhost23@gmail.com",
        moviecode: [100, 102]
    },
    {
        id: 1,
        username: "leechanggeun",
        password: "abcd1234",
        email: "lee2019@gmail.com",
        moviecode: [100, 101, 102, 103, 104]
    },
    {
        id: 2,
        username: "gangyeonjo",
        password: "bbaaccdd",
        email: "gangyeonjo336@gmail.com",
        moviecode: [100, 104]
    }
];

let Videos = [
    {
        id: 100,
        name: "부산행",
        price: 6000
    },
    {
        id: 101,
        name: "어벤져스: 엔드게임",
        price: 10000
    },
    {
        id: 102,
        name: "극한직업",
        price: 9000
    },
    {
        id: 103,
        name: "더 테러 라이브",
        price: 5000
    },
    {
        id: 104,
        name: "곡성",
        price: 7000
    }
]

export const getUsers = () => Users;
export const getVideos = () => Videos;
export const getById = id => {
    const filteredUsers = Users.filter(user => user.id === id);
    return filteredUsers[0];
}