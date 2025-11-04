// Navigation using hash fragments - works without server configuration
export function navigateToSection(id: string): boolean {
  const element = document.getElementById(id);

  if (element) {
    // compute header offset similar to Header.tsx so the section isn't hidden
    const headerEl = document.querySelector("header") as HTMLElement | null;
    const headerHeight = headerEl ? headerEl.offsetHeight : 120;
    const top = element.getBoundingClientRect().top + window.scrollY;

    // Slightly different offset for Kontakt to make it appear a bit higher
    const desired = id === "kontakt" ? Math.max(0, top - headerHeight + 8) : Math.max(0, top - headerHeight - 16);

    window.scrollTo({ top: desired, behavior: "smooth" });

    // Update the URL with hash
    window.location.hash = id;

    return true;
  }

  // element not found on this page -> navigate using hash
  window.location.hash = id;
  return false;
}
