import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { IconPosCafe } from "../icons";
import { FormAction } from "../App";


interface datetype {
  date: {
    date: string,
    day: string,
    time: string;
  };
}
export default function Inventory({date}:datetype) {
  const [currentPage] = useState(1);
  const navigate = useNavigate();
  function handleChangeContent(path: string) {
    navigate(path);
  }
  const {setFormAction} = useContext(FormAction);
  const inventorylist = [
    { requestid: "REQ-00012", subject: "Request for Coffee Beans", requestedby: "James Anderson", requesteddate: "20 May 2024 09:15 AM", expectingdelivery: "23 May 2024", status: "Pending"},
    { requestid: "REQ-00011", subject: "Request for Milk and Cream", requestedby: "Sarah Johnson", requesteddate: "20 May 2024 09:15 AM", expectingdelivery: "23 May 2024", status: "On the Way"},
    { requestid: "REQ-00010", subject: "Request for Disposable Cups", requestedby: "Michlael Brown", requesteddate: "20 May 2024 09:15 AM", expectingdelivery: "23 May 2024", status: "Received"},
    { requestid: "REQ-00009", subject: "Request for Sugar and Sweeteners", requestedby: "Emily Davis", requesteddate: "20 May 2024 09:15 AM", expectingdelivery: "23 May 2024", status: "Pending"},
    { requestid: "REQ-00008", subject: "Request for Teabags", requestedby: "David Wilson", requesteddate: "20 May 2024 09:15 AM", expectingdelivery: "23 May 2024", status: "On the way"},
    { requestid: "REQ-00007", subject: "Request for Chocolate Syrup", requestedby: "Lisa Martinez", requesteddate: "20 May 2024 09:15 AM", expectingdelivery: "23 May 2024", status: "Received"},
    { requestid: "REQ-00006", subject: "Request for Paper Napkins", requestedby: "Robert Taylor", requesteddate: "20 May 2024 09:15 AM", expectingdelivery: "23 May 2024", status: "Canceled"},
    { requestid: "REQ-00005", subject: "Request for Straws", requestedby: "Jessica White", requesteddate: "20 May 2024 09:15 AM", expectingdelivery: "23 May 2024", status: "On the way"},
    { requestid: "REQ-00004", subject: "Request for Vanilla Syrup", requestedby: "Daniel Harris", requesteddate: "20 May 2024 09:15 AM", expectingdelivery: "23 May 2024", status: "Pending"},
    { requestid: "REQ-00003", subject: "Request for Oat Milk", requestedby: "Sophia Clark", requesteddate: "20 May 2024 09:15 AM", expectingdelivery: "23 May 2024", status: "Received"},
  ];
  return (
    <div className="flex grow relative">
      <div className="flex flex-col gap-2 p-4 h-full w-full font-bold">
        <div className="flex">
          <div className="flex items-center justify-center gap-3">
            <IconPosCafe color="black" icon="menu" size={24} />
            <div className="text-md text-md">Item Request</div>
          </div>
          <div className="two p-0 grow flex justify-end">
            <div className="flex bg-white h-full w-max p-2 gap-2 rounded-sm items-center justify-center">
              <div className="flex items-center justify-center gap-1">
                <IconPosCafe color="purple" icon="calendar" size={18} />
                <div className="">
                  <div className="flex flex-col ">
                    <span className="text-ss-50">{date.date}</span>
                    <span className="text-ss-40 text-gray-500">{date.day}</span>
                  </div>
                </div>
              </div>
              <div className="w-px h-full bg-gray-100 "></div>
              <div className="flex items-center justify-center gap-1">
                <IconPosCafe color="purple" icon="schedule" size={18} />
                <span className="text-ss-60">{date.time}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white text-ss-55 rounded-sm shadow-sm shadow-gray-200 scrollbar-none flex items-center p-2 justify-between gap-2">
          <div className="border-0 w-full">
            <div className="text-ss-50 text-gray-500">Request ID</div>
            <div className="flex items-center text-nowrap border rounded-sm justify-evenly p-2 grow w-full h-full border-gray-200">
              <select name="opg-select" id="opg-select-category" className="opg-select w-full text-ss-50 lg:text-ss-55" required>
                <option value="all">Select Request ID</option>
                <option value="Beverage">Beverage</option>
                <option value="Steamed Bun">Steamed Bun</option>
                <option value="Steamed Timsum">Steamed Timsum</option>
                <option value="Deep Fry Timsum">Deep Fry Timsum</option>
                <option value="Bake">Bake</option>
                <option value="Noodle/Dumplings">Noodle/ Dumplings</option>
                <option value="Porridge">Porridge</option>
              </select>
            </div>
          </div>
          <div className="border-0 w-full">
            <div className="text-ss-50 text-gray-500">Subject</div>
            <div className="flex items-center text-nowrap border rounded-sm justify-evenly p-2 grow w-full h-full border-gray-200">
              <select name="opg-select" id="opg-select-items" className="opg-select w-full text-ss-50 lg:text-ss-55">
                <option value="all">Enter Subject</option>
              </select>
            </div>
          </div>
          <div className="border-0 w-full">
            <div className="text-ss-50 text-gray-500">Requested By</div>
            <div className="flex items-center text-nowrap border rounded-sm justify-evenly p-2 grow w-full h-full border-gray-200">
              <select name="opg-select" id="opg-select-status" className="opg-select w-full text-ss-50 lg:text-ss-55">
                <option value="all">Select requested by</option>
                <option value="instock">In Stock</option>
                <option value="lowstock">Low Stock</option>
                <option value="outofstock">Out of Stock</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center w-full">
            <div className="text-ss-50 text-gray-500">Requested Date From</div>
            <input className="border border-gray-200 rounded-md p-2 w-full text-ss-50 lg:text-ss-55" type="date" id="opg-select-dfrom" value="2024-05-20" placeholder="Select date"></input>
          </div>
          <div className="flex flex-col items-start justify-center w-full">
            <div className="text-ss-50 text-gray-500">Requested Date To</div>
            <input className="border border-gray-200 rounded-md p-2 w-full text-ss-50 lg:text-ss-55" type="date" id="opg-select-dto" value="2024-05-20" placeholder="Select date"></input>
          </div>
          <div className="flex h-full items-end gap-2">
            <div className="bg-gpurple flex p-4 rounded-md aspect-16/8 h-1/2 items-center justify-center border border-gray-200" id="inventory-action-filter">
              <IconPosCafe color="white" icon="filter" />
              <span className="text-white">Filter</span>
            </div>
            <div className="flex p-4 rounded-md aspect-16/8 h-1/2 items-center justify-center border border-gray-200" id="inventory-action-reset">
              <IconPosCafe color="black" icon="reset" />
              <span className="text-black">Reset</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-sm shadow-sm shadow-gray-200 scrollbar-none flex items-center p-3 overflow-hidden h-full flex-col">
          <div className="flex items-center justify-between w-full">
            <div className="align-ttitle">
              <div className="text-ss-70 font-bold">Item Request List</div>
              <div className="text-gray-500 text-ss-45 lg:text-ss-50">Total { inventorylist.length || 0 } items found</div>
            </div>
            <div className="">
              <div className="flex gap-3">
                <div className="flex items-center justify-center text-ss-55 rounded-sm p-1.5 px-3 bg-gpurple gap-2 text-white" id="additem" onClick={() => {
                  setFormAction("add");
                  handleChangeContent("/requestitem");
                  }}>
                  <IconPosCafe color="white" icon="plus" />
                  <span className="text-white">New Item Request</span>
                </div>
                <div className="flex items-center justify-center text-ss-55 rounded-sm p-1.5 px-5 border border-gray-200">
                  <IconPosCafe color="black" icon="book" />
                  <span className="text-black">Export to Excel</span>
                </div>
              </div>
            </div>
          </div>
          <table className="border-collapse w-full m-2.5 border border-gray-200 rounded-sm">
            <thead>
              <tr>
                <th className="bg-gray-100 p-2 text-ss-50 min-[780px]:text-ss-55 font-bold text-left">Request ID</th>
                <th className="bg-gray-100 p-2 text-ss-50 min-[780px]:text-ss-55 font-bold text-left">Subject</th>
                <th className="bg-gray-100 p-2 text-ss-50 min-[780px]:text-ss-55 font-bold text-left">Requested By</th>
                <th className="bg-gray-100 p-2 text-ss-50 min-[780px]:text-ss-55 font-bold text-left">Requested Date</th>
                <th className="bg-gray-100 p-2 text-ss-50 min-[780px]:text-ss-55 font-bold text-left">Expecting Delivery</th>
                <th className="bg-gray-100 p-2 text-ss-50 min-[780px]:text-ss-55 font-bold text-left">Status</th>
                <th className="bg-gray-100 p-2 text-ss-50 min-[780px]:text-ss-55 font-bold text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {inventorylist.map((item, index) => (
                <tr className="border border-gray-100" key={index} onClick={() => {
                  setFormAction("edit");
                  handleChangeContent("/requestitem");
                }}>
                  <td><div className="p-2 text-ss-50 text-center min-[780px]:text-ss-55">{item.requestid}</div></td>
                  <td><div className="p-2 text-left text-gray-500 text-ss-50 min-[780px]:text-ss-55">{item.subject}</div></td>
                  <td><div className="p-2 text-left  text-ss-50 min-[780px]:text-ss-55">{item.requestedby}</div></td>
                  <td><div className="p-2 text-left text-gray-500 text-ss-50 min-[780px]:text-ss-55">{item.requesteddate}</div></td>
                  <td><div className="p-2 text-left  text-ss-50 min-[780px]:text-ss-55">{item.expectingdelivery}</div></td>
                  <td><div className={`p-1 px-2 text-left text-ss-50 min-[780px]:text-ss-55 ${(item.status == "Received") ? "text-green-500 bg-green-100" : (item.status == "Pending") ? "text-yellow-500 bg-yellow-100" : (item.status == "Canceled") ? "text-red-500 bg-red-100" : "text-blue-500 bg-blue-100"} rounded-sm flex items-center w-fit`}>{item.status}</div></td>
                  <td><div className="p-2 flex justify-center"><IconPosCafe icon="eye" color="purple" size={14}/></div></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="w-full flex justify-between">
            <div>
              <div className="flex items-center">
                <div className="text-ss-55">show</div>
                <select id="entriescount" className="border border-gray-200 text-ss-65 p-1 rounded-sm mx-2">
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                </select>
                <div className="text-ss-55">entries</div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <div className="p-2 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center"><IconPosCafe icon="dleft" color="black" size={12} /></div>
                <div className="p-2 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center"><IconPosCafe icon="left" color="black" size={12} /></div>
                <div className="p-2.5 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center bg-gpurple text-white">1</div>
                <div className="p-2.5 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center">2</div>
                <div className="p-2.5 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center">3</div>
                <div className="p-2.5 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center">4</div>
                <div className="p-2.5 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center">5</div>
                <div className="p-2.5 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center">...</div>
                <div className="p-2.5 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center">13</div>
                <div className="p-2 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center"><IconPosCafe icon="right" color="black" size={12} /></div>
                <div className="p-2 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center"><IconPosCafe icon="dright" color="black" size={12} /></div>
              </div>
            </div>
            <div className="align-tshow">
              <div className="flex items-center">
                <div className="text-ss-55">showing {currentPage} to {(inventorylist.length) ? inventorylist.length : 0} of 128 requests</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}