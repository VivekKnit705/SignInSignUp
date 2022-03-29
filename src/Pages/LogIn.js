import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import SideBar from "../component/SideBar";
import Logo from "../component/Logo";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import CommonField from "../component/CommonField";
import CommonButton from "../component/CommonButton";
import CommonLink from "../component/CommonLink";
import { auth } from "../Firebase/firebase";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const LogIn = () => {
    const submitButtonStyle = { mt: "20px", mb: "10px", color: "#8E90A6", backgroundColor: "#EBEBF0", fontWeight: "700", fontSize: "14px", fontFaily: "Inter", textDecoration: "none", }
    const signUpGamilButton = { mt: "5px", mb: "10px", color: "#555770", backgroundColor: "#FFFFFF", fontWeight: "400", fontSize: "16px", fontFaily: "Inter", textTransformation: "none", textAlign: 'left', ml: "-8px", }
    const boxStyle = { mx: 12, my: 12, display: "flex", flexDirection: 'column' }
    const isActive = useMediaQuery("(min-width:600px)");
    const navigate = useNavigate();

    //-------  useState Hook
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");

    //  -----handling the change in the value of user email and password
    const handelChange = ({ target }) => {
        const name = target.name;
        const value = target.value;
        setData({ ...data, [name]: value })
    }


    // ------- sign
    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }



    //-------Handling when user submit 
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await logIn(data.email, data.password);
            console.log(data.password);
            navigate("/header");

        } catch (err) {
            console.log(err.message);
            setError(err.message);
        }
        setData({
            email: "",
            password: "",
        })
    }

    //----- function for user SignInWithGoogle
    function signInWithGoogle() {
        const provide = new GoogleAuthProvider();
        return signInWithPopup(auth, provide);
    }



    return (
        <Box>
            <Grid container sx={{ height: '100vh' }}>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box sx={boxStyle}>
                        <Logo />
                        <Typography variant="h4">Sign In</Typography>
                        <Typography variant="" sx={{ color: "red" }}>{error}</Typography>
                        <CommonButton variant="text" fullWidth={false} sx={signUpGamilButton} onClick={signInWithGoogle} >Sign up with your email</CommonButton>
                        <form onSubmit={handleSubmit}>
                            <Box sx={{ mt: "20px", mb: "20px" }}>
                                <Grid container spacing={2}>
                                    <CommonField xs={12} label="Email Address" size="small" name='email' data={data} onChange={handelChange} />
                                    <CommonField xs={12} type="password" label="Password" size="small" name='password' data={data} onChange={handelChange} />
                                    <CommonLink href="/resetpassword" sx={{ mt: 1, mb: 1 }} justifyContent="right">Reset Password</CommonLink>
                                </Grid>
                            </Box>
                            <CommonButton variant="contained" sx={submitButtonStyle} fullWidth  >
                                Sign In
                            </CommonButton>
                            <CommonLink href="/" sx={{ mt: 1, mb: 1 }} justifyContent="center" title={"Don't have an account? "}>Sign Up</CommonLink>
                        </form>
                    </Box>
                </Grid>
                <Grid item sm={4} md={7}>
                    {isActive && (<SideBar />)}
                </Grid>
            </Grid>

        </Box >

    )
};


export default LogIn;