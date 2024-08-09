class Myfooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<footer class="card-footer">
      <div class="container">
        <div class="row mt-lg-5 justify-content-between mc">
        
          <div class=" col-md-10 col-lg-8 col-xl-8 flex-s d-flex">
            <div class="col">
              <ul class="footer-list">
                <li>
                  <h5>SOLUTIONS</h5>
                </li>
                <li><a href="data-labeling.html">Data Labeling</a></li>
                <li><a href="data-sourcing.html">Data Sourcing</a></li>
                <li><a href="content-moderation.html">Content Moderation</a></li>
                 <li><a href="generative-ai.html">Generative AI</a></li>
              </ul>
            </div>
            <div class="col">
              <ul class="footer-list">
                <li>
                  <h5>COMPANY</h5>
                </li>
                <li><a href="/about-us.html">About Us</a></li>
                <li><a href="/career.html">Careers</a></li>
                <li><a href="/social-impact.html">Social Impact</a></li>
                <li><a href="/blog.html">Blog</a></li>
                <li><a href="/security.html">Security</a></li>
                <li><a href="/certification.html">Compliance</a></li>
                <li><a href="/use-cases.html">Use Cases</a></li>         
                </ul>
            </div>
            <div class="col-sm-4 col-md-4">
              <ul class="footer-list">
                <li><h5>CONTACT</h5></li>
                <li><span>For Service:</span></li>
                <li><svg class="social-icons-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg><a href="tel:+1-480-910-8162"> +1-480-910-8162</a></li>
                <li><svg class="social-icons-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg><a href="mailto:sales@objectways.com">  sales@objectways.com</a></li>
                <li><span>For Jobs:</span></li>
                <li><svg class="social-icons-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg><a href="tel:+919597970201"> +91-95979-70201</a></li>
                <li><svg class="social-icons-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg><a href="mailto:careers@objectways.com">  careers@objectways.com</a></li>
              </ul>
              <div class="text-center footer ">
                <!-- <a class="button-con-foot" href="contact-us.html">Contact</a> -->
                <a class="button-con-foot-home" href="contact-us.html">Contact</a>
            </div>
            </div>
          
          </div>
          <div class="col col-lg-4 ">
          <ul class="footer-list  leftmenu gray">
            <li>
              <h5 class="text-center">
              <svg class="social-icons-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
              OUR LOCATION</h5> 
           </li>
              <h5>USA</h5>
            <li>
             <p>20715 N Pima Road, Scottsdale, AZ 85255. </p> 
          </li>
            <h5>INDIA</h5>
        <li><p>29 B, K.P. Nagar, Karur, TN 639002. </p>
        </li>
       <li><p>Subbiah Layout, Kamarajar Road, Coimbatore, TN 641015.</p> </li>
          </ul>
        </div>

        </div>
           <div class="row justify-content-between mt-5">
            <div class="col-sm-5 col-lg-4 mt-0 lg-mt-5 ">
              <h2> Follow Us</h2>
                <div class="social-icons-2 text-start d-flex justify-content-between">
                <a href="https://www.facebook.com/people/Objectways-Technologies/100063555024958/" title="Facebook" target="_blank">
                <img class="social-icons-3 me-2" src="/img/socialmedia/facebook24.svg" alt="Facebook">
              </a>
              <a href="https://twitter.com/objectways/with_replies?t=bZCUlYjqRJ0ZiS4rUOEYTQ&s=09" title="Twitter" target="_blank">
                <img class="social-icons-3 me-2" src="/img/socialmedia/twitter24.svg" alt="Twitter">
              </a>
              <a href="https://www.linkedin.com/company/objectways/" title="LinkedIn" target="_blank">
                <img class="social-icons-3 me-2" src="/img/socialmedia/linkedin24.svg" alt="LinkedIn">
              </a>
              <a href="https://www.instagram.com/objectways/" title="Instagram" target="_blank">
               <img class="social-icons-3 me-2" src="/img/socialmedia/Instagram24.svg" alt="Instagram">
              </a>
              <a href="https://www.youtube.com/objectways/" title="youtube" target="_blank">
               <img class="social-icons-3 me-2" src="/img/socialmedia/Youtube24.svg" alt="youtube">
              </a>
              <a href="https://www.pinterest.com/objectways/" title="youtube" target="_blank">
               <img class="social-icons-3 me-2" src="/img/socialmedia/Pinterest24.svg" alt="pinterest">
              </a>
               </div>
                </div>
        <div class="col col-lg-8">
        <div class="text-end d-flex justify-content-end align-items-center overflow-auto flex-nowrap image-container mt-0 lg-mt-5">
            <object data="/img/certificate/SOC2.png" class="cert-footer img-fluid me-3" title="SOC2 Type2"></object>
            <object data="/img/certificate/ISO27001.png" class="cert-footer img-fluid me-3" title="ISO 27001"></object>
            <object data="/img/certificate/ISO27001_2019.png" class="cert-footer img-fluid me-3" title="ISO 27701:2019"></object>
            <object data="/img/certificate/TPN.png" class="cert-footer img-fluid me-3" title="TPN_BlueLogo"></object>
            <object data="/img/certificate/HIPPA.png" class="cert-footer img-fluid me-3" title="HIPAA"></object>
            <object data="/img/GDPR.svg" class="cert-footer img-fluid me-3" title="GDPR"></object>
        </div>
    </div>
              <ul class="footer-list rightmenu mt-3">
              <li> Copyright &copy;<span id="currentYear"></span> Objectways - All rights reserved. | <a href="/privacy-policy.html">Privacy Policy</a> |
                <a href="/terms-of-use.html">Terms of Use</a> 
              </li>
              </ul>
          </div>
        </div>
    </div>   
        </div>
      </div>
    </footer>`;
      // JavaScript code to update the current year
      this.querySelector("#currentYear").innerText = new Date().getFullYear();
      // LinkedIn Insight Tag
      const linkedinScript = document.createElement('script');
      linkedinScript.type = 'text/javascript';
      linkedinScript.innerHTML = `
        _linkedin_partner_id = "6079674";
        window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
        window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        (function(l) {
          if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])}; window.lintrk.q=[]}
          var s = document.getElementsByTagName("script")[0];
          var b = document.createElement("script");
          b.type = "text/javascript"; b.async = true;
          b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
          s.parentNode.insertBefore(b, s);
        })(window.lintrk);
      `;
      this.appendChild(linkedinScript);
  
      // LinkedIn Insight Tag noscript
      const linkedinNoscript = document.createElement('noscript');
      linkedinNoscript.innerHTML = `<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=6079674&fmt=gif" />`;
      this.appendChild(linkedinNoscript);
  }
  }
  
  customElements.define('my-footer', Myfooter);