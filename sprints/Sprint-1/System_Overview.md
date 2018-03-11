# Breadmin System Overview
## What is Breadmin?
Breadmin is a web-based scheduling system that streamlines the production process of small-scale bakeries. It provides automated production scheduling based on user input. Breadmin includes the following features:
- Scheduling of product-prep and bake time
- Analytics based on data collected from orders
- [ Customization of notifications received from Breadmin ]

## Features of Breadmin
### Production Scheduling
Production Scheduling is the main feature of Breadmin. The production scheduler produces a Gantt Chart and list of timed activities in order to product the products inputed. It schedules blocks of time using the bakery configuration, product prep-time and bake time, and the orders that are inputted by the user. When an order is inputted, the scheduler suggests blocks of time available to complete the order in the required time frame.

### Analytics
Analytics is the subsidiary feature of Breadmin. The analytics are generated using data from previous orders and previous production schedules. They are then displayed to the user on the analytics page in table and chart form.

## Breadmin Pages
### Login
The user is required to login to access Breadmin. This ensures that their bakery products, orders, and schedules are kept secure. If the user doesn't have an account, they can set up their account for use by clicking the sign up button. If the user has forgotten their password, they can use the forgotten password link to request a password reset. 

### Navigation
Once the username and password have been authenticated, the user is redirected to the main menu where the can access the following pages:
- Manage Account
- Manage Users
- Bakery Config
- Products
- Order
- Edit Order
- Production Schedule
- Analytics

### Manage Account
The Manage Account page is where the user can enter and save their name and contact information.

### Manage Users
The Manage Users page is where the user can add users to allow other users to access the Breadmin account.

### Bakery Config
The Bakery Config page is where the user adds configuration details for their bakery. This involves adding the ovens available in the bakery, and the number of trays that can fit in each oven.

### Products
The Products page is where the user adds products and product details for their bakery. The user will add the product by name, and include the average prep-time and bake-time required for the product.

### Orders
The Order page is where the user enters orders for the bakery. The user enters the customer details such as the contact name, name of business, and contact e-mail and/ or phone number. Then the user selects the product from the products they have added, the quantity requested and enters the order information. Entering the order information brings the user to the scheduling page.

#### Scheduling Suggestions
Once the order details are added, the Production Scheduler will provide suggestions to complete the order in the required time frame. Once a time block is selected, the user can submit the order and the scheduled block will be added to the schedule found on the Production Schedule page.

### Edit Order
The Edit Order page is where the user can edit orders that have already been submitted, but not yet completed. They look up the order by entering the customer. Once the customer is entered, a drop-down box of orders from that customer is populated from the database, and the user can select an order. Once an order has been selected, the user is directed to the order page, where they can change the details of the order and select a new block of time.

### Production Schedule
The Production Schedule page is where the data from the Production Scheduler is displayed to the user in Gantt Chart, and a list with the Action, e.g. "Prep [Product name]", and the Start Time and End Time. The schedule can be either e-mailed or printed directly from this page.

### Analytics
Analytics is where analytic charts are displayed to the user. The analytics are generated based on the orders and production schedules that have been completed.
Analytics that will be displayed may include:
- Product popularity over time
- Orders completed within time frame
