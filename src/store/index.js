import { createStore } from 'vuex';
import juegos from '@/assets/juegos.json';

const store = createStore({
    
    state(){

        return{
            inventario: juegos,
        }
    },
    mutations:{
        actualizarInventario(state, datos){
            const registro = state.inventario.find((registro)=>registro.codigo===datos.codigo);
            if(registro.stock > 0 && datos.stock === "-"){
                registro.stock --;
            }else if(datos.stock === "+"){
                registro.stock ++;
            }
        }
    },
    actions:{
        cambiarInventario(context, datos){
            context.commit('actualizarInventario', datos)
        }
    },
    modules:{

    },
    getters:{
        inventario(state){
            return state.inventario;
        }
    }
})



export default store;