import React from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import Linkedin from '../images/Linkedin.png'
import Github from '../images/Github.png'
import Contact from '../images/Contact.png'




const Section = styled.section`


height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: black

`;

const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
height: 100vh;
padding: 3rem calc((100vw- 1300px) /2);

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;

}
`;

const ColumnLeft = styled.div`
diplay:flex;
color: white;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 5rem 2rem;
padding-right: 100px;
font-family: "Raleway";



h1{
    margin-bottom: 2rem 0;
    font-size: 4rem;
    line-height:1.1
    font-family: "Raleway";

}

p{
    margin: 2rem 0;
    font-size: 2.5rem;
    font-family: "Raleway";

    line-height: 1.1;
}
`;
const Button = styled(motion.button)`
padding: 1rem 3rem;
font-size: 1rem;
border: 2px solid #fff;
border-radius: 8px;
outline: none;
cursor: pointer;
backgroundL #fff;
`;

const Image = styled(motion.img)`
position: absolute;
width:15%;
height: 10%;
max-width: 250px;
max-height: 250px;


`;
const ColumnRight = styled.div`
position: absolute;
justify-content: center;

display: flex;
align-items: center;
padding:2rem;
position:relative;

${Image}:nth-child(1) {
    top: 10px;
    left: 10px;
}
${Image}:nth-child(2) {
    top: 170px;
    right: 10px;
}
${Image}:nth-child(3) {
    top: 350px;
    right: 75px;
}



`;



const HeroSection = () => {

    const fadeLeft = {
        hidden: {opacity: 0, x: -100},
        visible:{opacity: 1, x: 0}
    };
  return (
    <Section>
        <Container>
        <ColumnLeft>
            <motion.h1
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            transition = {{duration: 1}}
            >Dianna Ganova</motion.h1>
            <motion.p
            variants={fadeLeft}
            initial='hidden'
            animate='visible'
            transition={{duration: 1}}
            >Front End Developer</motion.p>
            <Button
            whileHover={{scale: 1.05}}
            whileTap={{
            scale: 0.5, 
            backgroundColor:'#67F6E7',
            border: 'none',
            color: '#000'
        }}
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {duration: 1.5}}}
            >Get Started</Button>
        </ColumnLeft>
        <ColumnRight>
            <Image src={Linkedin} alt="linkedin" 
            whileTap={{scale: 0.9}}
            drag={true} 
            dragConstraints= {{left:0, right:250, top:0, bottom: 50}}
            initial={{opacity: 0, y: -100}}
            animate={{opacity: 1, y:0, transition: {duration:1} }}
            />
            <Image src={Github} alt="github"  whileTap={{scale: 0.9}}
            drag={true} 
            dragConstraints= {{left:0, right:250, top:0, bottom: 50}}
            initial={{opacity: 0, y: -100}}
            animate={{opacity: 1, y:0, transition: {duration:1} }}/>
            <Image src={Contact} alt="github"  whileTap={{scale: 0.9}}
            drag={true} 
            dragConstraints= {{left:0, right:250, top:0, bottom: 50}}
            initial={{opacity: 0, y: -100}}
            animate={{opacity: 1, y:0, transition: {duration:1} }}/>
        </ColumnRight>
        </Container>
        </Section>

  )
}

export default HeroSection
