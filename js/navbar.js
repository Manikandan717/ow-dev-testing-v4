class Mynavbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `    <nav class="navbar navbar-expand-lg fixed-top bg-transparent">
      <div class="container-fluid">
        <a class="navbar-brand d-lg-none" href="/"><img src="/img/logo.webp" alt="logo"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation" id="navbarToggle">
       <span>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" class="open-icon"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" class="close-icon hidden"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
       </span>
      </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link drp-toggle" href="#" aria-expanded="false">Solutions&nbsp;</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item nav-link" href="/data-labeling.html">Data Labeling</a>
                  <p>Data Labeling Process & how we can assist you</p>
                </li>
                <li><a class="dropdown-item nav-link" href="/data-sourcing.html">Data Sourcing </a>
                  <p>How our Data sourcing works and what we do </p>
                </li>
                <li><a class="dropdown-item nav-link" href="/content-moderation.html">Content Moderation</a>
                  <p>Moderate your content to increase website traffic </p>
                </li>
              </ul>
            <li class="nav-item dropdown">
              <a class="nav-link drp-toggle" href="#" aria-expanded="false">Company&nbsp;</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item nav-link" href="/about-us.html">About Us</a></li>
                <li><a class="dropdown-item nav-link" href="/career.html">Careers</a></li>
                <li><a class="dropdown-item nav-link" href="/social-impact.html">Social Impact</a></li>
                <li><a class="dropdown-item nav-link" href="/security.html">Security</a></li>
                <li><a class="dropdown-item nav-link" href="/certification.html">Compliance</a></li>
                <li><a class="dropdown-item nav-link" href="/use-cases.html">Use Cases</a></li>
                
              </ul>
              <!--  <li class="nav-item">
              <a class="nav-link drp-toggle" href="/datasets.html">Datasets</a>
            </li>-->
             <li class="nav-item">
            <a class="nav-link drp-toggle" href="/generative-ai.html">Generative AI</a>
          </li>
            <li class="nav-item">
            <a class="nav-link drp-toggle" href="/blog.html">Blog</a>
          </li>
          <!--  <li class="nav-item">
              <a class="nav-link drp-toggle" href="/use-cases.html">Use Cases</a>
            </li>-->
           
          </ul>
          <a class="navbar-brand d-none d-lg-block" href="/"><img src="/img/logo.webp" alt="logo"></a>
          <ul class="navbar-nav" style="width: 339px;display: flex;justify-content: flex-end;">
   
     
             <li> <a class="nav-link button-con" href="/contact-us.html">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>`;
    }
  }
  
  customElements.define('my-navbar', Mynavbar);

  document.getElementById('navbarToggle').addEventListener('click', function () {
    const openIcon = document.querySelector('.open-icon');
    const closeIcon = document.querySelector('.close-icon');

    if (openIcon.classList.contains('hidden')) {
        openIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    } else {
        openIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    }
});