import React from "react";
import { useState, useEffect } from "react";
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
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import { AddDatatoFirebase, GetFirebaseData } from "../Firebase/databaseDriver";
import { useTranslation } from 'react-i18next';


const SignUp = () => {
    const submitButtonStyle = { mt: "20px", mb: "10px", color: "#8E90A6", backgroundColor: "#EBEBF0", fontWeight: "700", fontSize: "14px", fontFaily: "Inter", textDecoration: "none", }
    const signUpGamilButton = { mt: "5px", mb: "10px", color: "#555770", backgroundColor: "#FFFFFF", fontWeight: "400", fontSize: "16px", fontFaily: "Inter", textTransformation: "none", textAlign: 'left', ml: "-8px", }
    const { t } = useTranslation();
    const isActive = useMediaQuery("(min-width:600px)");
    const navigate = useNavigate();
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });
    const [error, setError] = useState("");
    const [fetched, setFetched] = useState(false);

    function signUp(firstName, lastName, email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const handelChange = ({ target }) => {
        const name = target.name;
        const value = target.value;
        setData({ ...data, [name]: value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(data.firstName, data.lastName, data.email, data.password);
            AddDatatoFirebase(data);
            navigate("/login");
        } catch (err) {
            console.log(err.message);
            setError(err.message);
        }
        setData({
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        })
    }


    function signInWithGoogle() {
        const provide = new GoogleAuthProvider();
        return signInWithPopup(auth, provide);
    }



    return (
        <Box>
            <Grid container sx={{ height: '100vh' }}>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box sx={{ mx: 12, my: 12, display: "flex", flexDirection: 'column' }}>
                        <Logo />
                        <Typography variant="h4">SignUp</Typography>
                        <Typography sx={{ color: "red" }}>{error}</Typography>
                        <CommonButton variant="text" fullWidth={false} sx={signUpGamilButton} onClick={signInWithGoogle} >Sign up with your email</CommonButton>
                        <form onSubmit={handleSubmit}>
                            <Box sx={{ mt: "20px", mb: "20px" }}>
                                <Grid container spacing={2}>
                                    <CommonField xs={12} sm={6} label="First Name" size="small" name='firstName' data={data} onChange={handelChange} />
                                    <CommonField xs={12} sm={6} label="Last Name" size="small" name='lastName' data={data} onChange={handelChange} />
                                    <CommonField xs={12} label="Email Address" size="small" name='email' data={data} onChange={handelChange} />
                                    <CommonField xs={12} label="Password" type="password" size="small" name='password' data={data} onChange={handelChange} />
                                </Grid>
                            </Box>
                            <CommonButton variant="contained" sx={submitButtonStyle} fullWidth  >
                                Sign Up
                            </CommonButton>
                            <CommonLink href={"/login"} sx={{ mt: 1, mb: 1 }} justifyContent="center" title={"Already have an account? "}>Sign In</CommonLink>
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


export default SignUp;