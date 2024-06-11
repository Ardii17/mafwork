import userServices from "@/services/user";
import { useSession } from "next-auth/react";
import { signOut as nextSignOut } from "next-auth/react";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

type Data = {
  profile: any;
  setProfile: Dispatch<SetStateAction<any>>;
  updateLocalStorageProfile: (userId: string, updatedProfile: any) => void;
  generateRandomCode: () => string;
  secondsToCurrentDate: (seconds: number) => {
    date: number;
    month: number;
    year: number;
  };
  signOut: () => void;
  handleJoinedClass: (newID: string, callback: Function) => void;
  enterCode: boolean;
  setEnterCode: Dispatch<SetStateAction<boolean>>;
};

export const ThemeContext = createContext<Data | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [enterCode, setEnterCode] = useState(false);
  const [profile, setProfile] = useState<any>(null);
  const session: any = useSession();
  const updateLocalStorageProfile = (userId: string, updatedProfile: any) => {
    localStorage.setItem(`profile_${userId}`, JSON.stringify(updatedProfile));
  };

  const handleJoinedClass = async (newID: string, callback: Function) => {
    const dataProfile = {
      classJoined: [...(profile?.classJoined || []), newID],
    };

    const result = await userServices.updateProfile(
      session.data?.token,
      dataProfile
    );

    if (result.status === 200) {
      if (profile) {
        updateLocalStorageProfile(session.data?.user.id, {
          ...profile,
          classJoined: [...(profile?.classJoined || []), newID],
        });
        callback(true);
      }
    }
  };

  function generateRandomCode() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    const charactersLength = characters.length;

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      result += characters.charAt(randomIndex);
    }

    return result;
  }

  const secondsToCurrentDate: any = (seconds: number) => {
    const date = new Date(seconds * 1000);
    const currentDate = date.getDate();
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();
    // Array yang berisi nama bulan
    const months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    return {
      date: currentDate,
      month: months[currentMonth],
      year: currentYear,
    };
  };
  const signOut = () => {
    localStorage.removeItem(`profile_${session.data?.user.id}`);
    setProfile(null);
    nextSignOut({ callbackUrl: "/" });
  };

  useEffect(() => {
    const getProfile = async () => {
      if (session?.status === "authenticated") {
        const cachedProfile = localStorage.getItem(
          `profile_${session.data?.user.id}`
        );
        if (cachedProfile) {
          setProfile(JSON.parse(cachedProfile));
        } else {
          const { data } = await userServices.getProfile(session.data?.token);
          delete data.data.password;
          setProfile(data.data);
          localStorage.setItem(
            `profile_${session.data?.user.id}`,
            JSON.stringify(data.data)
          );
        }
      }
    };

    getProfile();
  }, [session]);

  const value = {
    profile,
    setProfile,
    updateLocalStorageProfile,
    handleJoinedClass,
    secondsToCurrentDate: (seconds: number) => secondsToCurrentDate(seconds),
    signOut,
    generateRandomCode,
    enterCode,
    setEnterCode,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
