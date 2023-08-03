import axios from 'axios';
import { createStore } from 'vuex'

const url = "http://localhost:5000";

export default createStore({
  state: {
    user: {
      token: null,
      id: "",
    },
    Todos: []
  },
  getters: {
    getUser: state => state.user,
    todoItems: state => state.Todos,
  },
  mutations: {
    deleteTodo(state, payload) {
      state.Todos = state.Todos.filter(x => { return x.id != payload })
    },
    setTodo(state, payload) {
      state.Todos = payload;
    },
    setUser(state, payload) {
      state.user.token = payload.token;
      state.user.id = payload.id;
    },
  },
  actions: {
    async getTodoItems({ commit }) {
      await axios.get(`${url}/api/Todo`).then(response => {
        commit("setTodo", response.data);
      }).catch(err => console.log(err));
    },
    async newTodo({ dispatch, commit }, payload) {
      await axios.post(`${url}/api/Todo`, payload).then(response => {
        dispatch("getTodoItems");
      }).catch(err => console.log(err));
    },
    async deleteTodo({ dispatch, commit }, payload) {

      await axios.delete(`${url}/api/Todo/${payload}`).then(response => {
        commit("deleteTodo", payload);
      }).catch(err => console.log(err));
    },
    async loginUser({ commit }, payload) {
      await axios.post(`${url}/api/Auth/auth`, payload).then(response => {
        commit("setUser", response.data);
      }).catch(err => console.log(err));
    },
    async createUser({ commit }, payload) {
      await axios.post(`${url}/api/User/CreateUser`, payload).then(response => {

      }).catch(err => console.log(err));
    },
    async UpdateTodo({ dispatch, commit }, { data, id }) {
      await axios.put(`${url}/api/Todo/${id}`, data).then(response => {
        dispatch("getTodoItems");
      }).catch(err => console.log(err));
    }
  },
  modules: {
  }
})
