import React from 'react';
import ModalImage from "react-modal-image";
const ShowDataRow = ({ user, index }) => {
    const { img, name, birthday, value, gender } = user
    return (
        <tr className=''>
            <th scope="row">{index + 1}</th>
            <td>{name}</td>
            <td>{birthday}</td>
            <td>{gender}</td>
            <td>{value}</td>
            <td >
                <ModalImage
                    small={img}
                    large={img}
                    className="profile-img"
                    alt="Hello World!"
                />;
            </td>





        </tr>
    );
};

export default ShowDataRow;