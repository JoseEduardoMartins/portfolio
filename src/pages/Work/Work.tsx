import { useTranslation } from "react-i18next";
import PageHeader from "../../components/PageHeader";
import WorkCard from "../../components/WorkCard";
import Repositories from "../../sections/Repositories";
import works from "../../data/works";

const Work = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <div className="max-w-[980px] mx-auto px-6 pt-[calc(70px+clamp(3rem,8vw,6rem))] flex flex-col gap-[clamp(2.5rem,6vw,4rem)]">
        <PageHeader
          eyebrow={t("pages.work.eyebrow")}
          title={t("pages.work.title")}
          intro={t("pages.work.intro")}
        />
        <div className="flex flex-col gap-8">
          {works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </div>

      <Repositories />
    </div>
  );
};

export default Work;
