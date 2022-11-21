import React from "react";
import {useDispatch} from "react-redux";
// import {deleteTuit} from "./tuits-reducer";
import {deleteTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";


const hasTitleUrl = (post) => {
    if(post.hasTitleUrl){
        return <a href="#">${post.titleurl}</a>;
    }
    return "";
}

const hasTextUrl = (post) => {
    if(post.hasTextUrl){
        return <a className="text-secondary" href="#"> <i className="fa fa-link"></i>{post.textUrl}</a>;
    }
    return "";
}

const TuitItem = (
    {
        post = {
            "_id": 123, "topic": "Space", "userName": "SpaceX",
            "title": "SpaceX's Mission",
            "time": "2h",
            "image": "spacex.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "disliked": false,
            "dislikes": 0,
            "handle": "@spacex",
            "link": "space.com",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return(
    <li className="list-group-item">
    <div className="row pt-2">
        <div className="col-2">
            <img src={`/images/${post.image}`} className="rounded-circle" width="40px" height="40px"/>
        </div>

        <div className="col-10">
            <span className="ps-1 fw-bold">{post.userName}</span> <i className="ps-1 pt-1 fa fa-check-circle" style={{color: 'blue'}}></i>
            <span className = "ps-1 text-secondary">{post.handle} · {post.time}</span>
            {/*<a className="float-end text-secondary" href="#"> <i className="fa fa-ellipsis-h"></i></a>*/}
            <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(post._id)}></i>

        </div>
    </div>

    <div className="row p-0">
        <div className="col-2"></div>
        <div className="col-10">
            <div className="border rounded-bottom border-light ps-2 pe-2">
                <div>{post.emphasis}</div>
                <div className="text">{post.tuit}</div>
                {hasTextUrl(post)}
            </div>
        </div>
    </div>

    <div className="row pt-3 ps-5 text-secondary">
        <div className="col-2"></div>
        <div className="col-10 p-0">
            <div className="row">
            <div className="col-2">
                <span><i className="fa fa-comment"></i></span>
                <span className="ps-1">{post.replies}</span>
            </div>
            <div className="col-2">
                <span><i className="fa fa-retweet"></i></span>
                <span className="ps-1">{post.retuits}</span>
            </div>
            <div className="col-2">
                <span><i onClick={() => dispatch(updateTuitThunk({
                    ...post,
                    liked: true,
                    likes: post.likes + 1
                }))} className="fa fa-heart" style={{color: 'red'}}></i></span>
                <span className="ps-1">{post.likes}</span>
            </div>
            <div className="col-2">
                <span><i onClick={() => dispatch(updateTuitThunk({
                    ...post,
                    disliked: true,
                    dislikes: post.dislikes + 1
                }))} className="fa fa-thumbs-down" style={{color: 'gray'}}></i></span>
                <span className="ps-1">{post.dislikes}</span>
            </div>
            <div className="col-2">
                <span><i className="fa fa-upload"></i></span>
            </div>
            </div>
        <div className="border-bottom border-light pb-2"></div>
        </div>
    </div>
    </li>
    )
}

export default TuitItem;
