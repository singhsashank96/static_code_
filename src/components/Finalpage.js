import React from 'react'
import './finelPage.css';
import { useLocation  , Link} from 'react-router-dom';


function Finalpage() {
   
    return (
        <div>
            <div className="navigation">
                <div className="navigation_container">
                    {/* <a href="index.html" /> */}
                    <Link to="/">Home</Link>

                    <a href="#">About</a>
                    <a href="#">Speakers</a>
                    <a href="#">Schedule</a>
                    <a href="#">Info</a>
                </div>
            </div>
            <section className="add-details">
                <div className="detail--main_container">
                    <h1 id="add_details" className="detail--main_details">Add your Details</h1>
                    <div className="form--main">
                        <form name="myForm" id="registrationForm">
                            <label htmlFor="fname" id="first_name" className="form--main_text_firstname">First name</label><br /><br />
                            <input type="text" id="fname" name="fname" required />
                            <label htmlFor="lname" id="last_name" className="form--main_text_lastname">Last name</label><br /><br />
                            <input type="text" id="lname" name="lname" required />
                            <label id="email_name" className="form--main_text_email">Email</label><br /><br />
                            <input type="email" id="form--main_email" name="Ename" aria-label="details_email" required />
                            <input type="submit" defaultValue="Continue" className="form--main_continue" onsubmit="evaulate()" />
                        </form>
                    </div>
                </div>
                <section className="main2">
                    <div className="price-entry">
                        <h1 id="price-entry_text_inspire" className="price-entry_text">THE INSPIRE SUMMIT</h1>
                        <div className="side-container">
                        </div>
                        <div className="price-entry_text_two">
                            <h2 id="price-entry_text_apr" className="price-entry_apr">Apr 18, 2035, 8:30 AM</h2>
                        </div>
                        <div className="hitex">
                            <h2 id="price-entry_hit" className="hitex_text">HITEX Exhibition Center</h2>
                        </div>
                        <div className="side-container">
                        </div>
                        <div className="inside-items">
                        </div>
                        <div className="cont-total">
                            <h2 id="cont-total-text" className="cont-total_text">Subtotal</h2>
                            <h2 id="cont-total_rs-text" className="cont-total_rs">Rs.000 </h2>
                        </div>
                        <div className="final-service1">
                            <h2 id="final-service1-text-one" className="final-service1_text" />
                            <h2 id="final-service1_rs-two" className="final-service1_rs" />
                        </div>
                        <div className="side-container">
                        </div>
                        <div className="final-price">
                            <h1 id="final-price_final" className="final-price_text">Total</h1>
                            <h1 id="final-price_rs_final" className="final-price_rs">Rs 000</h1>
                        </div>
                    </div></section>
            </section>
        </div>
    )
}

export default Finalpage