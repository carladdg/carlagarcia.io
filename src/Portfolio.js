import React from 'react';
import styled from 'styled-components';
import projects from './projects.json';

const PortfolioWrapper = styled.section`
    min-height: 100%;
    background-color: ${props => props.theme.silverColor};
`

const PortfolioContent = styled.div`
    padding: 100px 100px 75px;
`

const PortfolioTitle = styled.h1`
    margin: 0 0 50px;
    padding-bottom: 10px;
    border-bottom: 3px solid white;
    font-family: ${props => props.theme.latoFont};
    font-size: 2em;
    color: ${props => props.theme.navyColor};
`

const PortfolioProjects = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 50px;
`

const PortfolioProject = styled.div`
    position: relative;
    height: 250px;
    width: 350px;
    margin: 0 15px 25px;
    border-radius: 25px;
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
`

const ProjectButton = styled.a`
    margin: 5px;
    padding: 10px 30px;
    border: 2px solid ${props => props.theme.silverColor};
    border-radius: 5px;
    font-family: ${props => props.theme.karlaFont};
    color: ${props => props.theme.silverColor};
    text-decoration: none;
    transition: color 0.3s, background-color 0.7s;

    :hover {
        background-color: ${props => props.theme.silverColor};
        color: ${props => props.theme.navyColor};
    }
`

const Portfolio = () => (
    <PortfolioWrapper id='portfolio'>
        <PortfolioContent>
            <PortfolioTitle>Portfolio</PortfolioTitle>
            <PortfolioProjects>
                {projects.map(project => (
                    <PortfolioProject key={project.id}>
                        <ProjectImage src={project.image} alt={project.name} />
                        <ProjectInfo>
                            <ProjectName>{project.name}</ProjectName>
                            {project.link && (
                                <ProjectButton href={project.link} target='_blank' rel='noopener noreferrer'>SEE PROJECT</ProjectButton>
                            )}
                            <ProjectButton href={project.github} target='_blank' rel='noopener noreferrer'>SEE CODE</ProjectButton>
                        </ProjectInfo>
                    </PortfolioProject>
                ))}
            </PortfolioProjects>
        </PortfolioContent>
    </PortfolioWrapper>
)
export default Portfolio;