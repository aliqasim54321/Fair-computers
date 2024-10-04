import { JobPosting } from "../models/JobPosting.js";
import mongoose from 'mongoose';
import gridfs from 'gridfs-stream';
import { GridFSBucket } from 'mongodb';
import crypto from 'crypto';
import path from 'path';

let gfs;
let gridfsBucket;

const conn = mongoose.connection;
conn.once('open', () => {
    gridfsBucket = new GridFSBucket(conn.db, { bucketName: 'uploads' });
    gfs = gridfs(conn.db, mongoose.mongo);
    gfs.collection('uploads');  // GridFS collection where files are stored
});

export const createJobPosting = async (req, res) => {
    try {
        const {
            jobTitle,
            jobType,
            location,
            jobDescription,
            requiredQualifications,
            salaryRange,
            jobLink,
        } = req.body;

        // If a file is uploaded, store it in GridFS
        let fileId = null;
        if (req.file) {
            const filename = `${Date.now()}-${crypto.randomBytes(6).toString('hex')}${path.extname(req.file.originalname)}`;
            const uploadStream = gridfsBucket.openUploadStream(filename);
            uploadStream.end(req.file.buffer);  // Write file buffer directly to GridFS
            fileId = uploadStream.id;
        }

        const newJob = await JobPosting.create({
            jobTitle,
            jobType,
            location,
            jobDescription,
            requiredQualifications,
            salaryRange,
            jobLink,
            jobDescriptionFile: fileId ? fileId.toString() : null,
        });

        res.status(201).json({ job: newJob });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create job posting' });
    }
};

// Delete Job Posting and its file
export const deleteJobPosting = async (req, res) => {
    try {
        const { id } = req.params;
        const job = await JobPosting.findById(id);

        if (!job) {
            return res.status(404).json({ error: 'Job posting not found' });
        }

        // Delete the file from GridFS if it exists
        if (job.jobDescriptionFile) {
            gridfsBucket.delete(new mongoose.Types.ObjectId(job.jobDescriptionFile), (err) => {
                if (err) {
                    return res.status(500).json({ error: 'Failed to delete file' });
                }
            });
        }

        // Delete the job posting from the database
        await JobPosting.findByIdAndDelete(id);
        res.status(200).json({ message: 'Job posting and associated file deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete job posting' });
    }
};
