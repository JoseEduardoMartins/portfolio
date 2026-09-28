import { useTranslation } from "react-i18next";
import PageHeader from "../../components/PageHeader";
import Experiences from "../../sections/Experiences";
import Skils from "../../sections/Skils";
import Education from "../../sections/Education";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <div className="max-w-[980px] mx-auto px-6 pt-[calc(70px+clamp(3rem,8vw,6rem))]">
        <PageHeader
          eyebrow={t("pages.about.eyebrow")}
          title={t("pages.about.title")}
          intro={t("pages.about.intro")}
        />
      </div>
      <Experiences />
      <Skils />
      <Education />
    </div>
  );
};

export default About;
