import React from 'react';
import ReactDOM from 'react-dom';

//normal component
const Info = (props) => (
  <div>
     <h1>info</h1>
     <p>{props.info}</p>
  </div>
);
//higher order component
 const withAdminWarning = (WrappedComponent) => {
     return (props)=>(
         <div>
         {props.isAdmin && (<p>its from waringng</p>)}
         <WrappedComponent {...props}/>
        </div>
     )
 };
 const requiredAuthication = (WrappedComponent) => {
   return (props) => (
       <div>
         {props.isAuthentication ?(<WrappedComponent  {...props}  />):<p>plz log in</p>}
         <h>another  info</h>
         
       </div>
   )
 }

const Authetication = requiredAuthication(Info);
 const AdminInfo = withAdminWarning(Info);
//ReactDOM.render(<AdminInfo isAdmin={true} info="this is info" />,document.getElementById('root'));
ReactDOM.render(<Authetication isAuthentication={true} info="this is info" />,document.getElementById('root'));