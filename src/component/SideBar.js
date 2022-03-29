import React from "react";
import image from "../images/image.jpg";
import Box from "@mui/material/Box";

const SideBar = () => {
    return (
        <Box style={{ width: "100%", height: "100%" }}>
            <img
                src={image}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
                alt="Loading"
            />
        </Box>
    )
}

export default SideBar;