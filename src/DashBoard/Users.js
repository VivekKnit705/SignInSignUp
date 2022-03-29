import React, { useEffect, useState } from "react";
import { GetFirebaseData } from "../Firebase/databaseDriver";
import CommonAvatar from "../component/CommonAvatar";
import Grid from "@mui/material/Grid";
import Divider from '@mui/material/Divider';
import Header from "./Header";
import Box from "@mui/material/Box";

const Users = () => {
    const [fetched, setFetched] = useState(false);
    const [uploadedData, setUploadedData] = useState([]);

    useEffect(() => {
        if (!fetched) {
            GetFirebaseData({ setUploadedData });
            setFetched(true);
        }
    }, [fetched]);
    const userData = uploadedData;

    return <>
        <Box container sx={{ width: "100vw", height: "100vh" }}>
            <Box>
                <Header />
                <Grid container>
                    {userData.map((item, i) => (
                        <Grid item xs={12} key={i}>
                            <CommonAvatar primary={`${item.firstName} ${item.lastName}`} secondary={item.email} />
                        </Grid>
                    ))}
                    <Divider />
                </Grid>
            </Box>
        </Box>
    </>
}

export default Users;