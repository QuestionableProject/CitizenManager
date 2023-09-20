import { createSlice } from "@reduxjs/toolkit"

const tableFamilySlice = createSlice({
    name: 'tablefamily',
    initialState: {
        citizen: null,
        tableFamily: null,
        status: false,
        statusText: null
    },
    reducers: {
        addTableFamily(state, action) {
            if (action.payload.data) {
                state.tableFamily = [...action.payload.data]
                state.citizen = action.payload.citizen
            }

            if (action.payload.status) {
                state.status = action.payload.status
                state.citizen = action.payload.citizen
                state.tableFamily = null
                state.statusText = "The citizen has no family"
            }
        },
    },
})

export const { addTableFamily } = tableFamilySlice.actions;

export default tableFamilySlice.reducer;