import axios from 'axios';
import { createStore } from 'vuex'


export default createStore({
  state: {
    Todos: []
  },
  getters: {

    todoItems: state => state.Todos,
  },
  mutations: {
    deleteTodo(state, payload) {
      console.log(state.Todos);

      state.Todos = state.Todos.filter(x => { return x.id != payload })

      console.log(state.Todos);
    },
    setTodo(state, payload) {
      state.Todos = payload;
    }
  },
  actions: {
    async getTodoItems({ commit }) {
      await axios.get("https://localhost:44348/api/Todo").then(response => {
        commit("setTodo", response.data);
      }).catch(err => console.log(err));
    },
    async newTodo({ dispatch, commit }, payload) {
      await axios.post("https://localhost:44348/api/Todo", payload).then(response => {
        dispatch("getTodoItems");
      }).catch(err => console.log(err));
    },
    async deleteTodo({ dispatch, commit }, payload) {
      await axios.delete(`https://localhost:44348/api/Todo/${payload}`).then(response => {
        commit("deleteTodo", payload);
      }).catch(err => console.log(err));
    },
    async UpdateTodo({ dispatch, commit }, { data, id }) {
      await axios.put(`https://localhost:44348/api/Todo/${id}`, data).then(response => {
        dispatch("getTodoItems");
      }).catch(err => console.log(err));
    }
  },
  modules: {
  }
})
