import PostSummaryList from "../index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                       <!-- search field and cog -->
                <div class="col-11 pos-relative">
                    <span class="position-absolute p-2"><i class="fas fa-search fa-magnifying-glass"></i></span>
                    <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
                </div>

                <div class="col-1">
                    <a href="#"><i class="fa-solid fa-gear fa-2x float-end"></i></a>
                </div>           
           </div>
           <ul class="nav mb-2 mt-2 nav-tabs">
                      <!-- tabs -->
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
           </ul>
           <!-- image with overlaid text -->
           <div class="position-relative">
                <img src="../../images/starship.png" width="100%"/>
                <h2 class="position-absolute start-0 bottom-0 ps-2 text-dark">SpaceX's Starship</h2>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;

