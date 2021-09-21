import React from "react";

// This is the header for each post.

export default function CardHeader(props: CardHeaderProps) {
    let {title, date} = props;
    return (
        <div>
            <h2>{title}</h2>
            <h3>{date}</h3>
        </div>
    )
}

type CardHeaderProps = {
    title: string;
    date?: string;
}