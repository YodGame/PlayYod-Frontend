import DatePicker from "react-datepicker";
import React from "react";
import {useState} from "react";



export default function SelectDate() {
    const [startDate, setStartDate] = useState(new Date());
    return (

    <div>
        <div style={{float:'right'}}>
            <DatePicker wrapperClassName="datePicker" selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
        <div style={{float:'right'}}>
            <h5>Select Date :</h5>
        </div>
    </div>




    );
};

