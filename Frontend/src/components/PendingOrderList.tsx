import {useState} from "react"
import {useEffect} from "react"
import "./PendingOrderList.css"
export default function PendingOrderList(){
    const [orders, setOrders] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        async function loadPending(){
            const res = await fetch("/api/v1/dashboard/pendingOrderList")
            const data = await res.json()
            setOrders(data.orders)
            setIsLoading(false)
        }
        loadPending()
    },[])

    return (
  <div>
    {isLoading ? (
      <p>불러 오는중....</p>
    ) : (
      <table className="order-table">
        <thead>
          <tr>
            <th>발주번호</th>
            <th>거래처</th>
            <th>창고</th>
            <th>상태</th>
            <th>금액</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.poNo}</td>
              <td>{order.partnerName}</td>
              <td>{order.warehouseName}</td>
              <td>{order.status}</td>
              <td>{order.totalAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
);
}