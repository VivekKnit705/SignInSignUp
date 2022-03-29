import React from "react";
import { useState } from "react";

import SideBar from "../component/SideBar";
import Logo from "../component/Logo";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import CommonField from "../component/CommonField";
import CommonButton from "../component/CommonButton";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import ResetpasswordPopup from "../component/ResetpasswordPopup";


const ResetPassword = () => {
    const isActive = useMediaQuery("(min-width:600px)");
    const boxStyle = { mx: 12, my: 12, display: "flex", flexDirection: 'column' }
    const submitButtonStyle = { mt: "20px", mb: "10px", color: "#8E90A6", backgroundColor: "#EBEBF0", fontWeight: "700", fontSize: "14px", fontFaily: "Inter", textDecoration: "none", }


    const [error, setError] = useState("");
    const [data, setData] = useState({
        email: "",
    });
    function resetPassword(email) {
        return sendPasswordResetEmail(auth, email);
    }

    const handelChange = ({ target }) => {
        const name = target.name;
        const value = target.value;


        setData({ ...data, [name]: value })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setOpenPopup(true);
        resetPassword(data.email);

        setData({
            email: "",
        })
    }
    const [openPopup, setOpenPopup] = useState(false);


    return (
        <Box>
            <Grid container sx={{ height: '100vh' }}>
                <Grid item xs={12} sm={9} md={6} component={Paper} elevation={6} square>
                    <form onSubmit={handleSubmit}>
                        <Box sx={boxStyle}>
                            <Logo />
                            <Typography variant="h4">Reset Your Password</Typography>
                            <Typography variant="subtitle1">Enter your email below for reset link</Typography>

                            <Box sx={{ mt: "20px", mb: "20px" }}>
                                <Grid container spacing={2}>
                                    <CommonField xs={12} label="Email Address" size="small" name='email' data={data} onChange={handelChange} />
                                </Grid>
                            </Box>
                            <CommonButton variant="contained" sx={submitButtonStyle} fullWidth >
                                Reset Password
                            </CommonButton>
                        </Box>
                    </form>
                </Grid>

                <ResetpasswordPopup
                    openPopup={openPopup}
                    setOpenPopup={setOpenPopup}
                >
                </ResetpasswordPopup>
                <Grid item sm={3} md={6}>
                    {isActive && (<SideBar />)}
                </Grid>
            </Grid>

        </Box >

    )
};


export default ResetPassword;