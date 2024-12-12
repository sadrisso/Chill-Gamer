import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const Users = () => {


    const {isPending, data: users} = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch("http://localhost:9000/users")
            return res.json();
        }
    })


    // const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:9000/users")
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setUsers(data)
    //         })
    // }, []);

    if (isPending) {
        return "Loading..."
    }

    return (
        <div>
            <h1>Users: {users?.length}</h1>
        </div>
    );
};

export default Users;