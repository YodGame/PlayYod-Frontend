import Template from "@/components/layouts/template";
import TopSellerTable from "../components/organisms/top-seller-table"


export default function topSeller() {


    return (
        <Template>
            <div style={{height:"50px"}}>
                <div style={{float:"left"}}>
                    <h1 style={{fontSize:"30px"}}>Top Seller</h1>

                </div>
            </div>
            <div>
                <TopSellerTable/>
            </div>
        </Template>
    )
}
