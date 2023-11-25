const ling_kuning = document.getElementById("ling-kuning");
const ling_merah = document.getElementById("ling-merah");
const ling_biru = document.getElementById("ling-biru");
window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  ling_kuning.animate(
    { left: `${posX + 80}px`, top: `${posY + 30}px` },
    { duration: 2500, fill: "backwards" }
  );
  ling_merah.animate(
    { left: `${posX - 80}px`, top: `${posY}px` },
    { duration: 3000, fill: "forwards" }
  );
  ling_biru.animate(
    { left: `${posX}px`, top: `${posY}px` },
    { duration: 3500, fill: "forwards" }
  );
});
// END CUSTOM CURSOR

// Fitur Waktu
function waktu() {
  const waktu = new Date();
  setTimeout("waktu()", 1000);
  const jam = waktu.getHours();
  const menit = checkMenit(waktu.getMinutes());
  // const time = `${jam} : ${menit} : ${waktu.getSeconds()}`;
  const time = `${jam} : ${menit}`;
  const tempatTime = document.querySelector("#time");
  tempatTime.innerHTML = time;
}

function checkMenit(i) {
  if (i < 10) i = `0${i}`;
  return i;
}

setInterval(waktu(), 500);
// END Fitur Waktu

