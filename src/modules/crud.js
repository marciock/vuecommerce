import Vue from 'vue';
export default {
    
        namespaced:true,
        state:{
            table:[],
            toast:{},
            
        },
        mutations:{
            hidratation(state,marcasAction){
                state.table=marcasAction
            },
            mutToast(state,toast){
                state.toast=toast;
            },
            mutUpdate(state,updateView){
                state.table=updateView
            },
            mutEdit(state,editAction){
                state.table=editAction
            }
    

        },
        actions:{
            show: async ({commit},url)=>{

                const URL=url;
                Vue.http.get(URL).then((res)=>{
                    console.log(res.body)
                 commit('hidratation',res.body);
                    
                });
                
            },
            updateView: async ({commit},url)=>{

                const URL=url;  
                Vue.http.get(URL).then((res)=>{
                   // console.log(res.body)
                 commit('mutUpdate',res.body)
                    
                });
                
            },
            actToast({commit},item){
                commit('mutToast',item);
            },
            removeAction(context,payload){
                const item=payload.item;
                const url=payload.url;

                //console.log(formData)
                Vue.http.post(url,item,{body:{id:item}}).then((res)=>{

                    console.log(res);
                    
                })   
               
            },
            saveAction(context,schema){
                const item=schema.item;
                const url=schema.url;
                Vue.http.post(url,item).then((res)=>{
                    console.log(res.body);

                   
                    
                })
                
            },
            editAction({commit},params){
                const item=params.item;
                const url=params.url;

                Vue.http.get(url,{params:{item}}).then((res)=>{
                    commit('mutEdit',res.body);
                })
            }
            
            

        }
    
}