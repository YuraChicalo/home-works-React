import {useEffect, useState} from "react";
import {getUsers, getUsersPost} from "../../services/API";
import User from "../user/User";

export default function Users() {

    let [users, setUsers] = useState([])

    useEffect(()=>{
        getUsers().then(value => {setUsers(value.data)})
    },[])


    return (
        <div>
            {
                users.map(value => <User key = {value.id} users = {value}/>)
            }

        </div>
    );
}