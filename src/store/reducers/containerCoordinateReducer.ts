import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IContainerCoordinate {
    top: number;
    left: number;
    width: number;
    height: number;
}
interface IStateContainer {
    container: IContainerCoordinate;
}
const initialState: IStateContainer = {
    container:
    {
        top: 0,
        left: 0,
        width: 0,
        height: 0
    }

}

export const containerSlice = createSlice({
    name: 'areaCoordinate',
    initialState,
    reducers: {
        setCoordinateContainer(state, action: PayloadAction<IContainerCoordinate>) {
            state.container = action.payload;
        },
    },
});

export default containerSlice.reducer;
export const { setCoordinateContainer } = containerSlice.actions;