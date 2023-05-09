import React from "react";
import styles from './navigation.module.css'
export default function Navigation(){

    return(
        <div className={styles.navbar}>
            <div className={styles.navcontainer}>  
                <div>
                    <a href="https://en.wikipedia.org/wiki/Taj_Mahal" >Explore India</a>
                </div>
                <div className={styles.navItem}>
                    <button className=" navBtn">Ragister</button>
                    <button className="navBtn">Login </button>
                </div>
            </div>
        </div>
    );
}