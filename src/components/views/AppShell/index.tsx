import { ThemeContext } from "@/components/context";
import Footer from "@/components/layout/Footer";
import ModalLayout from "@/components/layout/Modal";
import NavbarLayout from "@/components/layout/Navbar";
import SidebarLayout from "@/components/layout/Sidebar";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext } from "react";

type proptypes = {
  children: React.ReactNode;
};

const HomeViews = (props: proptypes) => {
  const Theme = useContext(ThemeContext);
  const { children } = props;
  const disableNavbar = ["auth"];
  const disableSidebar = ["auth"];
  const { pathname } = useRouter();

  return (
    <>
      <Head>
        <title>Mafwork</title>
        <link rel="icon" href="/Image/Mafwork IMG.png" type="image/jpeg" />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </Head>
      <div
        className={`${
          disableSidebar.includes(pathname.split("/")[1])
            ? "block"
            : `${pathname === "/" ? "block" : "flex"}`
        }`}
      >
        {!disableSidebar.includes(pathname.split("/")[1]) &&
          pathname !== "/" && (
            <div className="w-1/6">
              <SidebarLayout />
            </div>
          )}
        <div
          className={`${
            disableSidebar.includes(pathname.split("/")[1])
              ? "w-full"
              : `${pathname === "/" ? "w-full" : "w-5/6"}`
          }`}
        >
          {!disableNavbar.includes(pathname.split("/")[1]) &&
            pathname !== "/" && <NavbarLayout />}
          {children}
          {pathname === "/" && <Footer />}
        </div>
        {Theme?.enterCode && <ModalLayout />}
      </div>
    </>
  );
};

export default HomeViews;
