import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart ,faUser,faDoorOpen} from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../context/authContext';
function Header(props)
{
    const {user,dispatch} = useContext(AuthContext);
    const handleClick=()=>{
        dispatch({type:"LOGOUT"})
    }
    return ( <>
<div class="main-nav-container">
    <div class="home-section-main-1">
        <div class="brand-name">
            <NavLink to="/"><p>Lu<span style={{color:'rgb(242, 75, 103)'}} class="xcom">X</span>ry</p></NavLink>
        </div>
            <div class="home-section">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
        </div>

        <div class="home-section-main-2">
            <div class="home-section-2">
                <ul>
                    <li id='fav-lg'><NavLink to="/fav"><FontAwesomeIcon icon={faHeart}/>&nbsp;&nbsp;&nbsp;Favorites</NavLink></li>
                    <li id='fav-sm'><NavLink to="/fav"><FontAwesomeIcon icon={faHeart}/></NavLink></li>
                    {user? (<li id='lg-screen'>{user.name}<a onClick={handleClick} id='logouticon' style={{cursor:'pointer'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faDoorOpen}/>&nbsp;Logout</a></li>) :(<li><NavLink to="/signup"><FontAwesomeIcon icon={faUser} />&nbsp;&nbsp;&nbsp;Login</NavLink></li>)}
                    <li id='sm-screen'><NavLink to="/signup">{user?user.name:(<FontAwesomeIcon icon={faUser} />)}</NavLink></li>
                </ul>
            </div>
        </div>
    </div>
</>) ;
}
export default Header;