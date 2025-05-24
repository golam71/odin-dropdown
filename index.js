document.querySelectorAll(".dropdown-toggle").forEach((item) => {
  item.addEventListener("click", function (e) {
    let parent = e.target.parentNode;
    let dropdownMenu = parent.querySelector(".dropdown-menu");
    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";
  });
});

let styles = document.createElement("style");
let css = `
.dropdown-menu{
  display:none ;
}
`;

styles.append(css);
document.head.append(styles);
