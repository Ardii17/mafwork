import instance from "@/lib/axios/instance";

const userServices = {
  getProfile: (token: string) =>
    instance.get("/api/user/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  getClass: (token: string) =>
    instance.get("/api/user/class", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  getAllAssign: (token: string) =>
    instance.get("/api/user/assignment", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  addClass: (token: string, data: any[]) =>
    instance.post("/api/user/class", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  updateProfile: (token: string, data: any) =>
    instance.put("/api/user/profile", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  updateClass: (token: string, classID: string, data: any) =>
    instance.put(`/api/user/class?q=${classID}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};

export default userServices;
