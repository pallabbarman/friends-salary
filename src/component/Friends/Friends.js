import React from 'react';
import './Friends.css';

const Friends = (props) => {
    const { friend, handleAddUser } = props;
    const { name, email, wealth, gender } = friend;
    const addUser = handleAddUser;
    return (
        <div className="friend">
            <h5>Name: {name}</h5>
            <h5>Email: {email}</h5>
            <p>Gender: {gender}</p>
            <p>Wealth: {wealth}</p>
            <button onClick={() => addUser(friend)} type="button">
                Spend Money
            </button>
        </div>
    );
};

export default Friends;
