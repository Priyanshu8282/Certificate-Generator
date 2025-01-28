import React, { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import assets from '../../../assets/certificate.png';
import './CertificatePage.css';

function CertificatePage({ data, exportRef }) {
  const [localData, setLocalData] = useState(data);

  useEffect(() => {
    setLocalData(data);
  }, [data]);

  const handleDownload = async (index) => {
    const certificateElement = document.getElementById(`certificate-${index}`);
    if (!certificateElement) {
      console.error(`Element with id certificate-${index} not found`);
      return;
    }
    try {
      const canvas = await html2canvas(certificateElement);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('landscape', 'pt', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const x = (pdfWidth - imgWidth) / 2;
      const y = (pdfHeight - imgHeight) / 2;
      pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);
      pdf.save(`certificate-${index}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div className="container" ref={exportRef}>
      {localData.length > 0 && localData.map((item, index) => (
        <div key={index} className="certificate-wrapper">
          <div className="certificate" id={`certificate-${index}`}>
            <img src={assets} alt="Certificate" className="certificate-template" />
            <div className="certificate-content">
              <h2 className="certificate-title">{item.title}</h2>
              <p className="certificate-name">{item.name}</p>
              <p className="certificate-description">{item.description}</p>
              <p className="certificate-signature">{item.signature}</p>
            </div>
          </div>
          
            <button className="download-btn" onClick={() => handleDownload(index)}>Download</button>
          </div>
       
      ))}
    </div>
  );
}

export default CertificatePage;
