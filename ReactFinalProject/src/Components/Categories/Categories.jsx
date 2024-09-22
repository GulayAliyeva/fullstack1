import React from 'react'
import styles from './Categories.module.css'
import { style } from 'framer-motion/client'
import item1 from '../../assets/items1.jpg'
import item2 from '../../assets/items2.jpg'
import item3 from '../../assets/items3.jpg'
import { Link } from 'react-router-dom'

const products = [
  { id: 1, title: "Men's Fashion", image: item1 },
  { id: 2, title: "Women's Fashion", image: item2 },
  { id: 3, title: "Baby's Fashion", image: item3 },

]

  function Categories() {
    return (
      <div className={styles.container}>
        {products.map((product) => (
          <div key={product.id}>
            <div className={styles.imageContainer}>
              <img src={product.image} className={styles.img} alt={product.title} />
              <div className={styles.Title}>
                <h2 className={styles.caption}>{product.title}</h2>
                <Link to={`/detail/${product.id}`} className={styles.shopNow}>
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        ))}
    
      </div>
    );
  }
export default Categories
