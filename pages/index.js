import Template from "@/components/layouts/template";
import TopSellerTable from '../components/organisms/top-seller-table'
import TopRecordTable from "../components/organisms/top-record-table";
import {BsArrowRight} from 'react-icons/bs';
import Link from "next/link";
export default function Index() {
    return (
        <Template>
            <div style={{display:"flex", color:"white", fontFamily: 'Inter', fontStyle: "normal"}}>
                <div style={{width:"50%", paddingRight:"10px"}}>
                    <div style={{backgroundColor:"#FDAE38", borderRadius:"30px", paddingBottom:"15px"}}>
                        <h1 style={{fontSize:"30px",paddingLeft:"15%", paddingTop:"23px"}}>Top seller</h1>
                        <TopSellerTable fontSize="25px" headerSize="15px"/>
                        <div style={{paddingTop:"16px"}}>
                            <div style={{backgroundColor:"white", paddingLeft:"28px", height:"28px", paddingRight:"28px", width:"90%", margin:"auto"}}>
                                <Link href="/topSeller">
                                <label style={{color:"#FDAE38", fontSize:"18px", width:"85%", paddingLeft:"10%"}}>More</label>
                                <BsArrowRight color={"#FDAE38"} style={{right:"37px", width:"5%"}}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{width:"50%", paddingLeft:"10px"}}>
                    <div style={{backgroundColor:"#4FA3A5", borderRadius:"30px", paddingBottom:"15px"}}>
                        <h1 style={{fontSize:"30px", paddingLeft:"15%", paddingTop:"23px"}}>Top Record</h1>
                        <TopRecordTable fontSize="25px" headerSize="15px"/>
                        <div style={{paddingTop:"16px"}}>
                            <div style={{backgroundColor:"white", paddingLeft:"28px", height:"28px", paddingRight:"28px", width:"90%", margin:"auto"}}>
                                <Link href="/topRecord">
                                <label style={{color:"#4FA3A5", fontSize:"18px", width:"85%", paddingLeft:"10%"}}>More</label>
                                <BsArrowRight color={"#4FA3A5"} style={{right:"37px", width:"5%"}}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Template>
    )
}
