import Image from "next/image";
import BoxFeature from "./BoxFeatureSection";

const FeaturesSection = (props: { featureRef: any }) => {
  const { featureRef } = props;
  return (
    <section className="bg-zinc-50 py-12 px-8" ref={featureRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-gray-900 text-center">
          Our Features
        </h3>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <BoxFeature
            img="/Image/Landing/Kelas.png"
            title="Kelas"
            desc="Manage your classes and schedules efficiently."
          />
          <BoxFeature
            img="/Image/Landing/Tugas.png"
            title="Pengumpulan Tugas"
            desc="Easily submit and track your assignments."
          />
          <BoxFeature
            img="/Image/Landing/Quiz.png"
            title="Bermain Quiz"
            desc="Engage with interactive quizzes."
          />
          <BoxFeature
            img="/Image/Landing/Ujian.png"
            title="Melakukan Ujian"
            desc="Conduct and participate in exams seamlessly."
          />
        </div>
      </div>
    </section>
  );
};
export default FeaturesSection;
