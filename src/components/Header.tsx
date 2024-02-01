import React from "react";
import { Link } from "gatsby";

const headingStyles: React.CSSProperties = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 640,
};

export const Header: React.FC = () => {
  return (
    <header>
      <title>Altmeta.org Pixel Test</title>
      <Link to="/">
        <h1 style={headingStyles}>Altmeta.org Pixel Test</h1>
      </Link>
      <script>
    var __cbSdkHost = "https://dlz4ju33qov8p.cloudfront.net/";
    var __cbSdkSettings={'cbq':{destinations:[{name:"cloudbridge"},],
    "host":__cbSdkHost,"globalVar":"cbq",}};
    !function(a,h,e,v,n,t,s)
      {if(a.cbq)return;n=a.cbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!a._cbq)a._cbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=h.createElement(e);t.async=!0;
      t.src=v;s=h.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      __cbSdkHost+'sdk/capig-events.js');
    cbq('init', "4790815198314486511");
    cbq('loadConfig', "4790815198314486511");
    cbq('track', 'PageView');
    </script>
    </header>
  );
};
