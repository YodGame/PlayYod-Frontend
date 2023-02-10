import Template from "@/components/layouts/template";
import TopRecordTable from '../components/organisms/top-record-table'

export default function topRecord() {


    return (
        <Template>
            <div style={{paddingTop:"15px", paddingLeft:"5%", paddingRight:"5%"}}>
                <h1 style={{fontSize:"40px", }}>Top Records</h1>
                <TopRecordTable/>
            </div>



        </Template>
    )
}
