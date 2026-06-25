(function () {
  var navToggle = document.querySelector(".nav-toggle");
  var navLinks = document.querySelector(".main-nav__links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var isOpen = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isOpen));
      navLinks.classList.toggle("is-open", !isOpen);
    });
  }

  var searchInputs = document.querySelectorAll("#post-search, #archive-search");

  searchInputs.forEach(function (input) {
    var scope = input.closest(".section") || document;
    var cards = scope.querySelectorAll("[data-post-card]");
    var empty = scope.querySelector("[data-empty-state]");

    input.addEventListener("input", function () {
      var query = input.value.trim().toLowerCase();
      var visibleCount = 0;

      cards.forEach(function (card) {
        var haystack = card.getAttribute("data-search") || "";
        var isVisible = !query || haystack.indexOf(query) !== -1;
        card.hidden = !isVisible;
        if (isVisible) visibleCount += 1;
      });

      if (empty) {
        empty.hidden = visibleCount !== 0;
      }
    });
  });
})();
