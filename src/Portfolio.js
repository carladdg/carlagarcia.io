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
    width: 300px;
    height: 200px;
    margin: 0 15px 25px;
    border-radius: 25px;
    background-color: yellow;
`

const Portfolio = () => (
    <PortfolioWrapper id='portfolio'>
        <PortfolioContent>
            <PortfolioTitle>Portfolio</PortfolioTitle>
            <PortfolioProjects>
                {projects.map(project => (
                    <PortfolioProject key={project.id}>
                        <a href={project.link} target='_blank' rel='noopener noreferrer'>
                            {project.name}
                        </a>
                        <br></br>
                        <a href={project.github} target='_blank' rel='noopener noreferrer'>Check out the code.</a>
                    </PortfolioProject>
                ))}
            </PortfolioProjects>
        </PortfolioContent>
    </PortfolioWrapper>
)
export default Portfolio;