import { addData, retrieveDataByField } from "@/lib/firebase/service";
import bcrypt from "bcrypt";

export async function Signin(email: string) {
  const data = await retrieveDataByField("users", "email", email);

  if (data) {
    return data[0];
  } else {
    return null;
  }
}

export async function Signup(
  userData: {
    usernama: string;
    email: string;
    phone: string;
    password: string;
    createdAt?: Date;
    role?: string;
  },
  callback: Function
) {
  const data = await retrieveDataByField("users", "email", userData.email);
  if (data.length > 0) {
    callback(false);
  } else {
    if (userData.role) {
      userData.role = "student";
    }
    userData.password = await bcrypt.hash(userData.password, 10);
    userData.createdAt = new Date();
    await addData("users", userData, (result: boolean) => {
      callback(result);
    });
  }
}
