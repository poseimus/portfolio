import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/data/projectData";
import { useTranslation } from "react-i18next";
import Cactus from './../../images/Cactus.png'
import Kolayyol from './../../images/Kolayyol.png'
import Intermarkt from './../../images/Intermarkt.png'
export default function Index() {

    const { t } = useTranslation();
    const projectData: Project[] = [
        {
            imageSrc: Intermarkt.src,
            title: "Intermarkt",
            description: t('intermarktInfo1'),
            link: "https://intermarkt.com/",
            tech: "TypeScript - JavaScript - React Redux"
        },
        {
            imageSrc: "https://images04.nicepage.com/feature/511177/create-any-website-with-powerful-website-builder-website-builder.jpg",
            title: "Intermarkt Panel",
            description: t('intermarktInfo2'),
            link: "https://intermarkt.com/",
            tech: "TypeScript - JavaScript - React Redux"
        },
        {
            imageSrc: Kolayyol.src,
            title: "Kolay Yol",
            description: t('kolayyolInfo'),
            link: "https://kolayyol.net/",
            tech: "TypeScript"
        },
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
            <div className="flex flex-wrap justify-between flex-row gap-3">
                {
                    projectData.map((project: Project, index: any) => {
                        return <>
                            <ProjectCard project={project} key={index} index={index} />
                        </>
                    })
                }
            </div>
        </section>
    </>
}