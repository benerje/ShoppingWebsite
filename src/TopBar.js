import React from 'react'
import styles from './TopBar.module.css'

const TopBar=()=> {
    return (
        <div>
            <header className="App-header">
               <nav className={styles.Topbar}>
                       <img src="https://media.playcentral.de/wp-content/uploads/2012/12/24123632/amazon-1.jpg" alt="Amazon Logo"/>
               </nav>
             </header>
        </div>
    )
}

export default TopBar;
