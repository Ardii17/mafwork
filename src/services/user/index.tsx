import instance from "@/lib/axios/instance";

const userServices = {
  getClass: (token: string) =>
    instance.get("/api/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};

export default userServices;
