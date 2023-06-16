import React, { useEffect } from "react";
import logo from "../../assets/icon/christy-le-high-resolution-logo-white-on-transparent-background.svg";


function Preloader() {
    useEffect(() => {
        // window.scrollTo(0, 0)
        setTimeout(() => {

            
        }, 2000);
      }, [])


    return (
        <section className="w-full h-screen bg-indigo flex items-center justify-center transition ease-in-out">
                {/* <p className="text-white">test</p> */}
                <img className="w-28 " src={logo} alt="Christy's Logo"></img>
        </section>
    );
}

export default Preloader;