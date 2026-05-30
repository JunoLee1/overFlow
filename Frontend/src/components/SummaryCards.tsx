import { useState } from "react";

const MOCK_CARDS = [
  { key: "total_users", label: "총 사용자", value: 1234 },
  { key: "revenue", label: "매출", value: "₩5,200,000" },
  { key: "orders", label: "주문 수", value: 98 },
  { key: "conversion", label: "전환율", value: "3.2%" },
];

export default function SummaryCards() {
  // TODO: 백엔드 구현 후 fetch로 교체
  const [summaryCards] = useState(MOCK_CARDS);
  const [isLoading] = useState(false);
  /*
  useEffect(() => {
    async function loadSummaryCards() {
      const res = await fetch("/api/v1/dashboard/summary");
      const data = await res.json();
      setSummaryCards(data.cards);
      setIsLoading(false);
    }
    loadSummaryCards();
  }, []);
  */
  return(
    <div>
        {isLoading?(
            <p> 불러오는 중....</p>
        ):(
            summaryCards.map((card) => (
                <div key={card.key}>
                    <span>{card.label}</span>
                    <strong>{card.value}</strong>
                </div>
            ))
        )}
    </div>
  );
}
