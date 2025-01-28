import React, { useRef, useState } from 'react';
import Navbar from './Navbar/Navbar';
import CertificatePage from './CertificatePage/CertificatePage';
import UploadPage from './Navbar/UploadPage/UploadPage';
import './MainPage.css'; // Import the CSS file


function MainPage() {
  const exportRef = useRef(null);
  const [uploadedData, setUploadedData] = useState([]);
  return (
    <> 
      <div className="App">
        <Navbar exportRef={exportRef} />
        <UploadPage setUploadedData={setUploadedData} />
        <CertificatePage exportRef={exportRef} data={uploadedData} />
      </div>
    </>
  );
}

export default MainPage;