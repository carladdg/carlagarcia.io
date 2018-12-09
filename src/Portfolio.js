import React from 'react';
import styled from 'styled-components';
import projects from './projects.json';
import Section from './Section';

const PortfolioProjects = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const PortfolioProject = styled.div`
    position: relative;
    height: 250px;
    min-width: 350px;
    margin: 0 15px 25px;
    border-radius: 25px;
    transition: 0.7s;

    @media screen and (max-width: 400px) {
        height: 220px;
        min-width: 300px;
    }
    @media screen and (max-width: 360px) {
        height: 180px;
        min-width: 250px;
    }
`

const ProjectImage = styled.img`
    position: absolute;
    z-index: 10;
    height: 100%;
    width: 100%;
    border-radius: 25px;
`

const ProjectInfo = styled.div`
    position: absolute;
    top: 0;
    z-index: 20;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    border-radius: 25px;
    background-color: rgba(0, 0, 30, 0.93);
    opacity: 0;
    transition: opacity 0.3s;

    :hover {
        opacity: 1;
    }
`

const ProjectName = styled.p`
    margin: 0;
    padding: 10px;
    text-align: center;
    font-family: ${props => props.theme.latoFont};
    font-size: 1.5em;
    color: ${props => props.theme.silverColor};
    transition: font-size 0.7s;

    @media screen and (max-width: 360px) {
        font-size: 1.25em;
    }
`

const ProjectButton = styled.a`
    margin: 5px;
    padding: 10px 30px;
    border: 2px solid ${props => props.theme.silverColor};
    border-radius: 5px;
    font-family: ${props => props.theme.karlaFont};
    color: ${props => props.theme.silverColor};
    text-decoration: none;
    transition: color 0.3s, background-color 0.7s, font-size 0.7s;

    :hover {
        background-color: ${props => props.theme.silverColor};
        color: ${props => props.theme.navyColor};
    }

    @media screen and (max-width: 360px) {
        font-size: 0.8em;
    }
`

const Portfolio = () => (
    <Section id='portfolio' title='Portfolio' bgColor='silverColor'>
        <PortfolioProjects>
            {projects.map(project => (
                <PortfolioProject key={project.id}>
                    <ProjectImage className='lozad' data-src={project.image} alt={project.name} />
                    <ProjectInfo>
                        <ProjectName>{project.name}</ProjectName>
                        {project.link && (
                            <ProjectButton href={project.link} target='_blank' rel='noopener noreferrer'>VIEW PROJECT</ProjectButton>
                        )}
                        <ProjectButton href={project.github} target='_blank' rel='noopener noreferrer'>VIEW CODE</ProjectButton>
                    </ProjectInfo>
                </PortfolioProject>
            ))}
        </PortfolioProjects>
    </Section>
)
export default Portfolio;