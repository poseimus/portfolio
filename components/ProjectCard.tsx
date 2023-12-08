import React, { useState } from 'react';
import Link from 'next/link';
import { FaBan, FaSearch } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';


export interface IProject {
    imageSrc: any;
    title: string;
    description: string;
    link: string;
    tech: string;
    contain?: boolean
}

interface SingleProjectProps {
    project: IProject;
    index: number;
}

const ProjectCard: React.FC<SingleProjectProps> = ({ project, index }) => {
    const { t } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleToggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <div
                className="aspect-[7/4] h-[280px] md:h-[360px] mx-auto bg-zinc-500 dark:bg-neutral-200 rounded-md overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105 mb-4 relative"
                style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url(${project.imageSrc})`, backgroundSize: `${project.contain ? 'contain' : 'cover'}`, backgroundPosition: 'center' }}
            >
                <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                    <div className="bg-gradient-to-r from-black via-zinc-800 from-30% opacity-60 h-full w-full"></div>
                </div>
                <div className="p-4 text-white dark:text-neutral-100 relative">
                    <h2 className="text-4xl font-bold px-4 pt-4">{project.title}</h2>
                </div>
                <div className="opacity-0 flex flex-col justify-between text-neutral-200 border-2 rounded-md border-neutral-600 dark:border-neutral-700 hover:opacity-[.95] transition-opacity duration-500 p-4 absolute inset-0 bg-neutral-500 dark:bg-zinc-800 bg-opacity-100">
                    <div className="flex flex-col">
                        <div className="flex flex-row justify-between items-center gap-3">
                            {
                                project.link != 'null' ? <>
                                    <Link target="_blank" className="text-md sm:text-xl font-bold underline text-neutral-200 dark:text-neutral-300 font-semibold" href={project.link}>
                                        {project.title}
                                    </Link>
                                    <button type="button" title='Preview' className="flex flex-row items-center gap-2" onClick={handleToggleModal}>
                                        <FaSearch size={20} />
                                    </button>
                                </> : <>
                                    <h3 className='text-md sm:text-xl font-bold text-neutral-200 dark:text-neutral-300 font-semibold'>{project.title}</h3>
                                    <FaBan size={20} />
                                </>
                            }
                        </div>
                        <p className="mt-5 text-sm sm:text-md  text-neutral-300">{project.description}</p>
                    </div>
                    <div className="flex flex-row gap-3">
                        <span className="text-neutral-100 text-sm sm:text-md">{t('tech')}:</span>
                        <span className='text-sm sm:text-md'>{project.tech}</span>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div onClick={handleToggleModal} className="fixed z-40 inset-1 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="relative w-[98%] h-[80%]">
                        <iframe className="w-full h-full bg-white" src={project.link} title={project.title} />
                        <button
                            className="absolute top-2 right-2 text-white bg-black w-12 h-12 rounded-full"
                            onClick={handleToggleModal}
                        >
                            X
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectCard;
