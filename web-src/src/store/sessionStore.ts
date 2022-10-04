import { defineStore } from 'pinia'
import { Ref, ref } from 'vue';
import { Session } from '../type/Index'

export const sessionStore=defineStore('session',()=>{
    var count=ref<number>(0);
    
    var list=ref<Array<Session<any>>>([]);
    
    function create(payload:Session<any>){
        list.value?.push({
            ...payload,
            "id":new Date().getTime().toString()
        });
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
    return {count,list,create,remove,update,query}
})