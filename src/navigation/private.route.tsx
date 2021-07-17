import React, { FC, useContext } from "react";
import {
    Route,
    Redirect,
} from "react-router-dom";
import { userContext } from "../context/user.context"
import { useAuth } from "../models/user.authentication"
interface Props { }

const PrivateRoute: FC<Props> = ({ children, ...props }) => {
    const logeado = useAuth()
    console.log(logeado,"logeado")
    let auth = useContext(userContext);
    return (
        <Route
            {...props}
            render={({ location }) =>
            logeado[0] ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute