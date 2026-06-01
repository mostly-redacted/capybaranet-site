console.log("cards.js loaded");
document.addEventListener("DOMContentLoaded", () => {

  const content = document.querySelector(".page-content");
  if (!content) return;

  const headings = content.querySelectorAll("h3");

  if (!headings.length) return;

  const grid = document.createElement("div");
  grid.className = "cards-grid";

  headings.forEach(h3 => {

    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("div");
    title.className = "card-name";
    title.innerHTML = h3.innerHTML;

    const badge = h3.nextElementSibling;
    const desc = badge ? badge.nextElementSibling : null;

    card.appendChild(title);

    if (badge && badge.tagName === "P") {
      const badgeDiv = document.createElement("div");
      badgeDiv.className = "badge";
      badgeDiv.textContent = badge.textContent;
      card.appendChild(badgeDiv);
    }

    if (desc && desc.tagName === "P") {
      const descDiv = document.createElement("div");
      descDiv.className = "card-desc";
      descDiv.textContent = desc.textContent;
      card.appendChild(descDiv);
    }

    grid.appendChild(card);

    h3.remove();
    if (badge) badge.remove();
    if (desc) desc.remove();

  });

  content.appendChild(grid);

});
