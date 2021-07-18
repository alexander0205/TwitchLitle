import React, { useEffect, useState } from "react";
import './Tab2.css';
import { logout, getUserData } from "../../models/user.authentication"
import Index from '../../components/tabs/profile'

const Tab2: React.FC = () => {
  const [userData, setUserData] = useState({
    profile_image_url: "",
    display_name: "",
    email: "email"
  });

  const [showLoading, setShowLoading] = useState(true);
  const [error, setError] = useState("");
  const [toast, showToast] = useState(false);


  useEffect(() => {
    const loadUserData = async () => {
      const result = await getUserData()
      if (result.valid) {
        const { profile_image_url, display_name, email } = result.data.data[0]
        setUserData({ profile_image_url, display_name, email })

      } else {
        showToast(true)
        setError(result.message)
        console.error("Erro login twitch", result)
      }
      console.log(result)
      setShowLoading(false)
    }
    loadUserData()

  }, [])
  return (<Index toast={toast}
    showToast={showToast}
    error={error}
    showLoading={showLoading}
    setShowLoading={setShowLoading}
    logout={logout}
    userData={userData}

    />
  );
};

export default Tab2;
