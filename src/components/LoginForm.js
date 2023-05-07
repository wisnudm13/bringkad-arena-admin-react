import { Button, Grid, Paper, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import axios from "../tools/axios";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../tools/bringkad_arena/Auth";

export function LoginForm() {
    const paperStyle = {
        padding: 20,
        height: "70vh",
        width: "40vh",
        margin: "20px auto",
        borderRadius: "20px"
    }

    const textFieldStyle = {
        borderRadius: "50px"
    }

    const userNameOrEmailRef = useRef()
    const errorRef = useRef()
    const navigate = useNavigate()

    const [userNameOrEmail, setUsernameEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        userNameOrEmailRef.current.focus();
    })

    useEffect(()=> {
        setErrorMessage('')
    }, [userNameOrEmail, password])

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await loginAdmin({
                email_or_username: userNameOrEmail,
                password: password
            })

            const authToken = response?.data.data.auth_token
            localStorage.setItem("authToken", authToken)

            
            setUsernameEmail('')
            setPassword('')
            setSuccess(true)

            navigate("/")
        } catch (err) {
            if (!err.response) {
                setErrorMessage("No server response")

            } else if (err.response?.status == 422) {
                console.log(err.response.data.error)
                const errors = err.response?.data?.errors["email_or_username"].toString()
                setErrorMessage(errors)

            } else {
                setErrorMessage("Something wrong happen")
            }
            
        }
        
    }

    return (
        <> 
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <h2>Login Admin</h2>
                </Grid>
                <form onSubmit={handleLogin}>
                    <TextField
                        style={textFieldStyle}
                        id="outlined-uncontrolled"
                        label="Username or Email"
                        placeholder="Type here"
                        ref={userNameOrEmailRef}
                        onChange={(e) => setUsernameEmail(e.target.value)}
                        value={userNameOrEmail}
                        fullWidth
                        required
                    />
                    <TextField
                        style={textFieldStyle}
                        id="outlined-uncontrolled"
                        label="Password"
                        placeholder="Type here"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        fullWidth
                        required
                    />

                    <Button type="submit" fullWidth>
                        Submit
                    </Button>
                </form>
            </Paper>
        </Grid>
    </>
    )
}

