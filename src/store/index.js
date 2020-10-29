import {createStore} from 'vuex'

export default createStore({
    state: {
        todos: [],
        dones: [],
        deletes: []
    },
    mutations: {
        add(state, value) {
            state.todos.push(value)
        },
        delete(state, index) {
            const item = state.todos[index];
            state.todos.splice(index, 1);
            state.deletes.push(item)
        },
        check(state, index) {
            const item = state.todos[index];
            state.todos.splice(index, 1);
            state.dones.push(item)
        }
    },
    actions: {},
    modules: {}
})
