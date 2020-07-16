import React from 'react';
import { Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import { FaUserPlus} from "react-icons/fa";

import './SingleItem.scss'

const SingleItem = ({ friend }) => {
    const { name, type, address, phone, educaton, job, salary, status, child, img, id } = friend;
    return (
        <div className="single-item" style={{ padding: '10px' }}>
            <div className="pic-box">
                <div className="pic">
                    <img src={img} alt={name} Photo />
                </div>
                <div className="pic-overlay">
                    <div className="btn-center">
                    <Button variant="contained" color="primary">
                    <Link to={"/friend/"+ id}> View Details</Link>
                        
                    </Button>
                    <Button variant="contained" color="primary">
                        <FaUserPlus/>  Add Friend 
                     </Button>
                    </div>
                </div>
            </div>
            <h3 >{name}</h3>
            <p>Friend's of {type}</p>
            
        </div>
    );
};

export default SingleItem;