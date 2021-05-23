/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
import logo from './logo.svg';
import './App.css';
import React, { Component, useEffect, useState } from "react";
import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  useHistory
} from "react-router-dom";
import Details from "./components/details"
import BookList from "./components/booklist";
import {AddBook} from "./components/addbook";
import Login from "./components/login";
import Register from "./components/resister"
function App(){
  const [isLoggedin,setIsLoggedIn]=useState(false);
  const [loggedMsg,setLoggedMsg]=useState("");
  
  useEffect(() => {
    if (localStorage.getItem("login")) {
      setIsLoggedIn(true);
    }
  });

  const history=useHistory();
  async function handleLogin(username: any,password: any) {
    const user = {
      email: username,
      password: password,
    
    };
   const auth=await fetch("http://localhost:3000/books/users/login",{
    method:"POST",
    body:JSON.stringify(user),
    headers:{"Content-Type":"application/json"}
    })
    let token=await auth.json();
    if(token=="Please enter all fields"){
      setIsLoggedIn(false)
      setLoggedMsg("Invalid")
      console.log(loggedMsg);
      
    } 
    else if(token=="User does not exist!"){
      setIsLoggedIn(false)
      setLoggedMsg("Invalid")
      console.log(loggedMsg);
      
    }
    else if(token=="Invalid Credentials!!"){
      setIsLoggedIn(false)
      setLoggedMsg("Invalid")
      console.log(loggedMsg);
      
    }
    else{
      localStorage.setItem("login",token);
      setIsLoggedIn(true);
      //history.push("/books")
    }

    //history.push("/books");
  }
  const logout = async () => {
    setIsLoggedIn(false);
    localStorage.clear();
  };

  const handleNewUser = async (newUser: any) => {
    console.log("reg");
    await fetch("http://localhost:3000/books/users/register", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: { "Content-Type": "application/json" },
    });
    console.log("reg2");
  };

  return (
    <Router>
      <div>
        <h1>Book Management Store</h1>
        <ul className="header">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Book List</Link></li>
          {isLoggedin?<li><Link to="/add">Add Book</Link></li>:null}
          {isLoggedin?null:<li><Link to="/login">Login</Link></li>}
          {isLoggedin?null:<li><Link to="/register">Register</Link></li>}
          <li>
            {isLoggedin ? (
              <Link onClick={() => logout()} to="/">
                LogOut
              </Link>
            ) : null}
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={BookList}/>
          <Route path="/books" component={BookList}/>
          <Route path="/add" component={AddBook}/>
          <Route path="/details/:id" component={Details}/>
          <Route exact path="/register">
          <Register
            handleRegister={(newUser: any) => {
              handleNewUser(newUser);
            }}
          ></Register>
        </Route>
          <Route path='/login'>
            <Login handleSubmit={handleLogin} message={loggedMsg}></Login>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
