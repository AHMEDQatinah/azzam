const signUpBtn = document.querySelector(".signup-btn");
const signInBtn = document.querySelector(".signin-btn");
const sign_in = document.querySelector(".sign-in");
const formsWrapper = document.querySelector(".forms-wrapper");

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formsWrapper.classList.add("change");
});

signInBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formsWrapper.classList.remove("change");
});

sign_in.addEventListener('click',(e)=>{
  e.preventDefault();
  formsWrapper.classList.add("change");
})