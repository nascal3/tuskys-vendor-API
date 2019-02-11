const Sequelize = require('sequelize');
const sequelize = require('../startup/db');
const config = require('config');

const Item = sequelize.define('Item', {
  timestamp: {
    type: 'TIMESTAMP',
    allowNull: false
  },
  No: {
    type:Sequelize.STRING(20),
    field: 'No_',
    primaryKey: true,
    allowNull: false
  },
  No_2: {
    type: Sequelize.STRING(20),
    primaryKey: true,
    field: 'No_ 2',
    allowNull: false
  },
  Description: {
    type: Sequelize.STRING(30),
    allowNull: false
  },
  Search_Description: {
    type: Sequelize.STRING(30),
    field: 'Search Description',
    allowNull: false
  },
  Description_2: {
    type: Sequelize.STRING(30),
    field: 'Description 2',
    allowNull: false
  },
  Base_Unit_Of_Measure: {
    type: Sequelize.STRING(10),
    field: 'Base Unit of Measure',
    allowNull: false
  },
  Price_Unit_Conversion: {
    type: Sequelize.INTEGER,
    field: 'Price Unit Conversion',
    allowNull: false
  },
  Inventory_Posting_Group: {
    type: Sequelize.STRING(10),
    field: 'Inventory Posting Group',
    allowNull: false
  },
  Shelf_No: {
    type: Sequelize.STRING(10),
    field: 'Shelf No_',
    allowNull: false
  },
  Item_Disc_Group: {
    type: Sequelize.STRING(10),
    field: 'Item Disc_ Group',
    allowNull: false
  },
  Allow_Invoice_Disc: {
    type: Sequelize.INTEGER,
    field: 'Allow Invoice Disc_',
    allowNull: false
  },
  Statistics_Group: {
    type: Sequelize.INTEGER,
    field: 'Statistics Group',
    allowNull: false
  },
  Commission_Group: {
    type: Sequelize.INTEGER,
    field: 'Commission Group',
    allowNull: false
  },
  Unit_Price: {
    type: Sequelize.DECIMAL,
    field: 'Unit Price',
    allowNull: false
  },
  Price_Profit_Calculation: {
    type: Sequelize.INTEGER,
    field: 'Price_Profit Calculation',
    allowNull: false
  },
  Profit_Perc: {
    type: Sequelize.DECIMAL,
    field: 'Profit %',
    allowNull: false
  },
  Costing_Method: {
    type: Sequelize.INTEGER,
    field: 'Costing Method',
    allowNull: false
  },
  Unit_Cost: {
    type: Sequelize.DECIMAL,
    field: 'Unit Cost',
    allowNull: false
  },
  Standard_Cost: {
    type: Sequelize.DECIMAL,
    field: 'Standard Cost',
    allowNull: false
  },
  Last_Direct_Cost: {
    type: Sequelize.DECIMAL,
    field: 'Last Direct Cost',
    allowNull: false
  },
  Indirect_Cost_Perc: {
    type: Sequelize.DECIMAL,
    field: 'Indirect Cost %',
    allowNull: false
  },
  Cost_Is_Adjusted: {
    type: Sequelize.INTEGER,
    field: 'Cost is Adjusted',
    allowNull: false
  },
  Allow_Online_Adjustment: {
    type: Sequelize.INTEGER,
    field: 'Allow Online Adjustment',
    allowNull: false
  },
  Vendor_No: {
    type: Sequelize.STRING(20),
    field: 'Vendor No_',
    allowNull: false
  },
  Vendor_Item_No: {
    type: Sequelize.STRING(20),
    field: 'Vendor Item No_',
    allowNull: false
  },
  Lead_Time_Calculation: {
    type: Sequelize.STRING(32),
    field: 'Lead Time Calculation',
    allowNull: false
  },
  Reorder_Point: {
    type: Sequelize.DECIMAL,
    field: 'Reorder Point',
    allowNull: false
  },
  Maximum_Inventory: {
    type: Sequelize.DECIMAL,
    field: 'Maximum Inventory',
    allowNull: false
  },
  Reorder_Quantity: {
    type: Sequelize.DECIMAL,
    field: 'Reorder Quantity',
    allowNull: false
  },
  Alternative_Item_No: {
    type: Sequelize.STRING(20),
    field: 'Alternative Item No_',
    allowNull: false
  },
  Unit_List_Price: {
    type: Sequelize.DECIMAL,
    field: 'Unit List Price',
    allowNull: false
  },
  Duty_Due_Perc: {
    type: Sequelize.DECIMAL,
    field: 'Duty Due %',
    allowNull: false
  },
  Duty_Code: {
    type: Sequelize.STRING(10),
    field: 'Duty Code',
    allowNull: false
  },
  Gross_Weight: {
    type: Sequelize.DECIMAL,
    field: 'Gross Weight',
    allowNull: false
  },
  Net_Weight: {
    type: Sequelize.DECIMAL,
    field: 'Net Weight',
    allowNull: false
  },
  Units_per_Parcel: {
    type: Sequelize.DECIMAL,
    field: 'Units per Parcel',
    allowNull: false
  },
  Unit_Volume: {
    type: Sequelize.DECIMAL,
    field: 'Unit Volume',
    allowNull: false
  },
  Durability: {
    type: Sequelize.STRING(10),
    allowNull: false
  },
  Freight_Type: {
    type: Sequelize.STRING(10),
    field: 'Freight Type',
    allowNull: false
  },
  Tariff_No: {
    type: Sequelize.STRING(10),
    field: 'Tariff No_',
    allowNull: false
  },
  Duty_Unit_Conversion: {
    type: Sequelize.DECIMAL,
    field: 'Duty Unit Conversion',
    allowNull: false
  },
  Country_Region_Purchased_Code: {
    type: Sequelize.STRING(10),
    field: 'Country_Region Purchased Code',
    allowNull: false
  },
  Budget_Quantity: {
    type: Sequelize.DECIMAL,
    field: 'Budget Quantity',
    allowNull: false
  },
  Budgeted_Amount: {
    type: Sequelize.DECIMAL,
    field: 'Budgeted Amount',
    allowNull: false
  },
  Budget_Profit: {
    type: Sequelize.DECIMAL,
    field: 'Budget Profit',
    allowNull: false
  },
  Blocked: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  Last_Date_Modified: {
    type: Sequelize.DATE,
    field: 'Last Date Modified',
    allowNull: false
  },
  Price_Includes_VAT: {
    type: Sequelize.INTEGER,
    field: 'Price Includes VAT',
    allowNull: false
  },
  VAT_Bus_Posting_Gr_Price: {
    type: Sequelize.STRING(10),
    field: "'VAT Bus_ Posting Gr_ (Price)'",
    allowNull: false
  },
  Gen_Prod_Posting_Group: {
    type: Sequelize.STRING,
    field: 'Gen_ Prod_ Posting Group',
    allowNull: false
  },
  Picture: {
    type: Sequelize.BLOB,
    allowNull: true
  },
  Country_Region_Of_Origin_Code: {
    type: Sequelize.STRING(10),
    field: 'Country_Region of Origin Code',
    allowNull: false
  },
  Automatic_Ext_Texts: {
    type: Sequelize.INTEGER,
    field: 'Automatic Ext_ Texts',
    allowNull: false
  },
  No_Series: {
    type: Sequelize.STRING(10),
    field: 'No_ Series',
    allowNull: false
  },
  Tax_Group_Code: {
    type: Sequelize.STRING(10),
    field: 'Tax Group Code',
    allowNull: false
  },
  VAT_Prod_Posting_Group: {
    type: Sequelize.STRING(10),
    field: 'VAT Prod_ Posting Group',
    allowNull: false
  },
  Reserve: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  Global_Dimension_1_Code: {
    type: Sequelize.STRING(20),
    field: 'Global Dimension 1 Code',
    allowNull: false
  },
  Global_Dimension_2_Code: {
    type: Sequelize.STRING(20),
    field: 'Global Dimension 2 Code',
    allowNull: false
  },
  Low_Level_Code: {
    type: Sequelize.INTEGER,
    field: 'Low-Level Code',
    allowNull: false
  },
  Lot_Size: {
    type: Sequelize.DECIMAL,
    field: 'Lot Size',
    allowNull: false
  },
  Serial_Nos: {
    type: Sequelize.STRING(10),
    field: 'Serial Nos_',
    allowNull: false
  },
  Last_Unit_Cost_Calc_Date: {
    type: Sequelize.DATEONLY,
    field: 'Last Unit Cost Calc_ Date',
    allowNull: false
  },
  Rolled_up_Material_Cost: {
    type: Sequelize.DECIMAL,
    field: 'Rolled-up Material Cost',
    allowNull: false
  },
  Rolled_Up_Capacity_Cost: {
    type: Sequelize.DECIMAL,
    field: 'Rolled-up Capacity Cost',
    allowNull: false
  },
  Scrap_Perc: {
    type: Sequelize.DECIMAL,
    field: 'Scrap %',
    allowNull: false
  },
  Inventory_Value_Zero: {
    type: Sequelize.INTEGER,
    field: 'Inventory Value Zero',
    allowNull: false
  },
  Discrete_Order_Quantity: {
    type: Sequelize.INTEGER,
    field: 'Discrete Order Quantity',
    allowNull: false
  },
  Minimum_Order_Quantity: {
    type: Sequelize.DECIMAL,
    field: 'Minimum Order Quantity',
    allowNull: false
  },
  Maximum_Order_Quantity: {
    type: Sequelize.DECIMAL,
    field: 'Maximum Order Quantity',
    allowNull: false
  },
  Safety_Stock_Quantity: {
    type: Sequelize.DECIMAL,
    field: 'Safety Stock Quantity',
    allowNull: false
  },
  Order_Multiple: {
    type: Sequelize.DECIMAL,
    field: 'Order Multiple',
    allowNull: false
  },
  Safety_Lead_Time: {
    type: Sequelize.STRING(32),
    field: 'Safety Lead Time',
    allowNull: false
  },
  Flushing_Method: {
    type: Sequelize.INTEGER,
    field: 'Flushing Method',
    allowNull: false
  },
  Replenishment_System: {
    type: Sequelize.INTEGER,
    field: 'Replenishment System',
    allowNull: false
  },
  Rounding_Precision: {
    type: Sequelize.DECIMAL,
    field: 'Rounding Precision',
    allowNull: false
  },
  Sales_Unit_Of_Measure: {
    type: Sequelize.STRING(10),
    field: 'Sales Unit of Measure',
    allowNull: false
  },
  Purch_Unit_Of_Measure: {
    type: Sequelize.STRING(10),
    field: 'Purch_ Unit of Measure',
    allowNull: false
  },
  Reorder_Cycle: {
    type: Sequelize.STRING(32),
    field: 'Reorder Cycle',
    allowNull: false
  },
  Reordering_Policy: {
    type: Sequelize.INTEGER,
    field: 'Reordering Policy',
    allowNull: false
  },
  Include_Inventory: {
    type: Sequelize.INTEGER,
    field: 'Include Inventory',
    allowNull: false
  },
  Manufacturing_Policy: {
    type: Sequelize.INTEGER,
    field: 'Manufacturing Policy',
    allowNull: false
  },
  Item_Category_Code: {
    type: Sequelize.STRING(10),
    field: 'Item Category Code',
    allowNull: false
  },
  Created_From_Nonstock_Item: {
    type: Sequelize.INTEGER,
    field: 'Created From Nonstock Item',
    allowNull: false
  },
  Product_Group_Code: {
    type: Sequelize.STRING(10),
    field: 'Product Group Code',
    allowNull: false
  },
  Service_Item_Group: {
    type: Sequelize.STRING(10),
    field: 'Service Item Group',
    allowNull: false
  },
  Item_Tracking_Code: {
    type: Sequelize.STRING(10),
    field: 'Item Tracking Code',
    allowNull: false
  },
  Lot_Nos: {
    type: Sequelize.STRING(10),
    field: 'Lot Nos_',
    allowNull: false
  },
  Expiration_Calculation: {
    type: Sequelize.STRING(32),
    field: 'Expiration Calculation',
    allowNull: false
  },
  Special_Equipment_Code: {
    type: Sequelize.STRING(10),
    field: 'Special Equipment Code',
    allowNull: false
  },
  Put_Away_Template_Code: {
    type: Sequelize.STRING(10),
    field: 'Put-away Template Code',
    allowNull: false
  },
  Put_Away_Unit_Of_Measure_Code: {
    type: Sequelize.STRING(10),
    field: 'Put-away Unit of Measure Code',
    allowNull: false
  },
  Phys_Invt_Counting_Period_Code: {
    type: Sequelize.STRING(10),
    field: 'Phys Invt Counting Period Code',
    allowNull: false
  },
  Last_Counting_Period_Update: {
    type: Sequelize.DATEONLY,
    field: 'Last Counting Period Update',
    allowNull: false
  },
  Next_Counting_Period: {
    type: Sequelize.STRING,
    field: 'Next Counting Period',
    allowNull: false
  },
  Use_Cross_Docking: {
    type: Sequelize.INTEGER,
    field: 'Use Cross-Docking',
    allowNull: false
  },
  BOM_Item: {
    type: Sequelize.INTEGER,
    field: 'BOM Item',
    allowNull: false
  },
  Consignment: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  Commission_Percentage: {
    type: Sequelize.DECIMAL,
    field: 'Commission Percentage',
    allowNull: false
  },
  Art_No: {
    type: Sequelize.STRING(20),
    field: 'Art No_',
    allowNull: false
  },
  Retail_Item: {
    type: Sequelize.INTEGER,
    field: 'Retail Item',
    allowNull: false
  },
  Scale_Group: {
    type: Sequelize.STRING(2),
    field: 'Scale Group',
    allowNull: false
  },
  PLU_Code: {
    type: Sequelize.STRING(3),
    field: 'PLU Code',
    allowNull: false
  },
  RMS_Item_Code: {
    type: Sequelize.STRING(20),
    field: 'RMS Item Code',
    allowNull: false
  },
  Master_Pack_Qty: {
    type: Sequelize.DECIMAL,
    field: 'Master Pack Qty_',
    allowNull: false
  },
  Listing_Date: {
    type: Sequelize.DATEONLY,
    field: 'Listing Date',
    allowNull: false
  },
  Listing_Fees_Invoiced: {
    type: Sequelize.INTEGER,
    field: 'Listing Fees Invoiced',
    allowNull: false
  },
  Item_Listed: {
    type: Sequelize.INTEGER,
    field: 'Item Listed',
    allowNull: false
  },
  Purchase_Contract_Status: {
    type: Sequelize.INTEGER,
    field: 'Purchase Contract Status',
    allowNull: false
  },
  Allow_PO_Price_Change: {
    type: Sequelize.INTEGER,
    field: 'Allow PO Price Change',
    allowNull: false
  },
  Date_Created: {
    type: Sequelize.DATE,
    field: 'Date Created',
    allowNull: false
  },
  Created_By_User: {
    type: Sequelize.STRING(20),
    field: 'Created by User',
    allowNull: false
  },
  Division_Code: {
    type: Sequelize.STRING(10),
    field: 'Division Code',
    allowNull: false
  },
  Modifying_Date_Of_Status: {
    type: Sequelize.DATE,
    field: 'Modifying Date of Status',
    allowNull: false
  },
  Last_Modified_By_User: {
    type: Sequelize.STRING(20),
    field: 'Last Modified by User',
    allowNull: false
  },
  Item_Error_Check_Code: {
    type: Sequelize.STRING(10),
    field: 'Item Error Check Code',
    allowNull: false
  },
  Item_Error_Check_Status: {
    type: Sequelize.INTEGER,
    field: 'Item Error Check Code',
    allowNull: false
  },
  Suggested_Qty_On_POS: {
    type: Sequelize.DECIMAL,
    field: 'Suggested Qty_ on POS',
    allowNull: false
  },
  Item_Capacity_Value: {
    type: Sequelize.DECIMAL,
    field: 'Item Capacity Value',
    allowNull: false
  },
  Qty_Not_In_Decimal: {
    type: Sequelize.INTEGER,
    field: 'Qty not in Decimal',
    allowNull: false
  },
  Weight_Item: {
    type: Sequelize.INTEGER,
    field: 'Weight Item',
    allowNull: false
  },
  Warranty_Card: {
    type: Sequelize.INTEGER,
    field: 'Warranty Card',
    allowNull: false
  },
  Description_On_POS: {
    type: Sequelize.STRING(20),
    field: 'Description on POS',
    allowNull: false
  },
  Def_Ordered_By: {
    type: Sequelize.INTEGER,
    field: 'Def_ Ordered by',
    allowNull: false
  },
  Def_Ordering_Method: {
    type: Sequelize.INTEGER,
    field: 'Def_ Ordering Method',
    allowNull: false
  },
  Original_Vendor_No: {
    type: Sequelize.STRING(20),
    field: 'Original Vendor No_',
    allowNull: false
  },
  Original_Vendor_No_Item_No: {
    type: Sequelize.STRING(20),
    field: 'Original Vendor Item No_',
    allowNull: false
  },
  No_Staff_Discount_Allowed: {
    type: Sequelize.INTEGER,
    field: 'No Staff Discount Allowed',
    allowNull: false
  },
  No_Customer_Discount_Allowed: {
    type: Sequelize.INTEGER,
    field: 'No Customer Discount Allowed',
    allowNull: false
  },
  No_Item_Return_Allowed: {
    type: Sequelize.INTEGER,
    field: 'No Item Return Allowed',
    allowNull: false
  },
  BOM_Method: {
    type: Sequelize.INTEGER,
    field: 'BOM Method',
    allowNull: false
  },
  BOM_Receipt_Print: {
    type: Sequelize.INTEGER,
    field: 'BOM Receipt Print',
    allowNull: false
  },
  Recipe_Version_Code: {
    type: Sequelize.STRING(20),
    field: 'Recipe Version Code',
    allowNull: false
  },
  Recipe_Item_Type: {
    type: Sequelize.INTEGER,
    field: 'Recipe Item Type',
    allowNull: false
  },
  BOM_Cost_Price_Distribution: {
    type: Sequelize.INTEGER,
    field: 'BOM Cost Price Distribution',
    allowNull: false
  },
  BOM_Type: {
    type: Sequelize.INTEGER,
    field: 'BOM Type',
    allowNull: false
  },
  BOM_Receiving_Explode: {
    type: Sequelize.INTEGER,
    field: 'BOM Receiving Explode',
    allowNull: false
  },
  Depth: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  Width: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  Height: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  Variant_Framework_Code: {
    type: Sequelize.STRING(20),
    field: 'Variant Framework Code',
    allowNull: false
  },
  Season_Code: {
    type: Sequelize.STRING(10),
    field: 'Season Code',
    allowNull: false
  },
  Lifecycle_Length: {
    type: Sequelize.STRING(32),
    field: 'Lifecycle Length',
    allowNull: false
  },
  Lifecycle_Starting_Date: {
    type: Sequelize.DATE,
    field: 'Lifecycle Starting Date',
    allowNull: false
  },
  Lifecycle_Ending_Date: {
    type: Sequelize.DATE,
    field: 'Lifecycle Ending Date',
    allowNull: false
  },
  Error_Check_Internal_Usage: {
    type: Sequelize.INTEGER,
    field: 'Error Check Internal Usage',
    allowNull: false
  },
  Attrib_1_Code: {
    type: Sequelize.STRING(30),
    field: 'Attrib 1 Code',
    allowNull: false
  },
  Attrib_2_Code: {
    type: Sequelize.STRING(30),
    field: 'Attrib 2 Code',
    allowNull: false
  },
  Attrib_3_Code: {
    type: Sequelize.STRING(30),
    field: 'Attrib 3 Code',
    allowNull: false
  },
  Attrib_4_Code: {
    type: Sequelize.STRING(30),
    field: 'Attrib 4 Code',
    allowNull: false
  },
  Attrib_5_Code: {
    type: Sequelize.STRING(30),
    field: 'Attrib 5 Code',
    allowNull: false
  },
  ABC_Sales: {
    type: Sequelize.INTEGER,
    field: 'ABC Sales',
    allowNull: false
  },
  ABC_Profit: {
    type: Sequelize.INTEGER,
    field: 'ABC Profit',
    allowNull: false
  },
  Wastage_Perc: {
    type: Sequelize.INTEGER,
    field: 'Wastage %',
    allowNull: false
  },
  Excluded_From_Portion_Weight: {
    type: Sequelize.INTEGER,
    field: 'Excluded from Portion Weight',
    allowNull: false
  },
  Unaff_By_Multiple_Factor: {
    type: Sequelize.INTEGER,
    field: 'Unaff_ by Multipl_ Factor',
    allowNull: false
  },
  Exclude_From_Menu_Requisition: {
    type: Sequelize.INTEGER,
    field: 'Exclude from Menu Requisition',
    allowNull: false
  },
  Recipe_No_Of_Portions: {
    type: Sequelize.INTEGER,
    field: 'Recipe No_ of Portions',
    allowNull: false
  },
  Max_Modifiers_No_Price: {
    type: Sequelize.INTEGER,
    field: 'Max_ Modifiers No Price',
    allowNull: false
  },
  Max_Ingr_Removed_No_Price: {
    type: Sequelize.INTEGER,
    field: 'Max_ Ingr_ Removed No Price',
    allowNull: false
  },
  Max_Ingr_Modifiers: {
    type: Sequelize.INTEGER,
    field: 'Max_ Ingr_ + Modifiers',
    allowNull: false
  },
  Production_Time_Min: {
    type: Sequelize.INTEGER,
    field: '"Production Time (Min_)"',
    allowNull: false
  },
  Recipe_Main_Ingredient: {
    type: Sequelize.INTEGER,
    field: 'Recipe Main Ingredient',
    allowNull: false
  },
  Recipe_Style: {
    type: Sequelize.STRING(10),
    field: 'Recipe Style',
    allowNull: false
  },
  Recipe_Category: {
    type: Sequelize.STRING(10),
    field: 'Recipe Category',
    allowNull: false
  },
  Available_As_Dish: {
    type: Sequelize.INTEGER,
    field: 'Available as Dish',
    allowNull: false
  },
  Replenishment_Calculation_Type: {
    type: Sequelize.INTEGER,
    field: 'Replenishment Calculation Type',
    allowNull: false
  },
  Manual_Estimated_Daily_Sale: {
    type: Sequelize.DECIMAL,
    field: 'Manual Estimated Daily Sale',
    allowNull: false
  },
  Store_Stock_Cover_Reqd_Days: {
    type: Sequelize.DECIMAL,
    field: '"Store Stock Cover Reqd (Days)"',
    allowNull: false
  },
  Wareh_Stock_Cover_Reqd_Days: {
    type: Sequelize.DECIMAL,
    field: '"Wareh Stock Cover Reqd (Days)"',
    allowNull: false
  },
  Replenishment_Sales_Profile: {
    type: Sequelize.STRING(10),
    field: 'Replenishment Sales Profile',
    allowNull: false
  },
  xMinimum_Inventory_NOT_USED: {
    type: Sequelize.DECIMAL,
    field: 'xMinimum Inventory NOT USED',
    allowNull: false
  },
  xReplen_Method_NOT_USED: {
    type: Sequelize.INTEGER,
    field: 'xReplen_ Method NOT USED',
    allowNull: false
  },
  Replenishment_Grade_Code: {
    type: Sequelize.STRING(10),
    field: 'Replenishment Grade Code',
    allowNull: false
  },
  Not_Active_For_Replenishment: {
    type: Sequelize.INTEGER,
    field: 'Not Active for Replenishment',
    allowNull: false
  },
  Exclude_From_Autom_Replenishm: {
    type: Sequelize.INTEGER,
    field: 'Exclude from Autom_ Replenishm',
    allowNull: false
  },
  Transfer_Multiple: {
    type: Sequelize.DECIMAL,
    field: 'Transfer_Multiple',
    allowNull: false
  },
  Range_In_Location: {
    type: Sequelize.INTEGER,
    field: 'Range in Location',
    allowNull: false
  },
  Store_Forward_Sales_Profile: {
    type: Sequelize.STRING(10),
    field: 'Store Forward Sales Profile',
    allowNull: false
  },
  Wareh_Forward_Sales_Profile: {
    type: Sequelize.STRING(10),
    field: 'Wareh_ Forward Sales Profile',
    allowNull: false
  },
  Purch_Order_Delivery: {
    type: Sequelize.INTEGER,
    field: 'Purch_ Order Delivery',
    allowNull: false
  },
  Replenish_As_Item_No: {
    type: Sequelize.STRING(20),
    field: 'Replenish as Item No_',
    allowNull: false
  },
  Profit_Goal_Perc: {
    type: Sequelize.STRING(20),
    field: 'Profit Goal %',
    allowNull: false
  },
  Replen_Data_Profile: {
    type: Sequelize.STRING(10),
    field: 'Replen_ Data Profile',
    allowNull: false
  },
  Like_For_Like_Replen_Method: {
    type: Sequelize.INTEGER,
    field: 'Like for Like Replen_ Method',
    allowNull: false
  },
  Like_For_Like_Process_Method: {
    type: Sequelize.INTEGER,
    field: 'Like for Like Process Method',
    allowNull: false
  },
  Replenish_As_Item_No_Method: {
    type: Sequelize.INTEGER,
    field: 'Replenish as Item No - Method',
    allowNull: false
  },
  Replen_Distribution_Rule_Code: {
    type: Sequelize.STRING(10),
    field: 'Replen_ Distribution Rule Code',
    allowNull: false
  },
  Select_Lowest_Price_Vendor: {
    type: Sequelize.INTEGER,
    field: 'Select Lowest Price Vendor',
    allowNull: false
  },
  Effective_Inv_Sales_Order: {
    type: Sequelize.INTEGER,
    field: 'Effective Inv_ Sales Order',
    allowNull: false
  },
  Effective_Inv_Purchase_Ord: {
    type: Sequelize.INTEGER,
    field: 'Effective Inv_ Purchase Ord_',
    allowNull: false
  },
  Effective_Inv_Transfer_Inb: {
    type: Sequelize.INTEGER,
    field: 'Effective Inv_ Transfer Inb_',
    allowNull: false
  },
  Effective_Inv_Transfer_Outb: {
    type: Sequelize.INTEGER,
    field: 'Effective Inv_ Transfer Outb_',
    allowNull: false
  },
  Fuel_Item: {
    type: Sequelize.INTEGER,
    field: 'Fuel Item',
    allowNull: false
  },
  Requires_Inspection: {
    type: Sequelize.INTEGER,
    field: 'Requires Inspection',
    allowNull: false
  },
  Item_For_Issue_To_Employees: {
    type: Sequelize.INTEGER,
    field: 'Item for Issue to Employees',
    allowNull: false
  },
  Misc_Article_Code: {
    type: Sequelize.STRING(10),
    field: 'Misc_ Article Code',
    allowNull: false
  },
  Weight_Grade: {
    type: Sequelize.INTEGER,
    field: 'Weight Grade',
    allowNull: false
  },
  Item_Category: {
    type: Sequelize.INTEGER,
    field: 'Item Category',
    allowNull: false
  },
  Item_Type: {
    type: Sequelize.INTEGER,
    field: 'Item Type',
    allowNull: false
  },
  Who_Class: {
    type: Sequelize.STRING(10),
    field: 'Who Class',
    allowNull: false
  },
  Kenya_PCPB: {
    type: Sequelize.STRING(10),
    field: 'Kenya PCPB',
    allowNull: false
  },
  KFC: {
    type: Sequelize.STRING(10),
    allowNull: false
  },
  FRAC_IRAC: {
    type: Sequelize.STRING(10),
    allowNull: false
  },
  PH: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  Item_State: {
    type: Sequelize.INTEGER,
    field: 'Item State',
    allowNull: false
  },
  Crop_Division: {
    type: Sequelize.STRING(10),
    field: 'Crop Division',
    allowNull: false
  },
  Crop: {
    type: Sequelize.STRING(10),
    allowNull: false
  },
  Variety: {
    type: Sequelize.STRING(10),
    allowNull: false
  },
  Colour: {
    type: Sequelize.STRING(10),
    allowNull: false
  },
  Length_Category: {
    type: Sequelize.INTEGER,
    field: 'Length Category',
    allowNull: false
  },
  Grade: {
    type: Sequelize.STRING(10),
    allowNull: false
  },
  External_Use_Only: {
    type: Sequelize.INTEGER,
    field: 'External Use Only',
    allowNull: false
  },
  Medical_Drug: {
    type: Sequelize.INTEGER,
    field: 'Medical Drug',
    allowNull: false
  },
  Routing_No: {
    type: Sequelize.STRING(20),
    field: 'Routing No_',
    allowNull: false
  },
  Production_BOM_No: {
    type: Sequelize.STRING(20),
    field: 'Production BOM No_',
    allowNull: false
  },
  Single_Level_Material_Cost: {
    type: Sequelize.DECIMAL,
    field: 'Single-Level Material Cost',
    allowNull: false
  },
  Single_Level_Capacity_Cost: {
    type: Sequelize.DECIMAL,
    field: 'Single-Level Capacity Cost',
    allowNull: false
  },
  Single_Level_Subcontrd_Cost: {
    type: Sequelize.DECIMAL,
    field: 'Single-Level Subcontrd_ Cost',
    allowNull: false
  },
  Single_Level_Cap_Ovhd_Cost: {
    type: Sequelize.DECIMAL,
    field: 'Single-Level Cap_ Ovhd Cost',
    allowNull: false
  },
  Single_Level_Mfg_Ovhd_Cost: {
    type: Sequelize.DECIMAL,
    field: 'Single-Level Mfg_ Ovhd Cost',
    allowNull: false
  },
  Overhead_Rate: {
    type: Sequelize.DECIMAL,
    field: 'Overhead Rate',
    allowNull: false
  },
  Rolled_Up_Subcontracted_Cost: {
    type: Sequelize.DECIMAL,
    field: 'Rolled-up Subcontracted Cost',
    allowNull: false
  },
  Rolled_Up_Mfg_Ovhd_Cost: {
    type: Sequelize.DECIMAL,
    field: 'Rolled-up Mfg_ Ovhd Cost',
    allowNull: false
  },
  Rolled_Up_Cap_Overhead_Cost: {
    type: Sequelize.DECIMAL,
    field: 'Rolled-up Cap_ Overhead Cost',
    allowNull: false
  },
  Order_Tracking_Policy: {
    type: Sequelize.INTEGER,
    field: 'Order Tracking Policy',
    allowNull: false
  },
  Critical: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  Item_Family_Code: {
    type: Sequelize.STRING,
    field: 'Item Family Code',
    allowNull: false
  },
  Unit_Price_Including_VAT: {
    type: Sequelize.DECIMAL,
    field: 'Unit Price Including VAT',
    allowNull: false
  },
  POS_Cost_Calculation: {
    type: Sequelize.DECIMAL,
    field: 'POS Cost Calculation',
    allowNull: false
  },
  No_Stock_Posting: {
    type: Sequelize.INTEGER,
    field: 'No Stock Posting',
    allowNull: false
  },
  Zero_Price_Valid: {
    type: Sequelize.INTEGER,
    field: 'Zero Price Valid',
    allowNull: false
  },
  Qty_Becomes_Negative: {
    type: Sequelize.INTEGER,
    field: 'Qty_ Becomes Negative',
    allowNull: false
  },
  No_Discount_Allowed: {
    type: Sequelize.INTEGER,
    field: 'No Discount Allowed',
    allowNull: false
  },
  Keying_In_Price: {
    type: Sequelize.INTEGER,
    field: 'Keying in Price',
    allowNull: false
  },
  Scale_Item: {
    type: Sequelize.INTEGER,
    field: 'Scale Item',
    allowNull: false
  },
  Keying_In_Quantity: {
    type: Sequelize.INTEGER,
    field: 'Keying in Quantity',
    allowNull: false
  },
  Barcode_Mask: {
    type: Sequelize.STRING(22),
    field: 'Barcode Mask',
    allowNull: false
  },
  Use_EAN_Standard_Barc_: {
    type: Sequelize.INTEGER,
    field: 'Use EAN Standard Barc_',
    allowNull: false
  },
  Qty_Per_Base_Comp_Unit: {
    type: Sequelize.DECIMAL,
    field: 'Qty_ per Base Comp_ Unit',
    allowNull: false
  },
  Base_Comp_Unit_Code: {
    type: Sequelize.STRING(10),
    field: 'Base Comp_ Unit Code',
    allowNull: false
  },
  Comparison_Unit_Code: {
    type: Sequelize.STRING(10),
    field: 'Comparison Unit Code',
    allowNull: false
  },
  Comp_Price_Incl_VAT: {
    type: Sequelize.DECIMAL,
    field: 'Comp_ Price Incl_ VAT',
    allowNull: false
  },
  Explode_BOM_In_Statem_Posting: {
    type: Sequelize.INTEGER,
    field: 'Explode BOM in Statem_ Posting',
    allowNull: false
  },
  Disable_Dispense_Printing: {
    type: Sequelize.INTEGER,
    field: 'Disable Dispense Printing',
    allowNull: false
  },
  Dispense_Printer_Group: {
    type: Sequelize.STRING(10),
    field: 'Dispense Printer Group',
    allowNull: false
  },
  Print_Variants_Shelf_Labels: {
    type: Sequelize.INTEGER,
    field: 'Print Variants Shelf Labels',
    allowNull: false
  },
  Common_Item_No: {
    type: Sequelize.STRING(20),
    field: 'Common Item No_',
    allowNull: false
  },
  E_Coin_Item: {
    type: Sequelize.INTEGER,
    field: 'E-Coin Item',
    allowNull: false
  },
  Exclude_Loyalty_Redeemption: {
    type: Sequelize.INTEGER,
    field: 'Exclude Loyalty Redeemption',
    allowNull: false
  },
  AirTime_Item: {
    type: Sequelize.INTEGER,
    field: 'AirTime Item',
    allowNull: false
  },
  Exclude_Loyalty_Earning: {
    type: Sequelize.INTEGER,
    field: 'Exclude Loyalty Earning',
    allowNull: false
  },
  MPQ_Weight: {
    type: Sequelize.DECIMAL,
    field: 'MPQ Weight',
    allowNull: false
  }
}, {
  schema: 'dbo',
  tableName: config.get('pre_database')+'Item',
  timestamps: false,
  freezeTableName: true,
});

module.exports = Item;
