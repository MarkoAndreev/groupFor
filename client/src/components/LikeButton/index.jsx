import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useMutation } from '@apollo/client';
import { ADD_LIKE } from '../../utils/mutations';


const LikeButton = ({ postId }) => {
    const [likes, setLikes] = useState(0);
    const [addLike, { error, data }] = useMutation(ADD_LIKE);

    const likePost = async () => {
        try {
            const { data } = await addLike({ variables: { postId } });
            setLikes(likes + 1);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <FontAwesomeIcon icon={ faHeart } style={{color : "var(--brown"}} onClick={likePost} />
            <p>{likes}</p>
        </div>
    );
};

export default LikeButton;
