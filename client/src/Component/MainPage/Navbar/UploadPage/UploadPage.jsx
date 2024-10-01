import React, { useState, useRef } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './UploadPage.css';

const UploadForm = ({ setUploadedData }) => {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null); // Create a reference to the file input element

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('csvFile', file);

    try {
      const res = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      toast.success(res.data.message);
      fileInputRef.current.value = ''; // Reset the file input value
      setFile(null); // Clear the file state
      setUploadedData(res.data.data); // Set the parsed data
    } catch (err) {
      if (err.response && err.response.data) {
        toast.error(err.response.data.message);
      } else {
        toast.error('An error occurred while uploading the file.');
      }
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload CSV File</h2>
      <ToastContainer className="toast-container" />
      <form className="upload-form" onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={handleFileChange}
          accept=".csv"
          ref={fileInputRef} // Attach the reference to the file input element
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadForm;