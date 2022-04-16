import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-dark py-3 mt-4">
      <small className="text-light">
        Copyright &copy; {year} Ema John | Designg-By :{" "}
        <a
          className="text-decoration-none"
          target="_blank"
          href="https://www.facebook.com/Minhajul69"
        >
          AKIB
        </a>
      </small>
    </footer>
  );
};

export default Footer;
