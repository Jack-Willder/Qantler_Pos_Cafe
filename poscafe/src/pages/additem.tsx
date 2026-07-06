import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FormAction } from "../Context/Context";
import { InventoryItemForm } from "../features/inventory/InventoryItemForm";
import {hasDuplicateItemName,hasEmptyRequiredField,normalizeInventoryItem} from "../features/inventory/inventoryItemStorage";
import { CreateInventory, UpdateInventory, DeleteInventory, GetAllInventory, GetItemCode } from "../api/api";
import Popup from "../shared/popup";
import type { invitemtype } from "../Types/Types";

const emptyInventoryItem: invitemtype = {
  itemCode: "",
  itemImage: "",
  category: "",
  unit: "",
  itemName: "",
  itemDescription: "",
  price: 0,
  inStock: 0,
  supplier: "Local",
};

export default function AddItem() {
  const navigate = useNavigate();
  const { formAction } = useContext(FormAction);
  const { state: selectedItem } = useLocation();
  const [generatedItemCode, setGeneratedItemCode] = useState<string>("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState<"confirm" | "delete" | "error">("error");
  const [popupDescription, setPopupDescription] = useState("");
  const [pendingItem, setPendingItem] = useState<invitemtype | null>(null);
  const [inventory, setInventory] = useState<Array<invitemtype>>([]);
  const [invitem, setInvItem] = useState<invitemtype>(selectedItem ? (selectedItem as invitemtype) : { ...emptyInventoryItem, itemCode: generatedItemCode });

  useEffect(() => {
    (async () => {
      const itemCode = await GetItemCode();
      setGeneratedItemCode(itemCode);
      const allInventory = await GetAllInventory();
      setInventory(allInventory);
    })();
  }, []);

  function handleFormChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setInvItem((prev) => ({
      ...prev,
      [name]: name === "price" || name === "instock" ? Number(value) : value,
    }));
  }

  function showError(description: string) {
    setPopupType("error");
    setPopupDescription(description);
    setShowPopup(true);
  }

  function handleSaveContent() {
    const itemToSave = normalizeInventoryItem({
      ...invitem,
      itemCode: formAction === "edit" ? invitem.itemCode : generatedItemCode,
    }, generatedItemCode);

    if (hasEmptyRequiredField(itemToSave)) {
      showError("All Fields are Required!");
      return;
    }

    if (formAction === "edit" && !inventory.some((item) => item.itemCode === itemToSave.itemCode)) {
      showError("Item not found!");
      return;
    }

    if (hasDuplicateItemName(inventory, itemToSave)) {
      showError("ItemName Already Exists");
      return;
    }

    setPendingItem(itemToSave);
    setInvItem(itemToSave);
    setPopupType("confirm");
    setPopupDescription(formAction === "edit" ? "Inventory Updated" : "Inventory Added");
    setShowPopup(true);
  }

  function confirmSave() {
    if (!pendingItem) return;

    if (formAction === "edit") {
      UpdateInventory(pendingItem)
      .then(() => {
        setShowPopup(false);
        navigate("/inventory");
      }).catch(() => {
        setPopupType("error");
        setPopupDescription("Cannot Save item")
      });
    } else {
      CreateInventory(pendingItem)
        .then(() => {
          setShowPopup(false);
          navigate("/inventory");
        }).catch(() => {
          setPopupType("error");
          setPopupDescription("Cannot Edit item");
        });
    }
    // const nextInventory =
    //   formAction === "edit"
    //     ? inventory.map((item) => (item.itemCode === pendingItem.itemCode ? pendingItem : item))
    //     : [...inventory, pendingItem];
  }

  function handleDeleteContent() {
    setPopupType("delete");
    setPopupDescription("");
    setShowPopup(true);
  }

  function confirmDelete() {
    DeleteInventory(invitem.itemCode)
    .then(() => {
      setShowPopup(false);
      navigate("/inventory");
    }).catch(() => {
      setPopupType("error")
      setPopupDescription("Cannot Delete Item")
    })
  }

  function handlePopupSubmit() {
    if (popupType === "confirm") {
      confirmSave();
      return;
    }

    if (popupType === "delete") {
      confirmDelete();
      return;
    }

    setShowPopup(false);
  }

  return (
    <div className="w-full flex grow p-4 relative">
      <Popup
        show={showPopup}
        message="Inventory?"
        type={popupType}
        description={popupDescription}
        navigateTo={popupType === "error" ? "" : "/inventory"}
        onSubmit={handlePopupSubmit}
        onCancel={() => setShowPopup(false)}
      />
      <InventoryItemForm
        formAction={formAction}
        item={invitem}
        generatedItemCode={generatedItemCode}
        onChange={handleFormChange}
        onCancel={() => navigate("/inventory")}
        onSave={handleSaveContent}
        onDelete={handleDeleteContent}
      />
    </div>
  );
}
