import CarrierCard, { ICarrierProps } from "@/components/CarrierCard";
import { useTranslation } from "react-i18next"

export default function Index() {

    const { t } = useTranslation();

    const carrierData: ICarrierProps[] = [
        {
            name: t('cactus'),
            time: "08-2022 / 10-2023",
            description: t('cactus1'),
            role: t('frontend'),
            location: t('izmir')
        },
        {
            name: "ParlaKids",
            time: "12-2019 / 05-2021",
            description: t('parlakids1'),
            role: t('socialmedia'),
            location: t('duzce')
        },
    ]
    return <>
        <section className="container mx-auto py-10 w-full">
            <div className="my-auto flex flex-col gap-5 justify-center items-center">
                <h6 className="font-semibold text-3xl">{t('carrier')}</h6>
                <div className="flex flex-col flex-wrap gap-3">
                    {
                        carrierData.map((carrier: ICarrierProps, index: any) => {
                            return <CarrierCard carrier={carrier} key={index} />
                        })
                    }
                </div>
            </div>
        </section>
    </>
}