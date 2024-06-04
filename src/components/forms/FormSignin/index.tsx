import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Loading from "@/components/ui/Loading";
import Link from "next/link";
import { FormEvent } from "react";

type proptypes = {
  handleSignin: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  loading: boolean;
  error: string;
};

const FormSignin = (props: proptypes) => {
  const { handleSignin, loading, error } = props;
  return (
    <form
      className="w-2/3 flex flex-col gap-6 rounded-lg shadow min-h-2/3 h-auto p-4 items-center bg-white"
      onSubmit={handleSignin}
    >
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-xl text-blue-700">Masuk Mafwork</h1>
        <p className="opacity-60">Selamat datang di tempat Mafwork</p>
      </div>
      <div className="flex flex-col gap-4 ">
        <Input
          type="text"
          name="email"
          placeholder="example@your.email"
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="your password"
          required
        />
        <div className="flex gap-4 w-full">
          <input type="checkbox" name="aggree" required className="w-6" />
          <p className="opacity-70 text-sm">
            Dengan mencentang ini, Kamu menyetujui{" "}
            <span className="text-blue-700">Syarat & Ketentuan</span> dari web
            ini
          </p>
        </div>
        <p className="text-red-500 text-sm">{error ? error : ""}</p>
        <Button type="submit">
          {loading ? <Loading size={30} /> : "Masuk"}
        </Button>
        <hr className="w-full" />
        <Button type="button">Google</Button>
        <Link href={"/auth/signup"} className="opacity-70 text-sm text-center">
          Belum punya akun?{" "}
          <span className="text-blue-700 font-semibold">Daftar</span>
        </Link>
      </div>
    </form>
  );
};

export default FormSignin;
