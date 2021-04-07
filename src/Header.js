import React from 'react'

const Header = ()=>  {
    return (
        <section id="header">
        <div className="container text-center">
            <div className="user-box">
                <img src="src/img/myimage2.jpg" alt="user-img"/>
                <h1>SACHIN SINGH</h1>
                <p>Freelance Web Developer</p>
            </div>
        </div>
        <div className="scroll-btn">
            <div className="scroll-bar">
                <a href="#about"><span></span></a>
            </div>
        </div>

    </section>

    )
}

export default Header;