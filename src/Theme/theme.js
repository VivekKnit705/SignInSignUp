import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: "Inter",
        h4: {
            fontWeight: "700",
            fontSize: "34px",
            color: "#1C1C28",
            marginTop: "44px",
            marginBottom: "1px",
        },
        subtitle1: {
            fontWeight: "400",
            fontSize: "16px",
            color: "#555770",
            marginTop: "2px",
            marginBottom: "20px",
        },
        button: {
            fontFamily: 'Inter',
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "0.5px",
            textTransform: "none",
        },
        textfield: {
            height: 98,
        },
        subHeading: {
            fontWeight: "700",
            fontSize: "22px",
            color: "#28293D",
            marginTop: "6px",
            marginBottom: "6px",
        },
        bodyB2: {
            fontWeight: "400",
            fontSize: "14px",
            color: "#555770",
            textAlign: "center",
        },
        outlined: {
            color: "#3EOEC3",
            fontWeight: "700",
            fontSize: "16px"
        },
        buttonB2: {
            fontWeight: "700",
            fontSize: "96px",
            height: "24px",
            margin: "0px 64px"

        },
    }
});

export default theme;