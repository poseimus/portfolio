import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

interface SocialType {
  icon: JSX.Element;
  link: string;
}

export default function Social() {
  const socialData: SocialType[] = [
    {
      icon: <FaInstagram className={"fill-dark dark:fill-white"} size={24} />,
      link: 'https://www.instagram.com/poseimus',
    },
    {
      icon: <FaLinkedin className={"fill-dark dark:fill-white"} size={24} />,
      link: 'https://www.linkedin.com/in/poseimus',
    },
    {
      icon: <FaGithub className={"fill-dark dark:fill-white"} size={24} />,
      link: 'https://github.com/poseimus',
    },
  ];

  return (
    <div className="absolute md:fixed top-32 sm:top-1/2 right-5 transform -translate-y-1/2 flex flex-row sm:flex-col gap-2 sm:gap-5 border border-black dark:border-white py-2 px-1">
      {socialData.map((social, index) => (
        <Link key={index} href={social.link} target="_blank">
          {social.icon}
        </Link>
      ))}
    </div>

  );
}
