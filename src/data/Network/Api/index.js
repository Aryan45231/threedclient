import { AppExcaptions } from "../ApiException";
export class ApiServices {
  getPostRequest = async (url, body) => {
    // creating body that has to be send on the server
    const requestBody = this.createRequestBody("POST", body)
    try {
      // requesting on server
      const response = await fetch(url, requestBody)
      this.jsonResponse = this.returnResponse(response)
    } catch (error) {
      throw error
    }
    return this.jsonResponse;
  }
  getGetRiquest = async (url) => {
    const requestBody = this.createRequestBody("GET", {})
    try {

      const response = await fetch(url, requestBody)

      this.jsonResponse = this.returnResponse(response)
    } catch (err) {
      throw err
    }
    return this.jsonResponse;
  }
  createRequestBody = (method, body) => {   // Create the body of the request which has to send on server
    if (method === "GET") {
      return {
        method: method,
        headers: {
          "Content-Type": "application/json",
          token: `barriar ${localStorage.getItem("token")}`,
        }
      }
    }
    return {
      method: method,
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        token: `barriar ${localStorage.getItem("token")}`,
      }
    }
  }
  returnResponse = async (response) => {     // expracting the responsenae came form  the server
    const body = await response.json();
    switch (response.status) {
      case 200:
        return body;
      case 201:
        return body;
      case 400:
        // handling the errors
        throw new AppExcaptions(
          body.message,
          "UnAuthorised"
        );
      case 404:
        throw new AppExcaptions(body.message, "Bad Request");
      default:
        throw new AppExcaptions(body.message, "Server Error");
    }
  }
}