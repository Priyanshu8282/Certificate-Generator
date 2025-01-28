import React, { useState, useRef } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';

const Upload = ({ setUploadedData }) => {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('csvFile', file);

    try {
      const res = await axios.post('https://certificate-generator-g107.onrender.com/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success(res.data.message);
      fileInputRef.current.value = '';
      setFile(null);
      setUploadedData(res.data.data);
    } catch (err) {
      if (err.response && err.response.data) {
        toast.error(err.response.data.message);
      } else {
        toast.error('An error occurred while uploading the file.');
      }
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center  px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Toaster />
      {/* Header Section */}
      <motion.div
        className="text-center mb-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl md:text-4xl font-bold text-black mb-4">
          Manage Certificates Effortlessly
        </h1>
        <p className="text-lg md:text-xl text-[#1F2937]">
          Upload your CSV file to generate certificates seamlessly. Simplify your workflow with our easy-to-use tool for 
          creating professional certificates in minutes.
        </p>
      </motion.div>

      {/* Upload Section */}
      <motion.div
        className="p-8 bg-white text-[#1F2937] rounded-lg shadow-lg w-full max-w-lg"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center text-[#1D4ED8] mb-4">Upload Your CSV File</h2>
        <p className="text-base text-center mb-6">
          Upload a CSV file with details for title, name, description, and signature. Generate high-quality certificates instantly.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            onChange={handleFileChange}
            accept=".csv"
            ref={fileInputRef}
            className="block w-full text-sm text-[#1F2937] bg-[#F3F4F6] rounded-lg border border-[#D1D5DB] cursor-pointer focus:outline-none mb-4"
          />
          <motion.button
            type="submit"
            className="w-full py-3 px-6 bg-[#1D4ED8] text-white font-semibold rounded-lg hover:bg-[#3B82F6] focus:ring-4 focus:ring-[#93C5FD] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Upload
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Upload;