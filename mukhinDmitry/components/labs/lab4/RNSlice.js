import { createSlice } from '@reduxjs/toolkit'

export const rnSlice = createSlice({
  name: 'rnSlice',
  initialState: {
    value: '#000000',
    login: '',
    token: null,
  },
  reducers: {
    randomize: (state) => {
        let r = Math.floor(Math.random() * 255).toString(16)
        let g = Math.floor(Math.random() * 255).toString(16)
        let b = Math.floor(Math.random() * 255).toString(16)
        if (r.length == 1)
            r = '0' + r
        if (g.length == 1)
            g = '0' + g
        if (b.length == 1)
            b = '0' + b
        state.value = '#' + r + g + b
    },
    setLoginValue: (state, action) => {
      state.login = action.payload
    },
    setTokenValue: (state, action) => {
      state.token = action.payload
    }
  },
})

export const { randomize, setLoginValue, setTokenValue } = rnSlice.actions

export default rnSlice.reducer