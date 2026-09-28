import { IconType } from "react-icons";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaDesktop,
  FaBook,
  FaExternalLinkAlt,
  FaEye,
  FaStar,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import { FaCodeFork, FaLocationDot } from "react-icons/fa6";
import {
  LuRocket,
  LuDownload,
  LuArrowRight,
  LuArrowUpRight,
  LuMail,
  LuBriefcase,
  LuGraduationCap,
  LuCalendarDays,
  LuCode,
  LuLayers,
  LuServer,
  LuCloud,
  LuDatabase,
  LuFlaskConical,
  LuWrench,
  LuStars,
} from "react-icons/lu";
import { MdDomain } from "react-icons/md";
import { TfiMenu } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

const icons: Record<string, IconType> = {
  github: FaGithub,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  whatsapp: FaWhatsapp,
  top: FaDesktop,
  repository: FaBook,
  link: FaExternalLinkAlt,
  eye: FaEye,
  star: FaStar,
  fork: FaCodeFork,
  rocket: LuRocket,
  plus: FaPlus,
  minus: FaMinus,
  location: FaLocationDot,
  domain: MdDomain,
  menu: TfiMenu,
  close: IoClose,
  download: LuDownload,
  arrow: LuArrowRight,
  arrowUpRight: LuArrowUpRight,
  email: LuMail,
  briefcase: LuBriefcase,
  education: LuGraduationCap,
  calendar: LuCalendarDays,
  code: LuCode,
  layers: LuLayers,
  server: LuServer,
  cloud: LuCloud,
  database: LuDatabase,
  flask: LuFlaskConical,
  wrench: LuWrench,
  sparkles: LuStars,
  dot: GoDotFill,
};

export default icons;
