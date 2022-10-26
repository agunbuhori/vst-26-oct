import axios from "../config/axios";
import { IAuth } from "../models/IAuth";
import { IResponse } from "../models/IResponse";

export const authenticate = async (
  email: string,
  password: string
): Promise<IAuth | undefined> => {
  try {
    const request = await axios.post<IResponse<IAuth>>("/login", {
      email,
      password,
    });
    if (request.data.status) {
      return request.data.data;
    }
  } catch (error) {
    console.log(error);
  }
};
