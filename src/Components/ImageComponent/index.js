import React from "react";

function RoundedImage({ src, alt, className }) {
    return <img src={src} alt={alt} className={`${className}`} />;
}

export default RoundedImage;
