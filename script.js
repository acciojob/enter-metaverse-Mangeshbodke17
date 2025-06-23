let btn = document.querySelector("#enterBtn");

btn.addEventListener("click", () => {
  let p = document.querySelector("#status");

  let h1 = document.createElement("h1");
  h1.innerText = "Entered Metaverse";

  p.innerHTML = "";       // Clear existing content (optional)
  p.appendChild(h1);      // ✅ Insert <h1> as a descendant
});
