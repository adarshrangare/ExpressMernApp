# ExpressMernApp

Sure, here's an example of how you can add a description of the setup steps to the `README.md` file in your `ExpressMernApp` project:
Deployed : https://expresscrudapp.onrender.com/
# Description

To set up this project, follow these steps:

1. **Prerequisites**

   Make sure you have the following tools installed on your system:

   - Node.js (version 14 or higher)
   - MongoDB

2. **Clone the repository**

   Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/adarshrangare/ExpressMernApp
    ```

3. **Create .env and Install dependencies**

    Navigate to the project directory and install the required dependencies using npm:

    ```bash
    cd ExpressMernApp
    npm install
    ```
    Create a file named `.env` in the root of your project folder and add the following variables:
    
    ```bash
    PORT = YOUR_OPEN_PORT example 3000 8000 etc..
    MONGO_DB_URL= YOUR_MONGODB_URL (you can use local or atlas)
    ```

4. **Start the server**
    Start the server using the following command:

    ```bash
    npm run start
    ```

5. **Start the server**
    Open your web browser and navigate to `http://localhost:YOUR_OPEN_PORT` to access the application.


6. **For Testing APIs**
    Open your Terminal and input following commands
    
    ```bash
    npm test
    ```

🎉🎉\
That's it! You have successfully set up the CRUD ExpressApp project on your local machine.
