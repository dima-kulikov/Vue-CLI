const userStore = {
    namespaced: true,
state: {
    list: {
        1: {
            name: "Denis",
            age: 30
        }
    }
},
getters: {
    usersList: ({ list }) => Object.values(list)
},
mutation: {},
action: {}
};

export default userStore;