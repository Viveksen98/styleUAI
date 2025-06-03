import React, { useState, useContext } from 'react';
import '../css/Pricing_Plan.css';
import { auth, db } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { AuthContext } from './AuthContext';

function PricingPlan({ title, description, price, duration, features, customClass, name, customClass_font, customClass_font_weight }) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const { user } = useContext(AuthContext);

  const planPriceMap = {
    "Standard": "SP-INR-Monthly",
    "Gold": "GP-INR-Monthly",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const redirectToChargebee = (email, planName) => {
    const site = 'styleuai-test';
    const itemPriceId = planPriceMap[planName];
    if (!itemPriceId) {
      setMessage('Invalid plan selected.');
      return;
    }
    const encodedEmail = encodeURIComponent(email);
    const checkoutUrl = `https://${site}.chargebee.com/hosted_pages/checkout?subscription_items[item_price_id][0]=${itemPriceId}&subscription_items[quantity][0]=1&customer[email]=${encodedEmail}`;
    window.location.href = checkoutUrl;
  };

  const handleGetStartedClick = () => {
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match!');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      // Try to sign in first
      const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      const existingUser = userCredential.user;

      // User exists and password is correct
      redirectToChargebee(formData.email, name);
      setShowModal(false);

    } catch (signInError) {
      if (signInError.code === 'auth/user-not-found') {
        try {
          // User not found, create new user
          const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
          const newUser = userCredential.user;

          // Optional: send verification email
          sendEmailVerification(newUser).catch(console.error);

          // Save user data to Firestore
          await setDoc(doc(db, "users", newUser.uid), {
            uid: newUser.uid,
            email: formData.email,
            plan: name,
            createdAt: new Date(),
          });

          // Redirect to Chargebee
          redirectToChargebee(formData.email, name);
          setShowModal(false);

        } catch (signupError) {
          console.error("Signup error:", signupError);
          setMessage(signupError.message);
        }

      } else if (signInError.code === 'auth/wrong-password') {
        setMessage('Incorrect password. Please try again.');
      } else {
        console.error("Signin error:", signInError);
        setMessage(signInError.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className='pricing_pan_container'>
        <h1 className='pricing_header'>{title}</h1>
        <div className='pricing_description'>{description}</div>
        <div className='pricing_Box'>
          <span className="pricing_text">{price}</span>
          <span
            className={`pricing_duration ${customClass}`}
            style={{ fontFamily: customClass_font, fontWeight: customClass_font_weight }}
          >
            {duration}
          </span>
        </div>
        <hr className="custom-hr" />
        <div>
          {features.map((feature, index) => (
            <div className='pricing_feature' key={index}>
              <span>
                <img className='Right_tick' src='/images/images/fi_4436481.svg' alt="feature-icon" />
              </span>
              {feature}
            </div>
          ))}
        </div>
      </div>

      {/* Get Started Button */}
      <div
        className={`arrow_getstart ${customClass || ''}`}
        onClick={() => window.location.href = 'https://login.styleuai.com/signup'}
      >
        <span>Get {name}</span>
        <span className='Arrow_Div'>
          <img className='Arrow_img' src='/images/images/Arrow 4.svg' alt='arrow' />
        </span>
      </div>



    </>
  );
}

export default PricingPlan;
