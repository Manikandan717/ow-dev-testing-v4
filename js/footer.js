class Myfooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<footer class="card-footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-xl-4 col-xxl-4 footer-title text-center mc pe-5">
            <h2>Welcome to an Era<br> of Enhanced data.</h2>
          </div>
        </div>
        <div class="row mt-lg-5 justify-content-between mc">
          <div class=" col-sm-3 col-md-2 col-lg-1 col-xl-3 w-auto">
            <!--<figure>-->
            <img src="/img/Characters-01-ai(1).svg" class="" alt="card-grid-image">
            <!-- </figure> -->
         
            <div class="social-icons-2 text-center d-flex justify-content-evenly">
            <a href="https://www.facebook.com/people/Objectways-Technologies/100063555024958/" title="Facebook" target="_blank">
            <svg class="social-icons-3" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg></a>
            <a href="https://twitter.com/objectways/with_replies?t=bZCUlYjqRJ0ZiS4rUOEYTQ&s=09" title="Twitter" target="_blank">
            <svg class="social-icons-3" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg></a>
              <a href="https://www.instagram.com/objectways/" title="Instagram" target="_blank"> 
              <svg class="social-icons-3" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a>
              <a href="https://www.linkedin.com/company/objectways/" title="Linkedin" target="_blank">
              <svg class="social-icons-3" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>
            </div>
          </div>
          
          <div class=" col-md-10 col-lg-7 col-xl-8 flex-s d-flex">
            <div class="col">
              <ul class="footer-list">
                <li>
                  <h5>Solutions</h5>
                </li>
                <li><a href="/data-labeling.html">Data Labeling</a></li>
                <li><a href="/data-sourcing.html">Data Sourcing</a></li>
                <li><a href="/content-moderation.html">Content Moderation</a></li>
                 <li><a href="/generative-ai.html">Generative AI</a></li>
              </ul>
            </div>
            <div class="col">
              <ul class="footer-list">
                <li>
                  <h5>Company</h5>
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
                <li><h5>Contact</h5></li>
                <li><span>For Service:</span></li>
                <li><svg class="social-icons-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg><a href="tel:+1-480-910-8162"> +1-480-910-8162</a></li>
                <li><svg class="social-icons-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg><a href="mailto:sales@objectways.com">  sales@objectways.com</a></li>
                <li><span>For Jobs:</span></li>
                <li><svg class="social-icons-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg><a href="tel:+919597970201"> +91-95979-70201</a></li>
                <li><svg class="social-icons-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg><a href="mailto:careers@objectways.com">  careers@objectways.com</a></li>
              </ul>
            </div>
            <div class="col">
              <div class="text-center footer d-flex justify-content-center">
                <a class="button-con-foot-2" href="/contact-us.html">Contact</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-between ">
        <div class="col-lg-5 mt-5">
          <ul class="footer-list  leftmenu gray">
            <li>
              <h5 class="text-center">Our Location</h5> 
           </li>
            <li>
             <p>USA Office:20715 N Pima Road, Scottsdale, AZ 85255 </p> 
          </li>
        <li>Karur Office: 29 B, K.P. Nagar, Karur, TN 639002 
        </li>
       <li> Coimbatore Office:Subbiah Layout, Kamarajar Road, Coimbatore, TN 641015 </li>
          </ul>
        </div>
        <div class="col-sm-7 col-lg-7">
        <div class="text-end d-flex justify-content-xxl-end align-items-center overflow-auto flex-nowrap image-container mt-5">
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