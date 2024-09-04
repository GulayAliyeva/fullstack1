import React from 'react'
import styles from './Services.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile as faMobileLight } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
function Services() {
  return (
    <div className={styles.container}>
        <div className={styles.items}>    
        <div style={{color:'white',paddingTop:'50px'}}><span style={{color:'gold'}}> SERVICES</span> </div>  
            <div className={styles.textContainer}>
     
     <h1 style={{fontSize:'40px',color:'white'}}>     What We Offer</h1> 
   
       </div>
<div className={styles.iconContainer}>
  <div className={styles.item}>
    <div className={styles.icon}>
  <FontAwesomeIcon  icon={faMobileLight}  size='xl' style={{color: "blue",}} />
   
   </div>
 <div>Responsive</div>
 <div>Looks great on any screen size!</div>
 </div>

 <div>
   <div className={styles.icon}>
  <FontAwesomeIcon  icon={faPencil}  size='xl' style={{color: "blue",}} />
   </div>
   <div>Redesigned</div>
   <div>Freshly redesigned for Bootstrap 5.</div>
 </div>


<div>   <div className={styles.icon}>
  <FontAwesomeIcon  icon={faThumbsUp}  size='xl' style={{color: "blue",}} />
   </div>
   <div>Favorited</div>
   <div>Millions of users  Start Bootstrap!</div></div>

<div>   <div className={styles.icon}>
  <FontAwesomeIcon  icon={faQuestion}  size='xl' style={{color: "blue",}} />
   </div>
   <div><b>Question</b></div>
   <div>I mustache you a question...</div></div>

   
</div>
</div>
 
    </div>
  )
}

export default Services
