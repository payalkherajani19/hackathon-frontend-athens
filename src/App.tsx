import React from "react";
import PlacesListPage from "./pages/PlacesListPage";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import ChatPage from "./pages/ChatPage";
import SignupPage from "./pages/SignupPage";
import ProjectPage from "./pages/ProjectPage";


function App() {
  return (
    <div className="App">
          <BrowserRouter>
           <Routes>
               <Route element={<ProjectPage />} path="projects" />
               <Route element={<PlacesListPage /> }  path="places"/>
               <Route element={<ChatPage />} path="chat/:placeId" />
               <Route element={<SignupPage />} path="register" />
               <Navigate to='projects' />
           </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
