import ViewSignup from "@/components/views/auth/Signup";
import authServices from "@/services/auth";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

export default function Signup() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form: any = e.target as HTMLFormElement;
    const data = {
      username: form.username.value,
      email: form.email.value,
      phone: form.phone.value,
      password: form.password.value,
    };

    try {
      const result = await authServices.registerAccount(data);
      if (result) {
        setLoading(false);
        router.push("/auth/signin");
        form.reset();
      } else {
        setLoading(false);
        setError("Email sudah terdaftar");
      }
    } catch (error) {
      setLoading(false);
      setError("Email sudah terdaftar");
    }
  };

  return (
    <ViewSignup handleSignup={handleSignup} loading={loading} error={error} />
  );
}
