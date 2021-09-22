import React from 'react';
import '../styling/Card.css'
import CardHeader from './CardHeader';
import Image from './Image';
import Info from './Info';
import Like from './Like';


// This is what holds all content for each post and handles the props for each component of a post

export default function Card(props: any) {
    const {nasaPod} = props
    return(
        <div className = 'card'>
            <CardHeader title={nasaPod.title} date={nasaPod.date}/>
            <Image image={nasaPod.hdurl} name={nasaPod.title} />
            <Info info={nasaPod.explanation} />
            <Like id={nasaPod.date} />
        </div>
    )
}