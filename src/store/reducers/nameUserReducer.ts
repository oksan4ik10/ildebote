import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface INameUser {
    nameUser: string;
}

const initialState: INameUser = { nameUser: "" };

export const nameUserReducer = createSlice({
    name: 'nameUser',
    initialState,
    reducers: {
        setNameUser(state, action: PayloadAction<string>) {
            state.nameUser = action.payload;
        },
    },
});

export default nameUserReducer.reducer;
export const { setNameUser } = nameUserReducer.actions;