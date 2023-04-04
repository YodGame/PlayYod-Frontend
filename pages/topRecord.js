import Template from "@/components/layouts/template";
import TopRecordTable from '../components/organisms/top-record-table'
import LineGraph from "@/components/molecules/line-graph";
import {useState, useEffect} from 'react'
import { API_URL } from "@/config";
import axios from 'axios';
import DatePicker from "react-datepicker";
import React from "react";


export default function topRecord() {

    const [data, setData] = useState([]);
    const [startDate, setStartDate] = useState();

    const convert = (selected) => {
        const day = selected.getDate();
        const month =
            selected.getMonth() >= 10
                ? selected.getMonth() + 1
                : `0${selected.getMonth() + 1}`;
        const year = selected.getFullYear();

        return `${year}-${month}-${day}`;
    };

    useEffect(() => {
        axios.get(API_URL + "top/records")
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

    return (
        <Template>
            <div style={{height:"50px",color:"black", fontFamily: 'Inter', fontStyle: "normal",padding:30}}>
                <div style={{float:"left"}}>
                    <h1 style={{fontSize:"30px"}}>Top records</h1>
                </div>

                <div style={{paddingTop:"15px" ,paddingRight:"5%"}}>
                    <div style={{float:'right'}}>
                        <DatePicker wrapperClassName="datePicker" dateFormat="MMMM yyyy" showMonthYearPicker selected={startDate} onChange={(date) => {
                            setStartDate(date)
                            axios.get(API_URL + "top/records?date=" + convert(date))
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
                        }} />
                    </div>
                    <div style={{float:'right'}}>
                        <h5>Select Month: </h5>
                    </div>
                </div>
            </div>
            <div style={{width:650,margin:"auto"}}><LineGraph data={data}/></div>
            <div style={{fontFamily: 'Inter', fontStyle: "normal"}}>
                <TopRecordTable color="black" page="topRecord" fontSize="35px" headerSize="25px" row={data}/>
            </div>
        </Template>
    )
}
