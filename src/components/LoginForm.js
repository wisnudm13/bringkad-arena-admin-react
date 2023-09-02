import { Button, Grid, Paper, TextField, Divider, Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import axios from "../tools/axios";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../services/bringkad_arena/Auth";
import { Label } from "@mui/icons-material";

export function LoginForm() {
    const paperStyle = {
        padding: 30,
        height: "50vh",
        width: "30vw",
        margin: "100px auto",
        borderRadius: "10px"
    }

    const textFieldStyle = {
        borderRadius: 20,
        marginTop: "10px",
        fieldset: {
            borderColor: "green",
            fontFamily: "Poppins"
        },
        input: {
            color: "#007E3F",
            fontFamily: "Poppins"
            
        },
        "& label.Mui-focused": {
            color: "green",
            fontFamily: "Poppins",
          },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "green",
              fontFamily: "Poppins",

            }
          }
    }

    const userNameOrEmailRef = useRef()
    const errorRef = useRef()
    const navigate = useNavigate()

    const [userNameOrEmail, setUsernameEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('error')
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        userNameOrEmailRef.current.focus();
    })

    useEffect(() => {
        document.body.style.backgroundColor = "#007E3F"
    })

    // useEffect(()=> {
    //     setErrorMessage('')
    // }, [userNameOrEmail, password])

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await loginAdmin({
                email_or_username: userNameOrEmail,
                password: password
            })

            const authToken = response?.data.data.auth_token
            const adminUserName = response?.data.data.user_name
            localStorage.setItem("authToken", authToken)
            localStorage.setItem("admin_name", adminUserName)

            
            setUsernameEmail('')
            setPassword('')
            setSuccess(true)

            navigate("/")
        } catch (err) {
            if (!err.response) {
                setErrorMessage("No server response")

            } else if (err.response?.status == 422) {
                const errors = err.response?.data?.errors["email_or_username"].toString()
                setErrorMessage(errors)
                setError(true)

            } else {
                setError(true)
                setErrorMessage("Something wrong happen")
            }
            
        }
        
    }

    return (
        <> 
        <Grid sx={{ backgroundColor: "#007E3F"}} align="center">
            <Paper elevation={5} style={paperStyle}>
                <Grid align="center">
                    <h1 style={{fontFamily: "Poppins"}}>Bringkad Arena Admin</h1>
                    <Divider sx={{
                        "&::before, &::after": {
                        borderColor: "black",
                        },
                    }}>
                        <Typography sx={{fontFamily: "Poppins", color: "black"}}>Login</Typography>
                    </Divider>
                </Grid>
                {error?<Box sx={{ backgroundColor: "#F93D5C", borderRadius: 2, margin: "10px"}}>
                    <Typography sx={{color: "white", fontFamily: "Poppins"}}>{errorMessage}</Typography>
                </Box>:null}
                <form onSubmit={handleLogin}>
                    <TextField
                        sx={textFieldStyle}
                        id="outlined-uncontrolled"
                        label="Username or Email"
                        InputLabelProps={{
                            style: {
                                fontFamily: "Poppins"
                            }
                        }}
                        placeholder="Type here"
                        ref={userNameOrEmailRef}
                        onChange={(e) => setUsernameEmail(e.target.value)}
                        value={userNameOrEmail}
                        fullWidth
                        required
                    />
                    <TextField
                        sx={textFieldStyle}
                        id="outlined-uncontrolled"
                        label="Password"
                        InputLabelProps={{
                            style: {
                                fontFamily: "Poppins"
                            }
                        }}
                        placeholder="Type here"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        fullWidth
                        required
                    />

                    <Button 
                        sx={{ 
                            borderRadius: 2,
                            color: "#007E3F", 
                            borderColor: "#007E3F",
                            '&:hover': {
                                backgroundColor: '#007E3F',
                                color: 'white',
                                borderColor: "#007E3F"
                            },
                            marginTop: "10px",
                            justifyContent: "center"
                        }} 
                        variant="outlined"
                        fullWidth
                        type="submit"
                        >
                            <Typography sx={{fontFamily: "Poppins"}}>Login</Typography>
                    </Button>
                </form>
                <Divider sx={{
                    "&::before, &::after": {
                    borderColor: "black",
                    },
                    marginTop: "15px"
                }}>
                    <Typography sx={{fontFamily: "Poppins", color: "black"}}>Forgot Password?</Typography>
                </Divider>
                <Button 
                    sx={{ 
                        borderRadius: 2,
                        color: "#007E3F", 
                        borderColor: "#007E3F",
                        '&:hover': {
                            backgroundColor: '#007E3F',
                            color: 'white',
                            borderColor: "#007E3F"
                        },
                        marginTop: "10px",
                        justifyContent: "center"
                    }} 
                    variant="outlined"
                    fullWidth>
                        <Typography sx={{fontFamily: "Poppins"}}>Reset Password</Typography>
                </Button>
            </Paper>
        </Grid>
    </>
    )
}

