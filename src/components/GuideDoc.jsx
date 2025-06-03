import React, { useState } from 'react';
import "../css/GuideDoc.css";
import DocDetails from './DocDetails';
import Model from '../../assets/images/image.avif';
import Cloth from "../../assets/images/cloth.png"
import WebpageBggenerator from "../../assets/images/Bggenerator.png"
import Seocontent from "../../assets/images/secoimage1.png"
import Seoimage2 from "../../assets/images/Seoimage2.png"
import Imageenhancer from "../../assets/images/imageenhancer.png"
import Bgremover from "../../assets/images/bgremoveer.png"

function GuideDoc() {
    const features = [
        "StyleUAI( e-Fitting )",
        "Background Generator",
        "SEO Content Generator",
        "Image Enhancer",
        "Background Remover"
    ];

    const [selectedFeature, setSelectedFeature] = useState(features[0]); // Default is Try-On

    const tryonstep_by_step = [
        {
            step: "Step 1: Upload Model Image",
            step_point: [
                "• Formats: JPG/PNG (Max 50MB)",
                "• Best Practices:",
                "  o Use front-facing, well-lit images.",
                "  o Avoid busy backgrounds for better AI accuracy.",
                "  o Alternative: Select from StyleUAI’s preloaded model gallery."
            ],
            image: Model
        },
        {
            step: "Step 2: Upload Garment Image",
            step_point: [
                "• Recommended:",
                "  o Flat lay or mannequin shot (garment fully visible).",
                "  o Minimal wrinkles, shadows, or obstructions."
            ],
            image: Cloth
        }
    ];

    const tryonPro_Tips = [
        {
            protipsTitle: "Lighting Consistency",
            protipsPoint: "Match lighting between model & garment."
        },
        {
            protipsTitle: "High-Resolution Images ",
            protipsPoint: "Avoid pixelation for realistic draping."

        },
        {
            protipsTitle: "Neutral Poses ",
            protipsPoint: "Arms slightly away from body for best fit."

        }
    ];

    const bgstep_by_step = [
        {
            step: "Upload Image",
            step_point: ["• Formats: JPG/PNG (Max 10MB)",
                "• Describe Background in Detail",
                '• Example 1: "Luxury marble studio with soft shadows"',
                '• Example 2: "Sunset beach with palm trees"',
                "• Generate Variants",
                "• Click Generate → AI produces variants"
            ]
            , image: WebpageBggenerator
        }
    ];

    const bgPro_Tips = [
        {
            protipsTitle: "Mood & Lighting",
            protipsPoint: 'Add descriptions like "Dark moody runway with spotlight"'
        },
        {
            protipsTitle: "Texture Specificity",
            protipsPoint: 'Example: "Cozy knitted sweater on a rustic wooden table"'
        }
    ];

    const Seostep_by_step = [
        {
            step: "Step 1: Select Platform:",
            step_point: ["o	Instagram (hashtag-rich)",
                "o	Amazon (keyword-focused)",
                'o	Myntra (trend-driven)"',
                'o	Custom (tailored prompts)',
            ],
            image: Seocontent
        }, {
            step: "Step 2: Upload Product Image ",
            step_point: ["o	Upload Image (JPG/PNG, Max 5MB).",
                "o Click Generate → AI writes title + description.",
            ],
            image: Seoimage2
        }

    ];

    const SeoPro_Tips = [
        {
            protipsTitle: "Use High-Quality Images ",
            protipsPoint: 'AI analyzes visuals for accurate text.'
        },
        {
            protipsTitle: "Edit Outputs ",
            protipsPoint: 'Refine for brand voice before publishing.'
        }
    ];

    const IMgEnhancestep_by_step = [
        {
            step: "Upload Product Image ",
            step_point: [
                "1.Upload image (JPG/PNG, Max 10MB).",
                '2.Click Enhance → AI upscales & sharpens.',
                '3.Compare before/after with slider toggle.',
            ],
            image: Imageenhancer
        }

    ];

    const IMgEnhancePro_Tips = [
        {
            protipsTitle: "Vintage clothing restoration",

        },
        {
            protipsTitle: "Print-quality lookbooks",

        }
    ];

    const Bgremovertep_by_step = [
        {
            step: "Steps to Use ",
            step_point: [
                "1. Upload image → Click Remove Background.",
                '2.	Download isolated subject as PNG',
            ],
            image: Bgremover
        }

    ];

    const BgremoverPro_Tips = [
        {
            protipsTitle: "Use high-contrast images",
            protipsPoint: 'to improve edge detection accuracy.'

        },
        {
            protipsTitle: "Batch process similar shots",
            protipsPoint: 'to speed up catalog or e-commerce workflows.'

        }
    ];



    return (
        <div className='main_container'>
            <div className='container_1'>
                <div className='Guide_Header'>Content</div>
                <div className="feature-container">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedFeature(feature)}
                            className={`feature-item ${selectedFeature === feature ? "active" : ""}`}
                        >
                            {feature}
                        </div>
                    ))}
                </div>

            </div>

            <div className='container_2'>
                {selectedFeature === "StyleUAI( e-Fitting )" && (
                    <>

                        <DocDetails
                            title="e-Fitting (Model & Garment Virtual Try-On)"
                            description="Generate hyper-realistic model try-ons for e-commerce, marketing, and design validation—without physical garments or photoshoots."
                            usecase={[
                                "• E-commerce: Display products on diverse models instantly.",
                                "• Marketing: Create ads without hiring photographers.",
                                "• Design Validation: Preview garments before production.",
                                "• Social Media: Rapidly generate styled looks for campaigns."
                            ]}
                            usecase_img="\images\images\try_on.jpg"
                            step_by_step={tryonstep_by_step}
                            Pro_Tips={tryonPro_Tips}
                        />
                        <div className='Recommended_container'>
                            <div className='recommended_header'>

                                <div>

                                    <div className='container_headerpart'>
                                        <h3>
                                            Optimized Product Image Standards
                                        </h3>
                                        <div className='tips_discription'>
                                            For optimal clarity and consistency across product listings, we recommend using isolated product images with a clean background. Avoid using images that include models, as they may distract from the product details and hinder uniform presentation.


                                        </div>
                                    </div>
                                    <div className='table_conatainer'>
                                        <table border="1">
                                            <tr>
                                                <th>Recommended</th>
                                                <th>Not Recommended</th>
                                            </tr>
                                            <tr>
                                                <td className='Recomanded_img'>
                                                    <img style={{ width: '60%', height: "100%" }} src="\images\images\ChatGPT Image May 19, 2025, 10_05_13 AM.png" alt="" />
                                                </td>
                                                <td>
                                                    <img style={{ width: '40%', height: "100%" }} src='\images\images\ChatGPT Image May 19, 2025, 10_23_13 AM.png' alt="" />
                                                </td>
                                            </tr>
                                        </table>

                                    </div>


                                </div>


                                <div className='container_headerpart'>

                                    <h3>
                                        Image Selection Guidelines
                                    </h3>
                                    <div className='tips_discription'>
                                        Use a single garment image without hangers for a clean and professional presentation. Avoid multiple clothing items or images showing garments on hangers, as they distract from the product's focus.
                                    </div>
                                    <div className='table_conatainer'></div>


                                    <table border="1">
                                        <tr>
                                            <th>Recommended</th>
                                            <th>Not Recommended</th>
                                        </tr>
                                        <tr>
                                            <td className='Recomanded_img'>
                                                <img style={{ width: '60%', height: "100%" }} src="\images\images\ChatGPT Image May 19, 2025, 10_39_03 AM.png" alt="" />
                                            </td>
                                            <td>
                                                <img style={{ width: '40%', height: "110%" }} src='\images\images\ChatGPT Image May 19, 2025, 10_33_14 AM.png' alt="" />
                                            </td>
                                        </tr>

                                    </table>

                                </div>
                                <div className='container_headerpart'>

                                    <h3>
                                        Garment Image and Model Consistency
                                    </h3>
                                    <div className='tips_discription'>
                                        If the model's dress or garment does not match the standalone product image, the result will not be accurate.
                                    </div>

                                    <table border="1">
                                        <tr>
                                            <th>Recommended</th>
                                            <th>Not Recommended</th>
                                        </tr>
                                        <tr>
                                            <td className='Recomanded_img'>
                                                <img style={{ width: '60%', height: "100%" }} src="\images\images\ChatGPT Image May 19, 2025, 11_12_27 AM.png" alt="" />
                                            </td>
                                            <td>
                                                <img style={{ width: '40%', height: "110%" }} src='\images\images\image (12).webp' alt="" />
                                            </td>
                                        </tr>
                                    </table>

                                </div>
                            </div>
                        </div>

                    </>


                )}

                {selectedFeature === "Background Generator" && (
                    <DocDetails
                        title="Background Generator"
                        description="Replace or create custom backgrounds for professional-grade visuals."
                        usecase={[
                            "• E-commerce: Themed backgrounds for seasonal campaigns.",
                            "• Social Media: Eye-catching influencer-style backdrops."
                        ]}
                        usecase_img="\images\images\ChatGPT Image May 17, 2025, 12_03_33 PM.png"
                        step_by_step={bgstep_by_step}
                        Pro_Tips={bgPro_Tips}
                    />
                )}

                {
                    selectedFeature === "SEO Content Generator" &&
                    <DocDetails
                        title="SEO Content Generator"
                        description="Auto-generate platform-optimized product descriptions."
                        usecase={[
                            "• Generate SEO titles/descriptions for Amazon, Myntra,etc.",
                            "• Create Instagram captions with hashtags instantly.",
                            "• Auto-write product text for lookbooks and catalogs."
                        ]}
                        usecase_img="\images\images\ChatGPT Image May 17, 2025, 12_27_14 PM.png"
                        step_by_step={Seostep_by_step}
                        Pro_Tips={SeoPro_Tips}
                    />
                }
                {
                    selectedFeature === "Image Enhancer" &&
                    <DocDetails
                        title="Image Enhancer"
                        description="Fix blurry, low-res, or poorly lit images in one click."
                        usecase={[
                            "• Improve blurry model or product images for online catalogs.",
                            "• Restore old/vintage fashion photos for digital reuse.",
                            "• Create high-resolution visuals for print-ready lookbooks."
                        ]}
                        usecase_img="\images\images\usecaseenhancer.png"
                        step_by_step={IMgEnhancestep_by_step}
                        Pro_Tips={IMgEnhancePro_Tips}
                    />

                }
                {
                    selectedFeature === "Background Remover" &&
                    <DocDetails
                        title="Background Remover"
                        description="Generate transparent PNGs for professional catalogs and product previews."
                        usecase={[
                            "• Online fashion stores displaying garments without distracting backgrounds.",
                            "• Apparel marketers designing clean visuals for product promotions.",
                            "• Catalog designers preparing transparent PNGs for lookbooks and flyers."
                        ]}
                        usecase_img="\images\images\Frame 11808679.svg"
                        step_by_step={Bgremovertep_by_step}
                        Pro_Tips={BgremoverPro_Tips}
                    />

                }
            </div>
        </div>
    );
}

export default GuideDoc;
