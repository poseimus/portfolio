import Link from 'next/link';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

interface SocialType {
  icon: JSX.Element;
  link: string;
}

export default function Social() {
  const socialData: SocialType[] = [
    {
      icon: <FaInstagram className={"fill-dark dark:fill-white"} size={32} />,
      link: 'https://www.instagram.com/poseimus',
    },
    {
      icon: <FaLinkedin className={"fill-dark dark:fill-white"} size={32} />,
      link: 'https://www.linkedin.com/in/poseimus',
    },
  ];

  return (
    <div className="fixed top-1/2 right-5 transform -translate-y-1/2 flex flex-col gap-5 border border-black dark:border-white py-2 px-1.5">
      {socialData.map((social, index) => (
        <Link key={index} href={social.link} target="_blank">
          {social.icon}
        </Link>
      ))}
    </div>

  );
}
