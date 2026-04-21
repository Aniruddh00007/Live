// src/components/ResumeButton.js
import { FaDownload } from "react-icons/fa";

function ResumeButton() {
  return (
    <a
      href="https://drive.google.com/file/d/1DzX_vxPrXbDKT-gfsOV_zVrVbhqeLHtI/view?usp=drive_link"  
      download="Aniruddh_Resume.pdf"
      className="inline-flex items-center px-6 py-3 bg-cyan-500 text-white font-semibold rounded-2xl shadow-lg hover:bg-cyan-600 transition-all duration-300"
    >
      <FaDownload className="mr-2" /> Download Resume
    </a>
  );
}

export default ResumeButton;
