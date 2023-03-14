import Template from "@/components/layouts/template";
import TopPlayers7Table from '../components/organisms/top-players7-table';
import SelectDate from "@/components/molecules/select-date";
import LineGraph from "@/components/molecules/line-graph";
import {useState, useEffect} from 'react'
import { API_URL } from "@/config";
import axios from 'axios';


export default function topPlayers7Day() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(API_URL + "top/records?previous_days=7")
            .then(response => {
                const newData = response.data.map((item, index) => {

                    return {
                        id: index + 1,
                        ...item

                    };

                });
                setData(newData);
            })
            .catch(error => console.log(error));
    }, []);
    console.log(data);


    return (
        <Template>
            <div style={{height:"50px",color:"black", fontFamily: 'Inter', fontStyle: "normal"}}>
                <div style={{float:"left"}}>
                    <h1 style={{fontSize:"30px"}}>Top Player 7 Day</h1>
                </div>

                <div style={{paddingTop:"15px" ,paddingRight:"5%"}}>
                    <SelectDate/>
                </div>
            </div>
            <div style={{width:650,margin:"auto"}}><LineGraph/></div>
            <div style={{fontFamily: 'Inter', fontStyle: "normal"}}>
                <TopPlayers7Table color="black" page="topPlayers7Day" fontSize="35px" headerSize="25px" row={data}/>
            </div>




        </Template>
    )
}