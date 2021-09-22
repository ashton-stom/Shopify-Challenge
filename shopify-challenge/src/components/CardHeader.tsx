import React from "react";
import '../styling/CardHeader.css'

// This is the header for each post. This will include the date and name of the picture.

export default function CardHeader(props: CardHeaderProps) {
    let {title, date} = props;
    return (
        <div className='cardHeader'>
            <h2>{title}</h2>
            <h3>Published: <span>{date}</span></h3>
        </div>
    )
}

type CardHeaderProps = {
    title: string;
    date?: string;
}