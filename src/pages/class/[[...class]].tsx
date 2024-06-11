import ClassView from "@/components/views/Class";
import userServices from "@/services/user";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const ClassPage = () => {
  const session: any = useSession();
  const [dataClass, setDataClass] = useState([]);

  useEffect(() => {
    const getClass = async () => {
      const { data } = await userServices.getClass(session.data?.token);
      setDataClass(data.data);
    };

    if (session.data?.token) {
      getClass();
    }
  }, [session]);

  return <ClassView dataClass={dataClass} />;
};

export default ClassPage;
