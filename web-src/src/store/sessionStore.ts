import { defineStore } from 'pinia'
import { Ref, ref } from 'vue';
import { Session } from '../type/Index'

export const sessionStore=defineStore('session',()=>{
    var count=ref<number>(0);
    var list=ref<Array<Session<any>>>([]);
    list.value=JSON.parse(window.localStorage.getItem("sessions")||'[]')??[];
    function create(payload:Session<any>){
        list.value?.push({
            ...payload,
            "id":new Date().getTime().toString()
        });
        count.value++;
        syncStore();
    };

    function syncStore(){
        window.localStorage.setItem("sessions",JSON.stringify(list.value));
    }

    function query(id:string):Session<any>|undefined{
        for (const key of list.value) {
            if(key.id==id){
                return key;
            }
        }
        return undefined
    }
    
    function update(){

    }

    function remove(id:string){
        var idx=0;
        for (const key  of list.value) {
           idx++;
            if(key.id==id){
                list.value=[
                    ...list.value.splice(0,idx-1),
                    ...list.value.splice(idx,list.value.length)
                ]
                console.log(list);
                break
           }
        }
        syncStore()
    }
    return {count,list,create,remove,update,query}
})