import React, { useEffect } from "react";
import PlacesListPage from "./pages/PlacesListPage";
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import SignupPage from "./pages/SignupPage";
import useCustomContext from "./Hook";
import loadable from '@loadable/component'

const ProjectPage = loadable(() => import('./pages/ProjectPage'))
const BrandVoicePage = loadable(() => import("./pages/BrandVoicePage"))

interface WrapperProps {
  children: React.ReactElement
}

const Wrapper = (props: WrapperProps) => {
   const { children } = props 
   const { state } = useCustomContext()
   const navigate = useNavigate()

   useEffect(() => {
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
    <div className="App" style={{ height: '100vh', boxSizing: 'border-box'}}>
          <BrowserRouter>
           <Routes>
               <Route element={<Wrapper><ProjectPage /></Wrapper>} path="projects" />
               <Route element={<Wrapper><PlacesListPage /></Wrapper> }  path="places"/>
               <Route element={<Wrapper><BrandVoicePage /></Wrapper>} path="brandvoice" />
               <Route element={<SignupPage />} path="register" />
               <Navigate to='register' />
           </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
