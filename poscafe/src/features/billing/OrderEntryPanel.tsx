import { IconPosCafe } from "../../Helper/icons";

const keypadKeys = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ".", "backspace"];

export function OrderEntryPanel() {
  return (
    <div className="bg-white rounded-md shadow-sm overflow-hidden scrollbar-none flex flex-col items-center w-full p-3.5 gap-1 -mt-2 six">
      <div className="flex w-full gap-2 items-end">
        <div className="grow w-1/3">
          <div className="text-ss-45 lg:text-ss-60">Item Number</div>
          <input
            type="text"
            placeholder="Scan / Enter item Number"
            className="w-full p-1 items-center justify-center rounded-md text-black bg-gray-50 border border-gray-200 text-ss-45 pl-1.5 bg-barcode bg-no-repeat bg-right bg-size-[12px] lg:text-ss-60"
            name="itemnumber"
            id="calc-itemnumber-name"
          />
        </div>
        <div className="grow w-1/5">
          <div className="text-ss-45 lg:text-ss-60">Quantity</div>
          <div className="flex w-full items-center justify-center text-center rounded-md text-black bg-gray-50 border border-gray-200 text-ss-45">
            <div className="px-2.5 text-ss-50">-</div>
            <input
              type="text"
              placeholder="1"
              className="w-full p-1 items-center justify-center text-center text-black bg-white text-ss-50 lg:text-ss-60"
              name="quantity"
              value="1"
              onChange={() => {}}
            />
            <div className="px-2.5 text-ss-50">+</div>
          </div>
        </div>
        <div className="bg-gpurple text-white text-center text-ss-45 rounded-md p-1 py-1.5 aspect-16/4 lg:text-ss-60">Add</div>
      </div>
      <div className="w-1/3 h-px bg-gray-200"></div>
      <div className="flex w-full gap-2 grow justify-between">
        <div className="flex flex-col gap-2 w-1/2">
          <OrderTextInput label="Table No" placeholder="Enter table no" name="tableno" />
          <OrderTextInput label="No of Cover" placeholder="Enter no of cover" name="cover" />
        </div>
        <div className="grid grid-cols-3 gap-1 grow md:max-w-50 md:max-h-35">
          {keypadKeys.map((key) => (
            <div
              key={key}
              className="flex items-center justify-center bg-grey-100 border border-gray-100 rounded-md text-black shadow-sm text-ss-50 lg:text-ss-60"
            >
              {key === "backspace" ? <IconPosCafe icon="backspace" color="black" size={10} /> : key}
            </div>
          ))}
        </div>
        <div>
          <div className="bg-gpurple text-white text-center rounded-md  p-1 py-1.5 text-ss-45 aspect-16/4 mb-1 lg:text-ss-60">AC</div>
          <div className="bg-gpurple text-white text-center rounded-md  p-1 py-1.5 text-ss-45 aspect-16/4 lg:text-ss-60">Clear</div>
        </div>
      </div>
    </div>
  );
}

type OrderTextInputProps = {
  label: string;
  placeholder: string;
  name: string;
};

function OrderTextInput({ label, placeholder, name }: OrderTextInputProps) {
  return (
    <div className="w-full">
      <div className="w-full">
        <div className="text-ss-45 lg:text-ss-60">{label}</div>
        <input
          type="text"
          placeholder={placeholder}
          className="w-full p-1 items-center justify-center rounded-md text-black bg-gray-50 border border-gray-200 text-ss-45 pl-1.5 lg:text-ss-60"
          name={name}
        />
      </div>
    </div>
  );
}
