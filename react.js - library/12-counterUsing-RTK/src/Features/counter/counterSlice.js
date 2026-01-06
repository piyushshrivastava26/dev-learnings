// import the createSlice API from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({

    /*
    define the name as name: _name
    give an initialState
    create function/actions 
    that will store in reducers as, reducers : { name : callBack Function }


    export all the actions, " export cosnt {} = counterSlice.actions " 

    register all the actions into store, " export default counterSlice.reducer "

        const store1 = configureStore({
        reducer : {
            _name : _nameReducer
        }
        })

    */


    name: 'counter',

    initialState: {
        count: 0 
    },


    //creating reducers that defines the fn to be exec to update the state.
    reducers: {

        increment: (state) => {
            state.count = state.count + 1
        },

        decrement: (state) => {
            state.count = state.count - 1
        },

        resetCounter : (state) => {
            state.count = 0
        },

        incrementBySomeNumber: (state, action) => {
            state.count = state.count + action.payload
            // state.count = Number(state.count + action.payload)
        },
    }
})

// exporting actions
export const {increment, decrement, resetCounter, incrementBySomeNumber} = counterSlice.actions


// to register it in store for store to have access of the above defined functions
export default counterSlice.reducer