<template>
    <v-container class="d-flex justify-center align-center">
      <div class="TodoApp-div">
        <v-row justify="center">
          <span class="text-h1">TodoApp</span>
        </v-row>
        <v-row  class="mt-10">
          <TodoFrom  />
        </v-row>
        <v-row v-for="(items) in todoItems" :key="items.id">
          <Todos  :data="items"  />
        </v-row>
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
    computed:mapGetters(["todoItems"])
}
</script>

<style>

.TodoApp-div{
    width: 500px;
    height: 600px;
}
</style>