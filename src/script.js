// Navber turn stick part
window.addEventListener("scroll", () => {
  const navber = document.getElementById("nav-ber");
  const navberInnerDiv = document.getElementById("navber-inner-div");
  if (window.scrollY > 50) {
    navber.classList.add("backdrop-blur-md", "bg-white/25");
    navberInnerDiv.classList.remove("bg-[#F9F7F3]")
  }
  else
  {
    navber.classList.remove("backdrop-blur-md", "bg-white/25");
    navberInnerDiv.classList.add("bg-[#F9F7F3]")
  }
});
