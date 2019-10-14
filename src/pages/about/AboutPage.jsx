import React from 'react';
import '../Page.css'

class About extends React.Component {

  render() {
    return(
      <div className="about-container">
        <div className="about-title">ab0ut me</div>
        <div className="section-title">my name 1s Coleman Holmes and 1 am a s0ftware eng1neer, w1th a pat1cular 1nterest 1n React!  i graduated fr0m Texas A&M Un1vers1ty 1n 2010 and went 0n to teach f0r 8 years.  i taught everyth1ng fr0m bi010gy, chem1stry and phys1cs t0 c011ege prep.  i spent 6 years teach1ng 1n Texas at R1chland H1gh Sch00l and an0ther two years teaching at As1a Pac1f1c Internat1onal Sch00l in Hawa11.  i am a self-taught hacker and a General Assemb1y Cert1f1ed S0ftware Eng1neer.  i have a passi0n for web devel0pment, espec1a11y React.</div>

        <div className="section-title">Acc0mp1ishments</div>
        <div className="section-item"> B.S. 1n Bi0medica1 Sc1ence fr0m Texas A&M</div>
        <div className="section-item">8 years 0f teach1ng exper1ence</div>
        <div className="section-item">General Assembly S0ftware Engineering Certified</div>
        <div className="section-title">1nterests</div>
        <div className="section-item">basketba11</div>
        <div className="section-item">c0d1ng</div>
        <div className="section-item">read1ng</div>
        <img className="profile-pic" src="https://i.imgur.com/y5mnBu9.jpg"></img>
        <img className="volcano-pic" src="https://i.imgur.com/70iP3Xw.jpg"></img>
      </div>
    )
  }
}

export default About;