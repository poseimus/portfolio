import React from 'react';

const MySection = ({ children }: any) => {
    return (
        <section className="min-h-screen bg-neutral-300 dark:bg-[#343541] relative">
            <div className='mx-auto text-black dark:text-white'>
                {children}
            </div>
            <div className="overlay-bg opacity-10 dark:opacity-20 absolute h-full w-full top-0"></div>
        </section>
    );
};

export default MySection;
