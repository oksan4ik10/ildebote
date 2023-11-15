import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IAreaCoordinate {
    top: number;
    left: number;
}
interface IStateArea {
    arr: IAreaCoordinate[];
    topArea: number;
}
const initialState: IStateArea = {
    arr: [
        {
            top: 0,
            left: 0
        }
    ],
    topArea: 0
}

export const coordinateSlice = createSlice({
    name: 'areaCoordinate',
    initialState,
    reducers: {
        setCoordinate(state, action: PayloadAction<IAreaCoordinate[]>) {
            state.arr = [...action.payload];
        },
        setTopArea(state, action: PayloadAction<number>) {
            state.topArea = action.payload - 169;
        }
    },
});

export default coordinateSlice.reducer;
export const { setCoordinate, setTopArea } = coordinateSlice.actions;