import ProjectCard, { IProject } from "@/components/ProjectCard";
import { useTranslation } from "react-i18next";
import Cactus from './../../images/Cactus.png'
import Kolayyol from './../../images/Kolayyol.png'
import Intermarkt from './../../images/Intermarkt.png'
import Locked from './../../images/Locked.png'
export default function Index() {

    const { t } = useTranslation();
    const projectData: IProject[] = [
        {
            imageSrc: Intermarkt.src,
            title: "Intermarkt",
            description: t('intermarktInfo1'),
            link: "https://intermarkt.com/",
            tech: "TypeScript - JavaScript - React Redux"
        },
        {
            imageSrc: Locked.src,
            title: "Intermarkt Panel",
            description: t('intermarktInfo2'),
            link: "null",
            tech: "TypeScript - JavaScript - React Redux",
            contain: true
        },
        {
            imageSrc: Kolayyol.src,
            title: "Kolay Yol",
            description: t('kolayyolInfo'),
            link: "https://kolayyol.net/",
            tech: "TypeScript"
        },
        // {
        //     imageSrc: Tourforturkey.src,
        //     title: "TourForTurkey",
        //     description: t('cactusInfo'),
        //     link: "https://www.tourforturkey.com/",
        //     tech: "TypeScript - JavaScript - React Redux"
        // },
        {
            imageSrc: Cactus.src,
            title: t('cactus'),
            description: t('cactusInfo'),
            link: "https://www.cactus.com.tr/",
            tech: "TypeScript"
        },
    ]
    return <>
        <section className="container mx-auto py-10 w-full">
            <div className="my-auto flex flex-col justify-center items-center mb-10">
                <h6 className="font-semibold text-3xl">{t('projects')}</h6>
            </div>
            <div className="flex flex-wrap justify-between flex-row gap-3">
                {
                    projectData.map((project: IProject, index: any) => {
                        return <>
                            <ProjectCard project={project} key={index} index={index} />
                        </>
                    })
                }
            </div>
        </section>
    </>
}