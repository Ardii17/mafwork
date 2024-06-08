import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { addData, getClass, updateData } from "@/lib/firebase/service";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body;
  const token = req.headers.authorization?.split(" ")[1] || "";
  if (req.method === "GET") {
    if (token) {
      jwt.verify(
        token,
        process.env.NEXTAUTH_SECRET || "",
        async (err: any, decoded: any) => {
          const data = await getClass(decoded.id);
          console.log(data);
          if (data) {
            res.status(200).json({
              statusCode: 200,
              status: true,
              message: "Success",
              data: data,
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
  } else if (req.method === "POST") {
    if (token) {
      jwt.verify(
        token,
        process.env.NEXT_AUTH_SECRET || "",
        async (err: any, decoded: any) => {
          await addData("classes", data, (status: boolean, message: string) => {
            if (status) {
              res.status(200).json({
                statusCode: 200,
                status: true,
                message: "Success upload Data",
                data: message,
              });
            } else {
              res.status(400).json({
                statusCode: 400,
                status: false,
                message: "Failed upload Data",
              });
            }
          });
        }
      );
    }
  } else if (req.method === "PUT") {
    const { q } = req.query;
    if (token) {
      jwt.verify(
        token,
        process.env.NEXTAUTH_SECRET || "",
        async (err: any, decoded: any) => {
          await updateData(`classes/${q}`, data, (status: boolean) => {
            if (status) {
              res.status(200).json({
                statusCode: 200,
                status: true,
                message: "Success update Data",
              });
            } else {
              res.status(400).json({
                statusCode: 400,
                status: false,
                message: "Failed update Data",
              });
            }
          });
        }
      );
    }
  } else {
    res.status(500).json({
      statusCode: 500,
      status: false,
      message: "Method not allowed",
    });
  }
}
