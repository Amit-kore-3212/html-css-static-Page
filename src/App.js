import React from 'react';
import Register from './Components/Register'
import Login from './Components/Login'
import  home from './Components/home'


import {BrowserRouter,Link,Route,} from 'react-router-dom'
import{connect} from 'react-redux'
import {userLogout} from './actions/userActions' 
// import EditForm from './components/EditForm';



function App (props) {
  console.log( "app ",props.user)
  const handleLogOut=()=>{
 
  
  
   alert("logout succesfully")
   localStorage.removeItem('authToken')
   window.location.href="/"
  }
  return (
    
     
       <BrowserRouter>
       <div>
       {
         Object.keys(props.user).length!==0 ?(
         <div>
               <nav className="navbar navbar-dark bg-dark">
               <a className="navbar-brand" href="#">USER AUTH</a>
                 <ul className="nav justify-content-end">
                 <li class="nav-item">
                 <Link to="#" onClick={handleLogOut}> logout</Link> 
              
                </li>
                </ul>
                </nav>
                </div>):
             
                 (<div>
                   <nav className="navbar navbar-dark bg-dark">
                   <a className="navbar-brand" href="#">user AUTH</a>
                   <ul className="nav nav-pills">
                   <li className="nav-item">
                   <Link to="/" className="nav-link">Home</Link>
                   </li>
                   <li className="nav-item">
                   < Link to ="/users/register"  className="nav-link">Register</ Link>
                     </li>
                   <li className="nav-item">
                  < Link to ="/users/login" className="nav-link" >Login</ Link> 
                 </li>
                   </ul>
                 </nav>
                </div>)

          }       
       
       
       <div className="container">
        <Route path="/" component={home} exact={true}/>
             
              <Route path="/users/register" component={Register}/>
              <Route path="/users/login" component={Login} exact={true}/>
         
           
              </div>
       </div>
       </BrowserRouter>

 
   
  );
}

const mapStateToProps = (state) => {
  return {
      user: state.users,
  
  }
}
export default connect(mapStateToProps)(App) 
