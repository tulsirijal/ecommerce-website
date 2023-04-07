import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
const initialState = {
    value:0
}

export const CounterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:
            (state)=>{

            state.value += 1
        },
        decrement:
            (state)=>{

            state.value -= 1
        },
    },
    extraReducers:{

    }
})
export const {increment,decrement} = CounterSlice.actions
export default CounterSlice.reducer
