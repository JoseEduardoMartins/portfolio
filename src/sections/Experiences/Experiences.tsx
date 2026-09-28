import { useTranslation } from "react-i18next";
import SectionHeader from "../../components/SectionHeader";
import experiences from "../../data/experiences";
import Experience from "./Experience/Experience";

const Experiences = () => {
  const { t } = useTranslation();

  return (
    <section
      id="experiences"
      className="w-full max-w-[980px] mx-auto py-24 px-6 scroll-mt-20 flex flex-col gap-9"
    >
      <SectionHeader
        eyebrow={t("header.experiences")}
        title={t("home.experience.title")}
      />

      <div className="relative flex flex-col gap-5 pl-[30px] max-[560px]:pl-[22px] before:content-[''] before:absolute before:left-1.5 before:top-1.5 before:bottom-1.5 before:w-0.5 before:bg-[linear-gradient(to_bottom,var(--color-accent),var(--color-border)_60%,transparent)]">
        {experiences.map((experience, index) => (
          <Experience
            key={experience.id}
            experience={experience}
            delay={index * 90}
          />
        ))}
      </div>
    </section>
  );
};

export default Experiences;
