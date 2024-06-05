class  BlogContact extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `  
<div class="wrapper_faq blog_wrap2">
   
    <!-- <div class="col contact-pad"> -->
        <div class="text-center card-title">
            <h2>Ready to Collaborate?</h2>
        </div>
        <div class="form-box form-box1">
            <div class="arrow-down">
                <img src="/img/arrow-curve.svg" alt="curved arrow">
            </div>
            <p class="form-head-blog">Partner with our Data Labeling and Data Annotation services to conquer your most formidable challenges</p>
            <form id="contactform">
                <input type="hidden" name="contact_form" value="1">
                <div class="field-warp1 ">
                    <span class="control-warp">
                        <input type="text" name="fname" id="firstName" placeholder="Full Name *" required autocomplete="name">
                    </span>
                </div>
                <div class="field-warp1 ">
                    <span class="control-warp">
                        <input type="email" name="email" placeholder="Email *" id="userEmail" required autocomplete="email">
                    </span>
                </div>
                <div class="field-warp1 ">
                    <span class="control-warp">
                        <input type="tel" name="phone" id="userPhone" placeholder="Phone Number " autocomplete="tel">
                    </span>
                </div>
                <div class="field-warp1 ">
                    <span class="control-warp">
                        <textarea cols="10" rows="3" name="message" id="userMessage" placeholder="Comments " autocomplete="off"></textarea>
                    </span>
                </div>
                <div class="text-center pb-3 mt-2">
                    <button type="submit" class="btn-contact btn-contact-blog" onclick="submitToAPI(event)">
                        <span>Ready to Transform</span>
                        <span class="arr">
                            <span class="arrow-btn right">
                                <span class="icon icon-chevron-right slick-arrow"></span>
                            </span>
                        </span>
                    </button>
                </div>
            </form>
        </div>
    </div>`;
}
}

customElements.define('blog-contact', BlogContact);

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
    }
    //  EMail Lambda function ends here 
