/* const key = document.querySelector(".key1");
key.addEventListener("keydown", (event) => {
  key.classList.toggle("keyadd");
  key = `${event.classList.toggle("keyadd")}`;
});
 */

//START JS KeyBoard
document.addEventListener("keydown", function keydown(event) {
  var b = document.getElementById(String(event.code));
  console.log(event.code);
  b.classList.add("keyadd");
});

document.addEventListener("keyup", function keyup(event) {
  var b = document.getElementById(String(event.code));
  b.classList.remove("keyadd");
});
