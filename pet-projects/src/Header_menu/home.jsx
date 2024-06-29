import React from "react";
import imgSrc from '../setting/image/molniia_groza_nebo_117143_1920x1080.jpg'
function Home() {
    return (
        <div className="home">
            <h1>Home</h1>
            <img src={imgSrc} alt="pc" />
            <pc />
        </div>
    )
}
export default Home;