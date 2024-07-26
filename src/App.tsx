import React, { useEffect } from "react";
import PlacesListPage from "./pages/PlacesListPage";
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import ChatPage from "./pages/ChatPage";
import SignupPage from "./pages/SignupPage";
import ProjectPage from "./pages/ProjectPage";
import SingleProject from "./components/SingleProject";
import PropspectsSalon from './pages/ProspectsSalon'
import useCustomContext from "./Hook";



interface WrapperProps {
  children: React.ReactElement
}

const Wrapper = (props: WrapperProps) => {
   const { children } = props 
   const { state } = useCustomContext()
   const navigate = useNavigate()

   useEffect(() => {
    console.log("checking empty user", state.user)
     if(Object.keys(state.user).length === 0){
         navigate('/register')
     }
   },[])

    return (
      <>
        {children }
      </>
    )
}


function App() {
  return (
    <div className="App">
          <BrowserRouter>
           <Routes>
               <Route element={<Wrapper><ProjectPage /></Wrapper>} path="projects" />
               <Route element={<Wrapper><SingleProject /></Wrapper>} path="project/:id" />
               <Route element={<Wrapper><PlacesListPage /></Wrapper> }  path="places"/>
               <Route element={<Wrapper><PropspectsSalon /></Wrapper>} path="chat/:placeId" />
               <Route element={<SignupPage />} path="register" />
               <Navigate to='register' />
           </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
