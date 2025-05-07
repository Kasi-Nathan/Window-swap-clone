import React from "react";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import video1 from "./Video/window.mp4";

const Window = ({ videoSrc, username }) => {
    const [liked, setLiked] = useState(false);
    const [comments, setComments] = useState([]);
    const [newComments, setNewComments] = useState("");
    const [showControls, setShowcontrols] = useState(true);

    const toggleLike = () => setLiked(!liked);

    const handleCommentSubmit = (e) => {
        e.preventDefault();

        if (!newComments.trim()) return;
        setComments([...comments, newComments]);
        setNewComments("");
    };

    useEffect(() => {
        const handleUserActivity = () => {
            setShowcontrols(true);
            clearTimeout(window.inactivityTimer);
            window.inactivityTimer = setTimeout(() => {
                setShowcontrols(false);
            }, 3000);
        };
        window.addEventListener("mousemove", handleUserActivity);
        window.addEventListener("touchstart", handleUserActivity);

        handleUserActivity();

        return () => {
            window.removeEventListener("mousemove", handleUserActivity);
            window.removeEventListener("touchstart", handleUserActivity);
            clearTimeout(window.inactivityTimer);
        };
    }, [])

    return(
        <div className="fixed inset-0 bg-black flex items-center justify-center">
            <video src={video1} controls autoPlay className="w-full h-full object-cover"/>

            {showControls && (
                <div className="absolute bottom-10 left-5 text-white space-y-4 transition-opacity duration-300">
                    <button onClick = {toggleLike}  className="text-2xl">
                    {liked ? (<i className="fa fa-heart-o heart" aria-hidden="true"></i>) : ( <i className="fa fa-heart-o" aria-hidden="true"></i>) } </button>
                    {/* <button onClick={handleShare}></button> */}
                    <form onSubmit={handleCommentSubmit} className="flex items-center gap-2 mt-2">
                        <input
                        type="text"
                        value={newComments}
                        onChange={(e) => setNewComments(e.target.value)}
                        placeholder="Add a comment..."
                        className="bg-white text-black rounded-full px-3 py-1 text-sm"
                        />
                        <button type="submit" className="text-lg"><i className="fa fa-comment" aria-hidden="true"></i></button>
                        
                    </form>
                </div>
                

            )}
        </div>
    )
}



export default Window;