import Template from "@/components/layouts/template";
import TopSellerTable from "../components/organisms/top-seller-table"


export default function topSeller() {


    return (
        <Template>
            <div style={{height:"50px",color:"black", fontFamily: 'Inter', fontStyle: "normal"}}>
                <div style={{float:"left"}}>
                    <h1 style={{fontSize:"30px"}}>Top Seller</h1>
                </div>
            </div>
            <div style={{fontFamily: 'Inter', fontStyle: "normal"}}>
                <TopSellerTable color="black" page="topSeller" fontSize="35px" headerSize="25px"/>
            </div>
        </Template>
    )
}
