import Template from "@/components/layouts/template";
import TopRecordTable from '../components/organisms/top-record-table'
import SelectDate from "@/components/molecules/select-date";


export default function topRecord() {


    return (
        <Template>
            <div style={{height:"50px"}}>
                <div style={{float:"left"}}>
                    <h1 style={{fontSize:"30px"}}>Top records</h1>
                </div>
                <div style={{paddingTop:"15px" ,paddingRight:"5%"}}>
                    <SelectDate/>
                </div>
            </div>
            <div >
                <TopRecordTable/>
            </div>




        </Template>
    )
}
