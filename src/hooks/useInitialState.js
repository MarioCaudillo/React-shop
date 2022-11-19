import {useState} from 'react';

const initialState = {
    cart: [],
}

const useInitialState = ()=>{
    const [state, setState] = useState(initialState);

    const addToCart = (payload)=>{//payload es la carga de datos o metadatos que recibe de la API
                setState({
            ...state, //los tres puntos antes de "state" significan que se está indicando que tome el valor
                        //  que ya se encuentra guardado en "state" o que lo mantenga
            cart: [...state.cart, payload]
        });
    };

    const removeFromCart = (indexValue)=>{ //indexValue es el valor de index o indice de cada producto, se usa 
                                        // en vez de product para eliminar productos por su indice y no por el producto
                                        //ya que si la función removeFromCart recibiera "product", al intentar eliminar
                                        //se eliminarían todos los productos que son iguales, en vez de uno por uno
        setState({
            ...state,
            cart: state.cart.filter((product, index) =>  
            index !== indexValue), //la comparacion indica que salve a todos los elementos o productos que no tengan ese
                                //valor de indice, elimninándolos y sólo dejando el resto de productos con indexValue distinto
        });
    }

    return{
        state,
        addToCart,
        removeFromCart
    }
}

export default useInitialState;