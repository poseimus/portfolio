import Link from "next/link";
import { useTranslation } from "react-i18next";
import { TbBrandWhatsapp, TbMail, TbPhone } from "react-icons/tb";

export default function Index() {
    const { t } = useTranslation();
    return <>
        <section className="container mx-auto py-10 w-full">
            <div className="my-auto flex flex-col justify-center items-center">
                <h6 className="font-semibold text-3xl">{t('contact')}</h6>
            </div>
            <div className="flex flex-col items-center gap-20 mt-20 text-md sm:text-lg font-medium">
                <div className="flex flex-row gap-1 sm:gap-3 items-center ">
                    <TbPhone size={24}/>
                    <span>Phone : </span>
                    <span>+90 507 967 70 44</span>
                </div>
                <div className="flex flex-row gap-1 sm:gap-3 items-center ">
                    <TbMail size={24}/>
                    <span>Email : </span>
                    <Link className="underline" href={'mailto:emirakyuz81@gmail.com'}>
                        emirakyuz81@gmail.com
                    </Link>
                </div>
                <div className="flex flex-row gap-1 sm:gap-3 items-center ">
                    <TbBrandWhatsapp size={24}/>
                    <span>Whatsapp : </span>
                    <Link className="underline" href={'https://wa.me/905079677044'}>
                        Text me
                    </Link>
                </div>
            </div>
        </section>
    </>
}