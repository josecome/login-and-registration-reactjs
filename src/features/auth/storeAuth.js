import { createSlice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import axios from 'axios'

export const storeAuth = createSlice({
  name: 'storeauth',
  initialState: {
    isLoggedin: false,
    localToken: 'no_token',
    UserName: '',
    Email: '',
    Password: '',
    link: 'http://127.0.0.1:8000/api/token/'
  },
  reducers: {
      requestLogin: async (state, data) => {        
        let ar_data = data.payload.split(':')
        if(ar_data[0] === 'pass') {
          state.Email = '' + ar_data[1]
          state.Password = '' + ar_data[2]
          console.log('' + ar_data[0] + ',' + ar_data[1] + ',' + ar_data[2])
          state.link = 'http://127.0.0.1:8000/api/login/'  
        } else {
          state.localToken = localStorage.getItem('token')
          state.link = 'http://127.0.0.1:8000/api/user/'
        }
        console.log('local: ' + state.localToken)
        const v = { "email": state.Email, "password": state.Password }
        const res = await axios.post(state.link, v,
          {
            headers: {
                Accept: 'application/json',
                //'Content-Type': 'application/json',
                Authorization: `Bearer ${ state.localToken }`
            }
          }
        )
        console.log(res)
        console.log(state.isLoggedin)
        if(typeof state.Email === 'undefined' && typeof state.Password === 'undefined' 
        && res.data.loggedin === 1) {
          //This user has valid token, do nothing
        } else if (res.data.loggedin === 1) {
          try{ 
            localStorage.removeItem("token") 
          } catch(e) {
            console.log('Error: ' + e.message)
          }
          localStorage.setItem("token", res.data.token)
        } else if (res.data === 'loggedin') {
          state.isLoggedin = true
        }   
        
        if(res.data.loggedin === 1) {
          state.isLoggedin = true
        }

        }
  },  
})

// Action creators are generated for each case reducer function
export const { requestLogin } = storeAuth.actions

export default storeAuth.reducer