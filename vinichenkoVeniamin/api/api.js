import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://627cab1cbf2deb7174dea123.mockapi.io/todolist',
})

export const todoApi = {
    getData: () => {
        return instance.get('')
            .then(response => {
                return response.data
            })
    },
}