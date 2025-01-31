import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { UserContextProvider } from "./UserContext";
import IndexPage from "./Pages/IndexPage";
import RegisterPage from "./Pages/RegistrationPage";
import LoginPage from "./Pages/LoginPage";
import HomePage  from "./Pages/HomePage";
import CreatePost from "./Pages/CreatePost";
import MyBlog from "./Pages/MyBlog";
import Starting from "./Pages/Starting";
import Contact from "./Pages/Contact";
import Subscription from "./Pages/Subscription";



const App = () => {
  return (
    <UserContextProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/index" element={<IndexPage />} />
            <Route index element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create" element={<CreatePost/>} />
            <Route path="/MyBlog" element={<MyBlog/>} />
            <Route path="/Starting" element={<Starting/>} />
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Subscription" element={<Subscription/>}/>
            
            

          </Routes>
        </div>
      </Router>
    </UserContextProvider>
  );
};

export default App;