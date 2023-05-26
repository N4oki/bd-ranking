import { useState, useEffect } from "react";
import MenuModal from "./MenuModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClose = () => {
    setIsModalOpen(!isModalOpen);
  };
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    if (window.scrollY > 100) {
      setScrollPosition(window.scrollY);
      return;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-50 flex w-full flex-row justify-between bg-black ${
          scrollPosition > 100
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-10 opacity-0"
        } transition-all delay-300 duration-1000`}
      >
        <div className="mx-auto flex  w-4/5  flex-row justify-between pt-2  font-mono text-xl md:pt-4  md:text-4xl">
          <a href="/">
            BREAKING
            <br />
            HUB
          </a>

          <button
            className="font-mono font-semibold"
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            MENU
          </button>
        </div>
      </nav>
      <MenuModal isModalOpen={isModalOpen} handleClose={handleClose} />
    </>
  );
};

export default Header;
