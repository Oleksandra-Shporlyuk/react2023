// import React, {createContext, useEffect, useState} from 'react';
// import Child1 from "./components/Child1/Child1";
// import Child2 from "./components/Child2/Child2";
import Users from "./components/Users/Users";
import {useEffect, useState} from "react";


// let Context = createContext(null);
// const App = () => {
//     const [users,setUsers] = useState([]);
//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(value => value.json())
//             .then(value => setUsers(value));
//
//     })
//     // const [data,setData] = useState([1,2,3]);
//     return (
//         // <Context.Provider value={{setData,data}}>
//         <div>
//             {/*<Child1/>*/}
//             {/*<hr/>*/}
//             {/*<Child2/>*/}
//             <Users users={users}/>
//         </div>
//         // </Context.Provider>
//
//     );
// };
//
// export {App};
import React from 'react';
import UsersComponents from "./components/UserComponents/UsersComponents";
import Posts from "./components/Posts/Posts";

const App = () => {
    const [user,setUser] = useState(null);
    const [userActive,setUserActive] = useState(null);
    return (
        <div>
            <UsersComponents setUser={setUser} setUserActive={setUserActive} userActive={userActive}/>
            <hr/>
            {user&&userActive&& <Posts user={user}/>}
        </div>
    );
};

export default App;