const WhoToFollowListItem = (who) => {
    return (`
        <div class="list-group-item">
        <div class="row">
            <div class="col-2 my-auto ">
                <img src=${who.avatarIcon} class="rounded-circle w-100 h-100">
            </div>
            <div class="col-7 my-auto text-nowrap">
                <div>
                    <span class="fw-bold">${who.userName}</span>
                    <span><i class="fas fa-check-circle"></i></span>
                </div>
                <div class="text-secondary text-white">
                    @${who.handle}
                </div>
            </div>
            <div class="col-3 my-auto text-nowrap">
                <button class="btn btn-primary float-end rounded-pill">Follow</button>
            </div>
        </div>
        </div>
    `);
}

export default WhoToFollowListItem;