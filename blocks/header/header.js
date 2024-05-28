import { getMetadata } from "../../scripts/aem.js";
import { loadFragment } from "../fragment/fragment.js";

// media query match that indicates mobile/tablet width
const isDesktop = window.matchMedia("(min-width: 900px)");

const logo = 
`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 504 421.7" style="enable-background:new 0 0 504 421.7;" xml:space="preserve" class="desktop">
  <style type="text/css">
    .st0{fill:#FFFFFF;}
  </style>
  <g id="Layer_1_1_">
    <g id="Nissan_Badge_1_">
      <g>
        <path class="st0" d="M293.7,227.7c-0.4,0.1-2,0.1-2.7,0.1h-51.6v12h52.5c0.4,0,3.5,0,4.1-0.1c10.7-1,15.6-9.9,15.6-17.7
          c0-8-5.1-16.6-14.8-17.5c-1.9-0.2-3.5-0.2-4.2-0.2h-34.3c-1.5,0-3.2-0.1-3.8-0.3c-2.7-0.7-3.7-3.1-3.7-5.1c0-1.8,1-4.2,3.8-5
          c0.8-0.2,1.7-0.3,3.6-0.3h49.5v-11.8h-50.3c-2.1,0-3.7,0.1-5,0.3c-8.6,1.2-14.6,8.1-14.6,16.9c0,7.2,4.5,15.6,14.4,17
          c1.8,0.2,4.3,0.2,5.4,0.2H291c0.6,0,2.1,0,2.4,0.1c3.8,0.5,5.1,3.3,5.1,5.8C298.5,224.5,297,227.1,293.7,227.7z"></path>
        <path class="st0" d="M195.9,227.7c-0.4,0.1-2,0.1-2.6,0.1h-51.7v12h52.5c0.4,0,3.5,0,4.1-0.1c10.7-1,15.6-9.9,15.6-17.7
          c0-8-5.1-16.6-14.8-17.5c-1.9-0.2-3.5-0.2-4.2-0.2h-34.3c-1.5,0-3.2-0.1-3.8-0.3c-2.7-0.7-3.7-3.1-3.7-5.1c0-1.8,1-4.2,3.8-5
          c0.8-0.2,1.7-0.3,3.6-0.3h49.5v-11.8h-50.3c-2.1,0-3.7,0.1-5,0.3c-8.6,1.2-14.6,8.1-14.6,16.9c0,7.2,4.5,15.6,14.4,17
          c1.8,0.2,4.3,0.2,5.4,0.2h33.4c0.6,0,2.1,0,2.4,0.1c3.8,0.5,5.1,3.3,5.1,5.8C200.7,224.5,199.3,227.1,195.9,227.7z"></path>
        <rect x="101.7" y="181.4" class="st0" width="13" height="58.7"></rect>
        <polygon class="st0" points="73,240.1 73,181.4 60,181.4 60,225.2 16.7,181.4 0,181.4 0,240.1 13,240.1 13,196.1 56.6,240.1
          "></polygon>
        <polygon class="st0" points="491.1,181.4 491.1,225.2 447.8,181.4 431.1,181.4 431.1,240.1 444.1,240.1 444.1,196.1 487.6,240.1
          504,240.1 504,181.4 			"></polygon>
        <path class="st0" d="M363.4,181.4l-36.6,58.7h15.8l6.5-10.5h42.7l6.5,10.5H414l-36.6-58.7H363.4z M385.1,218.5h-29.3l14.7-23.6
          L385.1,218.5z"></path>
        <path class="st0" d="M72.3,148.1C98.5,71.6,170.7,20.2,252.1,20.2s153.7,51.4,179.8,127.9l0.2,0.6h57.3v-6.9l-23.8-2.8
          c-14.7-1.7-17.8-8.2-21.8-16.4l-1-2C408.4,47.4,333.5,0,252.1,0C170.6,0,95.8,47.4,61.4,120.8l-1,2c-4,8.2-7.1,14.7-21.8,16.4
          L14.8,142v6.9H72L72.3,148.1z"></path>
        <path class="st0" d="M432.1,272.9l-0.2,0.6c-26.2,76.5-98.4,127.8-179.8,127.8l0,0c-81.4,0-153.7-51.4-179.8-127.9l-0.2-0.6H14.9
          v6.9l23.8,2.8c14.7,1.7,17.8,8.2,21.8,16.4l1,2c34.4,73.4,109.3,120.8,190.7,120.8l0,0c81.4,0,156.3-47.4,190.7-120.7l1-2
          c4-8.2,7.1-14.7,21.8-16.4l23.8-2.8v-6.9L432.1,272.9z"></path>
      </g>
      <g id="Layer_2_2_">
        <g id="Layer_3_1_">
        </g>
      </g>
    </g>
  </g>
</svg>`;

function closeOnEscape(e) {
  if (e.code === "Escape") {
    const nav = document.getElementById("nav");
    const navSections = nav.querySelector(".nav-sections");
    const navSectionExpanded = navSections.querySelector(
      '[aria-expanded="true"]'
    );
    if (navSectionExpanded && isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleAllNavSections(navSections);
      navSectionExpanded.focus();
    } else if (!isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleMenu(nav, navSections);
      nav.querySelector("button").focus();
    }
  }
}

function openOnKeydown(e) {
  const focused = document.activeElement;
  const isNavDrop = focused.className === "nav-drop";
  if (isNavDrop && (e.code === "Enter" || e.code === "Space")) {
    const dropExpanded = focused.getAttribute("aria-expanded") === "true";
    // eslint-disable-next-line no-use-before-define
    toggleAllNavSections(focused.closest(".nav-sections"));
    focused.setAttribute("aria-expanded", dropExpanded ? "false" : "true");
  }
}

function focusNavSection() {
  document.activeElement.addEventListener("keydown", openOnKeydown);
}

/**
 * Toggles all nav sections
 * @param {Element} sections The container element
 * @param {Boolean} expanded Whether the element should be expanded or collapsed
 */
function toggleAllNavSections(sections, expanded = false) {
  sections
    .querySelectorAll(".nav-sections .default-content-wrapper > ul > li")
    .forEach((section) => {
      section.setAttribute("aria-expanded", expanded);
    });
}

/**
 * Toggles the entire nav
 * @param {Element} nav The container element
 * @param {Element} navSections The nav sections within the container element
 * @param {*} forceExpanded Optional param to force nav expand behavior when not null
 */
function toggleMenu(nav, navSections, forceExpanded = null) {
  const expanded =
    forceExpanded !== null
      ? !forceExpanded
      : nav.getAttribute("aria-expanded") === "true";
  const button = nav.querySelector(".nav-hamburger button");
  document.body.style.overflowY = expanded || isDesktop.matches ? "" : "hidden";
  nav.setAttribute("aria-expanded", expanded ? "false" : "true");
  toggleAllNavSections(
    navSections,
    expanded || isDesktop.matches ? "false" : "true"
  );
  button.setAttribute(
    "aria-label",
    expanded ? "Open navigation" : "Close navigation"
  );
  // enable nav dropdown keyboard accessibility
  const navDrops = navSections.querySelectorAll(".nav-drop");
  if (isDesktop.matches) {
    navDrops.forEach((drop) => {
      if (!drop.hasAttribute("tabindex")) {
        drop.setAttribute("role", "button");
        drop.setAttribute("tabindex", 0);
        drop.addEventListener("focus", focusNavSection);
      }
    });
  } else {
    navDrops.forEach((drop) => {
      drop.removeAttribute("role");
      drop.removeAttribute("tabindex");
      drop.removeEventListener("focus", focusNavSection);
    });
  }
  // enable menu collapse on escape keypress
  if (!expanded || isDesktop.matches) {
    // collapse menu on escape press
    window.addEventListener("keydown", closeOnEscape);
  } else {
    window.removeEventListener("keydown", closeOnEscape);
  }
}

/**
 * loads and decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  // load nav as fragment
  const navMeta = getMetadata("nav");
  const navPath = navMeta ? new URL(navMeta, window.location).pathname : "/nav";
  const fragment = await loadFragment(navPath);

  // document.querySelector('.default-content-wrapper p a').appendChild(logo)
  // decorate nav DOM
  block.textContent = "";
  const nav = document.createElement("nav");
  nav.id = "nav";
  while (fragment.firstElementChild) nav.append(fragment.firstElementChild);

  const classes = ["brand", "sections", "tools"];
  classes.forEach((c, i) => {
    const section = nav.children[i];
    if (section) section.classList.add(`nav-${c}`);
  });

  const navBrand = nav.querySelector(".nav-brand");
  const brandLink = navBrand.querySelector(".button");
  if (brandLink) {
    brandLink.className = "";
    brandLink.closest(".button-container").className = "";
  }

  const navSections = nav.querySelector(".nav-sections");
  if (navSections) {
    navSections
      .querySelectorAll(":scope .default-content-wrapper > ul > li")
      .forEach((navSection) => {
        if (navSection.querySelector("ul"))
          navSection.classList.add("nav-drop");
        navSection.addEventListener("click", () => {
          if (isDesktop.matches) {
            const expanded =
              navSection.getAttribute("aria-expanded") === "true";
            toggleAllNavSections(navSections);
            navSection.setAttribute(
              "aria-expanded",
              expanded ? "false" : "true"
            );
          }
        });
      });
  }

  // hamburger for mobile
  const hamburger = document.createElement("div");
  hamburger.classList.add("nav-hamburger");
  hamburger.innerHTML = `<button type="button" aria-controls="nav" aria-label="Open navigation">
      <span class="nav-hamburger-icon"></span>
    </button>`;
  hamburger.addEventListener("click", () => toggleMenu(nav, navSections));
  nav.prepend(hamburger);
  nav.setAttribute("aria-expanded", "false");
  // prevent mobile nav behavior on window resize
  toggleMenu(nav, navSections, isDesktop.matches);
  isDesktop.addEventListener("change", () =>
    toggleMenu(nav, navSections, isDesktop.matches)
  );

  const navWrapper = document.createElement("div");
  navWrapper.className = "nav-wrapper";
  navWrapper.append(nav);
  block.append(navWrapper);
}
