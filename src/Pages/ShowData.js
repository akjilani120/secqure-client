import React, { useEffect, useState } from 'react';
import ShowDataRow from './ShowDataRow';

const ShowData = () => {
    const [users, setUsers] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
   
    const [isLoading , setIsLoading] = useState(false)
    const handleChange = e => {
        setSearchTerm(e.target.value);
    };
   
    useEffect(() => {        
        fetch("http://localhost:5000/users")
            .then(res => res.json())
            .then(data => {                
                setUsers(data)
                setIsLoading(false)
            })
    }, [])
    
    return (
        <div>
            <div className='container'>
                <h1 className='text-center text-primary my-4'>Details Data</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Search"                        
                        onChange={handleChange}
                    />
                </div>
                
                <div class="table-responsive">
                    <table class="table text-center table-striped">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Age</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Login Time</th>
                                <th scope="col">Profile Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {  isLoading ? 
                               <h4> Loading .......</h4> :
                                users.filter(value => {
                                    if(searchTerm === ""){
                                        return value
                                    }else if(value.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                                            return value
                                    }
                                } )
                                .map((user, index) => <ShowDataRow  user={user} key={user._id} index={index}></ShowDataRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ShowData;