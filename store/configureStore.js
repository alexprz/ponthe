import { createStore } from 'redux';
import manageUserInfo from './Reducers/userInfoReducer'

export default createStore(manageUserInfo)
