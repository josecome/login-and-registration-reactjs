import { configureStore } from '@reduxjs/toolkit'
import storeAuth from '../features/auth/storeAuth'

export default configureStore({
  reducer: {
    authstore: storeAuth,
  }
})