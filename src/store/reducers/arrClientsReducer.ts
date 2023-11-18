import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IClient } from '../../components/Client/Client';

export interface IArrClients {
    arrClients: IClient[];
}
export interface ISetCheck {
    index: number,
    category: number
}

export interface IDeleteClient {
    index: number;
    area: "clients" | "area";
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
        deleteClient(state, action: PayloadAction<IDeleteClient>) {
            const arrData = state.arrClients.slice(4);
            const { index, area } = action.payload;
            if (area === "area") {
                if (state.arrClients[index].check !== "success") {
                    setCheckClient({ index: index, category: -1 })
                    return
                }
            }
            delete state.arrClients[index];
            if (arrData.length !== 0) {
                state.arrClients[index] = arrData[0];
                state.arrClients.splice(4, 1);
            }

        },
        setCheckClient(state, action: PayloadAction<ISetCheck>) {
            const { index, category } = action.payload;
            const arr = [...state.arrClients]
            if (category === -1) {
                //console.log(1212);

                arr[index].check = "wait";
            }
            else if (arr[index].category === category) arr[index].check = "success";
            else arr[index].check = "error";
            state.arrClients = [...arr];
        }
    },
});

export default arrClientsSlice.reducer;
export const { setArrClients, deleteClient, setCheckClient } = arrClientsSlice.actions;