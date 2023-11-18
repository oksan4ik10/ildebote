import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IClient } from '../../components/Client/Client';

export interface IArrClients {
    arrClients: IClient[];
}

const initialState: IArrClients = { arrClients: [] };

export const arrClientsSlice = createSlice({
    name: 'arrClients',
    initialState,
    reducers: {
        setArrClients(state, action: PayloadAction<IClient[]>) {
            let testArr: IClient[] = [];
            if (action.payload.length === 1) {
                testArr[3] = action.payload[0];
            } else {
                testArr = [...action.payload];
            }
            state.arrClients = [...testArr];

        },
        deleteClient(state, action: PayloadAction<number>) {
            const arrData = state.arrClients.slice(4);
            delete state.arrClients[action.payload];
            if (arrData.length !== 0) {
                state.arrClients[action.payload] = arrData[0];
                state.arrClients.splice(4, 1);
            }

        }
    },
});

export default arrClientsSlice.reducer;
export const { setArrClients, deleteClient } = arrClientsSlice.actions;