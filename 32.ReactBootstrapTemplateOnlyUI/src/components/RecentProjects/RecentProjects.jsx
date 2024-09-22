import React from 'react'
import styles from './RecentProjects.module.css'
function RecentProjects() {
  return (
    <div className={styles.mainContainer}>
      <div   ><div   children ={styles.textContainer} >  
          <div><h5 style={{color:'gold',fontSize:'20px'}}> Portfolio</h5> </div>  
     <div> <h1 style={{fontSize:'40px',color:'black'}}>    Recent Projects</h1></div> 
       </div>
       
       <div className={styles.portfolioContainer}>
  <img  className={styles.item}   src='public/images/portfolio-1.jpg'></img>
  <img  className={styles.item}  src='public/images/portfolio-2.jpg'></img>
  <img className={styles.item}src='public/images/portfolio-3.jpg'></img>
  <img className={styles.item} src='public/images/portfolio-4.jpg'></img>
       </div>
</div>

  
      


    </div>
  )
}

export default RecentProjects
