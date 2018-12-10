import React from 'react';
import styled from 'styled-components';
import Section from './Section';

const AboutDescription = styled.p`
    margin: 16px 12%;
    font-family: ${props => props.theme.karlaFont};
    font-size: 1.15em;
    color: ${props => props.theme.navyColor};
`

const AboutImages = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const AboutImage = styled.img`
    height: 250px;
    width: 250px;
    padding: 10px 5px;
`

const About = () => (
    <Section id='about' title='About Me' titleColor='navyColor' accentColor='silverColor'>
        <AboutDescription>
            Hello and welcome to my website! I’m <b>Carla</b>: a clumsy, curious, curly-haired coding enthusiast who’s crazy for comedy flicks and chocolate. I also tend to overuse alliteration.
        </AboutDescription>
        <AboutDescription>
            Nulla iaculis, ipsum sit amet consectetur blandit, sem nunc maximus augue, eget porta risus orci ac mauris. Vivamus molestie sapien ut velit consequat pharetra. Aliquam malesuada neque volutpat sem vulputate varius. Morbi eu vulputate tellus. Curabitur nec auctor lectus. Phasellus neque neque, suscipit nec ultrices in, convallis non purus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </AboutDescription>
        <AboutDescription>
            Sed quis egestas magna. Nunc accumsan a tortor quis commodo. Quisque porta turpis a elit feugiat, vitae vulputate magna pretium. Donec orci lorem, maximus vehicula rhoncus vitae, mollis eget augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus eget risus gravida, volutpat tellus et, elementum ligula. Curabitur ut nisl dictum, iaculis nisl pharetra, ultrices dolor. Morbi eget mi ac felis pretium ultricies nec at ante.
        </AboutDescription>
        <AboutImages>
            <AboutImage src='./about_images/test.jpg' alt='test1'></AboutImage>
            <AboutImage src='./about_images/test2.jpg' alt='test2'></AboutImage>
            <AboutImage src='./about_images/test3.jpg' alt='test3'></AboutImage>
            <AboutImage src='./about_images/test4.jpg' alt='test4'></AboutImage>
        </AboutImages>
        <AboutDescription>
            Cras eu nibh nec urna iaculis sodales ac at turpis. Etiam convallis varius diam id vestibulum. Donec ac magna neque. Donec in tortor at est faucibus malesuada sed vitae leo. Pellentesque rutrum enim eros, sit amet fermentum arcu pulvinar ac. Nunc ac elementum sapien, imperdiet vehicula nibh. Nulla ut mauris quis diam viverra fermentum. Phasellus laoreet ex et sodales posuere. Etiam id rhoncus justo.
        </AboutDescription>
        <AboutDescription>
            Quisque tempor faucibus maximus. Maecenas convallis a massa eget dignissim. Proin viverra mauris ut justo tincidunt, non maximus orci feugiat. Nam at est rutrum, scelerisque enim sit amet, consequat nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc erat, iaculis a ultrices non, hendrerit molestie turpis. Suspendisse laoreet lobortis turpis. Vestibulum euismod venenatis tincidunt. Donec vel massa porttitor, sollicitudin arcu a, posuere lacus. Maecenas vitae mauris malesuada, imperdiet sapien nec, rutrum leo. Aliquam erat volutpat. Donec euismod facilisis lacus non venenatis.
        </AboutDescription>
    </Section>
)
export default About;