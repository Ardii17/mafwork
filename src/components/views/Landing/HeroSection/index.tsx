import Button from "@/components/ui/Button";
import Image from "next/image";

const HeroSection = () => {
    return (
      <div className="w-full h-screen flex justify-center items-center px-8">
        <div className="w-1/2 flex items-center justify-center flex-col px-8 gap-4">
          <h1 className="text-5xl font-bold">WELCOME TO MAFWORK</h1>
          <p className="text-lg">
            An innovative way to manage your classes, assignments, quizzes, and
            exams online.
          </p>
          <div className="w-1/3 place-self-start relative">
            <div className="w-full h-2 bg-gray-300 absolute -bottom-1 rounded-b-lg -z-10 shadow"></div>
            <div className="w-full z-10 rounded hover:translate-y-1 transition-all">
              <Button type="button">
                <div className="flex gap-2 items-center justify-center py-1">
                  <p>Get Started</p>{" "}
                  <i className="bx bx-chevron-right text-xl" />
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <Image
            src={"/@/../../Image/Landing/Hero.png"}
            alt="Hero"
            width={500}
            height={500}
          />
        </div>
      </div>
    );
}

export default HeroSection