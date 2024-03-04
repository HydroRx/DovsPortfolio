import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-[96px]">
      <p className="text-md text-gradient-gtw drop-shadow-glow">Copyright ⓒ Oleg Doroshev {year}</p>
    </footer>
  );
}

export default Footer;
