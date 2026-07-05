const screens = [
  "hero",
  "months",
  "date",
  "gallery",
  "final"
];

function showScreen(id){
  screens.forEach(screen=>{
    document
      .getElementById(screen)
      .classList.remove("active");
  });

  document
    .getElementById(id)
    .classList.add("active");
}

document
.getElementById("start-btn")
.addEventListener("click",()=>{

  document
    .getElementById("start-screen")
    .style.display = "none";

  const music =
    document.getElementById("music");

  music.play().catch(()=>{});

  showScreen("hero");

  setTimeout(()=>{
    showScreen("months");
  },4000);

  setTimeout(()=>{
    showScreen("date");
  },8000);

  setTimeout(()=>{
    showScreen("gallery");
  },12000);

  setTimeout(()=>{
    showScreen("final");
  },20000);

});
