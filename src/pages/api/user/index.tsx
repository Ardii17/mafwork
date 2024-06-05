import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { retrieveDataByID } from "@/lib/firebase/service";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.headers.authorization?.split(" ")[1];
  if (req.method === "GET") {
    if (token) {
      jwt.verify(
        token,
        process.env.NEXTAUTH_SECRET || "",
        async (err: any, decoded: any) => {
          const data = await retrieveDataByID("usersmafwork", decoded.id);
          if (data) {
            res.status(200).json({
              statusCode: 200,
              status: true,
              message: "Success",
              data: data.class,
            });
          } else {
            res.status(400).json({
              statusCode: 400,
              status: false,
              message: "Failed",
              data: {},
            });
          }
        }
      );
    }
  } else {
    res
      .status(500)
      .json({
        statusCode: 500,
        status: false,
        message: "Method not Available",
      });
  }
}
