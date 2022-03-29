import React from "react";
import lejit from "../images/Lejit.svg";

const Logo = () => {
    return (
        <>
            <img
                src={lejit}
                style={{ width: "64px", height: "33.6px", objectFit: "cover" }}
            />
        </>
    )
}

export default Logo;
