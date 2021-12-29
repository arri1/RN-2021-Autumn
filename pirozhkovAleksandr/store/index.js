import {configureStore} from '@reduxjs/toolkit';
import data from './album';
import photo from './photo';

export default configureStore({
  reducer: {
    data: data,
    photo: photo,
  },
});
