import { Endpoints, Scope } from "./api.constants";
import { GlobalConfig } from "../GlobalConfig";
import { ResultApi, ResultAuth } from "./api.entities";

const CLIENT_ID: string = `${GlobalConfig.twitch.CLIENT_ID}`;
const CLIENT_SECRET: string = `${GlobalConfig.twitch.CLIENT_SECRET}`;

export class APITwitch {
  /**
   *
   * @param RedirectURL
   * @returns
   */
  public getURLAuthToken(RedirectURL: string): string {
    const paramas = `?client_id=${CLIENT_ID}&redirect_uri=${RedirectURL}&response_type=code&scope=${Scope.UserRead}`;
    const url = `${GlobalConfig.twitch.URL_AUTH}${Endpoints.authorize}${paramas}`;
    return url;
  }

  /**
   *
   * @param Code
   * @param redirect_uri
   * @returns
   */
  public async getAccesToken(
    Code: string,
    redirect_uri: string
  ): Promise<ResultAuth | any> {
    try {
      const paramas = `?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${Code}&grant_type=authorization_code&redirect_uri=${redirect_uri}`;
      const url = `${GlobalConfig.twitch.URL_AUTH}${Endpoints.accesToken}${paramas}`;
      const response = this.postData(url);
      return response
        .then((data) => {
          const { access_token, refresh_token } = data;
          return { valid: true, access_token, refresh_token };
        })
        .catch((data) => {
          return { valid: false, ...data };
        });
    } catch (error) {
      return { valid: false, access_token: "", message: "Erro" };
    }
  }

  public async revokeToken(
    Code: string,
  ): Promise<ResultAuth | any> {
    try {
      
      const paramas = `?client_id=${CLIENT_ID}&token=${Code}`;
      const url = `${GlobalConfig.twitch.URL_AUTH}${Endpoints.revokeToken}${paramas}`;
      const response = this.postData(url);
      return response
        .then((data) => {
          console.error("Revoke Exito",data)
        })
        .catch((data) => {
          console.error("Revoke Error",data)
        });
    } catch (error) {
      console.error("Revoke Error",error)
    }
  }

  /**
   *
   * @param AccessCode \
   * @returns
   */
  public async getUserData(AccessCode: string): Promise<ResultApi | any> {
    try {
      const url = `${GlobalConfig.twitch.URL_API}${Endpoints.user}`;
  
      return fetch(url, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: "Bearer " + AccessCode,
          "Client-ID": CLIENT_ID,
        }),
      })
        .then(async (response) => {
          const result = await response.json();
          if (response.status !== 200) {
            return { valid: false, ...result };
          } else {
            return { valid: true, data: result };
          }
        })
        .catch((data) => {
          return { valid: false, ...data };
        });
    } catch (error) {
      return { valid: false, message: "Erro" };
    }
  }

  /**
   *
   * @param url
   * @param data
   * @param headers
   * @returns
   */
  private postData = async (url = "", headers = {}) => {
    // Default options are marked with *
    return fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    })
      .then(async (response) => {
        const result = await response.json();
        if (response.status !== 200) {
          throw result;
        } else {
          return result;
        }
      })
      .catch((error) => {
        console.error("error pos", error);
        throw error;
      }); // parses JSON response into native JavaScript objects
  };
}
