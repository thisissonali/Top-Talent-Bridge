import React, { useState } from 'react'
import atsfirst from '../images/atsfirst.svg'
import fast from '../images/fast.svg'
import atssec from '../images/atssec.svg'
import brandfirst from '../images/brandfirst.svg'
import brandsec from '../images/brandsec.svg'
import indusinsights from '../images/indusinsights.svg'
import unlimited from '../images/unlimited.svg'
import verticalline from '../images/verticalline.svg'

function MainBody() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsappNumber , setWhatsappNumber] = useState('');
  return (
    <>
      <div className="form-main">
        <div className="text-div">
          <span className="main-text">
            Unlock Interviews with a Standout Resume
          </span>
          <div className="hr-div" />

          <span className="form-side-text">
            Why a <span className="green">Great Resume Matters:</span>
          </span>
          <div className="form-bullets">
            <div className="form-blt-one">
              <span className="blue">
                &#8226;Makes a Strong First Impression:
              </span>{" "}
              Captures attention and showcases your potential.
            </div>
            <div className="form-blt-two">
              <span className="blue">&#8226;ATS-Friendly:</span> Designed to get
              past automated filters and into human hands
            </div>
            <div className="form-blt-three">
              <span className="blue">&#8226;Highlights Your Skills:</span>{" "}
              Clearly presents your experiences and abilities.
            </div>
            <div className="cand">
              Our<span className="green"> Canada-Specific</span> Resume Writing
              <span className="green"> Service</span>
            </div>
          </div>
        </div>
        <div className="form-style">
          <div className="form-heading">Fill In Your Details</div>
          <div className="form-body">
            <div className="labels">NAME</div>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <div className="labels">EMAIL</div>
            <input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <div className="labels">WHATSAPP NUMBER</div>
            <input
              type="text"
              value={whatsappNumber}
              onChange={(event) => setWhatsappNumber(event.target.value)}
            />
            <div>
              <button className="btn-form">CLAIM NOW</button>
            </div>
            <span className="form-bottom">*Only 39 slots left out of 100</span>
          </div>
        </div>
      </div>
      <div className="body-main-text">
        <div className="body-left">
          <div className="headingblue">1.ATS-Optimized:</div>
          <span className="atstext">
            Our resumes are designed to pass through ATS filters, increasing
            your chances of landing an interview.
          </span>
          <div>
            <img src={atsfirst} alt="ats-first" className="ats-first" />
          </div>
          <div>
            <div className="headingblue">3.Personal Branding</div>
            <div className="atstext">
              We don't just list your experiences; we craft a narrative that
              showcases your unique professional story.
            </div>
            <div>
              <img
                src={brandfirst}
                alt="brand-first"
                className="className= ats-first"
              />
            </div>
          </div>

          <div>
            <div className="headingblue">5.Fast Turnaround</div>
            <div className="atstext">
              Our direct communication approach significantly reduces the time
              it takes to finalize a resume that's ready to go.
            </div>
            <div>
              <img src={unlimited} alt="unlimited" className="ats-first" />
            </div>
          </div>
          <div>
            <div className="headingblue">7.Confidentiality Assured:</div>
            <div>
              Your personal and professional information is safe with us.
            </div>
          </div>
        </div>
        <div>
          <img
            src={verticalline}
            alt="vertical-line"
            className="vertical-line"
          />
        </div>
        <div className="body-right">
          <div className="atsecdiv">
            <img src={atssec} alt="ats-sec" className="ats-sec" />
            <div className="asectext">
              <div className="atssecheading headingblue">
                2. Guaranteed Interview Calls:
              </div>
              We're so confident in our service that we guarantee interview
              calls, or we'll revise your resume.
            </div>
          </div>

          <div>
            <img src={brandsec} alt="brandsec" className="ats-sec" />
            <div className="asectext">
              <div className="atssecheading headingblue">
                4. Industry Insights:
              </div>
              With our deep understanding of the tech industry, we tailor your
              resume to speak to industry-specific trends and demands.
            </div>
          </div>

          <div>
            <img src={indusinsights} alt="indusinsights" className="ats-sec" />
            <div className="asectext">
              <div className="atssecheading headingblue">
                6. Unlimited Revision:
              </div>
              We work with you until you're 100% satisfied with your resume.
            </div>
          </div>

          <div>
            <img src={fast} alt="fast" className="ats-sec fast" />
          </div>
        </div>
      </div>
      <div className="works">Here's How It Works</div>
      <div className="works-text">
        <div className="works-text-indv">
          <span className="bolder">1.Submit Your Details:</span> Provide your
          Name, WhatsApp Number, and upload your Current Resume in the fields
          below.
        </div>
        <div className="works-text-indv">
          <span className="bolder">2.Group Addition:</span> Within 24 hours of
          submission, you will be added to a WhatsApp group with our Resume
          Writer.
        </div>
        <div className="works-text-indv">
          <span className="bolder">3.Information Collection:</span> Our Resume
          Writer team will share a Google Doc for you to input additional
          details.{" "}
        </div>
        <div className="works-text-indv">
          <span className="bolder">4. Receive Your New Resume:</span> After
          updating the provided Doc, our team will share your revamped resume
          within 48 hours.
        </div>
        <div className="works-text-indv">
          <span className="bolder">5.Video Testimonial:</span> If you're pleased
          with the result, we kindly request a video testimonial. Once shared,
          you'll get your revamped resume, no strings attached!
        </div>
      </div>
      <div className="hr-div hr-div-impv" />
    </>
  );
}

export default MainBody
