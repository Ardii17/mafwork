import HomeView from "@/components/views/Home";
import { useSession } from "next-auth/react";

const HomePage = () => {
  return <HomeView />;
};

export default HomePage;
