import { FaGlobe } from "react-icons/fa";
import { SiBootstrap, SiCss3, SiHtml5, SiJavascript, SiPostman, SiReact, SiRedux, SiTailwindcss, SiTypescript } from 'react-icons/si';
export interface Feature {
  icon: JSX.Element;
  title: string;
}

const featureData: Feature[] = [
  {
    icon: <SiReact size={40} />,
    title: 'React',
  },
  {
    icon: <SiTypescript size={40} />,
    title: 'TypeScript',
  },
  {
    icon: <SiRedux size={40} />,
    title: 'Redux',
  },
  {
    icon: <SiJavascript size={40} />,
    title: 'JavaScript',
  },
  {
    icon: <SiPostman size={40} />,
    title: 'Postman',
  },
  {
    icon: <FaGlobe size={40} />,
    title: 'REST API',
  },
  {
    icon: <SiHtml5 size={40} />,
    title: 'HTML5',
  },
  {
    icon: <SiCss3 size={40} />,
    title: 'CSS3',
  },
  {
    icon: <SiTailwindcss size={40} />,
    title: 'Tailwind',
  },
  {
    icon: <SiBootstrap size={40} />,
    title: 'Bootstrap',
  },
]

export default featureData;