import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../reducers/profile-reducer";

const EditProfile = () => {
    const navigate = useNavigate();
    const profile = useSelector(state => state.profile);
    const dispatch = useDispatch();

    const [name, setName] = useState(profile.firstName + ' ' + profile.lastName);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);
    const birthdayData = profile.dateOfBirth.split('/')
    const [birthday, setBirthday] = useState(birthdayData[2] + "-" + birthdayData[0] + '-' + birthdayData[1]);

    const updateProfileHandler = () => {
        //call dispatch
        dispatch(updateProfile({name, bio, location, website, birthday}));
        //change route
        navigate('/tuiter/profile');
    }
    return (
        <>
            <Link to="/tuiter/profile">
                <i className="bi bi-x fs-4 text-black"></i>
            </Link>

            <span className="text-black fw-bold fs-4 ms-5">Edit Profile</span>
            <button
                className="btn btn-dark rounded-pill float-end"
                onClick={updateProfileHandler}
            >
                Save
            </button>

            <div className="position-relative mt-2">
                <div className="row">
                    <img className="w-100" style={{"opacity": "0.7"}} src="/images/route1.jpg" alt="..."/>
                    <i className="position-absolute fa fa-camera"
                       style={{left: "40%", bottom: "61%", "opacity": "0.8"}}></i>
                    <i className="position-absolute bi bi-x-circle-fill"
                       style={{left: "52%", bottom: "60%", "opacity": "0.8"}}></i>
                </div>
                <div className="row">
                    <div className="col-4">
                        <img className="position-relative rounded-circle" style={{left: 20, top: -50, "opacity": "0.7"}} width="100px" height="100px" src="/images/yellowstone1.png" alt="..."/>
                        <i className="position-absolute fa fa-rgular fa-camera fa-2x"
                           style={{left: "8%", bottom: "23%", "opacity": "0.8"}}></i>
                    </div>
                    <div className="col-8"></div>
                </div>
            </div>
            {/*<div className="position-relative mt-2 mb-5">*/}
            {/*    <img className="w-100" style={{"opacity": "0.6"}} src="/images/route1.jpg" alt="..."/>*/}
            {/*    <i className="position-absolute bi bi-camera fs-4 ps-2 pe-2 pt-1 pb-1 rounded-circle text-white"*/}
            {/*       style={{"left": "40%", "bottom": "55%", "background": "black", "opacity": "0.6"}}></i>*/}
            {/*    <i className="position-absolute bi bi-x fs-4 ps-2 pe-2 pt-1 pb-1 rounded-pill text-white"*/}
            {/*       style={{"left": "52%", "bottom": "55%", "background": "black", "opacity": "0.6"}}></i>*/}

            {/*    <div className="row position-absolute rounded-circle"*/}
            {/*         style={{*/}
            {/*             "height": "62%",*/}
            {/*             "width": "19%",*/}
            {/*             "left": "4.5%",*/}
            {/*             "bottom": "-30%",*/}
            {/*             "background": "white"*/}
            {/*         }}></div>*/}
            {/*    <img className="position-relative rounded-circle" width="100px" height="100px"*/}
            {/*         style={{left: 20, top: -50}} src="/images/yellowstone1.png" alt="..."/>*/}
            {/*    <i className="position-relative bi bi-camera fs-4 ps-2 pe-2 pt-1 pb-1 rounded-circle text-white"*/}
            {/*       style={{"left": "-8%", "bottom": "-50%", "background": "black", "opacity": "0.6"}}></i>*/}
            {/*</div>*/}


            <form>
                <div className="form-group">
                    <label htmlFor="inputName">Name</label>
                    <input type="text" className="form-control" id="inputName" placeholder="Name"
                           value={name} onChange={(e) => {
                        setName(e.target.value)
                    }}/>
                </div>
                <div className="form-group pt-4">
                    <label htmlFor="inputBio">Bio</label>
                    <textarea className="form-control" id="inputBio" placeholder="Bio"
                              value={bio} onChange={(e) => setBio(e.target.value)}
                    />
                </div>
                <div className="form-group pt-4">
                    <label htmlFor="inputLocation">Location</label>
                    <input type="text" className="form-control" id="inputLocation" placeholder="Location"
                           value={location} onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <div className="form-group pt-4">
                    <input type="text" className="form-control" id="inputWebsite" placeholder="Website"
                           value={website} onChange={(e) => setWebsite(e.target.value)}
                    />
                </div>
                <div className="form-group pt-4">
                    <label htmlFor="inputBirthday">Birth date</label>
                    <input type="date" className="form-control" id="inputBirthday" placeholder="Location"
                           value={birthday} onChange={(e) => setBirthday(e.target.value)}
                    />
                </div>
            </form>

            <div className="mt-4">
                <i className="bi bi-arrow-right-short float-end fs-4"></i>
                <p>Switch to professional</p>
            </div>

        </>
    )
}

export default EditProfile;