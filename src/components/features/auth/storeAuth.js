import { createSlice } from '@reduxjs/toolkit'

export const storeAuth = createSlice({
  name: 'storeauth',
  initialState: {
    isLoggedin: false,
    localToken: 'no_token',
    UserName: '',
    Email: '',
    Password: '',
    link: 'http://127.0.0.1:8000/api/login/'
  },
  reducers: {
    requestLogin: async (state) => {
        console.log('local: ' + localToken.value)
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
        if(typeof state.Email === 'undefined' && typeof state.Password === 'undefined' && res.data.loggedin === 1) {
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
        
        if(res.data.loggedin === 1){
          state.isLoggedin = true
        }
        
        console.log(state.isLoggedin)
        return 'success'
        },
        //isLoggedin.value = true 
        LoginUser: (state) => {      
          state.link = 'http://127.0.0.1:8000/api/login/'
          requestLogin()
        },
        LoginUserByToken: (state) => {
          state.localToken = localStorage.getItem('token')
          state.link = 'http://127.0.0.1:8000/api/user/'
          requestLogin()
        },
  },  
})

// Action creators are generated for each case reducer function
export const { LoginUser, LoginUserByToken } = storeTasks.actions

export default storeTasks.reducer