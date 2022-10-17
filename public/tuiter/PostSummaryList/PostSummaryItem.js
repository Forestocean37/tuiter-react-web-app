const PostSummaryItem = (post) => `
    <li class="list-group-item">
        <div class="row">
            <div class="col-10 my-auto">
                <b class="text-secondary">${post.topic}</b>
                <div class="fw-bold">
                    <span>${post.userName}</span>
                    <span><i class="fa-solid fa-circle-check"></i></span>
                    <span class="text-secondary"> - ${post.time}</span>
                </div>
                <div class="fw-bold">
                    ${post.title}
                </div>
            </div>
            <div class="col-2 my-auto align-self-center">
                <img src="${post.image}" class="float-end rounded-2" width="80px" height="80px"/>
            </div>
        </div>
    </li>`

export default PostSummaryItem;