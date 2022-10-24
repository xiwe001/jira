import * as qs from 'qs'
import React,{useEffect,useState} from 'react'
import { cleanObject } from 'utils'
import { List } from './list'
import { SearchPanel } from './search-panel'

const apiUrl = process.env.REACT_APP_API_URL

const ProjectListPage = () => {
    const [users,setUsers] = useState([])
    const [list,setList] = useState([])
    const [param,setParam] = useState({
        name:'',
        personId:''
    })
    useEffect(()=>{
        const url =`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`
        console.log(url);
        fetch(url).then(async (response)=>{           
            if(response.ok){
                setList(await response.json())
            }
        })
        // console.log(list);
    },[param])

    useEffect(()=>{
        fetch(`${apiUrl}/users`).then(async (response)=>{
            if(response.ok){
                setUsers(await response.json())
            }
        })
    },[])

    return (
        <>
            <SearchPanel users={users} param={param} setParam={setParam}/>
            <List users={users} list={list}/>

        </>
    )
}

export { ProjectListPage } 
