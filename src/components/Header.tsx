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
    var __cbSdkHost = "https://testahp.weichengw.cbinternal.com/";
    var __cbSdkSettings={'cbq':{destinations:[{name:"cloudbridge"},],
    "host":__cbSdkHost,"globalVar":"cbq",}};
    !function(a,h,e,v,n,t,s)
      {if(a.cbq)return;n=a.cbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!a._cbq)a._cbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=h.createElement(e);t.async=!0;
      t.src=v;s=h.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      "https://d1m12fjtnf2nja.cloudfront.net/"+'sdk/capig-events.js');
    cbq('init', "7251534251557496328");
    cbq('loadConfig', "7251534251557496328");
    cbq('track', 'PageView');
    </script>
    </header>
  );
};
