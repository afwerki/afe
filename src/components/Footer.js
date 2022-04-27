import React from "react";
import { Facebook, Instagram, LinkedIn, MenuBook, Pinterest, SettingsPowerRounded, Twitter } from '@material-ui/icons'
import './styles/Footer.css'

function Footer() {
  return (
    <div className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>About me</h4>
  	 			<ul>
  	 				<li><a href="#">about me</a></li>
  	 				<li><a href="#">my Research</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Skills</h4>
  	 			<ul>
  	 				<li><a href="#">Tech Skills</a></li>
					   <li><a href="#">Soft Skills</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Projects I developed</h4>
  	 			<ul>
  	 				<li><a href='https://jigga.tikurwuha.com/index.php' target="_blank">School system</a></li>
  	 				<li><a href= 'https://education.students-to-students.com/register.php' target= "_blank">Studetnts support sytem</a></li>
  	 				<li><a href="#">ADAUK charity system</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow Me</h4>
  	 			<div className="social-links">
  	 				
  	 				<a href='https://www.instagram.com/afwork_grumnhe/' target="_blank">
                                <i className="fab fa-instagram"></i>
             <Instagram className='icon'/>
             </a>
  	 				<a href='https://www.linkedin.com/in/afwerki-ghirmay-b56766171/' target="_blank"><i className="fab fa-linkedin-in"></i>
             <LinkedIn className='icon'/>
             </a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
 </div> 
  );
}

export default Footer;