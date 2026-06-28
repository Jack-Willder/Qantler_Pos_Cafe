import { BillingActionPanels } from "../features/billing/BillingActionPanels";
import { BillingSummaryHeader } from "../features/billing/BillingSummaryHeader";
import { CategorySidebar } from "../features/billing/CategorySidebar";
import { CheckoutPanel } from "../features/billing/CheckoutPanel";
import { MenuToolbar } from "../features/billing/MenuToolbar";
import { OrderEntryPanel } from "../features/billing/OrderEntryPanel";
import { ProductGrid } from "../features/billing/ProductGrid";
import { useBilling } from "../features/billing/useBilling";

export default function Billing() {
  const billing = useBilling();

  return (
    <div className="content">
      <BillingSummaryHeader totalAmount={billing.totalAmount} />
      <MenuToolbar activeView={billing.activeView} onSearch={billing.search} onViewChange={billing.setActiveView} />
      <CheckoutPanel
        checkoutlist={billing.checkoutlist}
        priceAmendment={billing.priceAmendment}
        totalAmount={billing.totalAmount}
        gstAmount={billing.gstAmount}
        payable={billing.payable}
        tender={billing.tender}
        changeAmount={billing.changeAmount}
        onQuantityChange={billing.updatequantity}
        onDeleteItem={billing.deletefromcheckout}
        onTenderChange={billing.handlechangetender}
      />
      <CategorySidebar activeCategory={billing.activeCategory} onCategoryChange={billing.handleCategory} />
      <ProductGrid
        items={billing.inventorylist}
        activeView={billing.activeView}
        onSelectItem={billing.addcheckout}
      />
      <OrderEntryPanel />
      <BillingActionPanels
        onSaveBill={billing.saveBill}
        onTogglePriceAmendment={() => billing.setPriceAmendment(!billing.priceAmendment)}
        onTenderAmount={billing.changetender}
      />
    </div>
  );
}
