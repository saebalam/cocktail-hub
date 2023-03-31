import React from 'react'
import { Link ,useLocation,useParams} from 'react-router-dom'
import logo from '../logo.svg'
import SearchForm from './SearchForm'

const Navbar = () => {
  const {pathname} = useLocation()
  {console.log('url',pathname)}
  return (
    <>
      <div className='MyNavBar'>
        <h3>
          The <span style={{backgroundColor:'#965959',color:'white',padding:'2px'}}>COCKTAIL</span> DB
        </h3>
        <h3 className='NavPath'>
          <Link className={pathname=='/'? 'home active' : 'home'} to='/'>Home</Link>
          <Link className={pathname=='/About'? 'about active' : 'about'} to='/About'>About</Link>
        </h3>
      </div>

    </>
  )
}

export default Navbar
