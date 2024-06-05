import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Loading from "@/components/ui/Loading";
import Link from "next/link";
import { FormEvent } from "react";

type proptypes = {
  handleSignup: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  loading: boolean;
  error: string;
};

const FormSignup = (props: proptypes) => {
  const { handleSignup, loading, error } = props;
  return (
    <form
      className="w-2/3 flex flex-col gap-6 rounded-lg shadow min-h-2/3 h-auto p-4 items-center bg-white"
      onSubmit={handleSignup}
    >
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-xl text-blue-700">Daftar Mafwork</h1>
        <p className="opacity-60">Selamat datang di tempat Mafwork</p>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <Input type="text" name="fullname" placeholder="fullname" required />
        <Input type="text" name="username" placeholder="username" required />
        <Input
          type="number"
          name="phone"
          placeholder="your phone number"
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="example@your.email"
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <p className="text-red-500 text-sm">{error ? error : ""}</p>
        <Button type="submit">
          {loading ? <Loading size={30} /> : "Daftar"}
        </Button>
        <hr className="w-full" />
        <Button type="button">Google</Button>
        <Link href={"/auth/signin"} className="opacity-70 text-sm text-center">
          Sudah punya akun?{" "}
          <span className="text-blue-700 font-semibold">Masuk</span>
        </Link>
      </div>
    </form>
  );
};

export default FormSignup;
