import React, {FunctionComponent, useState } from "react";
import {useHistory,Link,HashRouter,Route} from "react-router-dom";
import BookList from "./booklist"
interface LoginProps{
    handleSubmit:Function,
    message:String
}
const Login:FunctionComponent<LoginProps>=({handleSubmit,message})=> {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [msg,setMssg]=useState(message);
  const history=useHistory();
  // function handleIdChange(event: any) {
  //   setId(event.target.value);
  // }

  function handleUsername(event: any) {
    setUsername(event.target.value);
  }
  function handlePassword(event: any) {
    setPassword(event.target.value);
  }
 



  return (
    <div className="book-form">
      <form className="form-area">
        <h2>USER LOGIN</h2> <hr />
        <br />
        <div>
          <label htmlFor="username"> USERNAME: </label>
          <input
            type="text"
            name="username"
            placeholder="johndoe@email.com"
            onChange={handleUsername}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">PASSWORD : </label>
          <input
            type="password"
            name="password"
            placeholder=""
            onChange={handlePassword}
            required
          />
        </div>
        <br />
            <button type="button" id="add-button" onClick={()=>handleSubmit(username,password)}>LOGIN</button>

            {msg==="Invalid"?(<h3>Invalid credentials or user does'nt exist!!</h3>):null}
        <br />
      </form>
    </div>
  );
}
export default Login;

