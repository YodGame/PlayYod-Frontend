import Template from "@/components/layouts/template";
import React from "react";
import Rating_table from "@/components/organisms/rating_table";
import axios from "axios";
import {useState, useEffect} from 'react'
import { API_URL } from "@/config";

export default function topRating() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(API_URL + "ratings/top")
            .then(response => {
                setData(response.data);
                
            })
            .catch(error => console.log(error));
      }, []); 

    console.log(data);

    return (
        <Template>
            <div style={{padding:30}}>
                <div style={{float:"left"}}>
                    <h1 style={{fontSize:"30px"}}>Top Rating</h1>
                </div>

                <Rating_table data={data}/>

            </div>
        </Template>
    )
}
