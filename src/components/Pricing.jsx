import React, { useState } from 'react';
import PricingPlan from './PricingPlan';
import '../css/Pricing.css';
import Header from './Header';
import Footer from './Footer';

function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);

  
  return (
    <>
      

      <div className='pracing_plans_maincontainer'>
        <span >
          <div className='Toggle-button'>
            <span
              className={isMonthly ? 'Monthly_true' : 'Monthly_false'}
              onClick={() => setIsMonthly(true)}
            >
              Per month
            </span>
            <span
              className={!isMonthly ? 'Monthly_true' : 'Monthly_false'}
              onClick={() => setIsMonthly(false)}
            >
              Annually
            </span>
          </div>


        </span>
        <div className='pricing_container_1'>
          <span className='Pricing_Top_Headder'>Pricing Plan</span>
          <span className='Pricing_Seco_Header'>Select the Perfect Plan</span>
          <span className='Pricing_small_Header'>Unlock powerful AI tools for image generation</span>
        </div>

        <div className='pricing_container_2'>

        <div className="price_plan_standard">
            <PricingPlan
              title="Free"
              description="Essential Features"
              price={isMonthly ? "₹0" : "₹0"}
              duration="per month" 
              features={[
                "20 Credits/Month",
                "Background Remover",
                "Upload Unlimited Models",
                "Upload Unlimited Garment",
                "Commercial Use"
              ]}
              customClass="Standard-plan"
              name="Standard"
            />
          </div>
          <div className="price_plan_standard">
            <PricingPlan
              title="Standard"
              description="Essential Features"
              price={isMonthly ? "₹3999" : "₹2999"}
              duration="per month" 
              features={[
                "100 Credits/Month",
                "Background Remover",
                "Unlimited Models/Garments",
                "Image Enhancer",
                "Commercial Use"
              ]}
              customClass="Standard-plan"
              name="Standard"
            />
          </div>

          <div className="price_plan_gold">
            <div className='Mostpopular'>MOST POPULAR</div>
            <div>
              <PricingPlan
                title="Gold"
                description="Let's give you custom services as well"
                price={isMonthly ? "₹11999" : "₹9999"}

                duration="per month" 
                features={[
                  "100 Credits/Month",
                  "All Standard Features",
                  "Background Generator (pro)",
                  "Seo Content",
                  "Influencer Page",
                  "25 Design Requests",
                  "No Watermark"
                ]}
                customClass="Gold-plan"

                name="Gold"
              />
            </div>
          </div>

          <div className="price_plan_standard">
            <PricingPlan
              title="Business"
              description="Bulk images to be processed? Contact us now!"
              duration="Custom Pricing"
              features={[
                "Team Manages Everything",
                "Bulk Image Processing",
                "QA Review & Fast Delivery",
                "Dedicated Manager",
                "Commercial Use"
              ]}
              name="Business"
              customClass="business-plan"
              customClass_font="Californian FB"
              customClass_font_weight="700"
              font_size="1.5vw"
            />

          </div>
        </div>
      </div>

    </>
  );
}

export default Pricing;
