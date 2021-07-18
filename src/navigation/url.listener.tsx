import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { App } from "@capacitor/app";
const AppUrlListener: React.FC<any> = () => {
  let history = useHistory();

  useEffect(() => {
    App.addListener("appUrlOpen", (data: any) => {
      const filterPop = data.url.includes("https://")
        ? ".starter"
        : ".starter:/";
      const slug = data.url.split(filterPop).pop();
      if (slug) {
        history.push(slug);
      }
    });
  }, []);

  return null;
};

export default AppUrlListener;
