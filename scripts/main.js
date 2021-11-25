// The Links
let links = document.querySelector(".landing .links ul"),
  // The lis
  lis = document.querySelectorAll(".landing .links ul li");

// Appear And Hide The Links
document.addEventListener("click", (e) => {
  /* 
        Cheack If The Target Element Was The Ul 
            Appear The Links
        Else
            Hide The Links
    */
  if (e.target.classList.contains("showLinks"))
    links.classList.toggle("show-or-hide");
  else links.classList.remove("show-or-hide");
});

// Add Class Active On lis
lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    e.preventDefault();
    // To Remove The Class Active On All Lis
    lis.forEach((remove) => {
      remove.classList.remove("active");
    });
    // To Add Class Active On Target Li
    li.classList.add("active");
  });
});
