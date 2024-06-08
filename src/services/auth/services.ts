import { addData, retrieveDataByField } from "@/lib/firebase/service";
import bcrypt from "bcrypt";

export async function Signin(email: string) {
  const data = await retrieveDataByField("usersmafwork", "email", email);

  if (data) {
    return data[0];
  } else {
    return null;
  }
}

export async function Signup(
  userData: {
    fullname: string;
    usernama: string;
    email: string;
    phone: string;
    password: string;
    createdAt?: Date;
    role?: string;
    classJoined?: any[];
    classesOwned?: any[];
  },
  callback: Function
) {
  const data = await retrieveDataByField(
    "usersmafwork",
    "email",
    userData.email
  );
  if (data.length > 0) {
    callback(false);
  } else {
    if (userData.role) {
      userData.role = "student";
    }
    userData.password = await bcrypt.hash(userData.password, 10);
    userData.createdAt = new Date();
    userData.classJoined = [];
    userData.classesOwned = [];

    await addData("usersmafwork", userData, (result: boolean) => {
      callback(result);
    });
  }
}
