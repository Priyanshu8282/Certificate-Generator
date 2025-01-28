import React, { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import assets from '../assets/certificate.png';

function Certificate({ data, exportRef }) {
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
      console.log('Capturing certificate element:', certificateElement);
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
      console.log('PDF generated successfully');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div className="flex flex-col items-center p-5 " ref={exportRef}>
      {localData.length > 0 && localData.map((item, index) => (
        <div key={index} className="certificate-wrapper my-5 rounded-lg overflow-hidden">
          <div className="certificate relative w-full max-w-4xl" id={`certificate-${index}`}>
            <img src={assets} alt="Certificate" className="certificate-template w-full rounded-lg" />
            <div className="certificate-content absolute inset-0 flex flex-col items-center justify-center p-5 box-border">
              <h2 className="certificate-title absolute top-[15%] w-[50%] text-center text-4xl text-gray-800 font-serif uppercase font-medium">
                {item.title}
              </h2>
              <p className="certificate-name absolute top-[42%] w-full text-center text-5xl text-gray-800 font-cursive font-light font-alex-brush">
                {item.name}
              </p>
              <p className="certificate-description absolute top-[55%] w-[70%] max-w-full text-center text-sm text-gray-800 font-sans font-normal overflow-hidden break-words">
                {item.description}
              </p>
              <p className="certificate-signature absolute bottom-[21%] w-full text-center text-4xl text-gray-800 font-signature font-medium font-raleway">
                {item.signature}
              </p>
            </div>
          </div>
          <button
            className="download-btn mt-5 ml-[45%] py-2 px-5 bg-blue-500 text-white rounded-md text-lg cursor-pointer transition-transform duration-300 hover:bg-blue-600 hover:scale-105"
            onClick={() =>{
              handleDownload(index)

            } }
          >
            Download
          </button>
        </div>
      ))}
    </div>
  );
}

export default Certificate;