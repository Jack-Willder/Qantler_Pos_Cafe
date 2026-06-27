import { useState } from "react";
import { IconPosCafe } from "../icons";
export default function Popup() {
    const [currentState, ] = useState(false);

    return (
        <div className="flex grow relative items-center justify-center">
            <div className="flex flex-col gap-2 p-4 w-70 h-70 font-bold rounded-md items-center justify-center bg-white">
                <div className="flex flex-col gap-3 items-center justify-center">
                    <div className="rounded-full flex overflow-hidden bg-green-200 aspect-square p-4 w-auto items-center justify-center"><IconPosCafe icon="send" color="green" size={40} /></div>
                    <div>Submit Item Request?</div>
                    <div className="text-gray-500 text-ss-55 text-wrap text-center">Please confirm that you want to submit this item request. You won't be able to edit it afte submission.</div>
                    <div className="flex w-full gap-2">
                        <div className="p-2 bg-white text-black rounded-sm flex items-center justify-center aspect-4/1 gap-1 border border-gray-300" id="additem-form-deleteinvitem">
                            <span className="text-ss-50">Cancel</span>
                        </div>
                        <div className="p-2 bg-green-700 text-white rounded-sm flex items-center justify-center aspect-4/1 gap-1" id="additem-form-deleteinvitem">
                            <IconPosCafe icon="send" color="white" size={14} />
                            <span className="text-ss-50">Yes, Submit</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
