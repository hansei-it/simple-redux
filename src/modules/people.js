const ADD = 'people/ADD';
const REMOVE = 'people/REMOVE';

export const add = (user)=> ({ type : ADD, user });
export const remove = (user)=> ({ type : REMOVE, user });

function peopleReducer(state = {users:[{name:'홍길동', age:23}]}, action)
{
  switch(action.type)
  {
    case ADD:
      return { users: [...state.users, action.user] };
    case REMOVE:
        return { users: state.users.filter((user)=> user.name !== action.user.name) };
    default:
      return state;
  }
}
export default peopleReducer;