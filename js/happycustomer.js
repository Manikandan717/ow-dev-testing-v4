class  Happycustomer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `  
<section class="contact ">
      <div class="container-fuild">
        <div class="row py-md-5">
          <div class="col col-md-7 col-xxl-7 d-flex  flex-column p-5 ">
        
<!-- <div class="row  "> -->
  <!-- <div class="col quote-slider-wrap"> -->
    <div class="text-center mb-2 title-2">
      <h2 class="">Our Happy Customers</h2>
    </div>
    <div class="car">
      <div class="quote-slide ">
        <div class="quote-contents">
          <figure class="quote-image">
            <img class="img-fluid rounded-circle" src="/img/home/cus_icon.png">
          </figure>
          <div class="txt">
            <div class="byline text-center">
              <p>
                <!-- <strong>Leo - Leading Cloud Provider ML Lead</strong>
                <br> Customer -->
              </p>
            </div>
            <blockquote>
              <span class="openq"></span> I have used objectway's labeling service for labeling named entities in TXT files and PDF files and bounding boxes for images. Throughout the process, objectways is responsive, responsible and agile. They provided us labeled data with highest quality through multiple rounds of labeling and reviews. <span class="">“</span>
              <br> I highly recommend objectways labeling service
            </blockquote>
          
          </div>
        </div>
      </div>
      <div class="quote-slide">
        <div class="quote-contents">
          <figure class="quote-image">
            <img class="img-fluid rounded-circle" src="/img/home/cus_icon.png">
          </figure>
          <div class="txt">
            <div class="byline text-center">
              <!-- <p>
                <strong>Leading Cloud Provider ML Lead</strong>
                <br> Customer
              </p> -->
            </div>
            <blockquote>
              <span class="openq"></span> I have used objectway's labeling service for labeling named entities in TXT files and PDF files and bounding boxes for images. Throughout the process, objectways is responsive, responsible and agile. They provided us labeled data with highest quality through multiple rounds of labeling and reviews. <span class="">“</span>
              <br> I highly recommend objectways labeling service
            </blockquote>
          
          </div>
        </div>
      </div>
      <div class="quote-slide">
        <div class="quote-contents">
          <figure class="quote-image">
            <img class="img-fluid rounded-circle" src="/img/home/cus_icon.png">
          </figure>
          <div class="txt">
            <div class="byline text-center">
              <!-- <p>
                <strong> ML Lead</strong>
                <br> Customer
              </p> -->
            </div>
            <blockquote>
              <span class="openq"></span> I have used objectway's labeling service for labeling named entities in TXT files and PDF files and bounding boxes for images. Throughout the process, objectways is responsive, responsible and agile. They provided us labeled data with highest quality through multiple rounds of labeling and reviews. <span class="">“</span>
              <br> I highly recommend objectways labeling service
            </blockquote>
          
          </div>
        </div>
      </div>
    </div>
  <!-- </div> -->
  <div class="row">
    <div class="col">
      <div class="slide-controls">
        <div class="arrow-btn left">
          <div class="icon icon-chevron-left slick-arrow"></div>
        </div>
        <div class="arrow-btn right">
          <div class="icon icon-chevron-right slick-arrow"></div>
        </div>
      </div>
    </div>
  </div>
<!-- </div> -->
          </div>
          <div class="col col-md-4 col-xxl-4 d-flex align-items-center ">
            <div class=" contact-form-wrapper mt-3 d-flex align-items-center justify-content-center">
              <!-- <div class="contact-form-wrapper d-flex justify-content-center"> -->
             
              <div class="contact-form row g-3 title-2">
                <h2 class="text-center mb-3">  Get in touch. </h2>
                <form id="contactform" class="needs-validation" novalidate>
                  <input type="hidden" name="contact_form" value="1">
                  <div class="row mb-4">
                    <div class="col-md-6 mb-3 mb-md-0">
                      <input type="text" class="form-control  " name="fname" id="firstName" placeholder="First Name *" required autocomplete="on">
                    </div>
                    <div class="col-md-6">
                      <input type="text" class="form-control " name="lname" id="lastName" placeholder="Last Name *" required autocomplete="on">
                    </div>
                  </div>
                  <div class="row mb-4">
                    <div class="col-md-6 mb-3 mb-md-0">
                      <input type="email" class="form-control " name="email" placeholder="Email *" id="userEmail" required autocomplete="on">
                    </div>
                    <div class="col-md-6">
                      <input type="tel" class="form-control " name="phone" id="userPhone" placeholder="Phone Number *" required autocomplete="on">
                    </div>
                  </div>
                  <div class="mb-4">
                    <select class="form-select " id="subjectDropdown" name="subject" required>
                      <option value="" selected disabled>--Please Choose Services--</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="sales">Sales</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <textarea class="form-control p-3" rows="5" name="message" id="userMessage" placeholder="Comments *" required autocomplete="on"></textarea>
                  </div>
                  <div class="d-flex align-items-center justify-content-center my-3 md-4">
                    <button type="submit" class="button-con-foot-home bg-warning" onclick="submitToAPI(event)">
                      Submit
                      <i class="bi bi-chevron-right"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>`;
}
}

customElements.define('happy-customer', Happycustomer);

//  Email Lambda function starts here  

    function submitToAPI(e) {
      e.preventDefault();
      var URL = "https://412qcg7lui.execute-api.us-east-1.amazonaws.com/prod/api";
      var Namere = /[A-Za-z]{1}[A-Za-z]/;
      if (!Namere.test($("#firstName").val())) {
        Swal.fire('Name Cannot Be Less than 2 char')
        return;
      }
      var Namere1 = /[A-Za-z]{1}[A-Za-z]/;
      if (!Namere.test($("#lastName").val())) {
        Swal.fire('Name Cannot Be Less than 2 char')
        return;
      }
      if ($("#userEmail").val() == "") {
        Swal.fire('Please enter your Email id')
        return;
      }
      var mobilere = /[0-9]{10}/;
      if (!mobilere.test($("#userPhone").val())) {
        // alert ("Please enter valid mobile number");
        Swal.fire('Please enter valid mobile number')
        return;
      }
      /* var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
       if (!reeamil.test($("#email-input").val())) {
           alert ("Please enter valid email address");
           return;
       }*/
      var fname = $("#firstName").val();
      var lname = $("#lastName").val();
      var phone = $("#userPhone").val();
      var email = $("#userEmail").val();
      var desc = $("#userMessage").val();
      var data = {
        fname: fname,
        lname: lname,
        phone: phone,
        email: email,
        desc: desc
      };
      $.ajax({
        type: "POST",
        url: "https://412qcg7lui.execute-api.us-east-1.amazonaws.com/prod/api",
        dataType: "json",
        crossDomain: "true",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),
        success: function() {
          // clear form and show a success message
          //  alert("Successful");
          Swal.fire({
            icon: 'success',
            title: 'Success...',
            text: 'Successfully submitted your application!',
            footer: ' < a href = "index.html" > Go to home Page < /a>',
          }).then(function() {
            document.getElementById("contactform").reset();
            location.reload("contactform");
          });
          document.getElementById("contact-form").reset();
          location.reload();
        },
        error: function() {
          // show an error message
          //  alert("Unsuccessful");
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: ' < a href = "" > Why do I have this issue ? < /a>'
          })
        }
      });
    };

    $(document).ready(function() {
      $('.car').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        centerMode: true,
        variableWidth: true,
        prevArrow: '.left',
        nextArrow: '.right'
      });
    });
    //  EMail Lambda function ends here 
