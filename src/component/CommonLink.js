import React from "react";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const CommonLink = ({ sx, justifyContent, children, title, href }) => {
    const linkStyle = { color: "#3f50b5", fontWeight: "700", fontSize: "14px", fontFaily: "Inter", textDecoration: "none" }
    const titleStyle = { color: "#555770", fontWeight: "700", fontSize: "14px", fontFaily: "Inter", textDecoration: "none" }
    return (
        <Grid container justifyContent={justifyContent} sx={sx} >
            <Typography sx={titleStyle}>
                {title}
                <Link href={href} variant="body2" sx={linkStyle}>
                    {children}
                </Link >
            </Typography>
        </Grid >
    )
}

export default CommonLink;