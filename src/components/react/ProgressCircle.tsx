import { motion } from "framer-motion";

const ProgressCircle = ({
  percentage_decimal,
  stroke_color,
  size = 150,
}: {
  percentage_decimal: number;
  stroke_color: string;
  size?: number;
}) => {
  const STROKEWIDTH = 8.5;
  const RADIUS = (size - STROKEWIDTH) / 2;

  const circumference = RADIUS * 2 * Math.PI;
  const percentage = Math.round(percentage_decimal / 5);
  const circles = [];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  if (percentage <= 20 || percentage >= 0) {
    for (let i = 1; i <= percentage; i++) {
      let rotate_num = -90 - 18 + 18 * i;
      circles.push(
        <motion.circle
          key={i}
          variants={item}
          cx={size / 2}
          cy={size / 2}
          r={RADIUS}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - circumference / 20 + 2}
          strokeWidth={STROKEWIDTH}
          transform={`rotate (${rotate_num} ${size / 2} ${size / 2} )`}
          className={stroke_color}
        />
      );
    }
  }

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox={`0 0 ${size}  ${size}`}
      variants={container}
      initial="hidden"
      animate="show"
      className="mx-auto"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={RADIUS * 0.85}
        fill="none"
        strokeWidth={2}
        className=" stroke-zinc-600/50  "
      />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={RADIUS * 0.85}
        fill="none"
        strokeDasharray={circumference * 0.85}
        strokeDashoffset={
          circumference * 0.85 * (1 - (percentage * 5) / 100) + 2
        }
        transform={`rotate (-90 ${size / 2} ${size / 2} )`}
        strokeWidth={1.5}
        className={stroke_color}
        variants={item}
      />
      {circles}
      <motion.text
        variants={item}
        x={size / 2}
        y={size / 2}
        textAnchor="middle"
        dominantBaseline="middle"
        style={{ color: "white" }}
        className={" fill-white  text-2xl  font-bold  "}
      >
        {percentage_decimal}%
      </motion.text>
    </motion.svg>
  );
};

export default ProgressCircle;
