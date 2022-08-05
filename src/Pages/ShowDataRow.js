import React from 'react';

const ShowDataRow = ({ user, index }) => {
    const {img , name , birthday , value, gender}=user
    return (
        <tr className=''>
            <th scope="row">{index + 1}</th>
            <td>{name}</td>
            <td>{birthday}</td>
            <td>{gender}</td>
            <td>{value}</td>
            <td ><img className='profile-img' src={img} alt="" /></td>
        </tr>
    );
};

export default ShowDataRow;