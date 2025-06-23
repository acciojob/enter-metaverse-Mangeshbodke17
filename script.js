let btn = document.querySelector("#enterBtn");

btn.addEventListener("click", () => {
  let p = document.querySelector("#status");

  let h1 = document.createElement("h1");
  h1.innerText = "Entered Metaverse";
  h1.id = "status";  // 🔥 This is the key change

  p.replaceWith(h1);
});
