import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type TCheck = "success" | "error" | "wait";
export interface IArrCheck {
    checkArea: TCheck[];
}

const initialState: IArrCheck = { checkArea: [] };

interface ISetCheck {
    category: number,
    check: TCheck
}

export const checkAreaSlice = createSlice({
    name: 'checkArea',
    initialState,
    reducers: {
        createCheckArea(state, action: PayloadAction<TCheck[]>) {
            state.checkArea = [...action.payload];
        },
        setCheckArea(state, action: PayloadAction<ISetCheck>) {
            state.checkArea[action.payload.category] = action.payload.check;

        },
    },
});

export default checkAreaSlice.reducer;
export const { setCheckArea, createCheckArea } = checkAreaSlice.actions;