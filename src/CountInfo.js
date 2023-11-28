import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from './modules/counter';

const  CountInfo = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increase())}>Increment</button>
      <button onClick={() => dispatch(decrease())}>Decrement</button>
    </div>
  );
}
export default CountInfo;

// import React from 'react';
// import { connect } from 'react-redux';
// import { increase, decrease } from './modules/counter';
// const  CountInfo = ({ count, increase, decrease }) => (
//   <div>
//     <h1>Count: {count}</h1>
//     <button onClick={increase}>Increment</button>
//     <button onClick={decrease}>Decrement</button>
//   </div>
// );

// const mapStateToProps = state => ({ count: state.counter.count });

// export default connect(mapStateToProps, dispatch=>({ increase:()=>dispatch(increase()), decrease:()=>dispatch(decrease()) }))(CountInfo);

