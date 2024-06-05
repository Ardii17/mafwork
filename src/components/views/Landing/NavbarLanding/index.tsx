import Button from "@/components/ui/Button";
import Image from "next/image";
import { useRouter } from "next/router";

type proptypes = {
  featureRef: any;
  aboutRef: any;
  contactRef: any;
};

const NavbarLanding = (props: proptypes) => {
  const { push } = useRouter();
  const { featureRef, aboutRef, contactRef } = props;

  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-white shadow z-50">
      <div className="px-8 flex justify-between items-center w-full h-full">
        <div className="flex gap-4 items-center">
          <Image
            src={"/@/../Image/Mafwork IMG.png"}
            alt={"Logo"}
            width={60}
            height={60}
            className="max-h-16 object-cover aspect-square"
          />
          <Image
            src={"/@/../Image/Mafwork Text.png"}
            alt={"Logo"}
            width={130}
            height={130}
            className="max-h-16 translate-y-1"
          />
        </div>
        <div className="w-1/2 flex items-center justify-end gap-4">
          <Button
            type="button"
            className="text-blue-700 rounded shadow hover:bg-zinc-100"
            onClick={() =>
              window.scrollTo({
                top: featureRef.current.offsetTop - 40,
                behavior: "smooth",
              })
            }
          >
            Features
          </Button>
          <Button
            type="button"
            className="text-blue-700 rounded shadow hover:bg-zinc-100"
            onClick={() =>
              window.scrollTo({
                top: aboutRef.current.offsetTop - 40,
                behavior: "smooth",
              })
            }
          >
            About
          </Button>
          <Button
            type="button"
            className="text-blue-700 rounded shadow hover:bg-zinc-100"
            onClick={() =>
              window.scrollTo({
                top: contactRef.current.offsetTop,
                behavior: "smooth",
              })
            }
          >
            Contact
          </Button>
          <Button type="button" onClick={() => push("/auth/signin")}>
            Log in
          </Button>
          <Button type="button" onClick={() => push("/auth/signup")}>
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavbarLanding;
