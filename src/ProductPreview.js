import React from 'react'
import styles from './ProductPreview.module.css'

const ProductPreview=(props)=> {
    
   const currentHour  = new Date().getHours() > 9? new Date().getHours() : '0' +new Date().getHours();
   const curretMinute = new Date().getMinutes()>9? new Date().getMinutes() : '0' +new Date().getMinutes();
   
    return (
        <div className={styles.ProductPreview}>
                <img src={props.currentPreviewImage} alt="Product preview"/>

                {
                    props.showHeartBeatSection ? 
                    <div className={styles.HeartBeat}>
                        <i className="fas fa-heartbeat"></i>
                        <p>78</p>
                    </div>
                    :
                    <div className={styles.TimeSection}>
                         <p>{ `${currentHour}:${curretMinute}`}</p>
                    </div>
                    
                    
                }
                
              
        </div>
    )
}

export default ProductPreview
