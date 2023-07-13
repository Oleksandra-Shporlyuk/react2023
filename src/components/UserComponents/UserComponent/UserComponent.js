import React from 'react';

const UserComponent = ({user,setUser,setUserActive,userActive}) => {
    const {id,name,username} = user;
    const click = ()=> {
        setUser({name,userId:id})
        setUserActive(prev => {
            if (prev===null){
                return id
            }
            return null
        })
    }
    return (
        <div>
            <div> id: {id}</div>
            <div> name: {name}</div>
            <div> username: {username}</div>
            <button disabled={userActive!==id && userActive!==null} onClick={click}>GetPosts</button>
        </div>
    );
};

export default UserComponent;