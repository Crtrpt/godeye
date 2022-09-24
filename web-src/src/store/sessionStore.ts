import { defineStore } from 'pinia'
import { Ref, ref } from 'vue';
import { Session } from '../type/Index'

export const sessionStore=defineStore('session',()=>{
    var count=ref<number>(0);
    
    var list=ref<Array<Session>>();
    
    function create(payload:Session){
        list.value?.push(payload);
        count.value++;
    };

    function query(id:string){
        for (const key in list.value) {
            console.log(key);
        }
    }
    
    function update(){

    }

    function remove(id:string){
        for (const key in list) {
           
        }
    }
    return {list,create,remove,update,query}
})