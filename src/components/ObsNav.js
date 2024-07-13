"use client";

import styles from './ObsNav.module.css';

function openCity(evt, cityName) {
    console.log(cityName);
    var i, x, tablinks;
    x = document.getElementsByClassName(styles.city);

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName(styles.obsButton);
    console.log(tablinks);
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("activeTab", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += ` ${styles.activeTab}`;
}

export default function ObsNav() {
    return (
        <div>
            <div className={styles.obsNavBox}>
                <button className={`${styles.obsButton} ${styles.activeTab}`} onClick={(event) => openCity(event, 'London')}>Quotes</button>
                <button className={`${styles.obsButton}`} onClick={(event) => openCity(event, 'Paris')}>Paris</button>
                <button className={`${styles.obsButton}`} onClick={(event) => openCity(event, 'Tokyo')}>Tokyo</button>
            </div>
            <div className={styles.obsContentBox}>
                <div id="London" className={styles.city}>
                    <h1 className={styles.title}>Quotes</h1>
                    <blockquote>Those who lack the courage will always find a philosophy to justify it</blockquote>
                </div>   
                <div id="Paris" className={styles.city} style={{display: 'none'}}>
                    <h1 className={styles.title}>Paris</h1>
                    <p>Paris is the capital of France.</p>
                </div>
                <div id="Tokyo" className={styles.city} style={{display: 'none'}}>
                    <h1 className={styles.title}>Tokyo</h1>
                    <p>Tokyo is the capital of Japan.</p>
                </div>      
            </div>
        </div>
    );
}