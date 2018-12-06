import React from 'react';
import styled from 'styled-components';
import projects from './projects.json';

const PortfolioWrapper = styled.section`
    min-height: 100%;
`

const PortfolioContent = styled.div`
    padding: 100px 100px 75px;
`

const PortfolioTitle = styled.h1`
    margin: 0 0 50px;
    padding-bottom: 3px;
    border-bottom: 2px solid ${props => props.theme.silverColor};
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
    background-color: green;
    opacity: 0;
    transition: opacity 0.3s;

    :hover {
        opacity: 1;
    }
`

const ProjectName = styled.p`
    margin: 0;
`

const ProjectButton = styled.a`
    pointer-events: none;

    ${ProjectInfo}:hover & {
        pointer-events: auto;
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