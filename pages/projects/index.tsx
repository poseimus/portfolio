import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/data/projectData";
import { useTranslation } from "react-i18next";

export default function Index() {

    const { t } = useTranslation();
    const projectData: Project[] = [
        {
            imageSrc: "https://static.swiftbuilder.co.uk/img/homepage-screen.png",
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
            imageSrc: "https://colorlib.com/wp-content/uploads/sites/2/library-website-design-1.jpg",
            title: "Kolay Yol",
            description: t('kolayyolInfo'),
            link: "https://kolayyol.net/",
            tech: "TypeScript"
        },
        {
            imageSrc: "https://colorlib.com/wp-content/uploads/sites/2/library-website-design-1.jpg",
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