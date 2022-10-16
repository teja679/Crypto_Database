import React from "react";
import "./styles.css";
import { motion } from "framer-motion";

function Button({ text, className, onClick }) {
  return (
    <div className={`${className}-wrapper`} onClick={onClick}>
      <motion.p
      initial={{ y: 0, x: 10 }}
      animate={{ y: 0, x: 0 }}
      transition={{
        type: "smooth",
        repeatType: "mirror",
        duration: 2,
        repeat: onClick,
      }}
      >{text}</motion.p>
    </div>
  );
}

export default Button;

/* <motion.img
          src={iPhone}
          className="phone"
          initial={{ y: 0 , x: -10}}
          animate={{ y: 50, x: 10  }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />*/