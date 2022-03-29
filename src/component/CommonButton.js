import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";


const CommonButton = ({ variant, children, onClick, sx, fullWidth }) => {

    return (
        <Grid>
            <Button type="submit" variant={variant} fullWidth={fullWidth} sx={sx} onClick={onClick}>
                {children}
            </Button>
        </Grid >
    )
}

export default CommonButton;