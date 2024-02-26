import React from "react";


import Search from "./search"
import 'bootstrap/dist/css/bootstrap.min.css';




export default function Shelf(){
    
    return (
        <>
        <div style={{paddingTop:"100px"}}>
        <div style={{
            display: "flex",
            alignItems: "center",
        }}>
            <div>
                <h1 style={{ paddingRight: "5px", paddingLeft: "10px" }}>On The Shelf</h1>
            </div>
        </div>
        <Search/>
        </div>
        </>
    );
}