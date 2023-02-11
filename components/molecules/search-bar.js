import React, {useState} from 'react'
import { API_URL } from "@/config";
import axios from 'axios';
export default function SearchBar() {
    let text = "";

    const [searchInput, setSearchInput] = useState("");
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        console.log(searchInput)
        if (searchInput != "") {
            axios.get(API_URL + "games/search/" + searchInput).then((response) => {
                text = "";
                console.log(response);
                console.log(response.data[0].name);
                response.data.forEach((product) => {
                    console.log(product.name);
                    text += "<a href='geo/game/" + product.appid + "'>" + product.name +"</a><br>";
                    document.getElementById("dropdown-list").innerHTML = text;
                })
            })
            .catch(() => {
            });
        } else {
            document.getElementById("dropdown-list").innerHTML = "";
        };
        
    };

    return (
        <div style={{paddingLeft:"2%", paddingRight:"2%"}}>
                <div style={{padding:"19px 85px 0px 18px"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-6 h-6" style={{width:"63px", height:"40px", paddingLeft:"2%", paddingTop:"2px", position:"absolute"}}>
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                    </svg>
                    <input style={{width:"100%", height:"41px", paddingLeft:"10%", borderRadius:"20.5px", background:"#F6F6F6", boxShadow:"1px 4px 6px rgba(0, 0, 0, 0.25)", color:"black"}}
                           type="search"
                           placeholder="what geography would you like to see?"
                           onChange={handleChange}
                           value={searchInput}/>
                    <div id="dropdown-list">
                        {text}
                    </div>
                </div>
         </div>
         
    )
}

// https://codepen.io/yuis-ice/pen/pqbEwa