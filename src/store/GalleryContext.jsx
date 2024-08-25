import { createContext, useContext, useEffect, useReducer } from "react";

const GalleryContext = createContext()


function reducer(state,action){
    if (action.type === 'LOADING') {
        return { ...state, loading: true }
    }
    if(action.type === 'CURRENT_SLIDE'){
        return {
            ...state,
            currentId:action.payload
        }
    }
    if(action.type  === 'DISPLAY_GALLERY'){
        return {
            ...state,
            items:action.payload,
            loading:false
        }
    }
    return state
}
function GalleryContextProvider({children}){
    const [state,dispatch] =useReducer(reducer,{
        items:JSON.parse(localStorage.getItem('items')) || [],
        currentId:1,
        loading:false
    })

    async function fetchData(){
        dispatch({type:'LOADING'})
        const res = await fetch('./data.json')
        const resData =await  res.json()
        dispatch({type:'DISPLAY_GALLERY',payload:resData})
        localStorage.setItem('items', JSON.stringify(resData));
    }
    function updateCurrentSlide(id){
        dispatch({type:'CURRENT_SLIDE',payload:id})
    }
    useEffect(()=>{
        fetchData()
    },[])
    return <GalleryContext.Provider
        value={{
            ...state,
            updateCurrentSlide
        }}
    >
        {children}
    </GalleryContext.Provider>
}

export {GalleryContextProvider,GalleryContext}