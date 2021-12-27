import React from 'react';
import img from '../img/man.svg'
import Common from './Common';


const Home = () => {
    return (
        <Common demoText={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat asperiores est minima nostrum iusto consectetur adipisci perferendis eveniet dolores odio."} firstHead={"Lorem ipsum dolor sit amet."} secondHead={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, fuga."} buttonOne={"Demo Button"} buttonTwo="Subscribe" img={img}></Common>
    );
};

export default Home;