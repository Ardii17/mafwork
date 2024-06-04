import Image from "next/image";

const FeaturesSection = (props: { featureRef: any }) => {
  const { featureRef } = props;
  return (
    <section className="bg-zinc-50 py-12 px-8" ref={featureRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-gray-900 text-center">
          Our Features
        </h3>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-center">
              <Image
                src={"/@/../../Image/Landing/Kelas.png"}
                width={64}
                height={64}
                alt="Class Icon"
                className="mx-auto w-16 h-16"
              />
              <h4 className="mt-4 text-xl font-semibold text-gray-900">
                Kelas
              </h4>
              <p className="mt-2 text-gray-600">
                Manage your classes and schedules efficiently.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-center">
              <Image
                src={"/@/../../Image/Landing/Tugas.png"}
                width={64}
                height={64}
                className="mx-auto w-16 h-16"
                alt="Assignment Icon"
              />
              <h4 className="mt-4 text-xl font-semibold text-gray-900">
                Pengumpulan Tugas
              </h4>
              <p className="mt-2 text-gray-600">
                Easily submit and track your assignments.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-center">
              <Image
                src={"/@/../../Image/Landing/Quiz.png"}
                width={64}
                height={64}
                alt="Quiz Icon"
                className="mx-auto w-16 h-16"
              />
              <h4 className="mt-4 text-xl font-semibold text-gray-900">
                Bermain Kuis
              </h4>
              <p className="mt-2 text-gray-600">
                Engage with interactive quizzes.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-center">
              <Image
                src={"/@/../../Image/Landing/Ujian.png"}
                width={64}
                height={64}
                alt="Exam Icon"
                className="mx-auto w-16 h-16"
              />
              <h4 className="mt-4 text-xl font-semibold text-gray-900">
                Ujian
              </h4>
              <p className="mt-2 text-gray-600">
                Conduct and participate in exams seamlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeaturesSection;
