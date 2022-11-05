const score = document.querySelector(".score span");
const holes = document.querySelectorAll(".hole");
const playBtn = document.querySelector(".buttons .play");
const stopBtn = document.querySelector(".buttons .stop");
const curser = document.querySelector(".cursor img");

window.addEventListener("mousemove", (e) => {
  curser.style.top = e.pageY + "px";
  curser.style.left = e.pageX + "px";

  window.addEventListener("click", (e) => {
    curser.style.animation = "hit 0.1s ease";
    setTimeout(() => {
      curser.style.removeProperty("animation");
    }, 100);
  });
});

playBtn.addEventListener("click", () => {
  playBtn.style.display = "none";
  stopBtn.style.display = "inline-block";

  let hole;
  let points = 0;

  const startGame = setInterval(() => {
    //Skapade en random array av 9 element
    let arrayNo = Math.floor(Math.random() * 9);
    //tomma variabeln hole = querySelectorn holes[] som nu blev en array
    hole = holes[arrayNo];

    let img = document.createElement("img");
    img.setAttribute("src", "mole.png");
    img.setAttribute("class", "mole");
    hole.appendChild(img);

    setTimeout(() => {
      hole.removeChild(img);
    }, 700);
  }, 800);

    window.addEventListener("click", (e) => {
        if (e.target === hole) score.innerText = ++points;
        console.log('Iaam e:!'+ e.target)
    });
    
  stopBtn.addEventListener("click", () => {
    clearInterval(startGame);
    playBtn.style.display = "inline-block";
      stopBtn.style.display = "none";
      

      setTimeout(() => {
        score.innerText = 0;
      }, 11700);
  });
});
