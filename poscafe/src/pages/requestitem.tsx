import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IconPosCafe } from "../Helper/icons";
import { FormAction } from "../Context/Context";
import Popup from "../shared/popup";
import type { datetype, requestitemlisttype, requestitemtype } from "../Types/Types";
import { CreateRequest, DeleteRequest, GetRequest, GetRequestId, UpdateRequest } from "../api/ItemRequestApi";


export default function AddItem({ date }: datetype) {
    const { formAction } = useContext(FormAction);
    const navigate = useNavigate();
    const { state: item } = useLocation();
    const location = useLocation();
    const [showPopup, setShowPopup] = useState(false);
    const [popupType, setPopupType] = useState<"confirm" | "delete" | "error">("error");
    const [popupDescription, setPopupDescription] = useState("");
    const [requestitem, setRequestItem] = useState<requestitemtype>(item ? item : {
        requestId: "notsetyet",
        subject: "",
        requestedDate: "",
        requestedBy: "Admin",
        expectingDate: "",
        status: "Pending",
        requestItems: [],
    });
    const [inventorylist, setInventoryList] = useState<requestitemlisttype>([
        { itemName: "Coffee Beans Bag", quantity: 5, expectedDate: "2024-05-23" },
        { itemName: "Milk 1L", quantity: 10, expectedDate: "2024-05-23" },
        { itemName: "Sugar 1kg", quantity: 3, expectedDate: "2024-05-23" },
    ]);

    useEffect(() => {
        GetRequestId()
        .then((response) => {
            setRequestItem(
                item ? item : {
                    requestId: response,
                    subject: "",
                    requestedDate: "",
                    requestedBy: "Admin",
                    expectingDate: "",
                    status: "Pending",
                    requestItems: [],
                }
            )
        })
        .catch(() => {
            setPopupType("error");
            setPopupDescription("Cannot get RequestId");
        })
        if (item) {
            GetRequest(requestitem.requestId)
            .then((response) => {
                setRequestItem({
                    ...requestitem,
                    requestItems: [
                        ...response.requestItems
                    ]
                });
                setInventoryList(response.requestItems);
            })
            .catch(() => {
                setPopupType("error");
                setPopupDescription("Cannot Get Request");
                setShowPopup(true);
            })
        }
    }, [location.pathname]);

    function handleChangeContent(path: string) {
        navigate(path);
    }

    // function generate_requestid(): string {
    //     const data = localStorage.getItem("requestlist");
    //     const request_content = data ? JSON.parse(data) : [];
    //     const lastreq_number = request_content.length > 0 ? request_content[request_content.length - 1].requestid : "REQ-00000";

    //     let oldrequestcode: string | number = Number.parseInt(lastreq_number.replace("REQ-", ""));

    //     oldrequestcode = oldrequestcode + 1;
    //     oldrequestcode = "" + oldrequestcode;

    //     let newrequestcode = oldrequestcode;
    //     for (let index = 0; index < (6 - oldrequestcode.length); index++) {
    //         newrequestcode = "0" + newrequestcode;
    //     }
    //     newrequestcode = "REQ-" + newrequestcode;
    //     return newrequestcode;
    // }

    function handleFormChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setRequestItem((prev: requestitemtype) => ({
            ...prev,
            [name]: value,
        }));
    }

    function handleEditContent() {
        // const data = localStorage.getItem("requestlist");
        // const requestlist: requestitemtype[] = data ? JSON.parse(data) : [];

        if (formAction === "edit") {
            // const itemIndex = requestlist.findIndex((item) => item.requestId === requestitem.requestId);
            // if (itemIndex === -1) {
            //     setPopupType("error");
            //     setPopupDescription("Request not found!");
            //     setShowPopup(true);
            //     return;
            // }
            // const duplicateRequest = requestlist.find((item) => item.requestId !== requestitem.requestId && item.subject.toLowerCase() === requestitem.subject.toLowerCase());
            // if (duplicateRequest) {
                // setPopupType("error");
                // setPopupDescription("Subject Already Exists");
                // setShowPopup(true);
                // return;
            // }
            const updatedRequest: requestitemtype = { ...requestitem, requestItems: inventorylist };
            setRequestItem(updatedRequest);
            setPopupType("confirm");
            setPopupDescription("Request Updated");
            setShowPopup(true);
        }
    }

    function confirmEdit() {
        // const requestlist: requestitemtype[] = JSON.parse(
            // localStorage.getItem("requestlist") || "[]"
        // );

        // const itemIndex = requestlist.findIndex(
            // (item) => item.requestId === requestitem.requestId
        // );
// 
        // if (itemIndex !== -1) {
            // requestlist[itemIndex] = {
                // ...requestitem,
                // requestItems: inventorylist
            // };
// 
            // localStorage.setItem(
                // "requestlist",
                // JSON.stringify(requestlist)
            // );
        // }

        UpdateRequest(requestitem)
            .then(() => {
                setShowPopup(false);
            })
            .catch(() => {
                setPopupType("error");
                setPopupDescription("Cannot Create Request");
                setShowPopup(true);
            });
    }

    function handleSaveContent() {
        // const data = localStorage.getItem("requestlist");
        // const requestlist = data ? JSON.parse(data) : [];



        const newrequest: requestitemtype = {
            ...requestitem,
            requestedDate: date.date,
            requestedBy: "Admin",
            status: "Pending",
            requestItems: inventorylist,
            requestId: requestitem.requestId,
            subject: requestitem.subject,
            expectingDate: requestitem.expectingDate,
        };

        const requestFormArray = Object.values(newrequest);

        if (requestFormArray.includes("")) {
            setPopupType("error");
            setPopupDescription("All Fields are Required!");
            setShowPopup(true);
            return;
        }

        // if (requestlist.find((element: requestitemtype) => element.subject === requestitem.subject)) {
            // setPopupType("error");
            // setPopupDescription("Subject Already Exists");
            // setShowPopup(true);
        // } else {
            setPopupType("confirm");
            setShowPopup(true);
        // }
    }

    function confirmSave() {
        // const data = localStorage.getItem("requestlist");
        // const requestlist = data ? JSON.parse(data) : [];

        const newrequest: requestitemtype = {
            ...requestitem,
            requestedDate: date.date,
            requestedBy: "Admin",
            status: "Pending",
            requestItems: inventorylist,
            requestId: requestitem.requestId,
            subject: requestitem.subject,
            expectingDate: requestitem.expectingDate,
        };
        CreateRequest(newrequest)
        .then(() => {
            setShowPopup(false);
        })
        .catch(()=>{
            setPopupType("error");
            setPopupDescription("Cannot Create Request");
            setShowPopup(true);
        });

        // requestlist.push(newrequest);
        // localStorage.setItem("requestlist", JSON.stringify(requestlist));
    }

    function handleDeleteContent() {
        setPopupType("delete");
        setShowPopup(true);
    }

    function confirmDelete() {
        // const requestlist = JSON.parse(localStorage.getItem("requestlist") || "[]");
        // const itemIndex = requestlist.findIndex((item: requestitemtype) => item.requestid === requestitem.requestid);
        // if (itemIndex !== -1) {
        //     requestlist.splice(itemIndex, 1);
        //     localStorage.setItem("requestlist", JSON.stringify(requestlist));
        // }
        DeleteRequest(requestitem.requestId)
        .then(() => {
            setShowPopup(false);
        })
        .catch(() => {
            setShowPopup(true);
            setPopupType("error");
            setPopupDescription("Cannot Delete Request");
        });
    }

    function handleAddItem() {
        setInventoryList([...inventorylist, { itemName: "ItemName", quantity: 0, expectedDate: "2024-05-23" }]);
    }

    function handleRemoveItem(index: number) {
        const newInventoryList = inventorylist.filter((_, i) => i !== index);
        setInventoryList(newInventoryList);
    }

    function handleItemChange(index: number, field: string, value: string | number) {
        const newInventoryList = [...inventorylist];
        newInventoryList[index] = { ...newInventoryList[index], [field]: value };
        setInventoryList(newInventoryList);
    }

    function handlePopupSubmit() {
        if (popupType === "confirm") {
            if (formAction === "edit") {
                confirmEdit();
            } else {
                confirmSave();
            }
            return;
        }

        if (popupType === "delete") {
            confirmDelete();
            return;
        }

        setShowPopup(false);
    }
    return (
        <div className="w-full p-4 relative">
            <Popup show={showPopup} 
            message="Request?"
            type={popupType}
            description={popupDescription}
            navigateTo={popupType === "error" ? "" : "/itemrequest"}
            onSubmit={handlePopupSubmit} 
            onCancel={() => {setShowPopup(false)}} />
            <div className="flex flex-col w-full h-full gap-3">
                <div className="bg-white text-ss-55 h-fit p-3.5 px-6 flex flex-col justify-center items-center w-full gap-3 rounded-sm">
                    <div className="text-sm font-bold text-left w-full">Request Information</div>
                    <div className="grow w-full flex flex-col items-center">
                        <div className="flex grow w-full gap-3.5">
                            <div className="grow flex flex-col gap-2">
                                <div className="w-full flex flex-col gap-1">
                                    <div className="text-ss-55 font-bold after:content-['*'] after:text-ss-50 after:ml-1 after:text-transparent">Request ID</div>
                                    <input type="text" className="border border-gray-200 rounded-sm p-1.5 w-full bg-gray-50" placeholder="ITM-000129" id="additem-form-itemcode" value={requestitem.requestId} disabled></input>
                                    <div className="text-ss-45 text-gray-500">Auto-generated</div>
                                </div>
                                <div className="w-full flex flex-col gap-1">
                                    <div className="text-ss-55 font-bold after:content-['*'] after:text-ss-50 after:ml-1 after:text-transparent">Request Date</div>
                                    <input type="text" className="border border-gray-200 rounded-sm p-1.5 w-full bg-gray-50" placeholder="20 May 2024" id="additem-form-itemcode" value={date.date} disabled></input>
                                    <div className="text-ss-45 text-transparent">Auto-generated</div>
                                </div>
                            </div>
                            <div className="grow flex flex-col gap-2">
                                <div className="w-full flex flex-col gap-1">
                                    <div className="text-ss-55 font-bold after:content-['*'] after:text-ss-50 after:ml-1 after:text-red-500">Subject</div>
                                    <input type="text" className="border border-gray-200 rounded-sm p-1.5 w-full" placeholder="Request for Coffee Beans" id="additem-form-itemname" name="subject" value={requestitem.subject} onChange={handleFormChange} required></input>
                                    <div className="text-ss-45 text-transparent">Auto-generated</div>
                                </div>
                                <div className="w-full flex flex-col gap-1">
                                    <div className="text-ss-55 font-bold after:content-['*'] after:text-ss-50 after:ml-1 after:text-red-500">Expecting Delivery</div>
                                    <input type="date" className="border border-gray-200 rounded-sm p-1.5 w-full" value={requestitem.expectingDate} name="expectingDate" onChange={handleFormChange} required></input>
                                    <div className="text-ss-45 text-transparent">Auto-generated</div>
                                </div>
                            </div>
                            <div className="grow flex flex-col gap-2">
                                <div className="w-full flex flex-col gap-1">
                                    <div className="text-ss-55 font-bold after:content-['*'] after:text-ss-50 after:ml-1 after:text-transparent">Requesteed By</div>
                                    <input type="text" className="border border-gray-200 rounded-sm p-1.5 w-full bg-gray-50" placeholder="Admin" id="additem-form-itemcode" value={requestitem.requestedBy} disabled></input>
                                    <div className="text-ss-45 text-transparent">Auto-generated</div>
                                </div>
                                <div className="w-full flex flex-col gap-1">
                                    <div className="text-ss-55 font-bold after:content-['*'] after:text-ss-50 after:ml-1 after:text-transparent">Status</div>
                                    <input type="text" className="border border-gray-200 rounded-sm p-1.5 w-full bg-gray-50" placeholder="Pending" id="additem-form-itemcode" value={requestitem.status} disabled></input>
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
                            <div className="text-ss-65 font-medium">Total {inventorylist.length} items</div>
                        </div>
                        <div className="flex items-center justify-center text-ss-55 rounded-sm p-1.5 gap-1.5 px-3 bg-gpurple cursor-pointer" onClick={handleAddItem}>
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
                                    inventorylist.map((item, index) => (
                                        <tr className="border border-gray-100" key={index}>
                                            <td><div className="p-2 text-ss-50 text-left min-[780px]:text-ss-55"><select name="opg-select" id="opg-select-category" className="p-1 border border-gray-200 w-full rounded-sm" required value={item.itemName} onChange={(e) => handleItemChange(index, "itemName", e.target.value)}>
                                                <option value="">Select Item</option>
                                                <option value="Coffee Beans Bag">Coffee Beans Bag</option>
                                                <option value="Milk 1L">Milk 1L</option>
                                                <option value="Sugar 1kg">Sugar 1kg</option>
                                                </select></div></td>
                                            <td><div className="p-2 text-ss-50 text-left min-[780px]:text-ss-55"><input className="border border-gray-200 rounded-md w-full p-2 max-[820px]:p-1 max-[820px]:text-ss-50" type="number" id="opg-select-dfrom" value={item.quantity} onChange={(e) => handleItemChange( index, "quantity", Number(e.target.value) ) } /></div></td>
                                            <td><div className="p-2 text-ss-50 text-left min-[780px]:text-ss-55"><input className="border border-gray-200 rounded-md w-full p-2 max-[820px]:p-1 max-[820px]:text-ss-50" type="date" id="opg-select-dfrom" value={item.expectedDate} onChange={(e) => handleItemChange(index, "expectedDate", e.target.value)} /></div></td>
                                            <td><div className="p-2 flex justify-start cursor-pointer" onClick={() => handleRemoveItem(index)}><IconPosCafe icon="delete" color="red" size={14} /></div></td>
                                        </tr>
                                    ))
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
                                    <div className="p-2 bg-gpurple rounded-sm flex items-center justify-center aspect-6/1 gap-1" id="additem-form-addinvitem" onClick={handleEditContent}>
                                        <span className="text-ss-50 text-white">Update</span>
                                    </div>
                                ) : (
                                    <div className="p-2 bg-gpurple rounded-sm flex items-center justify-center aspect-6/1 gap-1" id="additem-form-addinvitem" onClick={handleSaveContent}>
                                        <IconPosCafe icon="save" color="white" size={14} />
                                        <span className="text-ss-50 text-white">Save</span>
                                    </div>
                                )
                            }
                            {
                                (formAction == "edit") ? (
                                    <div className="p-2 bg-red-100 text-red-500 rounded-sm flex items-center justify-center aspect-6/1" id="additem-form-deleteinvitem" onClick={handleDeleteContent}>
                                        <IconPosCafe icon="delete" color="red" />
                                        <span className="text-ss-50">Delete</span>
                                    </div>
                                ) : null
                            }
                            {
                                (formAction != "edit") ? (
                                    <div className="p-2 bg-green-700 text-white rounded-sm flex items-center justify-center aspect-7/1 gap-1" id="additem-form-submitrequest" onClick={handleSaveContent}>
                                        <IconPosCafe icon="send" color="white" size={14} />
                                        <span className="text-ss-50">Submit Request</span>
                                    </div>
                                ) : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
