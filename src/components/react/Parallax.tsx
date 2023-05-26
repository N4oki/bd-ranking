import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import { MOST_VOTED } from "../../const";

interface imageItemProps {
  imageProps: {
    name: string;
    src: string;
    text: string;
    description: string;
  };
  index: number;
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Fighter({ imageProps, index }: imageItemProps) {
  const { name, src, text, description } = imageProps;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  const IS_EVEN = (index + 1) % 2 == 0;

  return (
    <section className="relative mx-auto flex h-screen min-h-[600px] w-4/5 max-w-3xl  snap-center items-center justify-center md:w-[70%]">
      <div ref={ref}>
        {index == 0 && (
          <h2 className=" mb-8 w-full text-center font-mono text-2xl md:text-5xl">
            ファン人気投票
          </h2>
        )}
        <h3 className="w-max bg-primary-red px-4 text-xl md:text-3xl">
          <span className="mr-2">{index + 1}</span> {name}
        </h3>
        <img src={src} alt="alt" className="z-40 max-h-[500px] grayscale " />
        <motion.div
          className="absolute top-2/3  bg-primary-red p-2"
          style={{
            y,
            left: IS_EVEN ? "auto" : "-5%",
            right: IS_EVEN ? "-5%" : "auto",
            textAlign: IS_EVEN ? "right" : "left",
          }}
        >
          <h2 className="text-lg md:text-3xl">{text}</h2>
          <p className="hidden text-2xl md:block">{description}</p>
        </motion.div>
      </div>
    </section>
  );
}

const Parallax = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {MOST_VOTED.map((fighter, index) => {
        return (
          <Fighter
            imageProps={fighter}
            index={index}
            key={fighter.name + index}
          />
        );
      })}

      <motion.div
        style={{
          scaleX,
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 50,
          height: "5px",
          background: "red",
        }}
      />
    </>
  );
};

export default Parallax;
