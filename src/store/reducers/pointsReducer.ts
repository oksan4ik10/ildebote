import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IExperience {
    width: number;
}

const initialState: IExperience = { width: 7 };

export const pointsSlice = createSlice({
    name: 'widthExperience',
    initialState,
    reducers: {
        setWidth(state, action: PayloadAction<number>) {
            state.width = state.width + action.payload * 1.06;
        },
    },
});

export default pointsSlice.reducer;
export const { setWidth } = pointsSlice.actions;