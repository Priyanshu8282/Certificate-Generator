import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import csv from "csv-parser";
import connectDb from "./config/db.js";
import AuthRoute from "./routes/AuthRoute.js";
import upload from "./config/multer.js";
import Certificate from "./models/CertificateModel.js";
import CertificateRoute from "./routes/CertificateRoute.js";

// Define __dirname in ES6 module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const port = 5000;
const app = express();
app.use(cors());
app.use(express.json());
connectDb();

app.use("/auth", AuthRoute);
app.use("/certificates", CertificateRoute);

// Route to handle CSV file upload
app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(400).json({ message: err });
    } else {
      if (req.file == undefined) {
        res.status(400).json({ message: 'No file selected!' });
      } else {
        const results = [];
        fs.createReadStream(path.join(__dirname, 'uploads', req.file.filename))
          .pipe(csv())
          .on('data', (data) => {
          
            // Ensure all required fields are present
            if (data.Title && data.Name && data.Description && data.Signature) {
              results.push({
                title: data.Title,
                name: data.Name,
                description: data.Description,
                signature: data.Signature
              });
          
              
            } 
          })
          .on('end', () => {
            Certificate.insertMany(results)
              .then(() => {
                
                res.status(200).json({
                  message: 'File uploaded and data inserted successfully!',
                  data: results,
                  file: `uploads/${req.file.filename}`
                });
              })
              .catch((error) => {
                console.error('Validation error:', error); // Log the validation error
                res.status(500).json({ message: 'Error inserting data into database', error });
              });
          })
          .on('error', (error) => {
            console.error('Error reading CSV file:', error);
            res.status(500).json({ message: 'Error reading CSV file', error });
          });
      }
    }
  });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});