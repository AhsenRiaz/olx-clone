import React,{useState} from "react";
import SearchIcon from "@material-ui/icons/Search";
import olx from "../images/olx-transparent.png";
import {provider,auth} from "./Firebase"

export default function Header() {
  
    const [input, setInput] = useState()
      const signIn  = () => {
          auth
          .signInWithPopup(provider)
          .then((result) =>  alert(`Welcome: ${result.user.displayName}`))
          .catch((error) => alert(error.message))
      };
      const handleChange = (e) => {
        e.preventDefault();
        setInput(e.targer.value)
      }

  return (
    <div className="Header">
      <div className="Header__Brand">
        <img src={olx} alt="" />
      </div>
      <div className="Header__Dropdown">
        <select name="cars" id="cars">
          <option value="Pakistan">Pakistan</option>
          <option value="Punjab">Punjab</option>
          <option value="Sindh"> Sindh</option>
          <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</option>
        </select>
      </div>
      <div className="Header__Input">
        <input type="text" placeholder="Find Cars,Mobile Phones and more..." 
        value = {input}
        onChange = {handleChange}/>
        <div className="Header__Search">
          <SearchIcon />
        </div>
      </div>
      <div className="Header__Login">
        <button onClick={signIn}>Login</button>
      </div>
      <div className="Header__Sell">
        <h3>+Sell</h3>
      </div>
    </div>
  );
}
