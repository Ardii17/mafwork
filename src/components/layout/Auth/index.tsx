import Image from "next/image";

type proptypes = {
  children: React.ReactNode;
};

const AuthLayout = (props: proptypes) => {
  const { children } = props;
  return (
    <div className="flex min-h-screen h-screen max-h-screen w-full">
      <div className="w-1/2 flex flex-col justify-center items-center gap-4">
        <Image
          src={"/Image/auth.png"}
          alt="auth logo"
          width={400}
          height={400}
        />
        <p className="text-xl font-semibold">Efektif dan Menyenangkan</p>
        <p className="opacity-70 text-center px-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          molestiae. Lorem, ipsum dolor.
        </p>
      </div>
      <div className="w-1/2 flex justify-center items-center px-4 py-8">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
