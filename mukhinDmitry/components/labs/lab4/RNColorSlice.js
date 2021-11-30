import { createSlice } from '@reduxjs/toolkit'

export const colorSlice = createSlice({
  name: 'bgColor',
  initialState: {
    value: '#000000',
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
        console.log(r,g,b)
        state.value = '#' + r + g + b
    }
  },
})

export const { randomize } = colorSlice.actions

export default colorSlice.reducer