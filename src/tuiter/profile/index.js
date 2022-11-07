import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile);

    return (
        <>
            <div>
                <Link to="/tuiter">
                    <div className="float-start"><i className="bi bi-arrow-left-short fs-4 text-black"></i></div>
                </Link>

                <div className="ms-5">
                    <h3 className="fw-bold m-0">{profile.firstName}</h3>
                    <p className="m-0 text-secondary">357 Tuits</p>
                </div>
            </div>


            <div className="position-relative mt-2">
                <img className="w-100" src="/images/route1.jpg" alt="..."/>
                <div className="row">
                    <div className="col-4">
                        <img className="position-relative rounded-circle" style={{left: 20, top: -50}} width="100px" height="100px" src="/images/yellowstone1.png" alt="..."/>
                    </div>
                    <div className="col-8">
                        <Link to="/tuiter/edit-profile" className="clearfix">
                            <button className="btn btn-light fw-bold rounded-pill float-end mt-3">
                                Edit Profile
                            </button>
                        </Link>
                    </div>
                </div>
            </div>


            <div>
                <h3 className="m-0 fw-bold">{profile.firstName} {profile.lastName}</h3>
                <p className="text-secondary">{profile.handle}</p>
                <div className="pb-2">{profile.bio}</div>
                <div className="text-secondary pb-2">
                    <i className="bi bi-geo-alt"></i>{profile.location}
                    <i className="bi bi-balloon ms-2"></i>Born {profile.dateOfBirth}
                    <i className="bi bi-calendar ms-2"></i>Joined {profile.dateJoined}
                </div>
                <div>
                    <span className="fw-bold">{profile.followingCount} </span>
                    <span className="text-secondary">Following</span>
                    <span className='fw-bold ms-3'>{profile.followersCount} </span>
                    <span className="text-secondary">Followers</span>
                </div>
            </div>

        </>
    )
}

export default ProfileComponent;