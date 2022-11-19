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

    const removeFromCart = (payload)=>{
        setState({
            ...state,
            cart:[]
        });
    }

    return{
        state,
        addToCart
    }
}

export default useInitialState;