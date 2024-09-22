import React from 'react'
import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <div  className={styles.mainContainer}>
        <div>     <div className={styles.container}   >  
             <FontAwesomeIcon icon={faFacebook}  style={{color:'dodgerblue',width:'80px',height:'80px'}}/>
          
 
          <FontAwesomeIcon icon={faTwitter}    style={{color:'dodgerblue',width:'80px',height:'80px'}}/>
          <FontAwesomeIcon icon={faGithub}   style={{color:'dodgerblue',width:'80px',height:'80px'}}/></div>
    

   <p style={{paddingTop:'30px'}}> Copyright © Your Website 2023</p> </div>
   
    </div>

  )
}

export default Footer
