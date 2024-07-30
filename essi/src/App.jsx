import { Fragment, useState } from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Id_three from "./pages/Id_three";
import Id_one from "./pages/Id_one";
import Id_two from "./pages/Id_two";
import Id_four from "./pages/Id_four";
import Id_five from "./pages/Id_five";
import Id_six from "./pages/Id_six";
import Id_seven from "./pages/Id_seven";
import Id_eight from "./pages/Id_eight";
import Error404 from "./pages/Error404"; 


const App = () => {
  return (
   <Routes >
    <Route path="/" element={<Main /> } />
    <Route path="*" element={<Error404/> } />
    <Route path="*" element={<Error404/> } />
    <Route path="*" element={<Error404/> } />
    <Route path="*" element={<Error404/> } />
    <Route path="/product/1" element={<Id_one />}/>
    <Route path="/product/2" element={<Id_two />}/>
    <Route path="/product/3" element={<Id_three />}/>
    <Route path="/product/4" element={<Id_four />}/>
    <Route path="/product/5" element={<Id_five />}/>
    <Route path="/product/6" element={<Id_six />}/>
    <Route path="/product/7" element={<Id_seven />}/>
    <Route path="/product/8" element={<Id_eight />}/>
    <Route path="*" element={<Error404 />} />
   </Routes>
  );
};

export default App;
