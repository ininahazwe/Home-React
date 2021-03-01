import React from "react";
import {Background1} from "./BackgroundElements";
import {motion} from "framer-motion";

const BackgroundAnimation = () => {
    const fadeTop = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 }
    };
    return(
        <>
            <motion.div
                variants={fadeTop}
                initial='hidden'
                animate='visible'
                transition={{ duration: 1 }}
            >
                <Background1 />
            </motion.div>

        </>
    )
}

export default BackgroundAnimation;