import React, { Component } from 'react'
import styles from'./App.module.css'
import ProductData from './ProductData'
import ProductPreview from './ProductPreview';
import ProductDetails from './ProductDetails'
import TopBar from './TopBar';





class App extends Component{
    state={
        productData: ProductData,
        currentPreviewImage: 'https://imgur.com/Mplj1YR.png',
        showHeartBeatSection: false,
        currentPreviewImagepos: 0

    }
    onColorOptionClick = (pos) =>{
        
          const updatedPreviewImage = this.state.productData.colorOptions[pos].imageUrl
          this.setState( {currentPreviewImage: updatedPreviewImage});
          this.setState( {currentPreviewImagepos: pos});

         
        }
    onFeatureItemClick = (pos)  =>{
        let updatedState = false;
        
        if(pos===1){
            updatedState = true;
         this.setState({showHeartBeatSection: updatedState})
    }  else{
        this.setState({showHeartBeatSection: updatedState})
    }
}
// shouldComponentUpdate(nextProps,nextState){
//     if(nextState.currentPreviewImagepos === this.state.currentPreviewImagepos){
//         return false;
//     }
//     return true;
// }

    render(){
        
        console.log("render method called")
        return (
            <div className="App">
               
                  <TopBar />
                 
                  <div className={styles.Maincontainer}>
                   <div className={styles.ProductPreview}>
                       <ProductPreview currentPreviewImage={this.state.currentPreviewImage} showHeartBeatSection={this.state.showHeartBeatSection}/>
                   </div>
                   <div className={styles.ProductData}>
                       <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick} currentPreviewImagepos={this.state.currentPreviewImagepos} onFeatureItemClick={this.onFeatureItemClick} showHeartBeatSection={this.state.showHeartBeatSection}/>
                   </div>
                 </div>

             </div>
        );
    }
}


export default App
