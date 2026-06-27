import { IconPosCafe } from "../../Helper/icons";
import type { FormSelectProps, FormFieldProps, InventoryItemFormProps } from "../../Types/Types";

export function InventoryItemForm({
  formAction,
  item,
  generatedItemCode,
  onChange,
  onCancel,
  onSave,
  onDelete,
}: InventoryItemFormProps) {
  const isEdit = formAction === "edit";

  return (
    <div className="flex flex-col w-full h-full gap-3">
      <div className="bg-white text-ss-55 h-full p-3.5 px-10 flex flex-col justify-center items-center w-full gap-3">
        <div className="text-center">
          <div className="text-sm font-bold">{isEdit ? "Edit Inventory" : "Add New Item"}</div>
          <div className="text-ss-65 font-medium">
            {isEdit ? "Update the details of the inventory item" : "Add a new item to your inventory"}
          </div>
        </div>
        <div className="h-px bg-gray-200 w-full"></div>
        <div className="grow w-full flex flex-col items-center">
          <div className="flex grow w-full gap-3.5 pb-3">
            <div className="grow flex flex-col gap-2">
              <FormField label="Item Code" helper="Auto-generated">
                <input
                  type="text"
                  name="itemCode"
                  className="border border-gray-200 rounded-sm p-1.5 w-full bg-gray-50 select-none caret-transparent"
                  placeholder="ITM-000129"
                  id="additem-form-itemcode"
                  value={isEdit ? item.itemCode : generatedItemCode}
                  disabled
                />
              </FormField>
              <FormField label="Item Image" helper="Auto-Generated">
                <div className="border border-gray-200 rounded-sm p-1.5 flex flex-col items-center justify-center relative grow border-dashed bg-gray-50">
                  <IconPosCafe color="purple" icon="cloud" size={24} />
                  <input
                    type="file"
                    name="itemImage"
                    accept="image/png, image/jpg, image/jpeg"
                    placeholder="Click to upload or drag and drop"
                    className="absolute h-full w-full opacity-0 z-10"
                    onChange={onChange}
                    required
                  />
                  <div className="p-1.5 flex flex-col items-center justify-center">
                    <div className="text-ss-55 font-bold">Click to upload or drag and drop</div>
                    <div className="text-ss-45">PNG, JPG or WEBP (Max. 2MB)</div>
                  </div>
                </div>
              </FormField>
              <FormSelect label="Category" name="category" value={item.category} onChange={onChange} options={["Beverage", "Steamed Bun", "Steamed Timsum", "Deep Fry Timsum", "Bake", "Noodle/Dumplings", "Porridge"]} />
              <FormSelect label="Unit" name="unit" value={item.unit} onChange={onChange} options={["Bowl", "Cup", "Pcs", "Glass"]} />
              <FormField label="Status" helper="Status is auto-populated based on In Stock quantity.">
                <select
                  id="additem-form-status"
                  className="border border-gray-200 rounded-sm p-1.5 w-full bg-gray-50"
                  value={item.inStock > 0 ? "In Stock" : "Low Stock"}
                  required
                  disabled
                >
                  <option value="In Stock">In Stock</option>
                  <option value="Low Stock">Low Stock</option>
                  <option value="Out of Stock">Out of Stock</option>
                </select>
              </FormField>
            </div>
            <div className="grow flex flex-col gap-2">
              <FormField label="Item Name" required>
                <input
                  type="text"
                  className="border border-gray-200 rounded-sm p-1.5 w-full"
                  placeholder="Enter item name"
                  id="additem-form-itemname"
                  name="itemName"
                  value={item.itemName}
                  onChange={onChange}
                  required
                />
              </FormField>
              <FormField label="Item Description">
                <textarea
                  name="itemDescription"
                  className="border border-gray-200 rounded-sm p-1.5 w-full grow"
                  placeholder="Enter item description"
                  value={item.itemDescription}
                  onChange={onChange}
                  id="additem-form-itemdesc"
                />
              </FormField>
              <FormField label="Price" required>
                <input
                  type="number"
                  className="border border-gray-200 rounded-sm p-1.5 w-full"
                  placeholder="Enter price"
                  name="price"
                  value={item.price}
                  onChange={onChange}
                  id="additem-form-price"
                  min="1"
                  max="1000"
                  step="0.1"
                  required
                />
              </FormField>
              <FormField label="In Stock" required>
                <input
                  type="number"
                  className="border border-gray-200 rounded-sm p-1.5 w-full"
                  placeholder="Enter stock quantity"
                  name="inStock"
                  value={item.inStock}
                  onChange={onChange}
                  id="additem-form-instock"
                  min="0"
                  max="1000"
                  required
                />
              </FormField>
              <FormSelect label="Supplier" name="supplier" value={item.supplier || "Local"} onChange={onChange} options={["Local"]} />
            </div>
          </div>
          <div className="flex w-full items-center justify-center gap-2">
            <div className="p-2 rounded-sm border border-gray-200 flex items-center justify-center aspect-6/1" id="additem" data-target="inventory" onClick={onCancel}>
              <span className="text-center">Cancel</span>
            </div>
            <div className="p-2 bg-gpurple rounded-sm flex items-center justify-center aspect-6/1 gap-1" id="additem-form-addinvitem" onClick={onSave}>
              <IconPosCafe color="white" icon="save" />
              <span className="text-ss-50 text-white">Save</span>
            </div>
            {isEdit ? (
              <div className="p-2 bg-red-100 text-red-500 rounded-sm flex items-center justify-center aspect-6/1" id="additem-form-deleteinvitem" onClick={onDelete}>
                <IconPosCafe icon="delete" color="red" />
                <span className="text-ss-50">Delete</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}



function FormField({ label, helper = "Auto-generated", required = false, children }: FormFieldProps) {
  return (
    <div className="w-full flex flex-col gap-1">
      <div className={`text-ss-55 font-bold after:content-['*'] after:text-ss-50 after:ml-1 ${required ? "after:text-red-500" : "after:text-transparent"}`}>
        {label}
      </div>
      {children}
      <div className={`text-ss-45 ${helper ? "text-gray-500" : "text-transparent"}`}>{helper || "Auto-generated"}</div>
    </div>
  );
}

function FormSelect({ label, name, value, options, onChange }: FormSelectProps) {
  return (
    <FormField label={label} required={label !== "Supplier"}>
      <select
        name={name}
        id={`additem-form-${name}`}
        className="border border-gray-200 rounded-sm p-1.5 w-full"
        value={value}
        onChange={onChange}
        required
      >
        <option value="" disabled hidden>
          Select {label.toLowerCase()}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </FormField>
  );
}
