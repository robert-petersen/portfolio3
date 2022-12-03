import { FaHtml5, FaCss3Alt, FaPython, FaReact, FaNodeJs, FaGithubSquare, FaFigma, FaTrello, FaDatabase, FaSass } from "react-icons/fa";
import { SiJavascript, SiRedux, SiPostman, SiVisualstudiocode, SiJsonwebtokens } from "react-icons/si";
import { DiSqllite, DiMongodb } from "react-icons/di";

const IconHTML = <FaHtml5 className="skill_icon"/>;
const IconCSS = <FaCss3Alt className="skill_icon"/>;
const IconPYTHON = <FaPython className="skill_icon"/>;
const IconREACT = <FaReact className="skill_icon"/>;
const IconNODE = <FaNodeJs className="skill_icon"/>;
const IconGIT = <FaGithubSquare className="skill_icon"/>;
const IconFIGMA = <FaFigma className="skill_icon"/>;
const IconTRELLO = <FaTrello className="skill_icon"/>;
const IconKNEX = <FaDatabase className="skill_icon"/>;
const IconSASS = <FaSass className="skill_icon"/>;
const IconJS = <SiJavascript className="skill_icon"/>;
const IconREDUX = <SiRedux className="skill_icon"/>;
const IconPOSTMAN = <SiPostman className="skill_icon"/>;
const IconVSCODE = <SiVisualstudiocode className="skill_icon"/>;
// const IconSC = <SiStyledComponents className="skill_icon"/>; // weird error for this icon need to find a new one
const IconJWT = <SiJsonwebtokens className="skill_icon"/>;
const IconSQLITE = <DiSqllite className="skill_icon"/>;
const IconMONGO = <DiMongodb className="skill_icon"/>;

export const skillData = [
  {
    icon: IconHTML,
    title: "HTML",
  },
  {
    icon: IconCSS,
    title: "CSS",
  },
  {
    icon: IconJS,
    title: "JavaScript",
  },
  {
    icon: IconPYTHON,
    title: "Python",
  },
  {
    icon: IconSQLITE,
    title: "SQLite3",
  },
  {
    icon: IconREACT,
    title: "React.js",
  },
  {
    icon: IconREDUX,
    title: "Redux.js",
  },
  {
    icon: IconNODE,
    title: "Node.js",
  },
  // {
  //   icon: IconSC,
  //   title: "Styled",
  // },
  {
    icon: IconKNEX,
    title: "Knex",
  },
  {
    icon: IconJWT,
    title: "JWT",
  },
  {
    icon: IconSASS,
    title: "SASS",
  },
  {
    icon: IconMONGO,
    title: "MongoDB",
  },
  {
    icon: IconMONGO,
    title: "Mongoose",
  },
];

export const toolData = [
  {
    icon: IconGIT,
    title: "GitHub",
  },
  {
    icon: IconFIGMA,
    title: "Figma",
  },
  {
    icon: IconPOSTMAN,
    title: "Postman",
  },
  {
    icon: IconTRELLO,
    title: "Trello",
  },
  {
    icon: IconVSCODE,
    title: "VS Code",
  },
];