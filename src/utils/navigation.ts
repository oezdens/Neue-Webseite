// Small helper to navigate to page sections using the History API so URLs become
// clean paths (e.g. /Startseite) instead of hash fragments. If the target
// element exists on the current page the helper will perform a smooth scroll
// and update the address bar with pushState. If the element is not present
// (we're on another page) it falls back to a full navigation to the mapped path.

type Mapping = { [id: string]: string };

const PATH_MAP: Mapping = {
  home: "/Startseite",
  leistungen: "/leistungen",
  "ueber-mich": "/ueber-mich",
  ablauf: "/ablauf",
  preise: "/preise",
  kontakt: "/kontakt",
};

export function navigateToSection(id: string): boolean {
  const element = document.getElementById(id);
  const targetPath = PATH_MAP[id] ?? `/${id}`;

  if (element) {
    // compute header offset similar to Header.tsx so the section isn't hidden
    const headerEl = document.querySelector("header") as HTMLElement | null;
    const headerHeight = headerEl ? headerEl.offsetHeight : 120;
    const top = element.getBoundingClientRect().top + window.scrollY;

    // Slightly different offset for Kontakt to make it appear a bit higher
    const desired = id === "kontakt" ? Math.max(0, top - headerHeight + 8) : Math.max(0, top - headerHeight - 16);

    window.scrollTo({ top: desired, behavior: "smooth" });

    // Update the URL without reloading the page
    try {
      window.history.pushState({}, "", targetPath);
    } catch (err) {
      // ignore pushState errors in very old browsers
    }

    return true;
  }

  // element not found on this page -> navigate to the path so server/app can
  // serve the main page which will then handle scrolling to the section
  window.location.href = targetPath;
  return false;
}
