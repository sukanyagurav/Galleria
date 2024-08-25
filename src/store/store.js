import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from './GalleryRedux'
import { PERSIST } from "redux-persist";
export default configureStore({
    reducer:{
        gallery: galleryReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [PERSIST],
            },
        }),
})