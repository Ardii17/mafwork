import FormSignin from "@/components/forms/FormSignin";
import AuthLayout from "@/components/layout/Auth";
import { FormEvent } from "react";

type proptypes = {
  handleSignin: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  loading: boolean;
  error: string;
};

const ViewSignin = (props: proptypes) => {
  const { handleSignin, loading, error } = props;
  return (
    <AuthLayout>
      <FormSignin handleSignin={handleSignin} loading={loading} error={error} />
    </AuthLayout>
  );
};

export default ViewSignin;
