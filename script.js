document.addEventListener("mousemove", (e) => {
  const cursor = document.querySelector(".cursor");
  cursor.style.left = `${e.clientX + window.scrollX}px`;
  cursor.style.top = `${e.clientY + window.scrollY}px`;
});
