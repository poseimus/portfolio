import { Project } from "@/data/projectData";
import Link from "next/link";
import { useTranslation } from "react-i18next";


interface SingleProjectProps {
    project: Project;
    index: number;
}
const ProjectCard: React.FC<SingleProjectProps> = ({ project, index }) => {
    const { t } = useTranslation();
    return (
        <>
            <div
                className="aspect-[7/4] h-[360px] mx-auto bg-neutral-500 dark:bg-neutral-200 rounded-md overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105 mb-4 relative"
                style={{ backgroundRepeat: "no-repeat", backgroundImage: `url(${project.imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                    <div className="bg-black opacity-50 h-full w-full"></div>
                </div>
                <div className="p-4 text-white dark:text-slate-100 relative">
                    <h2 className="text-4xl font-bold px-4 pt-4">{project.title}</h2>
                </div>
                <div className="opacity-0 flex flex-col justify-between text-neutral-200 border-2 rounded-md border-neutral-600 dark:border-neutral-700 hover:opacity-100 transition-opacity duration-500 p-4 absolute inset-0 bg-neutral-500 dark:bg-neutral-800 bg-opacity-100">
                    <div className="flex flex-col">
                        <Link target="_blank" className="text-xl font-bold underline text-neutral-200 dark:text-neutral-300 font-semibold" href={project.link}>
                            {project.title}
                        </Link>
                        <p className="mt-5 text-md text-neutral-300">{project.description}</p>
                    </div>
                    <div className="flex flex-row gap-3">
                        <span className="text-neutral-400">{t('tech')}:</span>
                        <span>{project.tech}</span>
                    </div>
                </div>
            </div>


        </>
    );
}

export default ProjectCard;