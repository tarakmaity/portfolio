const About = () => {
    return(
        <div >
        
        {/* <div class="card">
  <div class="img"> <img src="https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_10094381.png" alt="" /> </div>
  <span>About Me</span>
  <p class="info">I'm Tarak Maity, a passionate and dedicated frontend developer with a knack for creating
             visually appealing and highly functional websites. My journey in web development started 
             with a fascination for how the
             web works and has evolved into a deep love for crafting seamless user experiences.</p>
  
  <button>Resume</button>
</div>
        */}

  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <div class="profile-image">
          <svg viewBox="0 0 122.88 122.88" xmlns="http://www.w3.org/2000/svg" class="pfp">
            <g><path d="M61.44,0c8.32,0,16.25,1.66,23.5,4.66l0.11,0.05c7.47,3.11,14.2,7.66,19.83,13.3l0,0c5.66,5.65,10.22,12.42,13.34,19.95 c3.01,7.24,4.66,15.18,4.66,23.49c0,8.32-1.66,16.25-4.66,23.5l-0.05,0.11c-3.12,7.47-7.66,14.2-13.3,19.83l0,0 c-5.65,5.66-12.42,10.22-19.95,13.34c-7.24,3.01-15.18,4.66-23.49,4.66c-8.31,0-16.25-1.66-23.5-4.66l-0.11-0.05 c-7.47-3.11-14.2-7.66-19.83-13.29L18,104.87C12.34,99.21,7.78,92.45,4.66,84.94C1.66,77.69,0,69.76,0,61.44s1.66-16.25,4.66-23.5 l0.05-0.11c3.11-7.47,7.66-14.2,13.29-19.83L18.01,18c5.66-5.66,12.42-10.22,19.94-13.34C45.19,1.66,53.12,0,61.44,0L61.44,0z M16.99,94.47l0.24-0.14c5.9-3.29,21.26-4.38,27.64-8.83c0.47-0.7,0.97-1.72,1.46-2.83c0.73-1.67,1.4-3.5,1.82-4.74 c-1.78-2.1-3.31-4.47-4.77-6.8l-4.83-7.69c-1.76-2.64-2.68-5.04-2.74-7.02c-0.03-0.93,0.13-1.77,0.48-2.52 c0.36-0.78,0.91-1.43,1.66-1.93c0.35-0.24,0.74-0.44,1.17-0.59c-0.32-4.17-0.43-9.42-0.23-13.82c0.1-1.04,0.31-2.09,0.59-3.13 c1.24-4.41,4.33-7.96,8.16-10.4c2.11-1.35,4.43-2.36,6.84-3.04c1.54-0.44-1.31-5.34,0.28-5.51c7.67-0.79,20.08,6.22,25.44,12.01 c2.68,2.9,4.37,6.75,4.73,11.84l-0.3,12.54l0,0c1.34,0.41,2.2,1.26,2.54,2.63c0.39,1.53-0.03,3.67-1.33,6.6l0,0 c-0.02,0.05-0.05,0.11-0.08,0.16l-5.51,9.07c-2.02,3.33-4.08,6.68-6.75,9.31C73.75,80,74,80.35,74.24,80.7 c1.09,1.6,2.19,3.2,3.6,4.63c0.05,0.05,0.09,0.1,0.12,0.15c6.34,4.48,21.77,5.57,27.69,8.87l0.24,0.14 c6.87-9.22,10.93-20.65,10.93-33.03c0-15.29-6.2-29.14-16.22-39.15c-10-10.03-23.85-16.23-39.14-16.23 c-15.29,0-29.14,6.2-39.15,16.22C12.27,32.3,6.07,46.15,6.07,61.44C6.07,73.82,10.13,85.25,16.99,94.47L16.99,94.47L16.99,94.47z"></path></g>
          </svg>
          <div class="name">
            Tarak Maity
          </div>
        </div>
      </div>
      <div class="flip-card-back">
        <div class="Description">
          <p class="description">
            Hello, I am a software engineer with over 5 years of experience in web development. I specialize in building scalable, high-performance web applications using modern web technologies such as React, Angular, and Node.js.
          </p>
          <div class="socialbar">
            <a id="github" href="#"><svg viewBox="0 0 16 16" class="bi bi-github" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg></a>
            <a id="instagram" href="#"><svg viewBox="0 0 16 16" class="bi bi-instagram" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0C5.824 0 5.555.01 4.703.048c-.852.039-1.437.174-1.947.369-.53.202-.982.472-1.427.917-.445.445-.715.897-.917 1.427-.195.51-.33 1.095-.369 1.947C.01 5.555 0 5.824 0 8s.01 2.445.048 3.297c.039.852.174 1.437.369 1.947.202.53.472.982.917 1.427.445.445.897.715 1.427.917.51.195 1.095.33 1.947.369C5.555 15.99 5.824 16 8 16s2.445-.01 3.297-.048c.852-.039 1.437-.174 1.947-.369.53-.202.982-.472 1.427-.917.445-.445.715-.897.917-1.427.195-.51.33-1.095.369-1.947.038-.852.048-1.121.048-3.297s-.01-2.445-.048-3.297c-.039-.852-.174-1.437-.369-1.947-.202-.53-.472-.982-.917-1.427-.445-.445-.897-.715-1.427-.917-.51-.195-1.095-.33-1.947-.369C10.445.01 10.176 0 8 0zm0 1.438c2.137 0 2.392.007 3.233.046.78.035 1.203.166 1.485.276.373.144.64.318.92.598.28.28.454.547.598.92.11.282.24.705.276 1.485.039.841.046 1.096.046 3.233s-.007 2.392-.046 3.233c-.035.78-.166 1.203-.276 1.485-.144.373-.318.64-.598.92-.28.28-.547.454-.92.598-.282.11-.705.24-1.485.276-.841.039-1.096.046-3.233.046s-2.392-.007-3.233-.046c-.78-.035-1.203-.166-1.485-.276a3.43 3.43 0 0 1-.92-.598 3.432 3.432 0 0 1-.598-.92c-.11-.282-.24-.705-.276-1.485-.039-.841-.046-1.096-.046-3.233s.007-2.392.046-3.233c.035-.78.166-1.203.276-1.485.144-.373.318-.64.598-.92.28-.28.547-.454.92-.598.282-.11.705-.24 1.485-.276.841-.039 1.096-.046 3.233-.046zM8 3.891a4.109 4.109 0 1 0 0 8.218 4.109 4.109 0 0 0 0-8.218zm0 1.438a2.671 2.671 0 1 1 0 5.343 2.671 2.671 0 0 1 0-5.343zm5.203-.966a.96.96 0 1 0 0 1.922.96.96 0 0 0 0-1.922z"></path>
            </svg></a>
            <a id="linkedin" href="#"><svg viewBox="0 0 16 16" class="bi bi-linkedin" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H3.127v7.225h1.816zm-.91-8.211c.622 0 1.012-.41 1.012-.923-.011-.52-.39-.922-1.001-.922-.611 0-1.012.402-1.012.922 0 .513.39.923 1.001.923h.001zM12.734 8.1c0-1.338-.711-2.243-1.975-2.243-.908 0-1.312.507-1.549.865V6.17h-1.82c.024.57 0 7.225 0 7.225h1.82v-4.038c0-.216.016-.432.08-.586.173-.432.566-.88 1.227-.88.865 0 1.21.664 1.21 1.638v3.866h1.82V9.678c0-1.842-.98-2.699-2.286-2.699z"></path>
            </svg></a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="card">
  <button class="mail">
    <svg
      class="lucide lucide-mail"
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      viewBox="0 0 24 24"
      height="24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect rx="2" y="4" x="2" height="16" width="20"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
  </button>
  <div class="profile-pic"></div>
  <div class="bottom">
    <div class="content">
      <span class="name">Tarak</span>
      <span class="about-me"
        >Front-end web developer
      </span>
    </div>
    <div class="bottom-bottom">
      <div class="social-links-container">
        <svg
          viewBox="0 0 16 15.999"
          height="15.999"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            transform="translate(6 598)"
            d="M6-582H-2a4,4,0,0,1-4-4v-8a4,4,0,0,1,4-4H6a4,4,0,0,1,4,4v8A4,4,0,0,1,6-582ZM2-594a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4.005,4.005,0,0,0,2-594Zm4.5-2a1,1,0,0,0-1,1,1,1,0,0,0,1,1,1,1,0,0,0,1-1A1,1,0,0,0,6.5-596ZM2-587.5A2.5,2.5,0,0,1-.5-590,2.5,2.5,0,0,1,2-592.5,2.5,2.5,0,0,1,4.5-590,2.5,2.5,0,0,1,2-587.5Z"
            data-name="Subtraction 4"
            id="Subtraction_4"
          ></path>
        </svg>
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
          ></path>
        </svg>

        <svg viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
          ></path>
        </svg>
      </div>
      <button class="button">Contact Me</button>
    </div>
  </div>
</div>




        </div>
    )
}

export default About;