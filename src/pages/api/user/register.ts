import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { Signup } from "@/services/auth/services";

type Data = {
  status: boolean;
  statusCode: number;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    await Signup(req.body, (result: boolean) => {
      if (result) {
        res
          .status(200)
          .json({ status: true, statusCode: 200, message: "success" });
      } else {
        res
          .status(400)
          .json({ status: false, statusCode: 400, message: "success" });
      }
    });
  } else {
    res
      .status(400)
      .json({ status: false, statusCode: 400, message: "method not allowed" });
  }
}
