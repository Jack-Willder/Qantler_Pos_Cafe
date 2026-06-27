import { IconPosCafe } from "../../Helper/icons";

type BillingActionPanelsProps = {
  onSaveBill: () => void;
  onTogglePriceAmendment: () => void;
  onTenderAmount: (amount: number) => void;
};

const tenderAmounts = [2, 5, 10, 20, 50];
const quickActions = [
  { label: "Open Cash Box", icon: "cashbox" },
  { label: "Goods Return", icon: "star" },
  { label: "Cancel Item", icon: "reset" },
  { label: "Add Item", icon: "cart" },
];
const transactionActions = [
  { label: "Terminate Transaction", icon: "disable" },
  { label: "Print", icon: "print" },
  { label: "Reserved Transaction", icon: "bookmark" },
  { label: "Delete All Transaction", icon: "delete" },
];

export function BillingActionPanels({
  onSaveBill,
  onTogglePriceAmendment,
  onTenderAmount,
}: BillingActionPanelsProps) {
  return (
    <>
      <div className="overflow-hidden rounded-md seven bg-bviolet0 flex gap-px grid-cols-[repeat(3, 60px)]">
        <div className="h-full flex flex-col md:flex-row">
          <div className="bg-bviolet1 flex items-center justify-center flex-col h-full rounded-md gap-1 md:aspect-square cursor-pointer" onClick={onSaveBill}>
            <IconPosCafe icon="add" />
            <div className="text-white text-ss-45 font-thin lg:text-ss-70">New Bill</div>
          </div>
          <div
            className="bg-bviolet2 flex items-center justify-center flex-col h-full rounded-md gap-1 lg:aspect-4/3 p-2.5 md:p-0"
            onClick={onTogglePriceAmendment}
          >
            <IconPosCafe icon="tag" />
            <div className="text-white text-ss-45 font-thin px-2 text-center lg:text-ss-70 lg:text-wrap">Price Amendment</div>
          </div>
        </div>
        <div className="grid gap-px grid-cols-[repeat(3,1fr)] grow">
          {tenderAmounts.map((amount) => (
            <div
              key={amount}
              className="bg-bviolet3 flex flex-col justify-center items-center rounded-md text-white text-ss-55 font-thin lg:text-ss-70 cursor-pointer"
              onClick={() => onTenderAmount(amount)}
            >
              ${amount}
            </div>
          ))}
          <div className="bg-bviolet3 flex flex-col items-center justify-center rounded-md">
            <IconPosCafe icon="gift" size={14} />
            <div className="text-white text-ss-45 font-thin text-center lg:text-ss-70">Gift Voucher</div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden rounded-md bg-ggreen gap-0.5 grid grid-cols-2 grid-rows-2 eight grid-eight">
        {quickActions.map((action) => (
          <ActionTile key={action.label} label={action.label} icon={action.icon} className="bg-ggreen" />
        ))}
      </div>
      <div className="overflow-hidden rounded-md nine grid-nine bg-gorange text-sm">
        <div className="grid grid-cols-4 gap-0.5 rounded-md h-1/2">
          {transactionActions.map((action) => (
            <ActionTile
              key={action.label}
              label={action.label}
              icon={action.icon}
              className="bg-gorange text-center h-full flex-col md:flex-row"
              labelClassName="w-min"
            />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-0.5 rounded-md h-1/2">
          <div className="w-full h-full rounded-md">
            <ActionTile label="Restore" icon="reset" className="bg-gorange h-full w-full flex-col md:flex-row" />
          </div>
          <div className="w-full h-full rounded-md">
            <ActionTile label="Main Menu" icon="home" className="h-full w-full flex-col md:flex-row" />
          </div>
        </div>
      </div>
    </>
  );
}

type ActionTileProps = {
  label: string;
  icon: string;
  className?: string;
  labelClassName?: string;
};

function ActionTile({ label, icon, className = "", labelClassName = "" }: ActionTileProps) {
  return (
    <div className={`flex justify-center items-center rounded-md font-thin ${className}`}>
      <IconPosCafe icon={icon} size={14} />
      <div className={`text-white text-ss-45 lg:text-ss-70 ${labelClassName}`}>{label}</div>
    </div>
  );
}
