import ViewSignin from "@/components/views/auth/Signin";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const callbackUrl: any = router.query.callbackUrl || "/";
  const handleSignin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form: any = e.target as HTMLFormElement;

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: form.email.value,
        password: form.password.value,
        callbackUrl,
      });

      if (!res?.error) {
        setLoading(false);
        router.push("/home");
        form.reset();
      } else {
        setLoading(false);
        setError("Email atau Password salah");
      }
    } catch (error) {
      setLoading(false);
      setError("Email atau Password salah");
    }
  };
  return (
    <ViewSignin handleSignin={handleSignin} loading={loading} error={error} />
  );
}
