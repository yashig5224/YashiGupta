import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);

    const prevTitle = document.title;
    document.title = "Page Not Found | Yashi Gupta";

    const setMeta = (selector: string, attr: string, name: string, content: string) => {
      let el = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      const prev = el.getAttribute("content");
      el.setAttribute("content", content);
      return () => {
        if (prev === null) el?.remove();
        else el?.setAttribute("content", prev);
      };
    };

    const restoreDesc = setMeta(
      'meta[name="description"]',
      "name",
      "description",
      "The page you're looking for doesn't exist. Head back to Yashi Gupta's portfolio home."
    );
    const restoreOgTitle = setMeta('meta[property="og:title"]', "property", "og:title", "Page Not Found | Yashi Gupta");
    const restoreOgDesc = setMeta(
      'meta[property="og:description"]',
      "property",
      "og:description",
      "This page doesn't exist. Return to Yashi Gupta's portfolio."
    );
    const restoreOgUrl = setMeta(
      'meta[property="og:url"]',
      "property",
      "og:url",
      `https://yashigupta22.lovable.app${location.pathname}`
    );

    // Canonical
    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const createdCanonical = !canonical;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    const prevHref = canonical.getAttribute("href");
    canonical.setAttribute("href", `https://yashigupta22.lovable.app${location.pathname}`);

    return () => {
      document.title = prevTitle;
      restoreDesc();
      restoreOgTitle();
      restoreOgDesc();
      restoreOgUrl();
      if (createdCanonical) canonical?.remove();
      else if (prevHref) canonical?.setAttribute("href", prevHref);
    };
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
