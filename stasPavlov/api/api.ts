import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://60a0e51dd2855b00173b15c9.mockapi.io/todolist',
});

export const todoApi = {
  getData: () => {
    return instance.get('')
      .then(response => {
        console.log((response.data));
        return response.data;
      });
  },
};
