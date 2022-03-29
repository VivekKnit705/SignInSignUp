import React, { useEffect, useState } from "react";
import { GetFirebaseData } from "../Firebase/databaseDriver";
import Box from "@mui/material/Box";
import CommonAvatar from "../component/CommonAvatar";
import CommonButton from "../component/CommonButton";
import Grid from "@mui/material/Grid"
import { auth } from "../Firebase/firebase";
import Header from "./Header"
import { sendPasswordResetEmail } from "firebase/auth";
import ResetpasswordPopup from "../component/ResetpasswordPopup";


const Profile = () => {

    const [Email, setEmail] = useState("");
    const [fetched, setFetched] = useState(false);
    const [uploadedData, setUploadedData] = useState([]);

    useEffect(() => {
        if (!fetched) {
            GetFirebaseData({ setUploadedData });
            setFetched(true);
        }
    }, [fetched]);
    const userData = uploadedData;

    useEffect(() => {
        auth.onAuthStateChanged((data) => {
            setEmail(data.email);
        })
    }, [])
    function resetPassword(email) {
        return sendPasswordResetEmail(auth, email);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setOpenPopup(true);
        resetPassword(Email);
    }
    const [openPopup, setOpenPopup] = useState(false);



    const submitButtonStyle = { mt: "20px", mb: "10px", color: "#FFFFFF", backgroundColor: "#3E0EC3", fontWeight: "700", fontSize: "14px", fontFaily: "Inter", textDecoration: "none", }

    return (
        <Box container sx={{ width: "100vw", height: "100vh" }}>
            <Header />
            <form onSubmit={handleSubmit}>
                <Box sx={{ mt: 2, mb: 2 }}>
                    {userData.map((item, i) => (
                        (Email == item.email &&
                            <Grid container key={i}>
                                <Grid item sx={12} sm={9} >
                                    <CommonAvatar primary={`${item.firstName} ${item.lastName}`} secondary={Email} />
                                </Grid>
                                <Grid item sx={12} sm={3}>
                                    <CommonButton variant="contained" sx={submitButtonStyle} >Reset Password</CommonButton>
                                </Grid>
                            </Grid>
                        )
                    ))}
                </Box>
            </form>
            <ResetpasswordPopup
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
            </ResetpasswordPopup>
        </Box>
    )
}

export default Profile;