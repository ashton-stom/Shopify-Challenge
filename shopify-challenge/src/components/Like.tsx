import React from "react";
import '../styling/Like.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp as reg } from "@fortawesome/free-regular-svg-icons";
import { faThumbsUp as solid } from '@fortawesome/free-solid-svg-icons';
import useLocalStorage from "../hooks/useLocalStorage";

// This component is for the like button of each post

export default function Like(props: any) {
    const { id } = props;
    const [liked, setLiked] = useLocalStorage<boolean>(id, false);

    return(
        <div onClick={() => setLiked(!liked)} className='likeButton'>
            <FontAwesomeIcon icon={liked ? solid : reg} /> 
            <span>{liked ? 'Unlike' : 'Like'} </span>
        </div>
    )
}