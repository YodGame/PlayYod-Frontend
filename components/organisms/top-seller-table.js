import Image from "next/image";
import crown from "@/public/crown.svg";
import React from "react";
import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from "chart.js"

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)
export default function TopSellerTable(){

    const dataGraph = {
        type:'bar',
        labels: ['May', 'June', 'July', 'July', 'July'],
        datasets: [
            {
                label: 'gameName',
                fill: true,
                lineTension: 0.4,
                threshold:4,
                includeInvisible:true,
                autoPadding:true,
                color: 'Black',
                borderColor: 'Black',
                pointBorderColor: 'Black',
                pointBackgroundColor: '#fff',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [ 56, 55, 40, 74,60],
            }
        ],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    ticks: { display: false },
                    gridLines: {
                        display: false,
                        drawBorder: false
                    }
                }],
                yAxes: [{
                    ticks: { display: false },
                    gridLines: {
                        display: false,
                        drawBorder: false
                    }
                }]
            }
        }

    };

    const columns = [
        {
            key: "GameName",
            label: "name",
        },
        {
            key: "Sell",
            label: "Sell",
        },
    ];
    const rows = [
        {
            key: "1",
            GameName: "PUBG",
            Sell: "70,000,000",
        },
        {
            key: "2",
            GameName: "Lost Ark",
            Sell: "50,000,000",
        },
        {
            key: "3",
            GameName: "Counter-Strike",
            Sell: "40,000,000",
        },
        {
            key: "4",
            GameName: "Dota2",
            Sell: "1,579,631",
        },
        {
            key: "5",
            GameName: "ELDEN RING",
            Sell: "1,265,897",
        },
        {
            key: "6",
            GameName: "Game Name",
            Sell: "952,523",
        },
        {
            key: "7",
            GameName: "Game Name",
            Sell: "952,523",
        },
        {
            key: "8",
            GameName: "Game Name",
            Sell: "952,523",
        },
        {
            key: "9",
            GameName: "Game Name",
            Sell: "952,523",
        },
        {
            key: "10",
            GameName: "Game Name",
            Sell: "952,523",
        },
    ];

    const orderBackground = (order) => {
        switch (order) {
            case "1":
                return { backgroundColor:"#F75435", borderRadius:"10px", width: "100%", display:"flex", height:"81px",paddingLeft:"3%", paddingRight:"3%"}
            case "2":
                return { backgroundColor:"#FDAE38", borderRadius:"10px", width: "100%", display:"flex", height:"81px",paddingLeft:"3%", paddingRight:"3%"}
            case "3":
                return { backgroundColor:"#4FA3A5", borderRadius:"10px", width: "100%", display:"flex", height:"81px",paddingLeft:"3%", paddingRight:"3%"}
            default:
                return { backgroundColor:"white", borderRadius:"10px", width: "100%", display:"flex", height:"81px",paddingLeft:"3%", paddingRight:"3%"}
        }
    }

    const numberOne = (order) => {
        if (order==="1"){
            return <Image src={crown} alt="icon-crown" style={{position:"absolute", marginLeft:"-15px", marginTop:"-8px"}} />
        }
    }

    return (
        <div style={{paddingTop:"17px",paddingLeft:"5%", paddingRight:"5%", color:"black"}}>
            <div style={{display:"flex"}}>
                {columns.map((item, index) => (
                    <h5 style={{paddingLeft:"6%", width:"40%", fontSize:"25px"}}>{item.label}</h5>
                ))}
            </div>
            {rows.map((item, index) => (
                <div key={index}>
                    {numberOne(item.key)}
                    <div style={{paddingTop:"18px"}}>
                        <div style={orderBackground(item.key)}>
                            <div style={{ width:"5%", margin:"auto"}}>
                                <h5 style={{fontSize:"35px"}} key={item.key}>{item.key}. </h5>
                            </div>
                            <div style={{ width:"35%", margin:"auto"}}>
                                <h5 style={{fontSize:"35px"}} key={item.key}>{item.GameName}</h5>
                            </div>
                            <div style={{ width:"32%", margin:"auto", textAlign:"center"}}>
                                <h5 style={{fontSize:"35px"}} key={item.key}>{item.Sell}</h5>
                            </div>
                            <div style={{ width:"33%", margin:"auto", textAlign:"center"}}>
                                <Line
                                    data={dataGraph}
                                    width={4}
                                    height={1}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
