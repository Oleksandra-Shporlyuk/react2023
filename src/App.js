import React, {useState} from 'react';
import Posts from "./components/Posts/Posts";
import './App.css';
import './components/Posts/posts.css';
import Launches from "./components/Launches/Launches";
import Users from "./components/Users/Users";
import UserPosts from "./components/Users/Posts";

const App = () => {
    const [userId,setUserId] = useState(null);
    return (
        <div>
            <Posts/>
            <h1>SPACE X</h1>
            <Launches/>
            <Users setUserId={setUserId}/>
            {userId && <UserPosts userId={userId}/>}
        </div>
    );
};

export default App;