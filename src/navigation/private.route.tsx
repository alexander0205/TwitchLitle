import React, { FC } from "react";
import {
    Route,
    Redirect,
} from "react-router-dom";
import { useAuth } from "../models/user.authentication"
interface Props { }

const PrivateRoute: FC<Props> = ({ children, ...props }) => {
    const logeado = useAuth()
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