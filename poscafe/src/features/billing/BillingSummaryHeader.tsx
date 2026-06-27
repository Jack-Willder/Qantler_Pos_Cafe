import { IconPosCafe } from "../../Helper/icons";

type BillingSummaryHeaderProps = {
  totalAmount: number;
};

export function BillingSummaryHeader({ totalAmount }: BillingSummaryHeaderProps) {
  return (
    <div className="overflow-hidden scrollbar-none w-full one [grid-area: one]">
      <div className="flex items-center justify-between h-full w-full">
        <div className="flex gap-2 text-nowrap text-md">
          <IconPosCafe icon="menu" color="black" size={24} />
          Current Bill
        </div>
        <div className="h-full flex flex-col">
          <div className="flex flex-col items-end">
            <div className="text-ss-45 h-min">Total Amount</div>
            <div className="text-violet-800 font-bold h-min -mt-1.5 lg:text-lg" id="checkout-total-amount">
              ${totalAmount.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
