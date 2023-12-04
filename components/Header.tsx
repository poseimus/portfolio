import Link from "next/link";
import { useTranslation } from "react-i18next";
import ThemeSwitch from "./ThemeSwitch";
import LanguageDropdown from "./LanguageDropdown";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Header = () => {

    const router = useRouter();
    const [currentTheme, setCurrentTheme] = useState('');
    useEffect(() => {
        setIsMenuOpen(false);
        Check();
        if (currentTheme != '') {
            setIsMenuOpen(false);
        }
    }, [router, currentTheme])

    function Check() {
        var theme = localStorage.getItem('theme');
        setCurrentTheme(theme ?? "");
    }
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return <>
        <section className="text-black bg-white dark:text-white dark:bg-black sm:border-1">
            <div className="container mx-auto flex flex-row gap-3 py-3 items-center justify-between">
                <Link href={'/'}>
                    <img
                        height={60}
                        width={60}
                        src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="
                        alt="Logo"
                    />
                </Link>
                <div className="flex flex-row items-center gap-3">
                    <div id="lg-header" className="flex flex-row gap-5 items-center justify-between">
                        <Link href={'/'}>{t('home')}</Link>
                        <Link href={'/projects'}>{t('projects')}</Link>
                        <Link href={'/contact'}>{t('contact')}</Link>
                        <LanguageDropdown />
                    </div>
                    <ThemeSwitch />
                </div>

                <div
                    id="mb-header"
                    className="cursor-pointer items-center gap-3 lg:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
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
            <div className="lg:hidden md:hidden text-black bg-white dark:text-white dark:bg-black gap-3  flex flex-col absolute z-10 w-full p-4">
                <Link href={'/'}>{t('home')}</Link>
                <Link href={'/projects'}>{t('projects')}</Link>
                <Link href={'/contact'}>{t('contact')}</Link>
                <LanguageDropdown width={"w-fit"} />
            </div>
        )}
    </>
}

export default Header;