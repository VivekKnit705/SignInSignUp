import React from 'react'
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";




const inputField = ({ xs, sm, label, name, data, onChange, type }) => {
    return (
        <Grid item xs={xs} sm={sm} >
            <TextField
                type={type}
                label={label}
                fullWidth
                name={name}
                value={data[name]}
                onChange={onChange}
                size="small"
                InputLabelProps={{
                    sx: {

                        fontFamily: "Inter",
                        fontSize: "14px",
                        color: "#8E90A6",
                        fontWeight: "400",
                    },
                }}
            />
        </Grid>
    )
}

export default inputField;