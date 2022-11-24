import React from 'react';

const Footer = () => {
    return (
     
            <footer className="footer p-10 bg-base-200 text-base-content lg:fixed bottom-0">
  <div>
    <span className="footer-title">Services</span> 
    <a to='/' className="link link-hover">Branding</a> 
    <a to='/' className="link link-hover">Design</a> 
    <a to='/' className="link link-hover">Marketing</a> 
    <a to='/' className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a to='/' className="link link-hover">About us</a> 
    <a to='/' className="link link-hover">Contact</a> 
    <a to='/' className="link link-hover">Jobs</a> 
    <a to='/' className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a to='/' className="link link-hover">Terms of use</a> 
    <a to='/' className="link link-hover">Privacy policy</a> 
    <a to='/' className="link link-hover">Cookie policy</a>
  </div> 
  <div>
    <span className="footer-title">Newsletter</span> 
    <div className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>
  </div>
</footer>
    
    );
};

export default Footer;