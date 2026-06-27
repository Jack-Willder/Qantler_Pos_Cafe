import { IconPosCafe } from "../../Helper/icons";
import type { PriceAmendmentProps, CheckoutTableProps, CheckoutPanelProps } from "../../Types/Types";

export function CheckoutPanel({
  checkoutlist,
  priceAmendment,
  totalAmount,
  gstAmount,
  payable,
  tender,
  changeAmount,
  onQuantityChange,
  onDeleteItem,
  onTenderChange,
}: CheckoutPanelProps) {
  return (
    <div className="bg-white rounded-md shadow-sm overflow-hidden scrollbar-none p-3.5 relative three">
      {!priceAmendment ? (
        <CheckoutTable checkoutlist={checkoutlist} onQuantityChange={onQuantityChange} onDeleteItem={onDeleteItem} />
      ) : (
        <PriceAmendment
          totalAmount={totalAmount}
          gstAmount={gstAmount}
          payable={payable}
          tender={tender}
          changeAmount={changeAmount}
          onTenderChange={onTenderChange}
        />
      )}
      {checkoutlist.length > 0 && !priceAmendment ? <CheckoutHelpText /> : null}
    </div>
  );
}

function CheckoutTable({ checkoutlist, onQuantityChange, onDeleteItem }: CheckoutTableProps) {
  return (
    <table className="border-collapse text-center w-[98%]">
      <thead>
        <tr>
          <th>
            <div className="flex items-center ml-3 text-ss-45 w-1/4 lg:text-ss-70">Item</div>
          </th>
          <th className="text-ss-45 w-[20%] lg:text-ss-70">Qty</th>
          <th className="text-ss-45 w-[20%] lg:text-ss-70">Unit Price</th>
          <th className="text-ss-45 w-[25%] lg:text-ss-70">Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="border-t border-gray-100 relative">
        {checkoutlist.length > 0 ? (
          checkoutlist.map((item) => (
            <tr key={item.itemcode}>
              <td className="pt-1 text-center">
                <div className="flex items-center justify-start gap-1">
                  <img src={item.image} className="bg-ired-light p-1.5 rounded-md h-6 overflow-hidden" />
                  <div className="text-wrap text-left text-ss-45 font-bold lg:text-ss-70">{item.itemname}</div>
                </div>
              </td>
              <td>
                <div className="aligncount">
                  <input
                    type="number"
                    placeholder="2"
                    className="[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none text-ss-45 border border-gray-200 rounded-md text-center p-0.5 w-7 lg:text-ss-70"
                    name="count"
                    value={item.quantity}
                    onChange={(event) => onQuantityChange(item.itemcode, parseInt(event.target.value))}
                  />
                </div>
              </td>
              <td>
                <div className="text-ss-45 font-bold lg:text-ss-70">${item.price.toFixed(2)}</div>
              </td>
              <td>
                <div className="text-ss-45 font-bold lg:text-ss-70">${item.total.toFixed(2)}</div>
              </td>
              <td>
                <div onClick={() => onDeleteItem(item.itemcode)}>
                  <IconPosCafe icon="delete" size={10} color="black" />
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5}>
              <div className="h-full aspect-12/10 flex flex-col gap-1 items-center justify-center">
                <div className="bg-gray-100 p-2 rounded-full">
                  <IconPosCafe icon="nolist" color="violet" size={24} />
                </div>
                <div className="text-black text-ss-55 mt-2">No items added yet</div>
                <div className="text-gray-500 text-ss-45">Select items from menu to add to the list</div>
              </div>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

function PriceAmendment({ totalAmount, gstAmount, payable, tender, changeAmount, onTenderChange }: PriceAmendmentProps) {
  return (
    <div className="h-full w-full flex gap-2 flex-col">
      <div className="flex gap-2 items-center">
        <IconPosCafe icon="tag" color="purple" />
        <div className="text-ss-70 font-bold">Price Amendment</div>
      </div>
      <div className="w-full h-px bg-gray-100"></div>
      <div className="flex w-full justify-between">
        <div className="text-ss-55">Total Amount</div>
        <div className="text-ss-70">${totalAmount.toFixed(2)}</div>
      </div>
      <div className="flex w-full justify-between">
        <div className="text-ss-55">GST Amount (7%)</div>
        <div className="text-ss-70">${gstAmount.toFixed(2)}</div>
      </div>
      <div className="w-full h-px bg-gray-100"></div>
      <div className="flex w-full justify-between">
        <div className="text-ss-70">Payable</div>
        <div className="text-md">${payable.toFixed(2)}</div>
      </div>
      <div className="w-full h-px bg-gray-100"></div>
      <div className="flex w-full justify-between">
        <div className="text-ss-55">Tender</div>
        <input
          type="number"
          autoComplete="false"
          placeholder="$0.00"
          value={tender || ""}
          onChange={(event) => onTenderChange(event.target.value)}
          className="border rounded-md border-gray-300 text-end w-1/3 text-sm text-thin"
        />
      </div>
      <div className="flex w-full justify-between bg-purple-100 p-2 items-center rounded-md">
        <div className="text-ss-55">Change (Balance)</div>
        <div className="text-sm">${changeAmount >= 0 ? changeAmount.toFixed(2) : "0.00"}</div>
      </div>
      <div></div>
    </div>
  );
}

function CheckoutHelpText() {
  return (
    <div className="bg-info flex justify-start align-top gap-1 p-1 px-2 mt-1 rounded-md relative bottom-0">
      <svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 -960 960 960" width="12px" fill="#0e08f6">
        <path d="M440-280h80v-240h-80v240Zm68.5-331.5Q520-623 520-640t-11.5-28.5Q497-680 480-680t-28.5 11.5Q440-657 440-640t11.5 28.5Q463-600 480-600t28.5-11.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
      </svg>
      <div className=" text-black font-thin text-ss-30 md:text-ss-40 lg:text-ss-55">
        <p>Click item to create billing entry. If item alreadyexists, quantity will increase.</p>
        <p>Cancel item removes the last billed item. Delete All clears local data.</p>
        <p>Main menu will redirect to menu page.</p>
      </div>
    </div>
  );
}
