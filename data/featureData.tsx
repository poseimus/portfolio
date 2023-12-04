import { FaGlobe } from "react-icons/fa";
import { SiCss3, SiHtml5, SiJavascript, SiPostman, SiReact, SiRedux, SiTypescript } from 'react-icons/si';
export interface Feature {
    icon: JSX.Element;
    title: string;
    description: string;
}

const featureData: Feature[] = [
    {
        icon: <SiReact size={40} />,
        title: 'React',
        description: "A JavaScript library for building user interfaces.",
      },
      {
        icon: <SiHtml5 size={40} />,
        title: 'HTML5',
        description: "A markup language used for structuring content on the web.",
      },
      {
        icon: <SiCss3 size={40} />,
        title: 'CSS3',
        description: "A style sheet language used for describing the look and formatting of a document written in HTML.",
      },
      {
        icon: <SiJavascript size={40} />,
        title: 'JavaScript',
        description: "A programming language that enables interactive web pages.",
      },
      {
        icon: <SiTypescript size={40} />,
        title: 'TypeScript',
        description: "A superset of JavaScript that adds static typing and other features.",
      },
      {
        icon: <SiPostman size={40} />,
        title: 'Postman',
        description: "A collaboration platform for API development that simplifies the process of developing APIs.",
      },
      {
        icon: <SiRedux size={40} />,
        title: 'Redux',
        description: "A predictable state container for JavaScript apps, commonly used with React for managing application state.",
      },
      {
        icon: <FaGlobe size={40} />,
        title: 'REST API',
        description: "A REST API is a set of rules for building and interacting with web services. It allows different software systems to communicate over the internet using standard HTTP methods. REST APIs are commonly used in web development to enable data exchange between client-side applications and server-side services."
      }     
]

export default featureData;