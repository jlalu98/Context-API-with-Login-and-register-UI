import React, {FunctionComponent, useState } from "react";
import {useHistory} from "react-router-dom";

interface RegisterProps{
    handleRegister:Function
}

const Register:FunctionComponent<RegisterProps>=({handleRegister})=>{
 const [name,setName] = useState("")
 const [email,setEmail]=useState("")
 const [password,setPassword]=useState("");
  const history=useHistory();
  // function handleIdChange(event: any) {
  //   setId(event.target.value);
  // }

  function handleNameChange(event: any) {
    setName(event.target.value);
  }
  function handleEmailChange(event: any) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event: any) {
    setPassword(event.target.value);
  }

//  function handleSubmit(event: any) {
//     event.preventDefault();
//     const book = {
//       //id: id,
//         name:name,
//         email:email,
//         password:password
//     };
//     // books.push(book);
//     // localStorage.setItem("books", JSON.stringify(books));
//     history.push("/books");
//   }

  return (
    <div className="book-form">
      <form className="form-area">
        <h2>REGISTER USER</h2> <hr />
        <br />
        <div>
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            name="title"
            placeholder="Full Name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email : </label>
          <input
            type="text"
            name="author"
            placeholder="johndoe@gmail.com"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            name="price"
            placeholder=""
            onChange={handlePasswordChange}
            required
          />
        </div>
        <br />

        <div>
            <button type="button" id="add-button" 
            onClick={()=>handleRegister({
            name: name,
            email: email,
            password:password
          })}>REGISTER</button>
        </div>
        <br />
      </form>
    </div>
  );
}
export default Register;

