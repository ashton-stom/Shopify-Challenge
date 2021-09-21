import React from "react";

// This grabs the description for each post.

export default function Info(props: InfoProps) {
    let {info} = props;
    return (
        <div>
            <h3>{info}</h3>
        </div>
    )
}

type InfoProps = {
    info: string;
}