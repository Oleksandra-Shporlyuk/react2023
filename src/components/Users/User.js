import React, {useState} from 'react';

const User = ({user,setUserId}) => {
    const {id,name,username,email} = user;
    return (
        <div>
            <div>
                <h1>{id} {name}</h1>
                <h2>{username}</h2>
                <h3>{email}</h3>
                <button onClick={()=> setUserId(id)}>View Posts</button>
            </div>
        </div>
    );
};

export default User;