import React from 'react'
import styles from './Buttons.module.css'
function Buttons() {
  return (
    <div className={styles.container} >
        <div>  <b><p style={{color:'white' ,fontSize:'30px'}}> The buttons below are impossible to resist...</p>  </b>  
  
  <div className={styles.btnsContainer}>

   
 <button className={styles.clickMeBtn}> Click me!</button>
 <button className={styles.lookAtMebtn}> Look at me!</button>
 </div> 
</div>
      

    </div>
  )
}

export default Buttons

