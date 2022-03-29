import React from "react";
import Dialog from '@mui/material/Dialog';
import Typography from "@mui/material/Typography";
import CommonButton from "../component/CommonButton";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom"

const ResetpasswordPopup = ({ title, children, openPopup, setOpenPopup }) => {
    const submitButtonStyle = { mt: "50px", mb: "10px", color: "#8E90A6", backgroundColor: "#EBEBF0", fontWeight: "700", fontSize: "14px", fontFaily: "Inter", textDecoration: "none", }

    const navigate = useNavigate();
    const handelClick = () => {
        setOpenPopup(false);
        navigate("/login");

    }

    return (
        <Dialog open={openPopup} onClose={() => setOpenPopup(false)}>
            <Box width="408px" height="198px" sx={{ p: "20px", display: "flex", flexDirection: 'column', textAlign: "center" }} >
                <Typography variant="subHeading">Reset Link Sent Successfully</Typography>
                <Typography variant="bodyB2">The reset link to reset your password has been sent to your email, use the link to reset your password </Typography>
                <CommonButton variant="outlined" sx={submitButtonStyle} fullWidth onClick={handelClick} >
                    Close
                </CommonButton>

            </Box>
        </Dialog >

    )
}

export default ResetpasswordPopup;