import React, {useEffect, useState} from 'react';
import Post from "./Post";

const Posts = ({user:{userId,name}}) => {
    const [posts,setPosts] = useState([]);
    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(value => value.json())
            .then(value => setPosts(value))


    },[userId])
    return (
        <div>
            <h1>{name}</h1>
            {posts.map(post=> <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;