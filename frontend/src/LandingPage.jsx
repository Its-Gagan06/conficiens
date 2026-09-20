import './App.css'
import page from './landing-page.png'
import {Link} from 'react-router-dom'
function LandingPage() {
  return (
    <>
    <div className='Header'>
        
     <div className='placevault'>
        <i class="fa-solid fa-vault" ></i>
       <h2>PlaceVault</h2>
      </div> 

      <div className='sign-up-opts'>
        <Link to="/Login"> 
           <button className='btn'>Log in</button> 
        </Link>
        <Link to = "/Signup">
            <button className='btn'>Sign up</button>
        </Link>
       
      </div>

      </div>

      <div className='desc-photo'>

      <div className='description'>
         <p className='heading'><strong>Your placement journey , simplified</strong></p>
         <div className='bold-head'>
         <div>One Platform.</div>
         <div>Every Resource.</div>
         <div className='results'>Real Results</div>
         </div>
      </div>

      <div className='image' >
         <img src={page} alt="" />
      </div>

       </div>
    </>
  )
}

export default LandingPage
