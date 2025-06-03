import React from 'react';
import "../css/DocDetails.css"

function DocDetails({ title, description, usecase, usecase_img, step_by_step, Pro_Tips }) {
    console.log(step_by_step)
    return (
        <div>
            <span className='GaideHeader'>{title}</span>

            <div>
                <p className='Guidediscription'>{description}</p>

                <div className='usecase_Main_conatiner' >
                    <div className='usecase_div'>
                        <h3>Use Cases</h3>
                        <span className='usecasediscription' >
                            {usecase.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}
                        </span>

                    </div>
                    <div className='usecase_img_div'>
                        {usecase_img && <img style={{ height: "100%", width: "100%" }} src={usecase_img} alt="Use case visual" />}

                    </div>





                </div>

                <div className='StepbyStep_main_container'>
                    <div className='StepbyStep'>
                        <h3>Step-by-Step Guide</h3>
                        <div className='StepbyStep_smallbox1' >
                            {step_by_step.map((stepObj, idx) => (
                                <div key={idx} >

                                    <div className='StepbyStep_smallbox'>
                                        <div className='step_container-1'>
                                            <div className='step_small_header'>{stepObj.step}</div>
                                            <div style={{lineHeight:"2vw"}}>
                                                {stepObj.step_point.map((point, i) => (
                                                    <p key={i}>{point}</p>
                                                ))}

                                            </div>
                                        </div>



                                        {stepObj.image && (
                                            <div className='Step_images_div'>
                                                <img style={{ height: "100%", width: "100%", objectFit: "contain" }} src={stepObj.image} alt="step" />
                                            </div>
                                        )}
                                    </div>


                                </div>
                            ))}
                        </div>


                    </div>


                </div>

                <div className='Pro_tips_container'>
                    {Pro_Tips && Pro_Tips.length > 0 && (
                        <div className='Protip'>
                            <h3>🔄 Pro Tips for Best Results</h3>
                            <div className='proTips_point'>

                                {Pro_Tips.map((tip, index) => (
                                    <p key={index} className='InnerboxProtip'>
                                        ✔ <strong  >{tip.protipsTitle}</strong> – {tip.protipsPoint}
                                    </p>
                                ))}
                            </div>

                        </div>
                    )}


                </div>


            </div>
        </div>
    );
}

export default DocDetails;
