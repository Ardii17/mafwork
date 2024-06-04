import ProfileView from "@/components/views/Profile";
import { useRouter } from "next/router";

const ProfilePage = () => {
  const { query } = useRouter();
  return <ProfileView query={query.q} />;
};

export default ProfilePage;
