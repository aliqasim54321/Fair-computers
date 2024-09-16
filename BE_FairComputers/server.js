// Dependencies Section
import express from 'express';
import cors from 'cors';
import { connectToDb } from './config/connectToDb.js';
import { fetchHome, fetchAbout, fetchServices, fetchCareers, createPage, updatePage, deletePage } from './controllers/pagesController.js';
import dotenv from 'dotenv';

// Load environment variables in non-production environments
if (process.env.NODE_ENV !== "production") {
    dotenv.config();
}

// Initialize Express app
const app = express();

// Configure middlewares
app.use(express.json());  
app.use(cors());

// Connect to the database
connectToDb();

// Routing

// Routes for Pages (Home, About, Services, Careers)
app.get('/home', fetchHome);           // Fetch home page data
app.get('/about', fetchAbout);         // Fetch about page data
app.get('/services', fetchServices);   // Fetch services page data
app.get('/careers', fetchCareers);     // Fetch careers page data

// Routes for managing pages
app.post('/pages', createPage);             // Create a new page
app.put('/pages/:slug', updatePage);        // Update an existing page
app.delete('/pages/:slug', deletePage);     // Delete a page

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
