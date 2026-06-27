import { IconPosCafe } from "../icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type PopupProps = {
    show: boolean;
    navigateTo: string;
    message?: string;
    description?: string;
    type: "confirm" | "error" | "delete";
    onSubmit: () => void;
    onCancel: () => void;
};

export default function Popup({ show, navigateTo, message, description, type, onSubmit, onCancel }: PopupProps) {
    const [currentMode, setCurrentMode] = useState<"confirm" | "success">("confirm");
    const navigate = useNavigate();
     useEffect(() => {
        if (show) {
            setCurrentMode("confirm");
        }
    }, []);

    const handleSubmit = () => {
        switch (type) {
            case "confirm":
                currentMode === "confirm" ? setCurrentMode("success") : (onSubmit(), navigate(navigateTo));
                break;
            case "delete":
                onSubmit();
                navigate(navigateTo);
                break;
            case "error":
                onSubmit();
                navigate(navigateTo);
                break;
        
            default:
                break;
        }
    };
    
    const handleCancel = () => {
        onCancel();
    };

    if (!show) {
        return null;
    }
    return (
        <div className="fixed inset-0 bg-black/40 z-30 flex items-center justify-center">
            <div className="flex flex-col gap-2 p-4 w-80 h-70 font-bold rounded-md items-center justify-center bg-white">
                <div className="flex flex-col gap-4 p-4 items-center justify-center">
                    <div className={`rounded-full flex overflow-hidden aspect-square p-4 w-auto items-center justify-center ${type === "confirm" ? "bg-green-100" : "bg-red-100"}`}>
                        <IconPosCafe icon={(() => {
                            switch (type) {
                                case "confirm":
                                    return "send";
                                case "delete":
                                    return "delete";
                                case "error":
                                    return "error"; 
                                default:
                                    return "check";
                            }
                        })()} color={type === "confirm" ? "green" : "red"} size={40} />
                    </div>

                    <div>{(() => {
                        switch (type) {
                            case "confirm":
                                return `Submit ${message}`;
                            case "delete":
                                return `Delete ${message}`;
                            case "error":
                                return "Error";
                            default:
                                return "Item Request Submitted!";
                        }
                    })()}</div>

                    <div className="px-5 text-gray-500 text-ss-55 text-wrap text-center">
                        {(() => {
                            switch (type) {
                                case "confirm":
                                    return `Please confirm that you want to submit this ${message}. You won't be able to edit it after submission.`;
                                case "delete":
                                    return `Are you sure you want to delete this ${message} item? This action cannot be undone.`;
                                case "error":
                                    return description || "An error occurred while processing your request.";
                                default:
                                    return "Your item request has been submitted successfully. You will be notified once it is reviewed.";
                            }
                        })()}
                    </div>

                    <div className="flex w-full gap-2 justify-center">
                        <div
                            onClick={handleCancel}
                            className="p-2 bg-white text-black rounded-sm flex items-center justify-center aspect-4/1 gap-1 border border-gray-300"
                        >
                            <span className="text-ss-50">{currentMode === "confirm" ? "Cancel" : "Close"}</span>
                        </div>

                        <div
                            onClick={handleSubmit}
                            className={`p-2 text-white rounded-sm flex items-center justify-center aspect-4/1 gap-1 border border-gray-300 ${type === "confirm" ? "bg-green-600" : "bg-red-600"}`}>
                                {(()=>{
                                    switch (type) {
                                        case "confirm":
                                            return <IconPosCafe icon="send" color="white" size={14} />;
                                        case "delete":
                                            return <IconPosCafe icon="delete" color="white" size={14} />;
                                        case "error":
                                            return <IconPosCafe icon="error" color="white" size={14} />;
                                        default:
                                            return null;
                                    }
                                })()}
                            <span className="text-ss-50">{currentMode === "confirm" ? "Yes, Submit" : type === "delete" ? "Delete" : "View Requests"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}