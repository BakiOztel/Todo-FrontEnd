<template>
   <v-container class="w-100 todo-con">
        <v-row>
            <v-col md="8">
            <div >
                {{ items.text }}
            </div>
        </v-col>
            <v-col  md="2">
                <v-btn @click="DeletTodo(items.id)" color="red" icon="mdi-cancel" >
            </v-btn>
        </v-col>
        <v-col md="2">
            <Popup :item="items" />
        </v-col>
        </v-row>
   </v-container>
  </template>

<script>
import store from '@/store/index.js';
import Popup from "@/components/TodoUpdatePopup.vue";
import { ref } from 'vue';
export default {
    setup(props){
        const dialog = ref(false)
        const items = props.data;
        const DeletTodo =(payload)=>{
            store.dispatch("deleteTodo",payload);
        }
        
        return{
            items,
            DeletTodo,
        }
    },
    props:["data"],
    components:{
        Popup
    }
}
</script>

<style scoped>
.todo-con{
    border-bottom: solid gray;
}
</style>

