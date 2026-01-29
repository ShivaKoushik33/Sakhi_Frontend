export default function OrderCard({ order }) {
  if (!order) return null;

  const tone = order.ui?.statusTone;
  const toneClasses =
    tone === 'success'
      ? 'text-[#34C759] border-[#34C759]/30 bg-[#34C759]/10'
      : tone === 'info'
      ? 'text-[#1E4CA6] border-[#1E4CA6]/30 bg-[#1E4CA6]/10'
      : tone === 'warning'
      ? 'text-[#FF9900] border-[#FF9900]/30 bg-[#FF9900]/10'
      : 'text-[#353945] border-[#E6E8EC] bg-white';

  return (
    <div className="w-full bg-white border border-[#E6E8EC] rounded-xl p-5 flex items-center gap-5">
      <div className="w-[84px] h-[84px] rounded-lg overflow-hidden border border-[#E6E8EC] bg-[#FCFDFC] flex-shrink-0">
        <img
          src={order.productImage}
          alt={order.productName}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="text-base font-semibold text-[#141416] truncate">
          {order.productName}
        </div>
        <div className="text-sm text-[#777E90] mt-1">{order.orderId}</div>
        <div className="text-sm text-[#777E90] mt-1">{order.orderDate}</div>
      </div>

      <div className="flex flex-col items-end gap-2 flex-shrink-0">
        <div className="text-base font-semibold text-[#141416]">
          ₹{Number(order.price).toLocaleString()}
        </div>
        <div
          className={`px-3 py-1 rounded-full border text-sm ${toneClasses}`}
        >
          {order.status}
        </div>
      </div>
    </div>
  );
}

