import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { getAllAssignment, getClass } from "@/lib/firebase/service";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = req.headers.authorization?.split(" ")[1];
  if (req.method === "GET") {
    if (token) {
      jwt.verify(
        token,
        process.env.NEXTAUTH_SECRET || "",
        async (err: any, decoded: any) => {
          const data = await getAllAssignment(decoded.id);
          if (data) {
            res.status(200).json({
              statusCode: 200,
              status: true,
              message: "Success",
              data: data,
            });
          } else {
            res.status(200).json({
              statusCode: 400,
              status: false,
              message: "Failed get data",
              data: {},
            });
          }
        }
      );
    }
  } else {
    res
      .status(500)
      .json({ statusCode: 500, status: false, message: "Method not Allowed" });
  }
}
