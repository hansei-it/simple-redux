import React, { useState} from 'react';
import { useSelector,useDispatch} from 'react-redux';

import { add, remove } from './modules/people';
import PersonList from './PersonList'

function PeopleInfo()
{
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const dispatch = useDispatch();

  return (<div>
    <div>
      <input value={name} onChange={(e)=>setName(e.target.value)}/>
      <input value={age} onChange={(e)=>setAge(e.target.value)}/>
      <button onClick={() => dispatch(add({name,age})) }>추가</button> 
      <button onClick={() => dispatch(remove({name})) }>삭제</button>
    </div>
    <PersonList></PersonList>
  </div>);
}

export default PeopleInfo;