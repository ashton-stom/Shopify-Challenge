import React from "react";
import '../styling/Info.css'

// This grabs the description for each post.

export default function Info(props: InfoProps) {
    const {info} = props;
    return (
        <div className='info'>
            <h3>{info}</h3>
        </div>
    )
}

type InfoProps = {
    info: string;
}