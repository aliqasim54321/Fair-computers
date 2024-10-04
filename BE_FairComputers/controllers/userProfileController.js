import { UserProfile } from '../models/UserProfile.js';
import mongoose from 'mongoose';
import { GridFSBucket } from 'mongodb';
import crypto from 'crypto';
import path from 'path';

let gridfsBucket;
const conn = mongoose.connection;
conn.once('open', () => {
    gridfsBucket = new GridFSBucket(conn.db, { bucketName: 'uploads' });
});

export const createUserProfile = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            phoneNumber,
            bio,
            linkedInLink
        } = req.body;

        let fileId = null;
        if (req.file) {
            // Generate a unique filename for the resume
            const filename = `${Date.now()}-${crypto.randomBytes(6).toString('hex')}${path.extname(req.file.originalname)}`;

            // Stream the file into GridFS
            const uploadStream = gridfsBucket.openUploadStream(filename);
            uploadStream.end(req.file.buffer);  // Write the file buffer to GridFS
            fileId = uploadStream.id;
        }

        const newUserProfile = await UserProfile.create({
            firstName,
            lastName,
            email,
            phoneNumber,
            bio,
            linkedInLink,
            resumeFile: fileId ? fileId.toString() : null,  // Store the GridFS file ID
        });

        res.status(201).json({ userProfile: newUserProfile });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user profile' });
    }
};
