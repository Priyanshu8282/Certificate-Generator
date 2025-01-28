import React from 'react';
import { motion } from 'framer-motion';
import { FaUserEdit, FaFileCsv, FaDownload } from 'react-icons/fa';
import '../../public/fonts.css';

function Feature() {
  return (
    <div className="bg-gradient-to-b from-[#f3f4f6] to-[#ffffff] text-[#333333] py-20 font-raleway" id='feature'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Personalized Certificate Generation */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg border-none transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <FaUserEdit className="text-3xl text-[#0056b3] mr-3" />
              <h3 className="text-2xl font-semibold text-[#0056b3]">Personalized Certificate Generation</h3>
            </div>
            <p className="text-lg text-[#666666]">
              Create certificates instantly by filling out a simple form with recipient details such as name, date, and achievements.
            </p>
          </motion.div>
          {/* Bulk Certificate Generation via CSV */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <FaFileCsv className="text-3xl text-[#0056b3] mr-3" />
              <h3 className="text-2xl font-semibold text-[#0056b3]">Bulk Certificate Generation via CSV</h3>
            </div>
            <p className="text-lg text-[#666666]">
              Upload a CSV file containing recipient details, and the system will generate multiple certificates in one go, saving time and effort.
            </p>
          </motion.div>
          {/* Download Options */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center mb-4">
              <FaDownload className="text-3xl text-[#0056b3] mr-3" />
              <h3 className="text-2xl font-semibold text-[#0056b3]">Download Options</h3>
            </div>
            <p className="text-lg text-[#666666]">
              Certificates can be downloaded in various formats, including PDF and image files, for seamless sharing and printing.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Feature;