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
                    <input style={{width:"100%", height:"41px", paddingLeft:"10%", borderRadius:"20.5px", background:"#F6F6F6", boxShadow:"1px 4px 6px rgba(0, 0, 0, 0.25)", color:"black"}}
                           type="text"
                           placeholder="what geography would you like to see?"
                           onChange={handleChange}
                           value={searchInput}/>
                    <div id="dropdown-list">
                    </div>
                </div>
         </div>
    )
}
