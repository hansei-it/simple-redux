const ADD = 'people/ADD';
const REMOVE = 'people/REMOVE';

export const add = (user)=> ({ type : ADD, user });
export const remove = (user)=> ({ type : REMOVE, user });

function peopleReducer(state = {users:[]}, action)
{
  switch(action.type)
  {
    case ADD:
      return { users: state.users.concat(action.user) };
    case REMOVE:
        return { users: state.users.filter((user)=> user !== state.user) };
    default:
      return state;
  }
}
export default peopleReducer;