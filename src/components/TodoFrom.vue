<template>
   <v-form class="w-100">
        <v-container >
            <v-row >
                <v-col align-self="center" cols="12" md="10">
                    <v-text-field
                        label="Todo"
                        required
                        v-model="Task"
                    ></v-text-field>
                </v-col>
                <v-col align-self="center" cols="12"  md="2">
                    <v-btn @click="AddTodo" class="mb-5" >
                        Ekle
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>  
    </v-form>
</template>
<script>
import { ref } from 'vue';
import store from "@/store/index.js";
export default {
    setup(){  
        const Task = ref("");
        const AddTodo=()=>{
            store.dispatch("newTodo",{
                text:Task.value
            });
            Task.value="";
        }
        return{
            AddTodo,
            Task
        }
    },
    props:["list"],
}
</script>

<style>

</style>