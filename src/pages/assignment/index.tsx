import AssignmentView from "@/components/views/Assignment";
import userServices from "@/services/user";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const AssignmentPage = () => {
  const session: any = useSession();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getAssignment = async () => {
      const { data } = await userServices.getAllAssign(session.data?.token);
      setData(data.data);
    };

    if (session.data?.token) {
      getAssignment();
    }
  }, [session]);

  return <AssignmentView data={data} />;
};

export default AssignmentPage;
