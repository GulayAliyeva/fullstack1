import React from 'react'
import styles from './Header.module.css'
function Header() {
  return (
    <div  className={styles.imgContainer}>
      <img src='public/images/bg-masthead.jpg'className={styles.image}   >

    
      </img>

   <div className={styles.text}>
  <h1 className=''> Stylish Portfolio </h1> 
  <em className={styles.secondLineText}> A Free Bootstrap Theme by Start Bootstrap  </em> 

  <div><button className={styles.btn}> Find out more</button></div> 
   </div>
  
   <div    className={styles.centeredText}   style={{color:'black',  marginTop:'130px'}}  >
   <h1 className={styles.firstLineText}>Stylish Portfolio is the perfect theme for your next project!</h1>
   This theme features a flexible, UX friendly sidebar menu and stock photos from our friends at Unsplash !
   
  <div><button className={styles.btn} style={{backgroundColor:'black'}}> What we offer</button></div> 
   </div>

    </div>
  )
}

export default Header
