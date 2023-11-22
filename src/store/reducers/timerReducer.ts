import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IExperience {
    timerAll: boolean;
}

const initialState: IExperience = { timerAll: false };

export const timerSlice = createSlice({
    name: 'timerAllClients',
    initialState,
    reducers: {
        setTimer(state, action: PayloadAction<boolean>) {
            state.timerAll = action.payload;
        },
    },
});

export default timerSlice.reducer;
export const { setTimer } = timerSlice.actions;