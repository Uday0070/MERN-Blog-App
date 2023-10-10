### Clone the repository to local system using command 
   ```bash
   git clone https://github.com/Uday0070/MERN-Blog-App.git
   # navigate into project directory
   cd MERN-Blog-App
   # navigate into client and run npm install
   cd client && npm install
   # navigate into server and run npm install
   cd.. && cd server && npm install 
   ```

## DREAM BLOG

*"This project is a blog application that leverages MongoDB for CRUD operations, implements user authentication using JWT tokens, and features a user-friendly Material UI-based user interface for an enhanced user experience."*

## Getting Started with Create React App

*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).*

## Available Scripts

*In the project directory, you can run:*

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## Rename .env.local file to .env

Add the following details

DB_USERNAME= PLEASE ENTER YOUR MONGO_DB USERNAME
DB_PASSWORD= PLEASE ENTER YOUR MONGO_DB PASSWORD
ACCESS_SECRET_KEY= PLEASE GENERATE YOUR ACCESS_SECRET_KEY
REFRESH_SECRET_KEY=  PLEASE GENERATE YOUR REFRESH_SECRET_KEY 

## GENERATE RANDOM ``ACCESS_SECRET_KEY`` & ``REFRESH_SECRET_KEY`` 
*Use the following commands*

```bash
node
> require('crypto').randomBytes(64).toString('hex') #Execute it two times so that it will generate random hex code, copy the hex codes and use one for ACCESS_SECRET_KEY and the other for REFRESH_SECRET_KEY.
```

### ``THANK YOU``

