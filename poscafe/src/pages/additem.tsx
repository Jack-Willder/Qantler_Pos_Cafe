import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IconPosCafe } from "../icons";
import { FormAction } from "../App";

interface datetype {
    date: {
        date: string,
        day: string,
        time: string;
    };
}

type invitemtype = {
    "itemcode": string,
    "itemimage": string,
    "category": string,
    "unit": string,
    "itemname": string,
    "itemdesc": string,
    "price": number,
    "instock": number,
    "oldstock": number,
    "supplier": string;
};
export default function AddItem({ date }: datetype) {
    const navigate = useNavigate();
    function handleChangeContent(path: string) {
        navigate(path);
    }
    const { formAction } = useContext(FormAction);
    const { state: item } = useLocation();
    const [invitem, setInvItem] = useState<invitemtype>(item || {
        itemcode: "",
        itemimage: "",
        category: "",
        unit: "",
        itemname: "",
        itemdesc: "",
        price: 0,
        instock: 0,
        oldstock: 0,
        supplier: ""
    });

    function generate_itemcode(): string {
        const data = localStorage.getItem("inventory");
        const inventory_content = data ? JSON.parse(data) : [];
        let lastinv_number = inventory_content[inventory_content.length - 1].itemcode;

        let olditemcode: string | number = Number.parseInt(lastinv_number.replace("ITM-", ""));

        olditemcode = olditemcode + 1;
        olditemcode = "" + olditemcode;

        let newitemcode = olditemcode;
        for (let index = 0; index < (6 - olditemcode.length); index++) {
            newitemcode = "0" + newitemcode;
        }
        newitemcode = "ITM-" + newitemcode;
        return newitemcode;
    }



    function handlesave() {
        const data = localStorage.getItem("inventory");
        const inventory = data ? JSON.parse(data) : [];

        if (formAction == "edit") {
            const olddata = inventory.find((item: invitemtype) => item.itemcode == invitem.itemcode);
            // olddata.itemimage = invitem.itemcode,
            olddata.category = invitem.category;
            olddata.unit = invitem.unit;
            olddata.itemname = invitem.itemname;
            olddata.itemdesc = invitem.itemdesc;
            olddata.price = invitem.price;
            olddata.instock = invitem.instock;
            olddata.oldstock = invitem.instock;
            olddata.supplier = invitem.supplier;
        } else {
            invitem.itemcode = generate_itemcode();
            invitem.supplier = "Local";
            invitem.oldstock = invitem.instock;
            const newitem : invitemtype = {
                "itemcode": invitem.itemcode,
                "itemimage": invitem.itemimage,
                "category": invitem.category,
                "unit": invitem.unit,
                "itemname": invitem.itemname,
                "itemdesc": invitem.itemdesc,
                "price": invitem.price,
                "instock": invitem.instock,
                "oldstock": invitem.instock,
                "supplier": invitem.supplier
            }
            const additem_form_array = Object.values(newitem);

            if (additem_form_array.includes("")) {
                alert("All Fields are Required!");
                console.log(additem_form_array)
            } else {

                if (inventory.find((element : invitemtype) => element.itemname == invitem.itemname)) {
                    alert("ItemName Already Exists");
                } else {
                    inventory.push(invitem);
                    localStorage.inventory = JSON.stringify(inventory);
                    alert("Item Added");
                }
            };
        }
    }


    function handleFormChange(e: any) {
        const { name, value } = e.target;
        setInvItem((prev: invitemtype) => ({
            ...prev,
            [name]: value,
        }));
    };



    return (
        <div className="w-full p-4">
            <div className="flex flex-col w-full h-full gap-3">
                <div className="flex">
                    <div className="flex items-center justify-center gap-3">
                        <IconPosCafe color="black" icon="menu" size={24} />
                        <div className="text-md font-bold">Inventory</div>
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
                <div className="bg-white text-ss-55 h-full p-3.5 px-10 flex flex-col justify-center items-center w-full gap-3">
                    <div className="text-center">
                        <div className="text-sm font-bold">{(formAction == "edit") ? "Edit Inventory" : "Add New Item"}</div>
                        <div className="text-ss-65 font-medium">{(formAction == "edit") ? "Update the details of the inventory item" : "Add a new item to your inventory"}</div>
                    </div>
                    <div className="h-px bg-gray-200 w-full"></div>
                    <div className="grow w-full flex flex-col items-center">
                        <div className="flex grow w-full gap-3.5 pb-3">
                            <div className="grow flex flex-col gap-2">
                                <div className="w-full flex flex-col gap-1">
                                    <div className="text-ss-55 font-bold after:content-['*'] after:text-ss-50 after:ml-1 after:text-transparent">Item Code</div>
                                    <input type="text" name="itemcode" className="border border-gray-200 rounded-sm p-1.5 w-full bg-gray-50 select-none caret-transparent" placeholder="ITM-000129" id="additem-form-itemcode" value={formAction == "edit" ? invitem.itemcode : generate_itemcode()} disabled></input>
                                    <div className="text-ss-45 text-gray-500">Auto-generated</div>
                                </div>
                                <div className="w-full flex flex-col grow gap-1">
                                    <div className="text-ss-55 font-bold after:content-['*'] after:text-ss-50 after:ml-1 after:text-transparent">Item Image</div>
                                    <div className="border border-gray-200 rounded-sm p-1.5 flex flex-col items-center justify-center relative grow border-dashed bg-gray-50">
                                        <IconPosCafe color="purple" icon="cloud" size={24} />
                                        <input type="file" name="itemimage" accept="image/png, image/jpg, image/jpeg" placeholder="Click to upload or drag and drop" className="absolute h-full w-full opacity-0 z-10" onChange={handleFormChange} required></input>
                                        <div className="p-1.5 flex flex-col items-center justify-center">
                                            <div className="text-ss-55 font-bold">Click to upload or drag and drop</div>
                                            <div className="text-ss-45">PNG, JPG or WEBP (Max. 2MB)</div>
                                        </div>
                                    </div>
                                    <div className="text-ss-45 text-transparent">Auto-Generated</div>
                                </div>
                                <div className="w-full flex flex-col gap-1">
                                    <div className="text-ss-55 font-bold after:content-['*'] after:text-ss-50 after:ml-1 after:text-red-500">Category</div>
                                    <select name="category" id="additem-form-category" className="border border-gray-200 rounded-sm p-1.5 w-full" value={invitem.category} onChange={handleFormChange} required>
                                        <option value="" disabled hidden>Select Category</option>
                                        <option value="Beverage">Beverage</option>
                                        <option value="Steamed Bun">Steamed Bun</option>
                                        <option value="Steamed Timsum">Steamed Timsum</option>
                                        <option value="Deep Fry Timsum">Deep Fry Timsum</option>
                                        <option value="Bake">Bake</option>
                                        <option value="Noodle/Dumplings">Noodle/ Dumplings</option>
                                        <option value="Porridge">Porridge</option>
                                    </select>
                                    <div className="text-ss-45 text-transparent">Auto-generated</div>
                                </div>
                                <div className="w-full flex flex-col gap-1">
                                    <div className="text-ss-55 font-bold after:content-['*'] after:text-ss-50 after:ml-1 after:text-red-500">Unit</div>
                                    <select name="unit" id="additem-form-unit" className="border border-gray-200 rounded-sm p-1.5 w-full" value={invitem.unit} onChange={handleFormChange} required>
                                        <option value="" disabled hidden>Select Unit</option>
                                        <option value="Bowl">Bowl</option>
                                        <option value="Cup">Cup</option>
                                        <option value="Pcs">Pcs</option>
                                        <option value="Glass">Glass</option>
                                    </select>
                                    <div className="text-ss-45 text-transparent">Auto-generated</div>
                                </div>
                                <div className="w-full flex flex-col gap-1">
                                    <div className="text-ss-55 font-bold after:content-['*'] after:text-ss-50 after:ml-1 after:text-transparent">Status</div>
                                    <select name="" id="additem-form-status" className="border border-gray-200 rounded-sm p-1.5 w-full bg-gray-50" value={(invitem.instock > 0) ? "In Stock" : "Low Stock"} required disabled>
                                        <option value="instock" selected>In Stock</option>
                                        <option value="lowstock">Low Stock</option>
                                        <option value="outofstock">Out of Stock</option>
                                    </select>
                                    <div className="text-ss-45 text-gray-500">Status is auto-populated based on In Stock quantity.</div>
                                </div>
                            </div>
                            <div className="grow flex flex-col gap-2">
                                <div className="w-full flex flex-col gap-1">
                                    <div className="text-ss-55 font-bold after:content-['*'] after:text-ss-50 after:ml-1 after:text-red-500">Item Name</div>
                                    <input type="text" className="border border-gray-200 rounded-sm p-1.5 w-full" placeholder="Enter item name" id="additem-form-itemname" name="itemname" value={invitem.itemname} onChange={handleFormChange} required></input>
                                    <div className="text-ss-45 text-transparent">Auto-generated</div>
                                </div>
                                <div className="w-full grow flex flex-col gap-1">
                                    <div className="text-ss-55 font-bold after:content-['*'] after:text-ss-50 after:ml-1 after:text-transparent">Item Description</div>
                                    <textarea name="itemdesc" className="border border-gray-200 rounded-sm p-1.5 w-full grow" placeholder="Enter item description" value={invitem.itemdesc} onChange={handleFormChange} id="additem-form-itemdesc"></textarea>
                                    <div className="text-ss-45 text-transparent">Auto-generated</div>
                                </div>
                                <div className="w-full flex flex-col gap-1">
                                    <div className="text-ss-55 font-bold after:content-['*'] after:text-ss-50 after:ml-1 after:text-red-500">Price</div>
                                    <input type="number" className="border border-gray-200 rounded-sm p-1.5 w-full" placeholder="Enter price" name="price" value={invitem.price} onChange={handleFormChange} id="additem-form-price" min="1" max="1000" step="0.1" required></input>
                                    <div className="text-ss-45 text-transparent">Auto-generated</div>
                                </div>
                                <div className="w-full flex flex-col gap-1">
                                    <div className="text-ss-55 font-bold after:content-['*'] after:text-ss-50 after:ml-1 after:text-red-500">In Stock</div>
                                    <input type="number" className="border border-gray-200 rounded-sm p-1.5 w-full" placeholder="Enter stock quantity" name="instock" value={invitem.instock} onChange={handleFormChange} id="additem-form-instock" min="0" max="1000" required></input>
                                    <div className="text-ss-45 text-transparent">Auto-generated</div>
                                </div>
                                <div className=" w-full flex flex-col gap-1">
                                    <div className="text-ss-55 font-bold after:content-['*'] after:text-ss-50 after:ml-1 after:text-transparent">Supplier</div>
                                    <select name="additem-supplier-option" className="border border-gray-200 rounded-sm p-1.5 w-full" id="additem-form-supplier" value={"Local"} onChange={handleFormChange}>
                                        <option value="" selected disabled hidden>Select supplier</option>
                                        <option value="Local">Local</option>
                                    </select>
                                    <div className="text-ss-45 text-transparent">Status is auto-populated based on In Stock quantity.</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full items-center justify-center gap-2">
                            <div className="p-2 rounded-sm border border-gray-200 flex items-center justify-center aspect-6/1" id="additem" data-target="inventory" onClick={() => handleChangeContent("/inventory")}>
                                <span className="text-center">Cancel</span>
                            </div>
                            <div className="p-2 bg-gpurple rounded-sm flex items-center justify-center aspect-6/1 gap-1" id="additem-form-addinvitem" onClick={handlesave} >
                                <IconPosCafe color="white" icon="save" />
                                <span className="text-ss-50 text-white">Save</span>
                            </div>
                            {
                                (formAction == "edit") ? (
                                    <div className="p-2 bg-red-100 text-red-500 rounded-sm flex items-center justify-center aspect-6/1" id="additem-form-deleteinvitem">
                                        <IconPosCafe icon="delete" color="red" />
                                        <span className="text-ss-50">Delete</span>
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