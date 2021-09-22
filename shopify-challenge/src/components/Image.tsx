import React from "react";
import '../styling/Image.css'

// This is where we grab the image for each post.

export default function Image(props: ImageProps) {
    let {image, name} = props;
    return (
        <div className='images'>
            <img src={image} alt={name} />
        </div>
    )
}

type ImageProps = {
    image: string;
    name: string
}