import React from 'react';
import '../css/Influencers_shoot.css';

function Influencers_shoot({ title_name, features_point, image_path, display_efit, display_custom, swap }) {

    return (
        <>

            {swap ? <div className="influencers_shoot_container-1">
                <div className="influencers_shoot_container_1">
                    <hr className="influencers_shoot_container_1_hr" />
                    <div className='e_fitting_container1_span1' style={{ display: display_efit }}>
                        e-Fitting
                    </div>

                    <div className='coustom_container_1_h3' style={{ display: display_custom }}>

                        Custom Design Service
                    </div>

                    <div className="influencers_shoot_container_1_h1" style={display_efit === "none" && display_custom === "none" ? { marginTop: "5vh" } : {}}>

                        {title_name}
                    </div>

                    <ul className="influencers_shoot_container_1_ul">
                        {features_point.map((feature_point, index) => (
                            <li key={index}>
                                {feature_point}
                            </li>
                        ))}
                    </ul>

                </div>

                <div className="influencers_shoot_container_2">
                    <img
                        className="influencers_shoot_container_2_img"
                        src={image_path}
                        alt={title_name}
                    />
                </div>
            </div> :
                <div className="influencers_shoot_container">


                    <div className="influencers_shoot_container_2">
                        <img
                            className="influencers_shoot_container_2_img"
                            src={image_path}
                            alt={title_name}
                        />
                    </div>
                    <div className="influencers_shoot_container_1">
                        <hr className="influencers_shoot_container_1_hr" />
                        <div className='e_fitting_container1_span1' style={{ display: display_efit }}>
                            e-Fitting
                        </div>

                        <div className='coustom_container_1_h3' style={{ display: display_custom }}>

                            Custom Design Service
                        </div>

                        <div className="influencers_shoot_container_1_h1"
                            style={display_custom === "none" && display_efit === "none" ? { marginTop: "5vh" } : {}}>

                            {title_name}
                        </div>

                        <ul className="influencers_shoot_container_1_ul">
                            {features_point.map((feature_point, index) => (
                                <li key={index}>
                                    {feature_point}
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>}




        </>
    );
}


export default Influencers_shoot;
