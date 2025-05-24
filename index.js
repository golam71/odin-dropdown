export function initDropdowns() {
  document.querySelectorAll(".dropdown-toggle").forEach((item) => {
    item.addEventListener("click", function (e) {
      let parent = e.target.parentNode;
      let dropdownMenu = parent.querySelector(".dropdown-menu");
      dropdownMenu.style.display =
        dropdownMenu.style.display === "block" ? "none" : "block";
    });
  });

  let styles = document.createElement("style");
  styles.textContent = `
    .dropdown-menu {
      display: none;
    }
  `;
  document.head.append(styles);
}

