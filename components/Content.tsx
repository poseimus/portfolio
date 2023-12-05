import { useTranslation } from "react-i18next";
import Link from "next/link";
import { FaArrowAltCircleRight, FaTasks } from "react-icons/fa";
import featureData from "@/data/featureData";
import FeatureSlider from "./FeatureSlider";


const Content = () => {
    const { t } = useTranslation();

    return <>
        <section className="container mx-auto py-10 w-full sm:h-200">
            <div className="flex flex-col gap-3 z-10 w-full w-[90%] md:w-[60%]">
                <h1 className="text-4xl sm:text-6xl font-bold">
                    {t('hi')}
                </h1>
                <p className="text-2xl sm:text-3xl">
                    {t('me')}
                </p>
                <p className="text-2xl sm:text-3xl">
                    {t('front-end')}
                </p>
                <div className="flex flex-row gap-x-10">
                    <Link href="/projects" className="mt-3 sm:mt-5 text-xl sm:text-2xl flex flex-row items-center">
                        <FaTasks className="mr-2 sm:mr-3" size={20} />
                        <span>
                            {t('projects')}
                        </span>
                    </Link>
                    <Link href="/contact" className="mt-3 sm:mt-5 text-xl sm:text-2xl flex flex-row items-center">
                        <FaArrowAltCircleRight className="mr-2 sm:mr-3" size={20} />
                        <span className="underline">
                            {t('hire')}
                        </span>
                    </Link>
                </div>

            </div>
            <div className="absolute bottom-10 sm:bottom-20 right-0 left-0">
                <FeatureSlider featureData={featureData} />
            </div>
        </section>



    </>
}

export default Content;