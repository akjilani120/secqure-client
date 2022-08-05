import React, { useEffect, useState } from 'react';
import ShowDataRow from './ShowDataRow';

const ShowData = () => {
    const [users , setUsers] = useState()
    useEffect(() =>{
        fetch("http://localhost:5000/users")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setUsers(data)})
    } ,[])
    return (
        <div>
           <div className='container'>
           <h1>I am show data</h1>
            <div class="table-responsive">
                <table class="table text-center table-striped">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Birthday</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Login Time</th>
                            <th scope="col">Profile Image</th>
                        </tr>
                    </thead>
                    <tbody>                       
                       {
                        users?.map((user, index) => <ShowDataRow user={user} key={user._id} index={index}></ShowDataRow>)
                       }
                    </tbody>
                </table>
            </div>
           </div>
        </div>
    );
};

export default ShowData;