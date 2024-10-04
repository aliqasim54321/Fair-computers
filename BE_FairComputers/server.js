// Dependencies Section
import express from 'express';
import cors from 'cors';
import { connectToDb } from './config/connectToDb.js';
import { uploadCompanyProfile, uploadJobPosting, uploadUserProfile } from './config/multerConfig.js';
import { createCompanyProfile } from './controllers/companyProfileController.js';
import { createJobPosting, deleteJobPosting } from './controllers/jobPostingController.js';
import { createUserProfile } from './controllers/userProfileController.js';
import { createContact } from './controllers/contactController.js';
import { fetchHome, fetchAbout, fetchServices, fetchCareers, createPage, updatePage, deletePage } from './controllers/pagesController.js';
import { signUp, signIn } from './controllers/authController.js';
import { authenticateToken } from './config/authMiddleware.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { GridFSBucket } from 'mongodb';
import gridfs from 'gridfs-stream';

// Load environment variables in non-production environments
if (process.env.NODE_ENV !== "production") {
    dotenv.config();
}

// Initialize Express app
const app = express();

// Configure middlewares
app.use(express.json());
app.use(cors());

// Initialize GridFS
let gfs;
let gridfsBucket;
const conn = mongoose.connection;
conn.once('open', () => {
    gridfsBucket = new GridFSBucket(conn.db, { bucketName: 'uploads' });
    gfs = gridfs(conn.db, mongoose.mongo);
    gfs.collection('uploads');  // GridFS collection where files are stored
});

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

// Route to handle CompanyProfile uploads (with jpeg and png file type restriction)
app.post('/company-profile', uploadCompanyProfile.single('companyLogo'), createCompanyProfile);

// Route to handle JobPosting uploads (pdf file type restriction)
app.post('/job-postings', uploadJobPosting.single('jobDescriptionFile'), createJobPosting);
app.delete('/job-postings/:id', deleteJobPosting);  // Delete job posting and file from GridFS

// Route to handle UserProfile uploads (with pdf and docx file type restriction)
app.post('/profiles', uploadUserProfile.single('resumeFile'), createUserProfile);

// Route to submit contact form
app.post('/contact', createContact);

// Authentication Routes
app.post('/auth/signup', signUp);
app.post('/auth/signin', signIn);

// Protected Routes (Require Authentication)
app.get('/protected-route', authenticateToken, (req, res) => {
    res.send('This is a protected route.');
});

app.get('/files/:filename', async (req, res) => {
    try {
        console.log(`Received request for file: ${req.params.filename}`);

        // Ensure GridFSBucket is initialized
        if (!gridfsBucket) {
            console.error("GridFSBucket is not initialized.");
            return res.status(500).json({ error: 'Internal server error. GridFSBucket not initialized.' });
        }

        // Find the file using GridFSBucket
        const fileCursor = gridfsBucket.find({ filename: req.params.filename });
        const files = await fileCursor.toArray();

        if (!files || files.length === 0) {
            console.log('No file found with the given filename');
            return res.status(404).json({ error: 'No file exists with the specified name' });
        }

        // Log file details
        console.log('File found:', files[0]);

        // Stream the file from GridFS
        const readStream = gridfsBucket.openDownloadStreamByName(req.params.filename);

        // Set the correct headers for downloading the file
        res.set('Content-Disposition', `attachment; filename="${req.params.filename}"`);

        // Handle stream errors
        readStream.on('error', (err) => {
            console.error('Error while streaming file:', err);
            return res.status(500).json({ error: 'Error occurred while streaming the file' });
        });

        // Pipe the readStream to the response
        readStream.pipe(res);

    } catch (error) {
        console.error('Error occurred:', error);
        res.status(500).json({ error: 'An unexpected error occurred on the server' });
    }
});

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
