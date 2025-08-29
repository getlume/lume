export default function Seo() {
  return (
    <>
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Theme color */}
      <meta name="theme-color" content="#F4B942" />
      
      {/* Additional SEO meta tags */}
      <meta name="application-name" content="Lume Insurance" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Lume" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-TileColor" content="#F4B942" />
      <meta name="msapplication-tap-highlight" content="no" />
    </>
  );
}