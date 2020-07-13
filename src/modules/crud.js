import Vue from 'vue';
export default {
    
        namespaced:true,
        state:{
            table:[],
            tableEdit:[],
            toast:{},
            
        },
        mutations:{
            hidratation(state,showAction){
                
                state.table=showAction
            },
            rehidratation(state,reAction){
                state.tableEdit=reAction
            },
            mutToast(state,toast){
                state.toast=toast;
            },
            mutUpdate(state,updateView){
                state.table=updateView
            },
            mutEdit(state,editAction){
                state.table=editAction
            },
           
    

        },
        actions:{
            show: async ({commit},url)=>{

                const URL=url;
                await  Vue.http.get(URL).then((res)=>{
                    //console.log(res.body)
                 commit('hidratation',res.body);
                    
                });
                
            },
            reAction: async ({commit},url)=>{

                const URL=url;
                await  Vue.http.get(URL).then((res)=>{
                    //console.log(res.body)
                 commit('rehidratation',res.body);
                    
                });
                
            },
            
            updateView: async ({commit},url)=>{

                const URL=url;  
                await Vue.http.get(URL).then((res)=>{
                   // console.log(res.body)
                 commit('mutUpdate',res.body)
                    
                });
                
            },
            actToast({commit},item){
                commit('mutToast',item);
            },
            removeAction: async (context,payload)=>{
                const item=payload.item;
                const url=payload.url;

                //console.log(formData)
                await  Vue.http.post(url,item,{body:{id:item}}).then((res)=>{

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
            editAction: async ({commit},payload)=>{
                const id=payload.id;
                const url=payload.url;

                await Vue.http.get(url,{params:{id}}).then((res)=>{
                     console.log(res.body);
                    commit('mutEdit',res.body);
                })
            },
            saveEditAction: async (context,schema)=>{
                const id=schema.item.id;
                const item=schema.item;
                const url=schema.url;
              await  Vue.http.post(url,item,{params:{id}}).then((res)=>{
                  console.log(res.body) 
              });                
               
                
            },      
           
            
            

        }
    
}