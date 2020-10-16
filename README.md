# EntryX : The Office Entry Management Portal

EntryX is a platform developed to ease the process of managing visitors and keeping track of people entering or leaving the premises. It helps to book appointments with any employee or resident already present in the premises, along with email notifications. 

# Getting Started

## Install

- Clone the repository.
- Make sure that Node.js is properly installed.
- Start the MongoDB server.
- Replace the MongoDB URL from the `mongoose.connect('mongodb_address');` with url address of your server.
- Add the credentials of the email account to be used for emailing in the `/controller/mailer.js` . Make sure to change settings in your email account to allow less secure / third-party apps to use the account.
- run `npm install `.
- run `npm start `

## Approach

### Node.js
The project has been developed on Node.js .

### Database
MongoDB has been used as the database which stores JSON-like documents that can have varied structure. In the deployed version, the databse is deployed on MLabs.
### Code Structure
**Modularity**<br>The project is coded as modules so as to make it scalable and remove unneccesary redundancies.
For eg. <br>The mailer API has been Initialised only once. Every time a mail has to be sent, the mailer API will be called with the email address, body and subject provided.

**Controllers**
The routes has been broken into controllers. Each route will call it's respective controller. This has been done to improve code readablity and debugging.

**APIs**
The code make use of CRUD APIs built for the purpose of creating, reading, updating, and deleting the database content.

**Generic View**
The views for the project are prepared with the aim to reuse them as much as possible.
For eg., the submission page is same for many operations such as Registering the host, Visitor Checkout, Registering the visitor etc. 
However, each time the page will be rendered differently as per the need of the operation.

### End
