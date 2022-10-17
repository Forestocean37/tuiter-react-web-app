const hasTitleUrl = (post) => {
    if(post.hasTitleUrl){
        return `<a href="#">${post.titleurl}</a>`;
    }
    return "";
}

const hasTextUrl = (post) => {
    if(post.hasTextUrl){
        return `<a class="text-secondary" href="#"> <i class="fa-solid fa-link"></i> ${post.textUrl}</a>`;
    }
    return "";
}

const PostItem = (post) => {
    return(`
    
    <div class="row pt-2">
        <div class="col-1">
            <img src="${post.avatarIcon}" class="rounded-circle" width="50px", height="50px"/>
        </div>
        
        <div class="col-11">
            <span class="ps-1 text-white fw-bold">${post.userName}</span> <i class="ps-1 pt-1 fa fa-check-circle text-white"></i> 
            <span class = "ps-1 text-secondary">@${post.handle} · ${post.time}</span>
            <a class="float-end text-secondary" href="#"> <i class="fa-solid fa-ellipsis"></i></a>
            <div class="ps-1 text-white"> ${post.title} ${hasTitleUrl(post)} </div>                     
        </div>
    </a>
    
    <div class="row pt-3">    
        <div class="col-1"></div>
        <div class="col-11">
            <div class="row border rounded-top border-secondary">
                <img src="${post.image}" class="w-100">
            </div>
            <div class="row border rounded-bottom border-secondary">
                <div class="w-100 text-white">${post.emphasis}</div>
                <div clas="text-secondary">${post.text}</div>
                ${hasTextUrl(post)}
            </div>
        </div>       
    </div>
    
    <div class="row pt-2 ps-5 text-secondary">
        <div class="col-3">
             <span><i class="far fa-comment"></i></span>
             <span class="ps-2">${post.comments}</span>
        </div>
        <div class="col-3">
            <span><i class="fa fa-retweet"></i></span>
            <span class="ps-2">${post.retuits}</span>
        </div>
        <div class="col-3">
            <span><i class="far fa-heart"></i></span>
            <span class="ps-2">${post.likes}</span>
        </div>
        <div class="col-3">
            <span><i class="fa fa-upload"></i></span>
        </div>
        <div class="border-bottom border-light pb-2"></div>
    </div>
    `);
}

export default PostItem;