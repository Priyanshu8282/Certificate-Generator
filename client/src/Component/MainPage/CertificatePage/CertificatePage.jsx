import React, { useEffect, useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import assets from '../../../assets/certificate.png';
import './CertificatePage.css';

function CertificatePage({ data }) {
  const [localData, setLocalData] = useState(data);
  const certificateRefs = useRef([]);

  useEffect(() => {
    setLocalData(data);
  }, [data]);

  const handleDownload = async (index) => {
    const certificateElement = certificateRefs.current[index];
    if (!certificateElement) {
      console.error(`Element at index ${index} not found`);
      return;
    }
    try {
      const canvas = await html2canvas(certificateElement, { scale: 3, useCORS: true });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('landscape', 'pt', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, 'PNG', 10, 10, pdfWidth - 20, pdfHeight - 20);
      pdf.save(`certificate-${index}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div className="container">
      {localData.length > 0 &&
        localData.map((item, index) => (
          <div key={index} className="certificate-wrapper">
            <div
              className="certificate"
              ref={(el) => (certificateRefs.current[index] = el)}
            >
              <img src={assets} alt="Certificate" className="certificate-template" />
              <div className="certificate-content">
                <h2 className="certificate-title">{item.title}</h2>
                <p className="certificate-name">{item.name}</p>
                <p className="certificate-description">{item.description}</p>
                <p className="certificate-signature">{item.signature}</p>
              </div>
            </div>
            <button className="download-btn" onClick={() => handleDownload(index)}>
              Download
            </button>
          </div>
        ))}
    </div>
  );
}

export default CertificatePage;
