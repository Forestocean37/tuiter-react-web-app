const NavigationSidebar = (active) => {
    return (`
    <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fab fa-twitter"></i>
        </a>
     
        <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action d-flex
            ${active === "home" ? "active" : ""}">            
            <i class="fas fa-home"></i>&nbsp;
            <span class="d-none d-xl-block">Home</span>
        </a> 
     
        <a href="../ExploreScreen/index.html"
           class="list-group-item list-group-item-action d-flex ${active === "explore" ? "active" : ""}">
            <i class="fa-solid fa-hashtag"></i>&nbsp;
            <span class="d-none d-xl-block">Explore</span>
        </a>     
      
        <a href="#" class="list-group-item list-group-item-action d-flex ${active === "notifications" ? "active" : ""}">
            <i class="fa-regular fa-bell"></i>&nbsp;     
            <span class="d-none d-xl-block">Notifications</span>
        </a>   
      
        <a href="#" class="list-group-item list-group-item-action d-flex ${active === "messages" ? "active" : ""}">
            <i class="fa-regular fa-envelope"></i>&nbsp;
            <span class="d-none d-xl-block">Messages</span>
        </a>   
        
        <a href="../bookmarks/index.html" class="list-group-item list-group-item-action d-flex ${active === "bookmark" ? "active" : ""}">
            <i class="fa-regular fa-bookmark"></i>&nbsp;
            <span class="d-none d-xl-block">Bookmark</span>
        </a>
        
        <a href="#" class="list-group-item list-group-item-action d-flex ${active === "lists" ? "active" : ""}">
             <i class="fa-regular fas fa-list"></i>&nbsp;
             <span class="d-none d-xl-block">Lists</span>
        </a>
        
        <a href="#" class="list-group-item list-group-item-action d-flex ${active === "profile" ? "active" : ""}">
            <i class="fa-regular fas fa-user"></i>&nbsp;
            <span class="d-none d-xl-block">Profile</span>
        </a>
        
        <a href="#" class="list-group-item list-group-item-action d-flex ${active === "more" ? "active" : ""}">
            <span class="fa-stack fa-2xs">
                <i class="fa-solid fa-circle fa-stack-2x"></i>&nbsp;
                <i class="fa-solid fa-ellipsis fa-stack-1x wd-fg-color-white" style="color: white"></i>
            </span>
            <span class="col-10 d-none d-xl-block">More</span>
        </a>
       
<!--        <button class="btn btn-primary w-100 mt-2 rounded-pill">Tuit</button>  -->
    </div>
    <div class="d-grid mt-2">
     <a href="tuit.html"
        class="btn btn-primary btn-block rounded-pill">
        Tuit</a>
   </div>
 `);
}
export default NavigationSidebar;