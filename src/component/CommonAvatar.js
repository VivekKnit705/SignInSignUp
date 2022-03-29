import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from "@mui/material/Button"

const CommonAvatar = ({ primary, secondary }) => {

    function stringAvatar(name) {
        return {
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }

    return (
        <Button>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ backgroundColor: "#3E0EC3", textColor: "black", width: "50px", height: "50px", mr: "10px" }}  {...stringAvatar(`${primary} ${secondary}`)} />
                </ListItemAvatar>
                <ListItemText sx={{ color: "#000000" }} primary={primary} secondary={secondary} />
            </ListItem>
        </Button>
    )
}

export default CommonAvatar;