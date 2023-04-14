import Template from "@/components/layouts/template";
import TopSellerTable from '../components/organisms/top-seller-table'
import TopRecordTable from "../components/organisms/top-record-table";
import TopPlayers7Table from "@/components/organisms/top-players7-table";
import TopPlayersTable from "@/components/organisms/top-players-table";
import {BsArrowRight} from 'react-icons/bs';
import Link from "next/link";
import {Button} from "react-bootstrap";
import  axios  from "axios";
import { API_URL } from "@/config";
import { useState, useEffect } from "react";
export default function Index() {

    const [data, setData] = useState([]);
    let ten_top_seller ;
    let ten_top_record ;
    let ten_players_7days ;
    let ten_players_today ;

    useEffect(() => {
        axios.get(API_URL + "home/summary")
            .then(response => {
                setData(response.data);

            })
            .catch(error => console.log(error));
      }, []);

    //split data to 4 set
    ten_top_seller = addIndexToArray(data.top_sellers) ;
    ten_top_record = addIndexToArray(data.top_records);
    ten_players_7days = addIndexToArray(data.top_players_7_days);
    ten_players_today = addIndexToArray(data.players_today);

    function addIndexToArray(arr) {
        if(arr != null){
            return arr.map((item, index) => {
          return { ...item, id: index + 1 };

        });
        }
      }

    return (
        <Template>
            <div style={{display:"flex", color:"white", fontStyle: "normal"}}>
                <div style={{width:"50%", paddingRight:"10px"}}>
                    <div style={{backgroundColor:"#FDAE38", borderRadius:"30px", paddingBottom:"15px"}}>
                        <h1 style={{fontSize:"30px",paddingLeft:"15%", paddingTop:"23px"}}>Top Seller</h1>
                        <TopSellerTable fontSize="25px" headerSize="15px" row={ten_top_seller}/>
                        <div style={{ textAlign:"center", paddingTop:"13px"}}>
                            <Link href="/topSeller">
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
                        <TopRecordTable fontSize="25px" headerSize="15px" row={ten_top_record}/>
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

            <div style={{display:"flex", color:"white", fontStyle: "normal" , paddingTop:'30px'}}>
                <div style={{width:"50%", paddingRight:"10px"}}>
                    <div style={{backgroundColor:"#185095", borderRadius:"30px", paddingBottom:"15px"}}>
                        <h1 style={{fontSize:"30px",paddingLeft:"15%", paddingTop:"23px"}}>Top Players Today</h1>
                        <TopPlayersTable fontSize="25px" headerSize="15px" row={ten_players_today}/>
                        <div style={{ textAlign:"center", paddingTop:"13px"}}>
                            <Link href="/topPlayersToday">
                                <Button size="sm" style={{backgroundColor:"#F0F1F1", borderColor:"#F0F1F1", cursor: "pointer", width:"90%", borderRadius:"5px", color:"#185095", fontSize:"18px"}}>
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
                    <div style={{backgroundColor:"#F75435", borderRadius:"30px", paddingBottom:"15px"}}>
                        <h1 style={{fontSize:"30px", paddingLeft:"15%", paddingTop:"23px"}}>Top Players 7 Days</h1>
                        <TopPlayers7Table fontSize="25px" headerSize="15px" row={ten_players_7days}/>
                        <div style={{ textAlign:"center", paddingTop:"13px"}}>
                            <Link href="/topPlayers7Day">
                                <Button size="sm" style={{backgroundColor:"#F0F1F1", borderColor:"#F0F1F1", cursor: "pointer", width:"90%", borderRadius:"5px", color:"#F75435", fontSize:"18px"}}>
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
