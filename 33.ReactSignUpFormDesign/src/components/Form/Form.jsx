  
import React from 'react'
import styles from './Form.module.css'
function Form() {
  return (
    <div className={styles.formContainer} >
      <div className={styles.iconHolder}>
    
          <img className={styles.img} src='https://play-lh.googleusercontent.com/TxmLWyfdIKLbCYkOVoofX_rxkTbX92TwQWGKdpG2qbzSgvf1Z0vj6KWzv8oC7bSosv8=w240-h480-rw'/> 
   
   
   Capsul

         </div>
<div style={{display:'flex',flexDirection:'column',paddingTop:'0px'}}> <div><h2>Create Account </h2></div> 
   <p >For business,brand or celebrity</p>  </div>

  <form className={styles.form}>
  <div>  <p>First name</p>
  <input className={styles.input}  type='text'      /></div>
<div>    <p>Last name</p>
<input  className={styles.input} type='text'      /></div>
<div>    <p>Email or phone number</p>
<input  className={styles.input} type='tel'      /></div>
<div>    <p>Date of birth</p>
<input className={styles.input}  type='date'    /></div>
<div>    <p>Password</p>
<input className={styles.input}  type='password'      /></div>
<div>    <p>Confirm password</p>
<input className={styles.input}  type='password'      /></div>

</form>
<div className={styles.checkboxContainer}><input type="checkbox" id="" />
<label for="vehicle1"> Remember me</label><br></br>

<input type="checkbox" id="" />
<label for="vehicle1"> I agree to all the terms and privacy policy</label>
 </div>

<div  className={styles.btnsContainer}><button className={styles.createBtn}>      Create account</button>
<button className={styles.signInBtn}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
<path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
</svg>Sign-in with Google</button>
</div>


 <div ><p>Don't have an account?<span style={{color:'deepskyblue'}}>Log in</span></p></div>


<div className={styles.getAppbtns}>
<div className={styles.btn}>
 <div><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"   width="40" height="40" viewBox="0 0 48 48">
<path fill="#4db6ac" d="M7.705,4.043C7.292,4.15,7,4.507,7,5.121c0,1.802,0,18.795,0,18.795S7,42.28,7,43.091c0,0.446,0.197,0.745,0.5,0.856l20.181-20.064L7.705,4.043z"></path><path fill="#dce775" d="M33.237,18.36l-8.307-4.796c0,0-15.245-8.803-16.141-9.32C8.401,4.02,8.019,3.961,7.705,4.043l19.977,19.84L33.237,18.36z"></path><path fill="#d32f2f" d="M8.417,43.802c0.532-0.308,15.284-8.825,24.865-14.357l-5.601-5.562L7.5,43.947C7.748,44.038,8.066,44.004,8.417,43.802z"></path><path fill="#fbc02d" d="M41.398,23.071c-0.796-0.429-8.1-4.676-8.1-4.676l-0.061-0.035l-5.556,5.523l5.601,5.562c4.432-2.559,7.761-4.48,8.059-4.653C42.285,24.248,42.194,23.5,41.398,23.071z"></path>
</svg></div>  <div className={styles.textHolder}> <div><span>Get It On</span></div> <div><span style={{fontSize:'20px'}}>Google Play</span></div> </div>  </div>
<div className={styles.btn}>
 <div><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 40 40">
<path fill="#e1ebf2" d="M36.62,28.775c-0.879,1.901-1.299,2.751-2.427,4.428c-1.576,2.346-3.803,5.273-6.555,5.294 c-2.446,0.019-3.131-1.022-6.451-0.997c-3.32,0.017-3.96,1.026-6.41,0.999c-2.75-0.023-4.857-2.661-6.434-5 c-4.329-6.444-4.794-14.39-2.151-18.361c1.928-2.904,4.981-4.61,7.846-4.61c2.919,0,4.754,1.91,7.166,1.91 c2.344,0,3.769-1.913,7.145-1.913c2.553,0,5.253,1.36,7.181,3.704C29.462,17.479,30.595,26.546,36.62,28.775z"></path><path fill="#788b9c" d="M14.873,38.999l-0.101,0c-2.946-0.024-5.113-2.653-6.844-5.221 C3.72,27.514,2.815,19.309,5.776,14.86c1.979-2.981,5.145-4.833,8.262-4.833c1.631,0,2.958,0.565,4.129,1.063 c1.023,0.436,1.99,0.847,3.037,0.847c0.958,0,1.761-0.362,2.69-0.782c1.174-0.53,2.506-1.131,4.455-1.131 c2.736,0,5.565,1.453,7.568,3.887l0.387,0.471l-0.538,0.288c-2.551,1.366-3.951,3.969-3.745,6.963 c0.21,3.06,2.083,5.679,4.772,6.673l0.507,0.188l-0.227,0.491c-0.91,1.967-1.329,2.806-2.466,4.498 c-1.824,2.715-4.078,5.493-6.966,5.515c-0.001,0-0.001,0-0.002,0c-1.232,0-2.01-0.225-2.835-0.462 C23.894,38.271,22.951,38,21.309,38l-0.117,0c-1.695,0.008-2.644,0.28-3.56,0.543C16.813,38.777,16.039,38.999,14.873,38.999z M14.038,11.027c-2.786,0-5.633,1.681-7.429,4.386c-2.701,4.058-1.776,11.962,2.149,17.806c1.585,2.352,3.541,4.759,6.023,4.779 l0.092,0.5v-0.5c1.025,0,1.701-0.193,2.483-0.417c0.936-0.269,1.997-0.572,3.829-0.582l0.124,0c1.783,0,2.841,0.305,3.773,0.574 c0.788,0.228,1.469,0.424,2.492,0.424c2.484-0.019,4.526-2.575,6.204-5.073c1.001-1.49,1.428-2.299,2.168-3.886 c-2.787-1.256-4.698-4.078-4.923-7.337c-0.219-3.182,1.167-5.979,3.733-7.601c-1.779-1.936-4.137-3.077-6.408-3.077 c-1.733,0-2.908,0.53-4.043,1.042c-0.992,0.448-1.929,0.871-3.102,0.871c-1.25,0-2.358-0.471-3.428-0.927 C16.639,11.527,15.465,11.027,14.038,11.027z"></path><g><path fill="#e1ebf2" d="M26.339,7.491c1.315-1.634,2.456-3.641,2.093-5.991c-2.144,0.143-4.796,1.169-6.261,2.886 c-1.328,1.565-1.98,3.865-1.551,6.114C22.96,10.571,24.933,9.245,26.339,7.491z"></path><path fill="#788b9c" d="M20.799,11.003C20.799,11.003,20.799,11.003,20.799,11.003l-0.596-0.015l-0.075-0.394 c-0.439-2.304,0.197-4.807,1.661-6.531c1.638-1.919,4.5-2.92,6.609-3.062l0.458-0.03l0.07,0.453 c0.424,2.746-1.051,4.957-2.197,6.381C25.075,9.867,22.969,11.003,20.799,11.003z M27.989,2.046 c-1.794,0.231-4.118,1.118-5.438,2.665c-1.187,1.397-1.747,3.39-1.505,5.286c1.775-0.084,3.507-1.078,4.903-2.819 C27.44,5.326,28.096,3.682,27.989,2.046z"></path></g>
</svg></div>  <div className={styles.textHolder}> <div><span>Get It On</span></div> <div><span style={{fontSize:'20px'}}>Google Play</span></div> </div>  </div>
</div>

    </div>
  )
}

export default Form

