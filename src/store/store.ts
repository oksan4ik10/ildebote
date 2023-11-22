import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import areaCoordinateReducer from './reducers/areaCoordinateReducer';
import containerCoordinateReducer from './reducers/containerCoordinateReducer';
import checkAreaReducer from './reducers/checkAreaReducer';
import clientsCoordinateReducer from './reducers/clientsCoordinateReducer';
import arrClientsReducer from './reducers/arrClientsReducer';
import nameUserReducer from './reducers/nameUserReducer';
import timerReducer from './reducers/timerReducer';


const rootReducer = combineReducers({
    areaCoordinateReducer,
    containerCoordinateReducer,
    checkAreaReducer,
    clientsCoordinateReducer,
    arrClientsReducer,
    nameUserReducer,
    timerReducer

});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;