import React, { FC, useEffect, useState } from 'react'
import { browserAuthentication, login, useAuth, getAccesTokenByAccesCode } from '../../models/user.authentication'
import Index from '../../components/login/index'
import { RouteComponentProps } from 'react-router'
import { Redirect } from "react-router-dom";
var qs = require('qs')
const IndexLogin: FC<RouteComponentProps> = ({ location }) => {
  const [showLoading, setShowLoading] = useState(true);
  const [error, setError] = useState("");
  const [toast, showToast] = useState(true);


  const code = qs.parse(location.search, { ignoreQueryPrefix: true }).code
  const logeado = useAuth()

  useEffect(() => {
    const authenticationUser = async () => {

      if (code) {

        setShowLoading(true)
        const result = await getAccesTokenByAccesCode(code)
        
        if (result.valid) {
          login({accessTokenKey:result.access_token, accessToken:result.access_token || "", refreshToken:""})
        } else {
          showToast(true)
          setError(result.message)
          console.error("Erro login twitch", result)
        }

        setShowLoading(false)
      }
    }

    authenticationUser()
  }, [code])

  return logeado[0] ? <Redirect to={{ pathname: "/", }} /> :
    <Index
      code={code}
      authentication={browserAuthentication}
      showLoading={showLoading} setShowLoading={setShowLoading}
      error={error}
      toast={toast} 
      showToast={showToast}
    />
}
export default IndexLogin
