import { createStore } from 'redux';
import manageUserInfo from './Reducers/userInfoReducer'

const store = createStore(manageUserInfo)
export default store
