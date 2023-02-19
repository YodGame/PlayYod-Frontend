import Template from "@/components/layouts/template";
import TopSellerTable from '../components/organisms/top-seller-table'
import TopRecordTable from "../components/organisms/top-record-table";
import {BsArrowRight} from 'react-icons/bs';
import Link from "next/link";
import {Button} from "react-bootstrap";
import {Bokor} from "@next/font/google";
import  axios  from "axios";
import { API_URL } from "@/config";
import { useState, useEffect } from "react";
export default function Index() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(API_URL + "top/sellers")
            .then(response => {
                const newData = response.data.map((item, index) => {
                  return {
                    ...item,
                    id: index +1 };
                });
                setData(newData);
            })
            .catch(error => console.log(error));
      }, []);
      const subArray = data.slice(0, 10);

    return (
        <Template>
            <div style={{display:"flex", color:"white", fontFamily: 'Inter', fontStyle: "normal"}}>
                <div style={{width:"50%", paddingRight:"10px"}}>
                    <div style={{backgroundColor:"#FDAE38", borderRadius:"30px", paddingBottom:"15px"}}>
                        <h1 style={{fontSize:"30px",paddingLeft:"15%", paddingTop:"23px"}}>Top seller</h1>
                        <TopSellerTable fontSize="25px" headerSize="15px" row={subArray}/>
                        <div style={{ textAlign:"center", paddingTop:"13px"}}>
                            <Link href="/topRecord">
                                <Button size="sm" style={{backgroundColor:"#F0F1F1", borderColor:"#F0F1F1", cursor: "pointer", width:"90%", borderRadius:"5px", color:"#FDAE38", fontSize:"18px"}}>
                                    <div style={{display:"flex"}}>
                                        <label style={{paddingLeft:"15%"}}>More</label>
                                        <label style={{paddingLeft:"63%"}}><BsArrowRight/></label>
                                    </div>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div style={{width:"50%", paddingLeft:"10px"}}>
                    <div style={{backgroundColor:"#4FA3A5", borderRadius:"30px", paddingBottom:"15px"}}>
                        <h1 style={{fontSize:"30px", paddingLeft:"15%", paddingTop:"23px"}}>Top Record</h1>
                        <TopRecordTable fontSize="25px" headerSize="15px" />
                        <div style={{ textAlign:"center", paddingTop:"13px"}}>
                            <Link href="/topRecord">
                                <Button size="sm" style={{backgroundColor:"#F0F1F1", borderColor:"#F0F1F1", cursor: "pointer", width:"90%", borderRadius:"5px", color:"#4FA3A5", fontSize:"18px"}}>
                                        <div style={{display:"flex"}}>
                                            <label style={{paddingLeft:"15%"}}>More</label>
                                            <label style={{paddingLeft:"63%"}}><BsArrowRight/></label>
                                        </div>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Template>
    )
}
