import React from 'react'
import styles from'./ProductDetails.module.css'

const ProductDetails = (props) =>{

    const colorOptions = props.data.colorOptions.map((item,pos)=>{
        const classArr = [styles.ProductImage]
        if(pos ===props.currentPreviewImagepos) {
            classArr.push(styles.SelectedProductImage)
        }
        return (
            <img className={classArr.join(' ')} src={item.imageUrl} key={pos} alt={item.styleName} onClick={()=>props.onColorOptionClick(pos)}/>
                         
        )
    })

    const featureList = props.data.featureList.map((item,pos)=>{
        

        const classArr = [styles.FeatureItem];
        if(pos===1 &&  props.showHeartBeatSection){
            classArr.push(styles.SelectedFeatureItem);
        
        }else if(pos===0 && !props.showHeartBeatSection ){
            classArr.push(styles.SelectedFeatureItem);
        }
        return(
        <button onClick={()=>props.onFeatureItemClick(pos)} key={pos} className={classArr.join(' ')}>{item}</button>
                        
        )
    })
    
    return (
        <div>
              <div className={styles.ProductData}>
                      <h1 className={styles.ProductTitle}>{props.data.title}</h1>
                       <p className={styles.ProductDescription}>{props.data.description}</p>
                       <h3 className={styles.SectionHeading}>Select Color</h3>
                       <div>
                           {colorOptions}
                       </div>
                       <h3 className={styles.SectionHeading}>Features</h3>
                       <div>
                           {featureList}
                       </div>
                       <button className={styles.PrimaryButton}>Buy Now</button>
              </div>
        </div>
    )

    }
export default ProductDetails
