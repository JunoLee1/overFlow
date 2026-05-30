//import {useState, useEffect} from "react";

function DashboardPage(){
    return (
        <div>
            <SummaryCards/>
            <PendingOrderList/>
            <UpcommingReceiptList/>
            <ActivityFeed/>
        </div> 
    )
}