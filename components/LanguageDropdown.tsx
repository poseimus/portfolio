import { useTranslation } from "react-i18next";

const LanguageDropdown = ({ width }: any | undefined) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = e.target.value;
        i18n.changeLanguage(selectedLanguage)
    };
    return <>
        <select className={`p-1 border text-black bg-transparent dark:text-white ${width ? width : ""}`} value={i18n.language} onChange={toggleLanguage}>
            <option className={`text-black dark:text-white dark:bg-black ${i18n.language === 'tr' ? 'font-bold' : ''}`} disabled={i18n.language === 'tr' ? true : false} value={'tr'}>TR</option>
            <option className={`text-black dark:text-white dark:bg-black ${i18n.language === 'en' ? 'font-bold' : ''}`} disabled={i18n.language === 'en' ? true : false} value={'en'}>EN</option>
        </select>
    </>
}

export default LanguageDropdown;