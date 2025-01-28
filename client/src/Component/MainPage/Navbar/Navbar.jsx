import React, { useState } from 'react';
import './Navbar.css'; // Custom CSS for styling
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import html2canvas from 'html2canvas';
import logo from '../../../assets/logo.png';
import jsPDF from 'jspdf';
import JSZip from 'jszip';

const Header = ({ exportRef }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [showExportDropdown, setShowExportDropdown] = useState(false);
  const navigate = useNavigate();

  // Toggle Dark/Light Mode
  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-theme');
  };

 
 
  // Toggle Popup
  const handlePopupToggle = () => {
    setPopupOpen(!popupOpen);
  };

  // Toggle Export Dropdown
  const handleExportButtonClick = () => {
    setShowExportDropdown(!showExportDropdown);
  };

  // Handle Export
  const handleExport = (format) => {
    const element = exportRef.current; // Use the ref to get the element
    if (!element) {
      toast.error('Element not found for export');
      return;
    }

    const certificates = element.querySelectorAll('.certificate');
    if (certificates.length === 0) {
      toast.error('No certificates found for export');
      return;
    }

    const scale = 2; // Increase the scale factor for higher resolution

    if (format === 'pdf') {
      const pdf = new jsPDF('landscape');
      const promises = [];

      certificates.forEach((certificate, index) => {
        promises.push(
          html2canvas(certificate, { scale }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const imgWidth = 297; // A4 width in mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            const positionX = (pdf.internal.pageSize.getWidth() - imgWidth) / 2;
            const positionY = (pdf.internal.pageSize.getHeight() - imgHeight) / 2;

            if (index > 0) pdf.addPage(); // Add new page for each certificate
            pdf.addImage(imgData, 'PNG', positionX, positionY, imgWidth, imgHeight);
          })
        );
      });

      // Wait for all certificates to be rendered, then save the PDF
      Promise.all(promises).then(() => {
        pdf.save('certificates.pdf');
      });

    } else if (format === 'zip') {
      const zip = new JSZip();
      const pdf = new jsPDF('landscape');
      const promises = [];

      certificates.forEach((certificate, index) => {
        promises.push(
          html2canvas(certificate, { scale }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const imgWidth = 297; // A4 width in mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            const positionX = (pdf.internal.pageSize.getWidth() - imgWidth) / 2;
            const positionY = (pdf.internal.pageSize.getHeight() - imgHeight) / 2;

            if (index > 0) pdf.addPage();
            pdf.addImage(imgData, 'PNG', positionX, positionY, imgWidth, imgHeight);
          })
        );
      });

      Promise.all(promises).then(() => {
        const pdfBlob = pdf.output('blob');
        zip.file('certificates.pdf', pdfBlob);
        zip.generateAsync({ type: 'blob' }).then((content) => {
          const link = document.createElement('a');
          link.href = URL.createObjectURL(content);
          link.download = 'certificates.zip';
          link.click();
        });
      });
    }

    setShowExportDropdown(false); // Hide the dropdown after exporting
  };

  return (
    <header className="header">
      <div className="logo">
       
        <img src={logo} alt="logo" />
      </div>
      <div className="header-buttons">
        <div className="export-container">
          <button className="header-btn" onClick={handleExportButtonClick}>Export</button>
          {showExportDropdown && (
            <div className="export-dropdown">
              <button className="dropdown-item" onClick={() => handleExport('pdf')}>PDF</button>
              <button className="dropdown-item" onClick={() => handleExport('zip')}>ZIP</button>
            </div>
          )}
        </div>
        <button className="header-btn theme-toggle" onClick={handleThemeToggle}>
          {darkMode ? '🌙' : '☀️'}
        </button>
      </div>
      <button className="header-btn hamburger-btn" onClick={handlePopupToggle}>
        <FontAwesomeIcon icon={faBars} /> 
      </button>
      {popupOpen && (
        <div className="popup">
          <button className='cross' onClick={handlePopupToggle}>×</button>
          <button className="popup-btn" onClick={handleExportButtonClick}>Export</button>
          {showExportDropdown && (
            <div className="export-dropdown">
              <button className="dropdown-item" onClick={() => handleExport('pdf')}>PDF</button>
              <button className="dropdown-item" onClick={() => handleExport('zip')}>ZIP</button>
            </div>
          )}
          <button className="popup-btn theme-toggle" onClick={handleThemeToggle}>
            {darkMode ? '🌙' : '☀️'}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;