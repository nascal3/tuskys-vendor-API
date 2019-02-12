const Sequelize = require('sequelize');
const sequelize = require('../startup/db');
const config = require('config');

const storeModel = sequelize.define('Store', {
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
    type: Sequelize.STRING(10),
    field: 'Responsibility Center',
    allowNull: false
  },
  Name: {
    type: Sequelize.STRING(30),
    allowNull: false
  },
  Address: {
    type: Sequelize.STRING(30),
    allowNull: false
  },
  Address_2: {
    type: Sequelize.STRING(30),
    field: 'Address 2',
    allowNull: false
  },
  City: {
    type: Sequelize.STRING(30),
    allowNull: false
  },
  Post_Code: {
    type: Sequelize.STRING(20),
    field: 'Post Code',
    allowNull: false
  },
  Store_Manager_ID: {
    type: Sequelize.STRING(20),
    field: 'Store Manager ID',
    allowNull: false
  },
  Store_Open_From: {
    type: Sequelize.DATE,
    field: 'Store Open from',
    allowNull: false
  },
  Store_Open_To: {
    type: Sequelize.DATE,
    field: 'Store Open to',
    allowNull: false
  },
  Phone_No: {
    type: Sequelize.STRING(30),
    field: 'Phone No_',
    allowNull: false
  },
  Country_Code: {
    type: Sequelize.STRING(10),
    field: 'Country Code',
    allowNull: false
  },
  Global_Dimension_1_Code: {
    type: Sequelize.STRING(20),
    field: 'Global Dimension 1 Code',
    allowNull: false
  },
  Location_Code: {
    type: Sequelize.STRING(10),
    field: 'Location Code',
    allowNull: false
  },
  Currency_Code: {
    type: Sequelize.STRING(10),
    field: 'Currency Code',
    allowNull: false
  },
  Global_Dimension_2_Code: {
    type: Sequelize.STRING(20),
    field: 'Global Dimension 2 Code',
    allowNull: false
  },
  Store_Open_After_Midnight: {
    type: Sequelize.INTEGER,
    field: 'Store Open After Midnight',
    allowNull: false
  },
  Last_Date_Modified: {
    type: Sequelize.DATE,
    field: 'Last Date Modified',
    allowNull: false
  },
  POS_Func_Profile: {
    type: Sequelize.STRING(10),
    field: 'POS Func_ Profile',
    allowNull: false
  },
  LI_LO_In_Transaction: {
    type: Sequelize.INTEGER,
    field: 'LI_LO in Transaction',
    allowNull: false
  },
  Last_Direct_Cost: {
    type: Sequelize.STRING(10),
    field: 'No_ Series',
    allowNull: false
  },
  Statement_Nos: {
    type: Sequelize.STRING(10),
    field: 'Statement Nos_',
    allowNull: false
  },
  One_Statement_Per_Day: {
    type: Sequelize.INTEGER,
    field: 'One Statement per Day',
    allowNull: false
  },
  Statement_Method: {
    type: Sequelize.INTEGER,
    field: 'Statement Method',
    allowNull: false
  },
  Closing_Method: {
    type: Sequelize.INTEGER,
    field: 'Closing Method',
    allowNull: false
  },
  Rounding_Account: {
    type: Sequelize.STRING(20),
    field: 'Rounding Account',
    allowNull: false
  },
  Max_Diff_To_Allow_Post_: {
    type: Sequelize.DECIMAL,
    field: 'Max_ Diff_ to Allow Post_',
    allowNull: false
  },
  Max_Round_In_Stmt: {
    type: Sequelize.DECIMAL,
    field: 'Max_ Round_ in Stmt_',
    allowNull: false
  },
  Max_Diff_From_Shift_Date: {
    type: Sequelize.DECIMAL,
    field: 'Max_ Diff_ from Shift Date',
    allowNull: false
  },
  Allowed_Diff_In_Trans: {
    type: Sequelize.DECIMAL,
    field: 'Allowed Diff_ in Trans_',
    allowNull: false
  },
  Tend_Decl_Calculation: {
    type: Sequelize.INTEGER,
    field: 'Tend_ Decl_ Calculation',
    allowNull: false
  },
  Advanced_Shift_Method: {
    type: Sequelize.INTEGER,
    field: 'Advanced Shift Method',
    allowNull: false
  },
  Advanced_Shift_Nos: {
    type: Sequelize.STRING(20),
    field: 'Advanced Shift Nos_',
    allowNull: false
  },
  Total_Discount_Tender: {
    type: Sequelize.STRING(10),
    field: 'Total Discount Tender',
    allowNull: false
  },
  xRemove_Add_Tender: {
    type: Sequelize.STRING(10),
    field: 'xRemove_Add Tender',
    allowNull: false
  },
  Create_Labels_For_0_Price: {
    type: Sequelize.INTEGER,
    field: 'Create Labels for 0 Price',
    allowNull: false
  },
  Campaign_Nos_: {
    type: Sequelize.STRING(20),
    field: 'Campaign Nos_',
    allowNull: false
  },
  Promotion_Nos: {
    type: Sequelize.STRING(20),
    field: 'Promotion Nos_',
    allowNull: false
  },
  Periodic_Discount_Nos: {
    type: Sequelize.STRING(20),
    field: 'Periodic Discount Nos_',
    allowNull: false
  },
  POS_Terminal_Nos: {
    type: Sequelize.STRING(20),
    field: 'POS Terminal Nos_',
    allowNull: false
  },
  Staff_ID_Nos: {
    type: Sequelize.STRING(20),
    field: 'Staff ID Nos_',
    allowNull: false
  },
  Coupon_Nos: {
    type: Sequelize.STRING(20),
    field: 'Coupon Nos_',
    allowNull: false
  },
  Item_Nos: {
    type: Sequelize.STRING(10),
    field: 'Item Nos_',
    allowNull: false
  },
  Data_Access_Control: {
    type: Sequelize.INTEGER,
    field: 'Data Access Control',
    allowNull: false
  },
  Store_VAT_Bus_Post_Gr: {
    type: Sequelize.STRING(10),
    field: 'Store VAT Bus_ Post_ Gr_',
    allowNull: false
  },
  Store_Gen_Bus_Post_Gr: {
    type: Sequelize.STRING(10),
    field: 'Store Gen_ Bus_ Post_ Gr_',
    allowNull: false
  },
  Language_Code: {
    type: Sequelize.STRING(10),
    field: 'Language Code',
    allowNull: false
  },
  POS_Inventory_Lookup: {
    type: Sequelize.INTEGER,
    field: 'POS Inventory Lookup',
    allowNull: false
  },
  Rcpt_Text_Max_Length: {
    type: Sequelize.INTEGER,
    field: 'Rcpt_ Text Max_ Length',
    allowNull: false
  },
  No_Of_Top_Bottom_Lines: {
    type: Sequelize.DATE,
    field: 'No_ of Top_Bottom Lines',
    allowNull: false
  },
  Item_No_on_Receipt: {
    type: Sequelize.INTEGER,
    field: 'Item No_ on Receipt',
    allowNull: false
  },
  Last_Action_For_Label_Upd: {
    type: Sequelize.INTEGER,
    field: 'Last Action for Label Upd',
    allowNull: false
  },
  No_Shelf_Label_Printing: {
    type: Sequelize.INTEGER,
    field: 'No Shelf Label Printing',
    allowNull: false
  },
  No_Item_Label_Printing: {
    type: Sequelize.INTEGER,
    field: 'No Item Label Printing',
    allowNull: false
  },
  Service_Charge_Perc: {
    type: Sequelize.DECIMAL,
    field: 'Service Charge %',
    allowNull: false
  },
  Serv_Charge_Inc_Exp_Acc: {
    type: Sequelize.STRING(10),
    field: 'Serv_ Charge_ Inc_Exp Acc',
    allowNull: false
  },
  Service_Charge_Prompt: {
    type: Sequelize.STRING(30),
    field: 'Service Charge Prompt',
    allowNull: false
  },
  Customs_Nos: {
    type: Sequelize.STRING(10),
    field: 'Customs  Nos',
    allowNull: false
  },
  Current_Shift: {
    type: Sequelize.STRING(10),
    field: 'Current Shift',
    allowNull: false
  },
  Picture: {
    type: Sequelize.BLOB,
    allowNull: true
  },
  Email_Address: {
    type: Sequelize.STRING(30),
    field: 'E-mail Address',
    allowNull: false
  },
  POS_Nos: {
    type: Sequelize.STRING(10),
    field: 'POS Nos',
    allowNull: false
  },
  POS_Posting_Nos: {
    type: Sequelize.STRING(10),
    field: 'POS Posting Nos',
    allowNull: false
  },
  POS_Shipping_Nos: {
    type: Sequelize.STRING(10),
    field: 'POS Shipping Nos',
    allowNull: false
  },
  POS_Check_ZReport: {
    type: Sequelize.INTEGER,
    field: 'POS Check Z-Report',
    allowNull: false
  },
  Automatic_Drawer_Creation: {
    type: Sequelize.INTEGER,
    field: 'Automatic Drawer Creation',
    allowNull: false
  },
  Store_Size_Square_Meters: {
    type: Sequelize.INTEGER,
    field: '"Store size (square meters)"',
    allowNull: false
  },
  Automatic_Salesperson_Creation: {
    type: Sequelize.INTEGER,
    field: 'Automatic Salesperson Creation',
    allowNull: false
  },
  xNo_Of_Tables_Columns: {
    type: Sequelize.INTEGER,
    field: '"xNo_ of Tables (Columns)"',
    allowNull: false
  },
  xRestaurant_Layout: {
    type: Sequelize.BLOB,
    field: 'xRestaurant Layout',
    allowNull: true
  },
  xNo_Of_Tables_Rows: {
    type: Sequelize.INTEGER,
    field: '"xNo_ of Tables (Rows)"',
    allowNull: false
  },
  Show_Sales_Price: {
    type: Sequelize.DECIMAL,
    field: 'Show Sales Price',
    allowNull: false
  },
  Receiving_Nos: {
    type: Sequelize.STRING(10),
    field: 'Receiving Nos_',
    allowNull: false
  },
  Posted_Receiving_Nos: {
    type: Sequelize.STRING(10),
    field: 'Posted Receiving Nos_',
    allowNull: false
  },
  Def_BOM_Method: {
    type: Sequelize.INTEGER,
    field: 'Def_ BOM Method',
    allowNull: false
  },
  Gift_Registration_Nos: {
    type: Sequelize.STRING(10),
    field: 'Gift Registration Nos_',
    allowNull: false
  },
  Use_Batch_Posting_For_Statem: {
    type: Sequelize.INTEGER,
    field: 'Use Batch Posting for Statem_',
    allowNull: false
  },
  Only_Accept_Statement: {
    type: Sequelize.INTEGER,
    field: 'Only Accept Statement',
    allowNull: false
  },
  Max_Diff_To_Allow_Accept: {
    type: Sequelize.DECIMAL,
    field: 'Max_ Diff_ to Allow Accept',
    allowNull: false
  },
  Current_Hosp_Printing_Route: {
    type: Sequelize.STRING(10),
    field: 'Current Hosp_ Printing Route',
    allowNull: false
  },
  POS_Start_Amount_Method: {
    type: Sequelize.INTEGER,
    field: 'POS Start Amount Method',
    allowNull: false
  },
  Post_To_Bank_Account: {
    type: Sequelize.INTEGER,
    field: 'Post to Bank Account',
    allowNull: false
  },
  Ordering_Status: {
    type: Sequelize.INTEGER,
    field: 'Ordering Status',
    allowNull: false
  },
  Delivery_Takeout_Change: {
    type: Sequelize.INTEGER,
    field: 'Delivery_Takeout Change',
    allowNull: false
  },
  Rest_Station_Print_In_Use: {
    type: Sequelize.INTEGER,
    field: 'Rest_ Station Print_ In Use',
    allowNull: false
  },
  Suspend_Transaction_Per_POS: {
    type: Sequelize.INTEGER,
    field: 'Suspend Transaction Per POS',
    allowNull: false
  },
  Transaction_Import_Filename: {
    type: Sequelize.STRING(100),
    field: 'Transaction Import Filename',
    allowNull: false
  },
  Active: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  POS_Post_Safe_Ledger: {
    type: Sequelize.INTEGER,
    field: 'POS Post Safe Ledger',
    allowNull: false
  },
  Safe_Mgnt_In_Use: {
    type: Sequelize.INTEGER,
    field: 'Safe Mgnt_ in Use',
    allowNull: false
  },
  Safe_No: {
    type: Sequelize.STRING(10),
    field: 'Safe No_',
    allowNull: false
  },
  Float_Safe_Bag: {
    type: Sequelize.STRING(20),
    field: 'Float Safe Bag',
    allowNull: false
  },
  Min_Amt_Loyalty_TempCard_Popup: {
    type: Sequelize.DECIMAL,
    field: 'Min Amt Loyalty TempCard Popup',
    allowNull: false
  },
  Float_G_L_Account: {
    type: Sequelize.STRING(20),
    field: 'Float G_L Account',
    allowNull: false
  },
  Change_G_L_Account: {
    type: Sequelize.STRING(20),
    field: 'Change G_L Account',
    allowNull: false
  },
  Tender_Declaration_Tolerance: {
    type: Sequelize.DECIMAL,
    field: 'Tender Declaration Tolerance',
    allowNull: false
  },
  Exclude_From_Dashboard: {
    type: Sequelize.INTEGER,
    field: 'Exclude From Dashboard',
    allowNull: false
  }
}, {
  schema: 'dbo',
  tableName: config.get('pre_database')+'Store',
  timestamps: false,
  freezeTableName: true,
});

module.exports = storeModel;
