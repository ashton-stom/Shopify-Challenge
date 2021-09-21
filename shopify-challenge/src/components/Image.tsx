import React from "react";


// This is where we grab the image for each post

export default function Image(props: ImageProps) {
    let {image} = props;
    return (
        <div>
            <h3>{image}</h3>
        </div>
    )
}

type ImageProps = {
    image: any;
}