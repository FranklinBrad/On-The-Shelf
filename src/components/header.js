
import { FaBookOpen } from "react-icons/fa";

import React from 'react';

export default function Header () {
  return (
    <header style={{
        backgroundColor:"#FF941B",
        width: "100%", 
      position: "fixed",
      top: 0, 
      zIndex: 1000,
      display:"flex",
     
    }}>
    <FaBookOpen  size={70} style={{color:"white", paddingLeft:"10px", paddingRight:"10px"}} />
    <h1 style={{
        color:"white",
        marginTop:"10px"
    }}>Book Shelf</h1>
    </header>
  );
};



      
   