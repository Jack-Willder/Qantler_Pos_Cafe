import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IconPosCafe } from "../icons";
import { FormAction } from "../App";

interface datetype {
    date: {
        date: string,
        day: string,
        time: string;
    };
}
export default function AddItem({ date }: datetype) {
    const { formAction } = useContext(FormAction);
    const navigate = useNavigate();
    function handleChangeContent(path: string) {
        navigate(path);
    }
    const inventorylist = [
        { itemname: "Coffee Beans Bag", quantity: 5, expecteddate: "2024-05-23" },
        { itemname: "Milk 1L", quantity: 10, expecteddate: "2024-05-23" },
        { itemname: "Sugar 1kg", quantity: 3, expecteddate: "2024-05-23" },
    ];
    return (
        <div className="w-full p-4">
            <div className="flex flex-col w-full h-full gap-3">
                <div className="flex">
                    <div className="flex items-center justify-center gap-3">
                        <IconPosCafe color="black" icon="menu" size={24} />
                        <div className="text-md font-bold">{(formAction == "edit") ? "Edit  Item Request" : "Item Request"}</div>
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
                <div className="bg-white text-ss-55 h-fit p-3.5 px-6 flex flex-col justify-center items-center w-full gap-3 rounded-sm">
                    <div className="text-sm font-bold text-left w-full">Request Information</div>
                    <div className="grow w-full flex flex-col items-center">
                        <div className="flex grow w-full gap-3.5">
                            <div className="grow flex flex-col gap-2">
                                <div className="w-full flex flex-col gap-1">
                                    <div className="text-ss-55 font-bold after:content-['*'] after:text-ss-50 after:ml-1 after:text-transparent">Request ID</div>
                                    <input type="text" className="border border-gray-200 rounded-sm p-1.5 w-full bg-gray-50" placeholder="ITM-000129" id="additem-form-itemcode" disabled></input>
                                    <div className="text-ss-45 text-gray-500">Auto-generated</div>
                                </div>
                                <div className="w-full flex flex-col gap-1">
                                    <div className="text-ss-55 font-bold after:content-['*'] after:text-ss-50 after:ml-1 after:text-transparent">Request Date</div>
                                    <input type="text" className="border border-gray-200 rounded-sm p-1.5 w-full bg-gray-50" placeholder="20 May 2024" id="additem-form-itemcode" disabled></input>
                                    <div className="text-ss-45 text-transparent">Auto-generated</div>
                                </div>
                            </div>
                            <div className="grow flex flex-col gap-2">
                                <div className="w-full flex flex-col gap-1">
                                    <div className="text-ss-55 font-bold after:content-['*'] after:text-ss-50 after:ml-1 after:text-red-500">Subject</div>
                                    <input type="text" className="border border-gray-200 rounded-sm p-1.5 w-full" placeholder="Request for Coffee Beans" id="additem-form-itemname" required></input>
                                    <div className="text-ss-45 text-transparent">Auto-generated</div>
                                </div>
                                <div className="w-full flex flex-col gap-1">
                                    <div className="text-ss-55 font-bold after:content-['*'] after:text-ss-50 after:ml-1 after:text-red-500">Expecting Delivery</div>
                                    <input type="date" className="border border-gray-200 rounded-sm p-1.5 w-full" value="2024-05-23" required></input>
                                    <div className="text-ss-45 text-transparent">Auto-generated</div>
                                </div>
                            </div>
                            <div className="grow flex flex-col gap-2">
                                <div className="w-full flex flex-col gap-1">
                                    <div className="text-ss-55 font-bold after:content-['*'] after:text-ss-50 after:ml-1 after:text-transparent">Requesteed By</div>
                                    <input type="text" className="border border-gray-200 rounded-sm p-1.5 w-full bg-gray-50" placeholder="Admin" id="additem-form-itemcode" disabled></input>
                                    <div className="text-ss-45 text-transparent">Auto-generated</div>
                                </div>
                                <div className="w-full flex flex-col gap-1">
                                    <div className="text-ss-55 font-bold after:content-['*'] after:text-ss-50 after:ml-1 after:text-transparent">Status</div>
                                    <input type="text" className="border border-gray-200 rounded-sm p-1.5 w-full bg-gray-50" placeholder="Pending" id="additem-form-itemcode" disabled></input>
                                    <div className="text-ss-45 text-transparent">Auto-generated</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-ss-55 h-full p-3.5 px-6 flex flex-col items-center justify-between w-full gap-3 rounded-sm">
                    <div className="flex justify-between w-full">
                        <div className="text-left w-full">
                            <div className="text-sm font-bold">Items</div>
                            <div className="text-ss-65 font-medium">Total 3 items</div>
                        </div>
                        <div className="flex items-center justify-center text-ss-55 rounded-sm p-1.5 gap-1.5 px-3 bg-gpurple">
                            <IconPosCafe color="white" icon="plus" />
                            <span className="text-white text-ss-50 text-nowrap">Add Item</span>
                        </div>
                    </div>
                    <div className="w-full min-h-0 grow overflow-scroll scrollbar-none">
                        <table className="border-collapse w-full border border-gray-200 rounded-sm m-0">
                            <thead className="sticky top-0">
                                <tr>
                                    <th className="bg-gray-100 p-2 text-ss-50 min-[780px]:text-ss-55 font-bold text-left">Item Name</th>
                                    <th className="bg-gray-100 p-2 text-ss-50 min-[780px]:text-ss-55 font-bold text-left after:content-['*'] after:text-ss-70 after:text-red-500 after:ml-1">Quantity</th>
                                    <th className="bg-gray-100 p-2 text-ss-50 min-[780px]:text-ss-55 font-bold text-left after:content-['*'] after:text-ss-70 after:text-red-500 after:ml-1">Expected Date</th>
                                    <th className="bg-gray-100 p-2 text-ss-50 min-[780px]:text-ss-55 font-bold text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    (formAction == "edit") ? (
                                        inventorylist.map((item, index) => (
                                            <tr className="border border-gray-100" key={index}>
                                                <td><div className="p-2 text-ss-50 text-left min-[780px]:text-ss-55"><select name="opg-select" id="opg-select-category" className="p-1 border border-gray-200 w-full rounded-sm" required><option value={item.itemname}>{item.itemname}</option></select></div></td>
                                                <td><div className="p-2 text-ss-50 text-left min-[780px]:text-ss-55"><input className="border border-gray-200 rounded-md w-full p-2 max-[820px]:p-1 max-[820px]:text-ss-50" type="number" id="opg-select-dfrom" value={item.quantity} onChange={() => { }} /></div></td>
                                                <td><div className="p-2 text-ss-50 text-left min-[780px]:text-ss-55"><input className="border border-gray-200 rounded-md w-full p-2 max-[820px]:p-1 max-[820px]:text-ss-50" type="date" id="opg-select-dfrom" value={item.expecteddate} onChange={() => { }} /></div></td>
                                                <td><div className="p-2 flex justify-start"><IconPosCafe icon="delete" color="red" size={14} /></div></td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr className="border border-gray-100">
                                            <td><div className="p-2 text-ss-50 text-left min-[780px]:text-ss-55"><select name="opg-select" id="opg-select-category" className="p-1 border border-gray-200 w-full rounded-sm" required><option value="Select Item">Select Item</option></select></div></td>
                                            <td><div className="p-2 text-ss-50 text-left min-[780px]:text-ss-55"><input className="border border-gray-200 rounded-md w-full p-2 max-[820px]:p-1 max-[820px]:text-ss-50" type="number" id="opg-select-dfrom" value="" placeholder="Enter Quantity" onChange={() => { }} /></div></td>
                                            <td><div className="p-2 text-ss-50 text-left min-[780px]:text-ss-55"><input className="border border-gray-200 rounded-md w-full p-2 max-[820px]:p-1 max-[820px]:text-ss-50" type="date" id="opg-select-dfrom" value="" placeholder="Select date" onChange={() => { }} /></div></td>
                                            <td><div className="p-2 flex justify-start"><IconPosCafe icon="delete" color="red" size={14} /></div></td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="w-full flex flex-col items-center">
                        <div className="flex w-full items-center justify-center gap-2 border-t border-gray-200 pt-4">
                            <div className="p-2 rounded-sm border border-gray-200 flex items-center justify-center aspect-6/1" id="additem" data-target="inventory" onClick={() => handleChangeContent("/itemrequest")}>
                                <span className="text-center">Cancel</span>
                            </div>
                            {
                                (formAction == "edit") ? (
                                    <div className="p-2 bg-gpurple rounded-sm flex items-center justify-center aspect-6/1 gap-1" id="additem-form-addinvitem" >
                                        <span className="text-ss-50 text-white">Update</span>
                                    </div>
                                ) : (
                                    <div className="p-2 bg-gpurple rounded-sm flex items-center justify-center aspect-6/1 gap-1" id="additem-form-addinvitem" >
                                        <IconPosCafe icon="save" color="white" size={14} />
                                        <span className="text-ss-50 text-white">Save</span>
                                    </div>
                                )
                            }
                            <div className="p-2 bg-green-700 text-white rounded-sm flex items-center justify-center aspect-7/1 gap-1" id="additem-form-deleteinvitem">
                                <IconPosCafe icon="send" color="white" size={14} />
                                <span className="text-ss-50">Submit Request</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
}