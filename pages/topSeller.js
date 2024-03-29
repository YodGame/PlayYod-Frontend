import Template from "@/components/layouts/template";
import TopSellerTable from "../components/organisms/top-seller-table"
import {useState, useEffect} from 'react'
import { API_URL } from "@/config";
import axios from 'axios';

export default function topSeller() {


    const date_path = "";
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(API_URL + "top/sellers" + date_path)
            .then(response => {
                const newData = response.data.map((item, index) => {

                  return {
                    ...item,
                    id: index + 1
                  };

                });
                setData(newData);
            })
            .catch(error => console.log(error));
      }, []);


    return (
        <Template>
            <div style={{height:"50px",color:"black", fontFamily: 'Inter', fontStyle: "normal",padding:30}}>
                <div style={{float:"left"}}>
                    <h1 style={{fontSize:"30px"}}>Top Seller</h1>
                </div>
                <div style={{paddingTop:"15px" ,paddingRight:"5%"}}>
                    {/* <SelectDateSeller/> */}
                </div>
            </div>
            <div>
                {/* <SelectDate/> */}
            </div>
            <div style={{fontFamily: 'Inter', fontStyle: "normal"}}>
                <TopSellerTable color="black" page="topSeller" fontSize="35px" headerSize="25px" row={data}/>
            </div>
        </Template>
    )
}
