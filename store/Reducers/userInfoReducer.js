import UserInfo from '../../lib/userClass'

const initialState = {
  userInfo: new UserInfo()
}

function manageUserInfo(state = initialState, action) {
  let nextState = {... state}
  switch (action.type) {
    case 'UPDATE_USERINFO':
      nextState.userInfo.email = action.value.email
      nextState.userInfo.token = action.value.token
      return nextState || state
    case 'DELETE_USERINFO':
      nextState.userInfo.email = ''
      nextState.userInfo.token = ''
      return nextState || state
    default:
      return state
  }
}

export default manageUserInfo
