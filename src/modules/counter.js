const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = ()=> ({ type : INCREASE });
export const decrease = ()=> ({ type : DECREASE });

function counterReducer(state = {count:0}, action)
{
  switch(action.type)
  {
    case INCREASE:
      return {count : state.count + 1};
    case DECREASE:
        return {count : state.count - 1};
    default:
      return state;
  }
}
export default counterReducer;