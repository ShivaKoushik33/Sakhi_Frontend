export default function AddressCard({ address }) {
  if (!address) return null;

  return (
    <div className="w-full bg-white border border-[#E6E8EC] rounded-xl p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="text-base font-semibold text-[#141416] truncate">
            {address.name}
          </div>
          <div className="text-sm text-[#777E90] mt-1">{address.phone}</div>
        </div>

        <div className="flex items-center gap-6 flex-shrink-0">
          <button className="flex items-center gap-2 text-sm font-medium text-[#901CDB]">
            <span>{address.ui?.editText}</span>
          </button>
          <button className="flex items-center gap-2 text-sm font-medium text-[#FF3B30]">
            <span>{address.ui?.deleteText}</span>
          </button>
        </div>
      </div>

      <div className="text-sm text-[#353945] leading-relaxed mt-3">
        {address.addressLine} {address.city}, {address.state} -{' '}
        <span className="font-semibold text-[#141416]">{address.pincode}</span>
      </div>
    </div>
  );
}

