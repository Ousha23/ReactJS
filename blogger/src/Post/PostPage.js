import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from './Comment';
import profileImage from '../images/profile.png';

const PostPage = () => {
    const { id } = useParams(); 
    const [comments, setComments] = useState([]);
    const [post, setPost] = useState([]);

    // const comments = [
    //     {
    //         email: 'toto@gmail.com',
    //         content: 'Mon commentaire'
    //     },
    //     {
    //         email: 'toto@gmail.com',
    //         content: 'Mon commentaire 2'
    //     },
    //     {
    //         email: 'toto@gmail.com',
    //         content: 'Mon commentaire 3'
    //     }
    // ];
//--- On récupère les données depuis l'API avec fetch.then
//--- le post
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/'+id)
        .then((response) => response.json()
        .then(data =>setPost(data)));
    }, [id]);
//--- les commentaires
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/'+id+'/comments')
        .then((response) => response.json()
        .then(data =>setComments(data)));
    }, [id]);

    return (
        <div className="container post-container">
            <div className="post">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
            <div className="comments-container">
                <h2 className="comments-title">Commentaires</h2>
                {/* //on fait une map sur le tableau comments afin d'afficher les données */}
                {comments.map((comments, index) => (
                    <Comment key={index} email={comments.email} content={comments.body} src={profileImage} />
                ))}
            </div>
        </div>
    );
};

export default PostPage;
