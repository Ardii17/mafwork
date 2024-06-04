import FormSignup from "@/components/forms/FormSignup";
import AuthLayout from "@/components/layout/Auth";
import { FormEvent } from "react";

type proptypes = {
  handleSignup: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  loading: boolean;
  error: string;
};

const ViewSignup = (props: proptypes) => {
  const { handleSignup, loading, error } = props;
  return (
    <AuthLayout>
      <FormSignup handleSignup={handleSignup} loading={loading} error={error} />
    </AuthLayout>
  );
};

export default ViewSignup;
