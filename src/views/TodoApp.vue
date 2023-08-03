<template>
    <v-container class="d-flex justify-center align-center">
      <div class="TodoApp-div">
        <v-row justify="center">
          <span class="text-h1">TodoApp</span>
        </v-row>
        <v-row  class="mt-10">
          <TodoFrom v-if="getUser.token !==null"  />
          <v-container v-else class="main_div_else" >
            <v-row class="d-flex justify-center h-50">
              <div>Login to enter task</div>
            </v-row>
            <v-row class="d-flex justify-center h-50">
              <router-link to="/login">
                <v-btn>
                  Login
                </v-btn>
              </router-link>
            </v-row>
            <v-row class="d-flex justify-center h-50">
              <router-link to="/register">
                <v-btn>
                  Register
                </v-btn>
              </router-link>
            </v-row>
          </v-container>
        </v-row>
        <v-row v-for="(items) in todoItems" :key="items.id">
          <Todos  :data="items"  />
        </v-row>
        {{ console.log(todoItems) }}
      </div>
    </v-container>
  </template>

<script>
import TodoFrom from '@/components/TodoFrom.vue';
import Todos from "@/components/Todo.vue";
import { mapGetters } from 'vuex';
import store from '@/store/index.js';
export default {
    name:"TodoApp",
    components:{
      TodoFrom,
      Todos
    },
    setup(){
      store.dispatch("getTodoItems");
    },
    computed:mapGetters(["todoItems","getUser"])
}
</script>

<style>

.TodoApp-div{
    width: 500px;
    height: 600px;
}
.main_div_else{
  min-height: 150px;
 }
</style>