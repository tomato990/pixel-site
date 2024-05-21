import React from "react";
import { Helmet } from "react-helmet";
import CookieConsent from "react-cookie-consent";
import { useLocation } from "@reach/router";
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies";

import { Header } from "./Header";
import { FacebookPixelProvider } from "./FacebookPixelProvider";

const CONSENT_COOKIE_NAME = "cookie-consent";

const layoutStyle: React.CSSProperties = {
  maxWidth: 650,
};

const pageStyles: React.CSSProperties = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

export const Layout: React.FC = ({ children }) => {
  const location = useLocation(); // eslint-disable-line @typescript-eslint/no-unsafe-assignment

  return (
    <FacebookPixelProvider>
      <script>
    var __cbSdkHost = "https://capig05210653.weichengw.cbinternal.com/";
    var __cbSdkSettings={'cbq':{destinations:[{name:"cloudbridge"},],
    "host":__cbSdkHost,"globalVar":"cbq",}};
    !function(a,h,e,v,n,t,s)
      {if(a.cbq)return;n=a.cbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!a._cbq)a._cbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=h.createElement(e);t.async=!0;
      t.src=v;s=h.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      "cdn05210653.weichengw.cbinternal.com"+'sdk/capig-events.js');
    cbq('init', "2433542999149778442");
    cbq('loadConfig', "2433542999149778442");
    cbq('track', 'PageView');
    </script>
      <Helmet
        title="Altmeta.org Pixel Test"
        meta={[
          {
            name: "description",
            content: "a website for testing facebook pixel",
          },
          { name: "keywords", content: "facebook, pixel" },
          { name: "author", content: "Zack Spellman" },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <div style={layoutStyle}>
        <Header />
        <main style={pageStyles}>{children}</main>
        <CookieConsent
          cookieName={CONSENT_COOKIE_NAME}
          onAccept={() => initializeAndTrack(location)}
        >
          This website uses cookies to enhance the user experience.
        </CookieConsent>
      </div>
    </FacebookPixelProvider>
  );
};
