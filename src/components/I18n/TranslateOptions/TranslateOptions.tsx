import { useTranslation } from "react-i18next";
import Flag from "../Flag";
import { BrasilFlag, EuaFlag, SpainFlag } from "../../../assets/flags";

const TranslateOptions = () => {
  const { i18n, t } = useTranslation();
  const selectedLanguage = i18n.language;

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="flex flex-row items-center mx-2 gap-[5px]">
      <Flag
        title={t("translateOptions.portuguese")}
        image={BrasilFlag}
        isSelected={selectedLanguage === "pt-BR"}
        onClick={() => handleChangeLanguage("pt-BR")}
      />
      <Flag
        title={t("translateOptions.english")}
        image={EuaFlag}
        isSelected={selectedLanguage === "en-US"}
        onClick={() => handleChangeLanguage("en-US")}
      />
      <Flag
        title={t("translateOptions.spanish")}
        image={SpainFlag}
        isSelected={selectedLanguage === "es"}
        onClick={() => handleChangeLanguage("es")}
      />
    </div>
  );
};

export default TranslateOptions;
