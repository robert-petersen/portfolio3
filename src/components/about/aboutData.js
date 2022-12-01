import {FaDatabase, FaBalanceScaleRight, FaEye} from "react-icons/fa";
import {CgWebsite} from "react-icons/cg";

const IconFE = <CgWebsite className="about_icon"/>;
const IconBE = <FaDatabase className="about_icon"/>;
const IconR = <FaBalanceScaleRight className="about_icon"/>;
const IconA = <FaEye className="about_icon"/>;

export const aboutDataSet = [
  {
    key: 1,
    icon: IconFE,
    title: "Front End Development",
    description: "Expertise using HTML, CSS, JavaScript, and Git version control to create beautiful websites.",
  },
  {
    key: 2,
    icon: IconBE,
    title: "Back End Development",
    description: "Experience building RESTful databases using Knex, Express, and SQLite3 libraries to allow full access to data with CRUD operations. Able to create authorization for users with JWT or by using AWS or Firebase.",
  },
  {
    key: 3,
    icon: IconR,
    title: "Responsive Design",
    description: "Using responsive units, media queries, and development tools I create responsive applications that look great on any screen.",
  },
  {
    key: 4,
    icon: IconA,
    title: "Accessibility",
    description: "Using semantic HTML practices, responsive font sizes, alt tags on images, and by keeping in mind color blindness I do my best to make my applications accessible to everyone.",
  },
]