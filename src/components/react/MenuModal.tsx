import { AnimatePresence, motion } from "framer-motion";

const MenuModal = ({
  isModalOpen,
  handleClose,
}: {
  isModalOpen: boolean;
  handleClose: () => void;
}) => {
  return (
    <AnimatePresence>
      {isModalOpen ? (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed left-0 top-0 z-50 grid h-screen w-full content-center"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 left-0 top-0 z-40 h-screen w-full bg-black bg-opacity-95   transition-opacity" />
          <div className="z-50 flex flex-col items-center justify-center gap-4">
            <div className=" h-0.5 w-4/5 bg-gray-500    " />
            <ul className="flex flex-col gap-4 text-2xl">
              <li className="text-center ">
                <a href="/" target="_self">
                  HOME
                </a>
              </li>
              <li className="text-center ">
                <a href="/ranking">ランキング一覧</a>
              </li>
              <li className="text-center ">
                <a href="/fighters">選手一覧</a>
              </li>
              <li className="text-center ">
                <a href="/news">ブレイキングニュース</a>
              </li>
            </ul>
            <button
              className="w-max font-mono font-semibold "
              onClick={handleClose}
            >
              CLOSE
            </button>
            <div className=" h-0.5 w-4/5 bg-gray-500 " />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default MenuModal;
