import React, { Component } from 'react'
import styles from '../Style.module.css'

const Blogcard=(props)=> {
    console.log(props)
    // state={
    //     count: 0
    // }
    // LikeHandler=()=>{
    //    this.setState(()=>{
    //       return {count: this.state.count+1}
    //    })
    // }
    // render(){
    return(
        <div className={styles.BlogCard}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <button onClick={props.likeButton}>Like</button>
          <p>Like-count={props.like}</p>
         </div>
    )
 }



export default Blogcard