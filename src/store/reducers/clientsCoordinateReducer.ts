import { PayloadAction, createSlice } from '@reduxjs/toolkit';




export interface IClientsCoordinate {
    x1: number;
    x2: number;
    y1: number;
    y2: number;
}
interface IStateClients {
    coordintateClients: IClientsCoordinate[];

}
const initialState: IStateClients = {
    coordintateClients: [
        {
            x1: 0,
            x2: 0,
            y1: 0,
            y2: 0,
        }

    ],

}

export const coordinateClientsSlice = createSlice({
    name: 'clientsCoordinate',
    initialState,
    reducers: {
        setCoordinateClients(state, action: PayloadAction<IClientsCoordinate[]>) {
            state.coordintateClients = [...action.payload];
        },

    },
});

export default coordinateClientsSlice.reducer;
export const { setCoordinateClients } = coordinateClientsSlice.actions;