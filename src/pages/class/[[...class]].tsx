import ClassView from "@/components/views/Class";
import userServices from "@/services/user";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const ClassPage = () => {
  const session: any = useSession();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getClass = async () => {
      const { data } = await userServices.getClass(session.data?.token);
      setData(data.data);
    };

    if (session.data?.token) {
      getClass();
    }
  }, [session]);

  return <ClassView data={data} />;
};

export default ClassPage;
