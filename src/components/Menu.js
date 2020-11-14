import React from "react";

function Menu() {
  return (
    <div className="Menu">

        <div defaultValue = {"Default"} className = "Menu__Dropdown">
      <select name="categories" id="olx">
        <option value="Default">
          All Categories
        </option>
        <option value="car">Cars</option>
        <option value="phone">Phone</option>
        <option value="mobile">Mobile</option>
        <option value="console">Console</option>

      </select>
        </div>
       <div className = "Menu__Items">
           <p>Mobiles</p>
           <p>Cars</p>
           <p>Houses</p>
           <p>TV-Audio</p>
           <p className = "hidden">Tablets</p>
           <p className = "hidden">Land Plots</p>
       </div>
     
    </div>
    
  );
}

export default Menu;
