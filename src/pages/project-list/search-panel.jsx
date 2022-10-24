import React, { useEffect, useState } from 'react'

const SearchPanel = ({users, param,setParam}) => {


    const selectChange = (evt)=>{
        // console.log(evt.target);
        setParam({...param,personId:evt.target.value})
    }

    const inputChange = (evt) =>{
        setParam({
            ...param,name:evt.target.value
          })
    }
  return (
    <form action=''>
      <input type="text" value={param.name} onChange={inputChange} />
      <select value={param.personId} onChange={selectChange}>
        <option value={''}>负责人</option>
        {
            users.map(user=><option key={user.id} value={user.id}>{user.name}</option>)
        }
      </select>
    </form>
  )
}

export {SearchPanel}
