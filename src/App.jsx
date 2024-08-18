import React, { createContext,useState } from 'react';
import Register from './Register';
import {Routes, Route } from 'react-router-dom';
import Body from './Body';

export const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={[user,setUser]}>
             <Routes>
                   <Route path="/" element={<Register/>}/>
                   <Route path="/body" element={<Body/>}/>
             </Routes>
    </UserContext.Provider>

  )
}


export default App;
