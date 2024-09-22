import React from 'react'
import styles from './WelcomeToNextWebsite.module.css'
function WelcomeToNextWebsite() {
  return (
    <div className={styles.imgContainer}>
      
      <img src='public/images/bg-callout.jpg'className={styles.image}   >

    
</img>

<div className={styles.text}>
<h1 className=''> Welcome to your next website! </h1> 


<div><button className={styles.btn}> Download Now!</button></div> 
</div>




    </div>
  )
}

export default WelcomeToNextWebsite
