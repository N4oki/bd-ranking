import { useState } from "react";
import MenuModal from "./MenuModal";

const SubPageHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClose = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <nav className="flex w-full flex-row justify-between bg-black">
        <div className="mx-auto flex w-full  flex-row justify-between pt-2  font-mono text-xl text-white  md:pt-4 md:text-4xl">
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

export default SubPageHeader;
