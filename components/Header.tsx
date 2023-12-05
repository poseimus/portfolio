import Link from "next/link";
import { useTranslation } from "react-i18next";
import ThemeSwitch from "./ThemeSwitch";
import LanguageDropdown from "./LanguageDropdown";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Header = () => {

    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        if (isMenuOpen)
            setIsMenuOpen(false);
    }, [router])

    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    const { t, i18n } = useTranslation();
    return <>
        <section className="text-black font-semibold text-lg bg-white dark:text-white dark:bg-black sm:border-1">
            <div className="container mx-auto flex flex-row gap-3 py-3 items-center sm:justify-between">
                <Link className="flex-1" href={'/'}>
                    {t('name')}
                </Link>
                <div className="flex flex-row items-center gap-3">
                    <div id="lg-header" className="flex flex-row text-sm lg:text-lg gap-5 items-center justify-between">
                        <Link href={'/'}>{t('home')}</Link>
                        <Link href={'/projects'}>{t('projects')}</Link>
                        <Link href={'/about'}>{t('about')}</Link>
                        <Link href={'/contact'}>{t('contact')}</Link>
                        <LanguageDropdown />
                    </div>
                    <ThemeSwitch />
                </div>

                <div
                    id="mb-header"
                    className="cursor-pointer items-center gap-3 lg:hidden"
                    onClick={handleMenu}
                >

                    <div className="flex flex-col">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
            </div>
        </section>
        {isMenuOpen && (
            <div className="lg:hidden border-t md:hidden font-semibold text-black bg-white dark:text-white dark:bg-black gap-3  flex flex-col absolute z-10 w-full p-4">
                <Link href={'/'}>{t('home')}</Link>
                <Link href={'/projects'}>{t('projects')}</Link>
                <Link href={'/about'}>{t('about')}</Link>
                <Link href={'/contact'}>{t('contact')}</Link>
                <LanguageDropdown width={"w-fit"} />
            </div>
        )}
    </>
}

export default Header;