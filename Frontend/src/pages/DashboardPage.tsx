//import {useState, useEffect} from "react";
import SummaryCards from"../components/SummaryCards"
import PendingOrderList from"../components/PendingOrderList"
export default  function DashboardPage(){
    return (
        <div>
            <SummaryCards/>
            <PendingOrderList/>
        </div> 
    )
}