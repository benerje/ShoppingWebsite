import logo, { ReactComponent } from './logo.svg';
import './App.css';
import styles from './Style.module.css'
import React,{Component} from 'react'
import Blogcard from './Components/Blogcard'
import {isArrayEmpty} from './Components/Utilits'

class App extends Component {
  state = {
    ShowBlocks  :true,
    blogArr: [{
      id:1,
      heading: 'Heading1',
      description:'when the dog was thorwn in the corner of the case shook with fear and ran to to corner of the case',
      Likecount: 0
     },{
       id:2,
        heading: 'Heading2',
        description:'when the dog was thorwn in the corner of the case shook with fear and ran to to corner of the case',
        Likecount: 0
      },{
        id:3,
        heading: 'Heading3',
        description:'when the dog was thorwn in the corner of the case shook with fear and ran to to corner of the case',
        Likecount: 0
      }]
   
    
  }


   LikeButton=(pos)=>{

     const updatedBloglist = this.state.blogArr;
     const updatedBlogObj = updatedBloglist[pos];

     updatedBlogObj.Likecount=updatedBlogObj.Likecount +1;
     updatedBloglist[pos] = updatedBlogObj
     this.setState(()=>{
      return{blogArr: updatedBloglist}
     })
   }
   
   
  

   HideClick=()=>{
     this.setState((prevState,prevProps) => {
       return {ShowBlocks: !prevState.ShowBlocks}
      
     })
   }
   

   render(){
    const blogCards = isArrayEmpty(this.state.blogArr)?[]:this.state.blogArr.map((item,pos)=>{
      return(
         <Blogcard like={item.Likecount} likeButton={()=>this.LikeButton(pos)} title={item.heading} description={item.description} key={pos} position={pos}/>
      )
    })
     
     console.log('rendercalled')
     return(
      <div className="App">
          <button onClick={this.HideClick}> {this.state.ShowBlocks?"Hide blocks":"Show blocks"}</button>
          <br></br>
          {
            this.state.ShowBlocks?blogCards:[]
             
          }
         
      </div>
     )
   }
 
}

export default App;
