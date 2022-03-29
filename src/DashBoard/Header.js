import React, { useState, useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Box from "@mui/material/Box"
import Logo from "../component/Logo";
import CommonAvatar from "../component/CommonAvatar";
import CommonLink from "../component/CommonLink";
import Divider from '@mui/material/Divider';
import Grid from "@mui/material/Grid";
import { GetFirebaseData } from "../Firebase/databaseDriver";
import { auth } from "../Firebase/firebase";


const Header = ({ name }) => {
    const sx = { mt: "15px", mb: "10px", color: "#555770", backgroundColor: "#FFFFFF", fontWeight: "700", fontSize: "14px", fontFaily: "Inter", textTransformation: "none", textAlign: 'left', }
    const [language, setLanguage] = useState("Language");

    const handleChange = () => {
        setLanguage(e.target.value);
    }
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


    return (
        <>
            <AppBar sx={{ backgroundColor: "#FFFFFF", color: "#F23BBB", boxShadow: "0px 0px 0px 0px", position: "relative" }} >
                <Toolbar>
                    <Logo />
                    <Tabs sx={{ marginLeft: "auto", justifyContent: "space-between" }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <CommonLink sx={{ mr: "10px", ml: "10px" }} href="/home" >Dashboard</CommonLink>
                            <CommonLink sx={{ mr: "10px", ml: "10px" }} href="/users" >Users</CommonLink>
                            <CommonLink sx={{ mr: "10px", ml: "10px" }} href="/profilepage" >Profile</CommonLink>
                        </Box>

                        <Grid container>
                            {userData.map((item, i) => (
                                (Email == item.email &&
                                    <Grid item xs={12} key={i}>
                                        <CommonAvatar primary={`${item.firstName} ${item.lastName}`} secondary={item.email} />
                                    </Grid>
                                )
                            ))}
                        </Grid>

                    </Tabs>
                </Toolbar>
                <Divider />
            </AppBar>

        </>
    )
}

export default Header;