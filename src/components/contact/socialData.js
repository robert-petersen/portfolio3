import { FaLinkedin, FaGithub, FaMediumM, FaPenSquare } from "react-icons/fa";

const linkedIcon = <FaLinkedin className="icon"/>;
const gitIcon = <FaGithub className="icon"/>;
const medIcon = <FaMediumM className="icon"/>;
const resIcon = <FaPenSquare className="icon"/>;

export const socialData = [
  {
    name:"LinkedIn",
    icon: linkedIcon,
    link: "https://www.linkedin.com/in/robert-petersen808/",
  },
  {
    name:"GitHub",
    icon: gitIcon,
    link: "https://github.com/robert-petersen",
  },
  {
    name:"Medium",
    icon: medIcon,
    link: "https://robert-petersen.medium.com/",
  },
  {
    name:"Resume",
    icon: resIcon,
    link: "https://resume.io/r/FFjx1r7fT",
  },
]