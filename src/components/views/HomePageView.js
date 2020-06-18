import React from "react";

import { Link } from "react-router-dom";
import { checkPropTypes } from "prop-types";
//basic Home page
const HomePageView =(props)=> {

    return (
      <div>
         <div class="row content">
    <div class="col-sm-2 sidenav">
    <table>
          <tr>
            <th> History
              <td>
              <img src="https://via.placeholder.com/150" alt="app logo"></img>              </td>
            </th>
          </tr>
          <tr>
            <td>
            <img src="https://via.placeholder.com/150" alt="app logo"></img>            </td>
          </tr>
          <tr>
            <td>
            <img src="https://via.placeholder.com/150" alt="app logo"></img>            </td>
          </tr>
          <tr>
            <td>
            <img src="https://via.placeholder.com/150" alt="app logo"></img>            </td>
          </tr>
        </table>
        </div>
        </div>
        
        
        <h1>Home Page is Blank </h1>
        <div class="container-fluid text-center">    
  
    </div>
 
        <Link to="/signup">Sign Up Page</Link>
      </div>
    );
}

export default HomePageView;
