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
  // If we're on a different path (like /impressum) we need to go to the
  // root and include the hash so the main SPA can handle scrolling.
  // Using an absolute path '/#id' ensures we land on the homepage with the
  // requested fragment.
  try {
    window.location.href = '/#' + id;
  } catch (e) {
    // fallback: set hash on current location (best-effort)
    window.location.hash = id;
  }
  return false;
}
