import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type ICheck = "success" | "error" | "wait";
export interface IArrCheck {
    checkArea: ICheck[];
}

const initialState: IArrCheck = { checkArea: [] };

interface ISetCheck {
    category: number,
    check: ICheck
}

export const checkAreaSlice = createSlice({
    name: 'checkArea',
    initialState,
    reducers: {
        setCheckArea(state, action: PayloadAction<ISetCheck>) {
            state.checkArea[action.payload.category] = action.payload.check
        },
    },
});

export default checkAreaSlice.reducer;
export const { setCheckArea } = checkAreaSlice.actions;