import React from "react";
import { BsBookmarkStar } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from "./search";



export default function Favorites(){
    

    return (
        <>
            <div style={{paddingTop:"100px"}}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                }}>
                    <div>
                        <h1 style={{ paddingRight: "5px", paddingLeft: "10px" }}>Favorites</h1>
                    </div>
                    <div style={{ paddingTop: "0px", marginRight: "10px" }}>
                        <BsBookmarkStar size={20} />
                    </div>
                </div>
                <Search/>
            </div>
        </>
    );
}
