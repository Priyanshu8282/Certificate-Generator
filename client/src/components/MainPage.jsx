import React, { useRef, useState } from 'react';
import CertificatePage from './Certificate.jsx';
import Upload from './Upload.jsx';

function MainPage() {
  const exportRef = useRef(null);
  const [uploadedData, setUploadedData] = useState([]);

  return (
    <div className=" flex flex-col" id='create'>
      <div className="flex-grow mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center">
        <Upload setUploadedData={setUploadedData} />
        <CertificatePage exportRef={exportRef} data={uploadedData} />
      </div>
    </div>
  );
}

export default MainPage;