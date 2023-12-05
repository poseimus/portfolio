import { Feature } from '@/data/featureData';
import React from 'react';

interface SingleFeatureProps {
    feature: Feature;
}

const SingleFeature: React.FC<SingleFeatureProps> = ({ feature }) => {
    return (
        <div className="dashed-spinner p-3.5 relative container mx-auto w-full">
            <span className="w-12 h-12 flex items-center justify-center">
                {feature.icon}
            </span>
            <div className="tooltip bg-gray-700 dark:bg-white text-white dark:text-black top-0 ">
                <h4 className="font-xl font-bold">{feature.title}</h4>
            </div>
        </div>
    );
};

export default SingleFeature;
