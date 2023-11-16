import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IAreaCoordinate {
    x1: number;
    x2: number;
    y1: number;
    y2: number;
}
interface IStateArea {
    arr: IAreaCoordinate[];
    topArea: number;

}
const initialState: IStateArea = {
    arr: [
        {
            x1: 0,
            x2: 0,
            y1: 0,
            y2: 0,
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