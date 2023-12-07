import { useReducer } from "react";
import { createContext } from "react";
const INITIAL = {
    city:null,
    dates:[],
    options:{
        adult:null,
        children:null,
        room:null,
    },
};

export const SearchContext = createContext(INITIAL)
const SearchReducer = (state,action)=>{
    switch(action.type){
        case "NEW_SEARCH":
            return action.payload;
        case "RESET_SEARCH":
            return INITIAL;
        default:
             return state;
    }
};
export const SearchContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(SearchReducer,INITIAL);

    return (
        <SearchContext.Provider 
        value={{
        city:state.city,
        dates:state.dates,
        options:state.options,
        dispatch,}}>
            {children}
        </SearchContext.Provider>
    );
};