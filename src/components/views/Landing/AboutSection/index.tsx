export default function AboutSection(props: { aboutRef: any }) {
  const { aboutRef } = props;

  return (
    <section id="about" className="bg-gray-100 py-12" ref={aboutRef}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">About Us</h2>
        <p className="mb-4">
          Mafwork is a cutting-edge online learning management system designed
          to help educators and students manage classes, assignments, quizzes,
          and exams efficiently.
        </p>
        <p>
          Our mission is to enhance the educational experience through
          innovative technology and user-friendly interfaces.
        </p>
      </div>
    </section>
  );
}
