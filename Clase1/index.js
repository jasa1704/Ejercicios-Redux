const redux = require("redux");

console.log("hola mundo");

const createStore = redux.createStore;

const estadoInicial = {
    usuarios: []
};

const rootReducer = (state = estadoInicial, action) =>{
    if (action.type == 'AGREGAR_USUARIO'){
        console.log("Ejecuto AGREGAR USUARIO");
        return { ...state, usuarios:action.nombre};
    }
    if(action.type == 'GET_USUARIOS'){
        console.log("Ejecuto GET_USUARIOS")
        return state;    
    }
    return state;
};

const store = createStore(rootReducer);
// console.log(store.getState());  //Para mirar que tengo en el estado

store.subscribe(()=>{
    console.log("Subscribe");
    console.log(store.getState());
});

store.dispatch({type:"AGREGAR_USUARIO", nombre: "Carlos Molano"});
store.dispatch({type:"GET_USUARIO"});
store.dispatch({type:"AGREGAR_USUARIO", nombre: "Veronica Aza"});
