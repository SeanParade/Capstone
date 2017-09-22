# Rough Project definitions

### Order Functionality
- Order a product for x amount
- Order includes customer objects
- Function to find first available slot for order
- Orders are passed to production schedule once they meet all conditions
   - Choose a location (based on production manager account)
   - Defaults to a specified default location
- Ordering of product will be restricted by schedule available and the amount of time that production takes
  - Give option to send to another location
- ?? schedule overide
- orderer should have notes for each order
- Orders should be stored as JSON objects so that the may be passed to other accounts

### Production Functionality
- Order
  - editing
- Ingredients
- Stations used
- Scheduler
  - What to prep, when and where
- Steps
  - printable and web functional checklist page

### Management Functionality
- Admin features
  - Creating/editing users
- Analytics
  - The ingredient deficit
  - Orders Made
  - Order status
    - what has been made
	- ?? what is in process
  - ?? profits

### Roles
- Orders 
  - Restricted to Order Functionality
- Production Management
  - Prodution Functionality
  - Order Functionality
- Management
  - All role access

### Assumptions
- Anything inventory based is OOS
- Scheduling is based teams not individual employees
- Only production managers access accounts / not bakers
- All pages use responsive design
- Mobile app currently OOS
##### ?? = Extra Features
