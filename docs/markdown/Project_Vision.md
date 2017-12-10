# Breadmin
# Project Vision Document
## Version 1.00
### 10/6/2017

<hr>

#### Revision History

|**Revision** | **Date** | **Author** | **Reviewed By** | **Summary of Changes** |
| --- | --- | --- | --- | --- |
| 0.2 | 2017-10-04 | Nooran El-Sherif | SP | Added company name, Stakeholder name, User information |
| 0.3 | 2017-10-06 | Sean Price | NE | Small Edits of Requirements |
| 0.4 | 2017-10-06 | Nooran El-Sherif | SP | Revised User Information : added Production Manager,Added High Level Requirements, added definition |
| 1.0 | 2017 | Sean Price | Jan Streekstra | Feature Overhaul |

#### Document Approval List

| **Version** | **Approved By** | **Signature** | **Date** |
| --- | --- | --- | --- |
| 1.0 | Jan Streekstra |   | Oct 6. 2017 |

#### Document Distribution  List

| **Version** | **Name of the Receiver/Group** | **Date** |
| --- | --- | --- |
| 1.0 | Jan Streekstra | Oct 6, 2017 |
| 1.0 | Dev Team – T10 | Oct 6,2017 |
| 1.0 | Anjana Shah | Oct 6,2017 |

<div stype="text-align:right"> page 1</div>

<hr>

### Table of Contents

| **Number** | **Title** | **Page Number**|
| 1  | Introduction  | 3 | 
| 1.1 | Purpose | 3  |
| 1.2 | Scope | 3 |
| 1.2.1 | In Scope | 3 |
| 1.3 | Definitions, Acronyms and Abbreviations | 3 |
| 1.4 | References | 3 |
| 2 | Positioning | 3 |
| 2.1 | Business Opportunity | 3 |
| 2.2 | Problem Statement | 3 |
| 2.3 | Product Position Statement | 3 |
| 3 | Stakeholder and User Descriptions | 3 |
| 3.1 | Stakeholder Summary | 3 |
| 3.2 | User Summary | 3 |
| 4 | Stakeholder Requirements | 3 |
| 5 | System Features | 3 |
| 6 | Assumptions | 3 |
| 7 | Constraints | 3 |

<div style= "text-align:right"> page 2 </div>

<hr>

### 1. Introduction

This document identifies the scope of this project, the problem we are solving, and the stakeholder's requirements for the system. Additionally, it defines the role of the stakeholders and the users of the system.


#### 1.1 Purpose

The purpose of this document is to outline the requirements given by the stakeholder. It serves to define the needs of Forno Cultura. It will specify the features the application will have in order to fulfill the needs of Forno Cultura.

#### 1.2 Scope

The following are the assumptions that have been made in relation to scope of the project.

##### In Scope
The following items are in scope for this version of the project:
1. Order Functionality
- Management Functionality
- Analytics on orders and products
- Production Functionality

##### Out Of Scope
The following items are out of scope for this version of the project:
1. Inventory management
2. Coordination with other bakery locations
3. Financial aspects of the business

#### 1.3 Definitions, Acronyms and Abbreviations

| **Term** | **Definition** |
| --- | --- |
| OOS | Out of Scope |
| HLR | High Level Requirement |
| Products | Baked goods sold at the business |

#### 1.4 References

| **Reference File Name** | **Version** | **Description** |
| --- | --- | --- |
| BreadminHLR | 1.0 | High Level Requirements for the Breadmin Project |
|   |   |   |

#### 2 Positioning
#####  2.1 Business Opportunity

Customers at Forno Cultura place orders for many different goods. Many of the products have differing, multiple stages of development. Breadmin can offer the service of automated scheduling of production.

##### 2.2 Problem Statement

The differing production times for baked goods affects the management as well as the production teams, as they spend considerable time managing and scheduling the production times correctly. A successful solution would allow management and production to coordinate and initiate production at correct times. It would reduce the number of errors that occur from doing the same task manually.

##### **Problem Statement Table**
| **The Problem of** | Scheduling production times |
| --- | --- |
| **affects** | Bakery Management, Production Teams |
| **the impact of which is** | Less efficiency, more errors made, lost time |
| **a successful solution would be** | More efficient, with less room for errors, allowing for more time
for managers and team leaders to work on their tasks for the day. |

#### 2.3 Product Position Statement

The intent of the application is to remove the burden of scheduling from bakery management and production staff. Breadmin is an administrative tool that will handle the ordering and scheduling of production. Unlike the previous manual system of using paper "chits", our product will have a verifiable log of changes to orders and will provide analytics on bakery orders.
 
##### **Product Position Statement Table**
| **For** | Bakery Management and Production Staff |
| --- | --- |
|**Who** | Spend time manually scheduling and planning production of baked goods |
| **Breadmin** | Is a production scheduling, order, and management system |
| **That** | Reduce the amount of time needed for planning production times |
| **Unlike** | Manual entry of orders |
| **Our product** | Will log changes to orders, provide analytics on bakery orders, and will reduce the number of errors. |

### 3 Stakeholder and User Descriptions
#### 3.1Stakeholder Summary

** Stakeholder Summary Table**
| **Stakeholder Name** | **Represents** | **Role** |
| --- | --- | --- |
| Jan Streekstra
Lead Baker at Forno Cultura | This is the main stakeholder of our project. | Will provide feedback on prototypes developed throughout the lifecycle of this application.Will provide business requirements and use cases.Will provide equipment and recipe information that will be used in creating the classes for the system. |

Table 3 Stakeholder Summary

#### 3.2 User Summary

| **User Name** | **Description** | **Responsibilities** | **Stakeholder** |
| --- | --- | --- | --- |
| [Reception] | Will input orders to the system | None. | Jan Streekstra |
| [Bakery Manager] | Will input orders, access analytics, print production schedules | Feedback on prototypesProvide requirements and use casesProvide equipment and recipe information | Jan Streekstra  |
| [Production Manager] | Will edit orders, print production schedules | Feedback on prototypesProvide requirements and use casesProvide equipment and recipe information | Jan Streekstra |

Table 4 User Summary

1 4Stakeholder Requirements

| ID | Requirement | Stakeholder |
| --- | --- | --- |
| HLR01 | Client must be able to input customer product orders and customer information | Jan Streekstra |
| HLR02 | Client must receive production schedule generated from the orders schedule | Jan Streekstra |
| HLR03   | Client must be prevented from inputting product orders once the schedule has reached capacity | Jan Streekstra     |
| HLR04 | Client must be able to submit like orders (orders with products that have been made in previous orders) for the day and they will be combined into a single quantity of product to produce that day | Jan Streekstra |
| HLR05 | Client must be able to perform analytics: - deficit of ingredients from the orders for the week - number of products made by day- number of orders completed by day | Jan Streekstra |
| HLR06 | Client must be able to collaborate with other members of ordering process through note section of application | Jan Streekstra |
| HLR07 | Client must be able to access production schedules while offline  | Jan Streekstra |

Table 5 Stakeholder Requirements

1. 5System Features

| ID | Feature | Stakeholder Requirement ID |
| --- | --- | --- |
| F1 | Order Functionality |   |
| F1.1 | Record Customer Info | HLR01 |
| F1.2 | Record Customer&#39;s order of product types and quantities | HLR01, HLR04 |
| F1.3 | Order accepted or refused based on available time slot. | HLR03 |
| F1.4 | Suggestion of first available time slot based on production time needs | HLR01, HLR02 |
| F1.5 | Record Client&#39;s Notes for Production Manager | HLR07 |
| F2 | Production Functionality |   |
| F2.1 | Display Production Schedule for the Week | HLR02 |
| F2.2 | Display schedule by day with orders to be completed and tasks to complete those orders | HLR02, HLR04 |
| F2.3 | Display required ingredient quantities to produce required product quantities | HLR02, HLR04 |
| F2.4 | Flag orders as complete and notify the appropriate parties | HLR06 |
| F2.5 | Edit order quantities or dates based on production needs | HLR06 |
| F3 | Management Functionality |   |
| F3.1 | Display Ingredient deficit generated by the previous week&#39;s production | HLR05 |
| F3.2 | Display orders completed by time period | HLR05 |
| F3.3 | Display products made in selected time-period | HLR05 |

Table 6 System Features

1. 6Assumptions

- Client will input orders to the system so that it may process order data
- Bakery Manager and Order Takers will have unrestricted access to internet
- The bakery will have enough ingredients to fulfill the orders

1. 7Constraints

- There must be a way to access the production schedule tasks offline incase the production team does not have network access.
