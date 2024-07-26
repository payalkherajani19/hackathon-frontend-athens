import React from "react";
import PlacesListPage from "./pages/PlacesListPage";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import ChatPage from "./pages/ChatPage";
import SignupPage from "./pages/SignupPage";


function App() {
  return (
    <div className="App">
          <BrowserRouter>
           <Routes>
               <Route element={<PlacesListPage /> }  path="places"/>
               <Route element={<ChatPage />} path="chat/:placeId" />
               <Route element={<SignupPage />} path="register" />
               <Navigate to='places' />
           </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
