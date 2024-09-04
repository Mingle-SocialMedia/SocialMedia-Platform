import Nav from "./nav";
import './mainpage.css';
import Man from './images/Man.png'
import Love from './images/love.png'
import Mark from './images/mark.png'
import set from './images/settings.png'
import { useState } from "react";
import Profile from "./profile";
import PostAdd from "./postAdd";
import Chat from "./chatinterface";
import firstpost from './images/39609.jpg'
const Mainpage=()=>{
    const [toggleProf,setProf]=useState()
    const [togglePost,setNewPost]=useState()
    const[toggleChat,setchat]=useState(true)
    const handleProfileToggle=()=>{
        setProf(!toggleProf)
    } 
    const handlePostToggle=()=>{
        setNewPost(!togglePost)
    }
    const handleChat=()=>{
        setchat(!toggleChat)
    }
    return(
        <>
        <Nav/>
        <div className="main-body">
        <aside>
            <div className="aside-cont-div">
              <button><img src={Man} alt="" width={60}height={60} onClick={handleProfileToggle}/></button>
              <button><img src={Love} alt="" width={60}height={60} onClick={handleChat}/></button>
              <button><img src={Mark} alt="" width={60}height={60} onClick={handlePostToggle}/></button>
              <div className="aside-btn-set"><img src={set} alt="" width={60}height={60}/></div>
            </div>
        </aside>
        <div className="top-higlights">
            <div className="highlight-container">

            </div>
            <div className="highlight-container">
                
            </div>
            <div className="highlight-container">
                
            </div>
        </div>
        {toggleChat?(<main>
        <div className="cont-post-div-main">
        <div className="post-div">
        <div className="prof-details-name"> <div className="prof-user"><img src={Man} alt="" /></div><div className="poster-name"><span>Jhon</span> <button id="follow">Follow</button></div></div>
        <img src={firstpost} alt="firstpost"/>
        <div className="poster-det">
        <button className="btn-145">Like</button><div className="discrip">Hey i Captured a nice view of our home galaxy!</div>
        </div>
        </div>
        <div className="post-opt-div">
        <div className="post-cont">
         <p>No Commets Yet!</p>
    </div>
    <div className="btn-opt">
       <input type="text" placeholder="Comment your Toughts" id="cmt-input" /><button>Post</button>
    </div>
        </div>
         </div>
        </main>):(<Chat/>)}
        </div>
        {toggleProf&&(<div className="prof-div-togg">
            <Profile handleProfileToggle={handleProfileToggle}/>  
        </div>
        )}
        {togglePost&&(<div className="post-add-div">
            <PostAdd handlePostToggle={handlePostToggle}/>
        </div>
        )}
        </>
    )
}
export default Mainpage;