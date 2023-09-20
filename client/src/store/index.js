import { configureStore } from "@reduxjs/toolkit";
import TableFamilyReducer from './slices/tableFamilySlice'

export default configureStore({
    reducer: {
        tablefamily: TableFamilyReducer,
    }
});