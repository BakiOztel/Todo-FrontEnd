<template>
    <v-btn icon="mdi-wrench" color="purple" @click="dialog = true" >
    </v-btn>
    <v-dialog  v-model="dialog" width="500">
        <v-card>
            <v-container >
            <v-row >
                <v-col align-self="center" cols="12" md="8">
                    <v-text-field
                        label="Todo"
                        required
                        v-model="Task"
                    ></v-text-field>
                </v-col>
                <v-col align-self="center" cols="12"  md="4">
                    <v-btn @click="UpdateTodo()" class="mb-5" >
                        Güncelle
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>  
        </v-card>
    </v-dialog>
</template>

<script>
import { ref } from 'vue'
import store from '@/store/index.js';
export default {
    setup(props){
        const Task=ref(props.item.text);
        const dialog=ref(false);
        const UpdateTodo = ()=>{
            const data = {id:props.item.id,text:Task.value}
            store.dispatch("UpdateTodo",{data,id:props.item.id})  
            dialog.value=false;       
        }
        return{
            Task,UpdateTodo,dialog
        }
    },
    props:["item"]
}
</script>

<style>

</style>

