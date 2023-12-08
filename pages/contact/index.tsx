import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FaLinkedin } from "react-icons/fa";
import { TbMail } from "react-icons/tb";

export default function Index() {
    const { t } = useTranslation();
    return <>
        <section className="container mx-auto py-10 w-full">
            <div className="my-auto flex flex-col justify-center items-center">
                <h6 className="font-semibold text-2xl">{t('contact')}</h6>
            </div>
            <div className="flex flex-col items-center gap-20 mt-20 text-md sm:text-lg font-medium">

                <div className="flex flex-row gap-1 sm:gap-3 items-center ">
                    <TbMail size={24} />
                    <span>Email : </span>
                    <Link className="underline" href={'mailto:emirakyuz81@gmail.com'}>
                        emirakyuz81@gmail.com
                    </Link>
                </div>
                <div className="flex flex-row gap-1 sm:gap-3 items-center ">
                    <FaLinkedin className={"fill-dark dark:fill-white"} size={24} />
                    <span>Linkedin : </span>
                    <Link className="underline" href={'https://www.linkedin.com/in/poseimus'}>
                        Text me
                    </Link>
                </div>
                <div className="text-lg">
                    {t('duzce')}
                </div>
            </div>

        </section>
    </>
}