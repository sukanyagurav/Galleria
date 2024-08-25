import { createSlice, current } from "@reduxjs/toolkit";
import data from "../../public/data.json";

const gallery = createSlice({
  name: "gallery",
  initialState: {
    items: data,
    currentId: 1,
    loading: false,
    
    slideShow:false
  },
  reducers: {
    selectCurrentSlide: (state, action) => {
      state.currentId = action.payload;
    },
    startSlideShow:(state)=>{
        state.slideShow = true
    },
    stopSlideShow:(state)=>{
        state.slideShow = false
    },
    handleNext: (state, action) => {
      if (state.currentId == state.items.length) {
        state.currentId = 1;
      } else {
        state.currentId = state.currentId + 1;
      }

    },
    handlePrevious: (state, action) => {
      if (action.payload === 1) {
        state.currentId = state.items.length;
      } else {
        state.currentId = state.currentId - 1;
      }
    },
  },
});

export const galleryActions = gallery.actions;

export default gallery.reducer;
