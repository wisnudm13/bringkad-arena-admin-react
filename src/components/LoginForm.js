import { Button, Grid, Paper, TextField, Divider, Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import BringkadArenaAPI from "../services/InternalAPI";

export function LoginForm() {
    const paperStyle = {
        padding: 30,
        height: "50vh",
        width: "30vw",
        margin: "150px auto",
        borderRadius: "10px"
    }

    const textFieldStyle = {
        borderRadius: 20,
        marginTop: "10px",
        fieldset: {
            borderColor: "green",
            fontFamily: "Poppins-Regular"
        },
        input: {
            color: "#007E3F",
            fontFamily: "Poppins-Regular"
            
        },
        "& label.Mui-focused": {
            color: "green",
            fontFamily: "Poppins-Regular",
          },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "green",
              fontFamily: "Poppins-Regular",

            }
          }
    }

    const emailOrUsernameRef = useRef()
    const errorRef = useRef()
    const navigate = useNavigate()

    const [emailOrUsername, setUsernameEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('error')
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        emailOrUsernameRef.current.focus();
    })

    useEffect(() => {
        document.body.style.backgroundColor = "#007E3F"
    })

    const handleLogin = async (e) => {
        e.preventDefault();

        const loginResponse = await BringkadArenaAPI.loginAdmin({
            email_or_username: emailOrUsername,
            password: password
        })

        if (loginResponse.status !== 200) {
            setError(true)
            setErrorMessage(loginResponse.message)

        } else {
            setSuccess(true)
            localStorage.setItem("authToken", loginResponse.data.auth_token)
            localStorage.setItem("adminName", loginResponse.data.admin_username)
            setUsernameEmail('')
            setPassword('')
            navigate("/")
        }
        
    }

    return (
        <> 
        <Grid align="center">
            <Paper elevation={5} style={paperStyle}>
                <Grid align="center">
                    <h1 style={{fontFamily: "Poppins-Bold"}}>Bringkad Arena Admin</h1>
                    <Divider sx={{
                        "&::before, &::after": {
                        borderColor: "black",
                        },
                    }}>
                        <Typography sx={{fontFamily: "Poppins-Regular", color: "black"}}>Login</Typography>
                    </Divider>
                </Grid>
                {error?<Box sx={{ backgroundColor: "#F93D5C", borderRadius: 2, margin: "10px"}}>
                    <Typography sx={{color: "white", fontFamily: "Poppins-Regular"}}>{errorMessage}</Typography>
                </Box>:null}
                <form onSubmit={handleLogin}>
                    <TextField
                        sx={textFieldStyle}
                        id="outlined-uncontrolled"
                        label="Username or Email"
                        InputLabelProps={{
                            style: {
                                fontFamily: "Poppins-Regular"
                            }
                        }}
                        placeholder="Type here"
                        ref={emailOrUsernameRef}
                        onChange={(e) => setUsernameEmail(e.target.value)}
                        value={emailOrUsername}
                        fullWidth
                        required
                    />
                    <TextField
                        sx={textFieldStyle}
                        id="outlined-uncontrolled"
                        label="Password"
                        InputLabelProps={{
                            style: {
                                fontFamily: "Poppins-Regular"
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
                            <Typography sx={{fontFamily: "Poppins-Bold"}}>Login</Typography>
                    </Button>
                </form>
                {/* <Divider sx={{
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
                </Button> */}
            </Paper>
        </Grid>
    </>
    )
}

