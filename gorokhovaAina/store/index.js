import {configureStore} from '@reduxjs/toolkit';
import dataSlice from './history';

export default configureStore({
    reducer:{
        data: dataSlice,
    },
});