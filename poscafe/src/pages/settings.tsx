import { useState, useEffect } from "react";
import { IconPosCafe } from "../Helper/icons";

export default function Settings() {
  const [settings, setSettings] = useState({
    cafeName: "POS Cafe",
    cafeTagline: "Point of Sale System",
    currency: "₹",
    taxRate: 10,
    enableReceipt: true,
    enableNotifications: true,
    language: "en",
    theme: "light"
  });

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    // Load settings from localStorage
    const savedSettings = localStorage.getItem("posSettings");
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("posSettings", JSON.stringify(settings));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleReset = () => {
    const defaultSettings = {
      cafeName: "POS Cafe",
      cafeTagline: "Point of Sale System",
      currency: "₹",
      taxRate: 10,
      enableReceipt: true,
      enableNotifications: true,
      language: "en",
      theme: "light"
    };
    setSettings(defaultSettings);
    localStorage.setItem("posSettings", JSON.stringify(defaultSettings));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    });
  };

  return (
    <div className="flex flex-col gap-2 grow overflow-hidden">
      <div className="bg-white rounded-sm shadow-sm shadow-gray-200 p-4 overflow-x-hidden overflow-y-scroll scrollbar-none">


        <div className="grid gap-6 md:grid-cols-2">
          {/* General Settings */}
          <div className="border border-gray-200 rounded-sm p-4">
            <h3 className="text-ss-55 font-bold text-gray-800 mb-4 flex items-center gap-2">
              <IconPosCafe icon="cafe" color="purple" size={16} />
              General Settings
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-ss-50 text-gray-600 mb-1">Cafe Name</label>
                <input
                  type="text"
                  name="cafeName"
                  value={settings.cafeName}
                  onChange={handleChange}
                  className="w-full border rounded-sm border-gray-200 p-2 text-ss-55 outline-none focus:border-violet-400"
                  placeholder="Enter cafe name"
                />
              </div>
              <div>
                <label className="block text-ss-50 text-gray-600 mb-1">Tagline</label>
                <input
                  type="text"
                  name="cafeTagline"
                  value={settings.cafeTagline}
                  onChange={handleChange}
                  className="w-full border rounded-sm border-gray-200 p-2 text-ss-55 outline-none focus:border-violet-400"
                  placeholder="Enter tagline"
                />
              </div>
              <div>
                <label className="block text-ss-50 text-gray-600 mb-1">Currency Symbol</label>
                <select
                  name="currency"
                  value={settings.currency}
                  onChange={handleChange}
                  className="w-full border rounded-sm border-gray-200 p-2 text-ss-55 outline-none focus:border-violet-400"
                >
                  <option value="₹">₹ (Indian Rupee)</option>
                  <option value="$">$ (US Dollar)</option>
                  <option value="€">€ (Euro)</option>
                  <option value="£">£ (British Pound)</option>
                  <option value="¥">¥ (Japanese Yen)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Tax & Pricing */}
          <div className="border border-gray-200 rounded-sm p-4">
            <h3 className="text-ss-55 font-bold text-gray-800 mb-4 flex items-center gap-2">
              <IconPosCafe icon="billing" color="purple" size={16} />
              Tax & Pricing
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-ss-50 text-gray-600 mb-1">Tax Rate (%)</label>
                <input
                  type="number"
                  name="taxRate"
                  value={settings.taxRate}
                  onChange={handleChange}
                  className="w-full border rounded-sm border-gray-200 p-2 text-ss-55 outline-none focus:border-violet-400"
                  placeholder="Enter tax rate"
                  min="0"
                  max="100"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-ss-50 text-gray-600">Enable Receipt Printing</label>
                  <p className="text-ss-45 text-gray-500">Automatically print receipts after payment</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="enableReceipt"
                    checked={settings.enableReceipt}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-violet-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-violet-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Appearance */}
          <div className="border border-gray-200 rounded-sm p-4">
            <h3 className="text-ss-55 font-bold text-gray-800 mb-4 flex items-center gap-2">
              <IconPosCafe icon="palette" color="purple" size={16} />
              Appearance
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-ss-50 text-gray-600 mb-1">Theme</label>
                <select
                  name="theme"
                  value={settings.theme}
                  onChange={handleChange}
                  className="w-full border rounded-sm border-gray-200 p-2 text-ss-55 outline-none focus:border-violet-400"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="system">System Default</option>
                </select>
              </div>
              <div>
                <label className="block text-ss-50 text-gray-600 mb-1">Language</label>
                <select
                  name="language"
                  value={settings.language}
                  onChange={handleChange}
                  className="w-full border rounded-sm border-gray-200 p-2 text-ss-55 outline-none focus:border-violet-400"
                >
                  <option value="en">English</option>
                  <option value="zh">中文 (Chinese)</option>
                  <option value="es">Español (Spanish)</option>
                  <option value="fr">Français (French)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="border border-gray-200 rounded-sm p-4">
            <h3 className="text-ss-55 font-bold text-gray-800 mb-4 flex items-center gap-2">
              <IconPosCafe icon="error" color="purple" size={16} />
              Notifications
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-ss-50 text-gray-600">Enable Notifications</label>
                  <p className="text-ss-45 text-gray-500">Get notified about low stock and alerts</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="enableNotifications"
                    checked={settings.enableNotifications}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-violet-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-violet-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-6 w-full">
          <div className="flex gap-2">
            <button 
              onClick={handleReset}
              className="border border-gray-300 text-gray-700 px-4 py-2 rounded-sm text-ss-60 font-semibold hover:bg-gray-50 flex items-center gap-2"
            >
              <IconPosCafe icon="reset" size={14} color="black"/>
              Reset
            </button>
            <button 
              onClick={handleSave}
              className="bg-gpurple text-white px-4 py-2 rounded-sm text-ss-60 font-semibold hover:brightness-105 flex items-center gap-2"
            >
              <IconPosCafe icon="check" size={14} />
              {saved ? "Saved!" : "Save Settings"}
            </button>
          </div>
        </div>

        {/* Preview Section */}
        {/* <div className="mt-6 border border-gray-200 rounded-sm p-4 bg-gray-50">
          <h3 className="text-ss-55 font-bold text-gray-800 mb-4 flex items-center gap-2">
            <IconPosCafe icon="eye" color="purple" size={16} />
            Preview
          </h3>
          <div className="bg-white border border-gray-200 rounded-sm p-6 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gpurple shadow-md mx-auto mb-3">
              <IconPosCafe icon="cafe" size={32} />
            </div>
            <h1 className="text-2xl font-semibold text-gray-800">{settings.cafeName}</h1>
            <p className="text-sm text-gray-600 mt-1">{settings.cafeTagline}</p>
            <div className="mt-4 text-ss-50 text-gray-500">
              Currency: {settings.currency} | Tax Rate: {settings.taxRate}%
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
