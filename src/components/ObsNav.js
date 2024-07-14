"use client";

import styles from './ObsNav.module.css';

function openTab(evt, tabName) {
    var i, x, tabLinks;
    x = document.getElementsByClassName(styles.tab);

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName(styles.obsButton);
    console.log(tabLinks);
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace("activeTab", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += ` ${styles.activeTab}`;
}

export default function ObsNav( { children } ) {
    return (
        <div>
            <div className={styles.obsNavBox}>
                <button className={`${styles.obsButton} ${styles.activeTab}`} onClick={(event) => openTab(event, 'Quotes')}>Quotes</button>
                <button className={`${styles.obsButton}`} onClick={(event) => openTab(event, 'Paris')}>Art</button>
                <button className={`${styles.obsButton}`} onClick={(event) => openTab(event, 'Tokyo')}>Tributes</button>
            </div>
            <div className={styles.obsContentBox}>
                <div id="Quotes" className={styles.tab}>
                    <>{children}</>
                </div>   
                <div id="Paris" className={styles.tab} style={{display: 'none'}}>
                    <h1 className={styles.title}>Art</h1>
                    <p>In development...</p>
                </div>
                <div id="Tokyo" className={styles.tab} style={{display: 'none'}}>
                    <h1 className={styles.title}>Tributes</h1>
                    <p>In development...</p>
                </div>      
            </div>
            <div className={styles.paddingBox}></div>
        </div>
    );
}