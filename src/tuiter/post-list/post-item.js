import React from "react";

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

const PostItem = (
    {
        post = {
            "avatarIcon": "ElonMusk.png",
            "userName": "Elon Musk",
            "handle": "elonmusk",
            "time": "23h",
            "title": "Amazing show about @Inspiration4x mission!",
            "hasTitleUrl": false,
            "titleurl": "",
            "image": "inspiration4.png",
            "emphasis": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "text": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
            "hasTextUrl": true,
            "textUrl": "netflix.com",
            "comments": "4.2K",
            "retuits": "3.5K",
            "likes": "37.5K"
        }
    }
) => {
    return(
    <div className="list-group-item">
    <div className="row pt-2">
        <div className="col-1">
            <img src={`/images/${post.avatarIcon}`} className="rounded-circle" width="50px" height="50px"/>
        </div>

        <div className="col-11">
            <span className="ps-1 fw-bold">{post.userName}</span> <i className="ps-1 pt-1 fa fa-check-circle"></i>
            <span className = "ps-1 text-secondary">@{post.handle} · {post.time}</span>
            <a className="float-end text-secondary" href="#"> <i className="fa fa-ellipsis-h"></i></a>
            <div className="ps-1"> {post.title} {hasTitleUrl(post)} </div>
        </div>
    </div>

    <div className="row pt-2">
        <div className="col-1"></div>
        <div className="col-11 p-0">
            <div >
                <img className="w-100 rounded" src={`/images/${post.image}`}/>
            </div>
            <div className="border rounded-bottom border-light pb-2 ps-2 pe-2">
                <div>{post.emphasis}</div>
                <div className="text-secondary">{post.text}</div>
                {hasTextUrl(post)}
            </div>
        </div>
    </div>

    <div className="row pt-2 ps-5 text-secondary">
        <div className="col-3">
             <span><i className="fa fa-comment"></i></span>
             <span className="ps-2">{post.comments}</span>
        </div>
        <div className="col-3">
            <span><i className="fa fa-retweet"></i></span>
            <span className="ps-2">{post.retuits}</span>
        </div>
        <div className="col-3">
            <span><i className="fa fa-heart"></i></span>
            <span className="ps-2">{post.likes}</span>
        </div>
        <div className="col-3">
            <span><i className="fa fa-upload"></i></span>
        </div>
        <div className="border-bottom border-light pb-2"></div>
    </div>
    </div>
    );
};

export default PostItem;
