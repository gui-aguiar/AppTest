import React, { useEffect, useState } from "react";
import styles from './Logo.module.css';

const Logo = () => {

    const [width, setWidth] = useState(window.innerWidth);


    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return <span className={styles.SWStarter}>
        {width < 600 ? "VelozientApp" : "VelozientApp - Guilherme Aguiar"}
    </span>
};

export default Logo;
