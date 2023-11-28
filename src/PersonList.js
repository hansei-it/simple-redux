import React from 'react';
import { useSelector} from 'react-redux';
function PersonList()
{
  const users = useSelector(state => state.people.users);

  return (<div>
    <ul>
      {
        users.map( (v)=> (<li>{v.name}:{v.age}</li>) )
      }
    </ul>
  </div>);
}

export default PersonList;