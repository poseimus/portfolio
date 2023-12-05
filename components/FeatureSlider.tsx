import MyOwl from '@/helpers/helper.owl';
import SingleFeature from './SingleFeature';

const FeatureSlider = ({ featureData }: any) => {

    return (
        <MyOwl responsive={{ 1024: { items: 4 }, 769: { items: 3 }, 0: { items: 1 } }}
            autoplay
            autoplaySpeed={800}
            autoplayTimeout={3000}
            loop
            className="owl-carousel owl-theme owl-loaded"
            dots
            dotsClass="owl-dots flex justify-center items-center mt-4"
        >
            {
                featureData.map((feature: any, index: any) => (
                    <div key={index}>
                        <SingleFeature feature={feature} />
                    </div>
                ))
            }
        </MyOwl>
    );
};

export default FeatureSlider;