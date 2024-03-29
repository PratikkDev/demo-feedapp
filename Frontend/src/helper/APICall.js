import { API_URL } from "../common/Constants";

export const apiCall = async (endPoint, method, body, isForm) => {
  const url = `${API_URL}${endPoint}`;
  const obj = {};
  obj.method = method;
  obj.headers = isForm
    ? {
        "Content-Type": "multipart/form-data",
      }
    : {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
  if (body) {
    obj.body = body;
  }
  try {
    const response = await fetch(url, obj);
    const json = await response.json();
    return { success: true, data: json };
  } catch (error) {
    console.error("API Call error --> ", error);
    return { success: false, error };
  }
};
