import Button from "@/components/ui/Button";
import CardQuiz from "@/components/ui/CardQuiz";
import CarouselCard from "@/components/ui/CarouselCard";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const quiz = [
  {
    img: "/@/../../Image/Quiz/dunia.png",
    title: "Ilmu Pengetahuan Dunia",
    desc: "10 Pertanyaan • 10 Dimainkan",
    link: "/quiz",
  },
  {
    img: "/@/../../Image/Quiz/alam.png",
    title: "Ilmu Pengetahuan Alam",
    desc: "10 Pertanyaan • 10 Dimainkan",
    link: "/quiz",
  },
  {
    img: "/@/../../Image/Quiz/umum.png",
    title: "Ilmu Pengetahuan Umum",
    desc: "10 Pertanyaan • 10 Dimainkan",
    link: "/quiz",
  },
  {
    img: "/@/../../Image/Quiz/logika.png",
    title: "Logika",
    desc: "10 Pertanyaan • 10 Dimainkan",
    link: "/quiz",
  },
  {
    img: "/@/../../Image/Quiz/tof.png",
    title: "Benar atau Salah",
    desc: "10 Pertanyaan • 10 Dimainkan",
    link: "/quiz",
  },
  {
    img: "/@/../../Image/Quiz/kartun.png",
    title: "Tokoh Kartun",
    desc: "10 Pertanyaan • 10 Dimainkan",
    link: "/quiz",
  },
];

const exam = [
  {
    img: "/@/../../Image/Exam/exam.png",
    title: "Ilmu Pengetahuan Dunia",
    desc: "10 Pertanyaan • 10 Dimainkan",
    link: "/quiz",
  },
  {
    img: "/@/../../Image/Exam/exam.png",
    title: "Ilmu Pengetahuan Alam",
    desc: "10 Pertanyaan • 10 Dimainkan",
    link: "/quiz",
  },
  {
    img: "/@/../../Image/Exam/exam.png",
    title: "Ilmu Pengetahuan Umum",
    desc: "10 Pertanyaan • 10 Dimainkan",
    link: "/quiz",
  },
  {
    img: "/@/../../Image/Exam/exam.png",
    title: "Logika",
    desc: "10 Pertanyaan • 10 Dimainkan",
    link: "/quiz",
  },
  {
    img: "/@/../../Image/Exam/exam.png",
    title: "Benar atau Salah",
    desc: "10 Pertanyaan • 10 Dimainkan",
    link: "/quiz",
  },
  {
    img: "/@/../../Image/Exam/exam.png",
    title: "Tokoh Kartun",
    desc: "10 Pertanyaan • 10 Dimainkan",
    link: "/quiz",
  },
];

const HeroSection = () => {
  const cardSectionRef: any = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  useEffect(() => {
    if (cardSectionRef.current) {
      const cardWidths = cardSectionRef.current.offsetWidth - 32;
      setCardWidth(cardWidths / 4);
    }
  }, []);

  return (
    <div className="w-full">
      <div className="w-full h-screen flex flex-col items-center justify-center gap-8">
        <Image
          src={"/@/../../Image/HomePic.png"}
          alt="Hero Section"
          width={500}
          height={300}
        />
        <div className="text-center lg:px-20">
          <h1 className="text-lg font-semibold">
            Selamat Datang di Portal Web Kami
          </h1>
          <p className="text-sm opacity-70">
            Tempat terbaik untuk mengelola tugas, quiz, dan ujian Anda. Kami
            menyediakan platform yang mudah digunakan untuk mendukung proses
            pembelajaran Anda. Dengan fitur-fitur lengkap, mulai dari
            pengumpulan tugas, pembuatan quiz interaktif, hingga ujian online,
            portal ini dirancang untuk meningkatkan pengalaman belajar Anda.
          </p>
          <div className="flex gap-4 items-center justify-center mt-4">
            <Button type="button" className="bg-red-700 rounded-full w-full">
              Lihat Tugas
            </Button>
            <Button type="button" className="bg-green-700 rounded-full w-full">
              Mulai Quiz
            </Button>
            <Button type="button" className="bg-yellow-700 rounded-full w-full">
              Mulai Ujian
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-8 h-auto">
        <div className="w-full px-4 relative">
          <h1 className="flex gap-3 items-center text-xl font-semibold">
            <i className="bx bxs-crown text-blue-700" />
            Tugasmu
          </h1>
          <div className="w-full min-h-96 bg-white rounded-md shadow mt-4 flex flex-col items-center justify-center gap-6">
            <Image src={"/@/../../Image/nowork.jpg"} alt="No Work" width={300} height={150} />
            <p className="text-xl text-gray-400">Yeayy, Tidak ada tugas</p>
          </div>
        </div>
        <CarouselCard
          sectionRef={cardSectionRef}
          title="Latihan Quiz"
          widthCard={cardWidth}
        >
          {quiz.map((item: any, index, number) => (
            <CardQuiz
              img={item.img}
              title={item.title}
              key={index}
              category="QUIZ"
              desc={item.desc}
              width={cardWidth}
            />
          ))}
        </CarouselCard>
        <CarouselCard
          sectionRef={cardSectionRef}
          title="Latihan Ujian"
          widthCard={cardWidth}
        >
          {exam.map((item: any, index, number) => (
            <CardQuiz
              img={item.img}
              title={item.title}
              key={index}
              category="UJIAN"
              desc={item.desc}
              width={cardWidth}
            />
          ))}
        </CarouselCard>
      </div>
    </div>
  );
};

export default HeroSection;
