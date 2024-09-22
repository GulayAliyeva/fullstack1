import React from 'react'
import styles from './Services.module.css'
import deliveryIcon  from '../../assets/services1.svg'
import paymentIcon  from '../../assets/services2.svg'
import moneyIcon from '../../assets/services3.svg'
import supportIcon  from '../../assets/services4.svg'
function Services() {
  return (
    <div className={styles.servicesArea}>
      <div className={styles.container}>

<div className="col-lg-3 col-md-6 col-sm-6">
<div className="single-cat mb-50 wow fadeInUp text-center">
<div className="cat-icon">
<img src={deliveryIcon} alt="" style={{width:"50px",height:'40px'}}/>
</div>
<div className="cat-cap">
<h5>Fast &amp; Free Delivery</h5>
<p>Free delivery on all orders</p>
</div>
</div>
</div>
<div className="col-lg-3 col-md-6 col-sm-6">
<div className="single-cat mb-50 wow fadeInUp text-center" >
<div className="cat-icon">
<img src={paymentIcon} alt="" style={{width:"50px",height:'40px'}}/>
</div>
<div className="cat-cap">
<h5>Secure Payment</h5>
<p>Free delivery on all orders</p>
</div>
</div>
</div>
<div className="col-lg-3 col-md-6 col-sm-6">
<div className="single-cat mb-50 wow fadeInUp text-center" >
<div className="cat-icon">
<img src={moneyIcon} alt="" style={{width:"50px",height:'40px'}}/>
</div>
<div class="cat-cap">
<h5>Money Back Guarantee</h5>
<p>Free delivery on all orders</p>
</div>
</div>
</div>
<div class="col-lg-3 col-md-6 col-sm-6">
<div class="single-cat mb-50 wow fadeInUp text-center" >
<div class="cat-icon">
<img src={supportIcon} alt="" style={{width:"50px",height:'40px'}}/>
</div>
<div class="cat-cap">
<h5>Online Support</h5>
<p>Free delivery on all orders</p>
</div>
</div>
</div>
</div>

    </div>
  )
}

export default Services

