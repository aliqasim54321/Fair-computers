# Project Overview

## What We've Done

We’ve successfully set up the back-end of our application using **Node.js** and **Express.js**. The core of the server is now up and running, and we've configured it to handle HTTP requests efficiently. 

Key highlights of our progress so far:

- **CORS Integration**: We’ve added CORS middleware, allowing our front-end to communicate with the back-end, even when hosted on different servers. This ensures the app can make cross-origin requests, which is crucial for smooth communication.
  
- **MongoDB and Mongoose**: We structured our database using **MongoDB** and **Mongoose**. We defined flexible schemas and have created RESTful API endpoints for each of our main pages (Home, About, Services, Careers). This allows us to manage content dynamically.

- **Controller-Based Routing**: We followed best practices by organizing our routes with a controller-based approach. The business logic is separated from the routes, which are located in the `server.js` file. This makes the back-end easier to maintain, scale, and understand for other developers.

- **Environment Variables**: We are using `dotenv` to securely manage environment variables, including sensitive information like database credentials.

- **MongoDB M0**: For now, our back-end is connected to the **MongoDB M0** free cluster. We may need to discuss what database cluster we’ll use in the future for scalability.

- **Slugs for Pages**: We’ve introduced slugs for each page, making URLs user-friendly and readable (e.g., `/pages/about` for the **About** page).

## What We'll Do Next

Here are the next steps in our development process:

- **Connecting Front-End to Back-End**: We’ll link our back-end to the front-end by fetching data using **Axios** or **Next.js**'s native `fetch`. We’ll retrieve dynamic content (Home, About, Services, Careers) and display it in the UI. We’re still deciding whether to use **Axios** or stick with **fetch** due to its lightweight nature (no need for additional libraries).

- **CORS Fine-Tuning**: To ensure secure communication between front-end and back-end in production, we’ll adjust CORS settings to allow only the front-end domain to access the API, providing an additional security layer.

- **Deployment**: We’ll deploy both the front-end and back-end, ensuring they are hosted properly and work together seamlessly in a real-world environment. During this stage, we’ll thoroughly test all API endpoints and ensure data is correctly stored and retrieved from MongoDB or another database.

---

## Installation

To install the necessary dependencies for the project, run the following command:

```bash
npm install
