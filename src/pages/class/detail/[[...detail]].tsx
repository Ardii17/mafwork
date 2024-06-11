import DetailClassView from "@/components/views/Class/DetailClass";
import userServices from "@/services/user";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const DetailClassPage = () => {
  const { query } = useRouter();
  const session: any = useSession();
  const { detail } = query;
  const [data, setData] = useState([]);

  useEffect(() => {
    const getClass = async () => {
      const { data } = await userServices.getClassByID(
        session.data?.token,
        detail?.[0] || ""
      );
      setData(data.data);
    };

    if (session.data?.token) {
      getClass();
    }
  }, [session, detail]);

  return <DetailClassView data={data} />;
};

export default DetailClassPage;
