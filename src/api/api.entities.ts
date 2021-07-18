export type ResultAuth = {
  valid: boolean;
  access_token: string;
  refresh_token: string;
  message: string;
};
export type ResultApi = {
  valid: boolean;
  data: {
    data: [{ email: string; display_name: string; profile_image_url: string }];
  };
  message: string;
};
