import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaRegFileAlt, FaEdit, FaDownload, FaFileCsv } from "react-icons/fa";

const steps = [
 
  {
    id: 1,
    title: "Enter Details in CSV File",
    description:
      "Prepare a CSV file with recipient details such as name, date, and achievements. Ensure each row contains the necessary information for each certificate.",
    icon: <FaEdit className="text-5xl text-green-500" />,
  },
  {
    id: 2,
    title: "Upload CSV for Bulk Generation",
    description:
      "Upload a CSV file with multiple recipient details to generate certificates in bulk. This feature saves time and effort, especially when dealing with large groups.",
    icon: <FaFileCsv className="text-5xl text-green-500" />,
  },
  {
    id: 3,
    title: "Download Certificate",
    description:
      "Download your certificate instantly in PDF or image format. Choose the format that best suits your needs for easy sharing and printing.",
    icon: <FaDownload className="text-5xl text-blue-500" />,
  },
];

const Works = () => {
  return (
    <section className="py-16 u" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">How It Works</h2>
        <VerticalTimeline lineColor="#0056b3"> {/* Custom line color */}
          {steps.map((step) => (
            <VerticalTimelineElement
              key={step.id}
              contentStyle={{
                background: "rgb(255, 255, 259)",
                color: "#338",
              }}
              contentArrowStyle={{
                borderRight: "7px solid rgb(255, 255, 256)",
              }}
              iconStyle={{
                color: "#fff",
               background: "#ffff",
              }}
              icon={step.icon}
            >
              <h3 className="vertical-timeline-element-title text-2xl font-semibold text-[#0056b3]">
                {step.title}
              </h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Works;
