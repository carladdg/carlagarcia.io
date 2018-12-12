import React from 'react';
import styled from 'styled-components';
import projects from './projects.json';
import Section from './Section';
import Button from './Button';

const PortfolioProjects = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const PortfolioProject = styled.div`
    position: relative;
    height: 232px;
    min-width: 325px;
    margin: 0 8px 16px;
    transition: 0.5s;

    @media screen and (max-width: 405px) {
        height: 214px;
        min-width: 300px;
    }
    @media screen and (max-width: 374px) {
        height: 175px;
        min-width: 244px;
    }
`

const ProjectImage = styled.img`
    position: absolute;
    z-index: 10;
    height: 100%;
    width: 100%;
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
    font-size: 1.25em;
    color: ${props => props.theme.silverColor};
    transition: font-size 0.3s;

    @media screen and (max-width: 374px) {
        font-size: 1.1em;
    }
`

const ProjectButton = styled.a`
    ${Button};
    margin: 5px;
    padding: 10px 30px;

    @media screen and (max-width: 374px) {
        font-size: 0.8em;
    }
`

const Portfolio = () => (
    <Section id='portfolio' title='Portfolio' bgColor='silverColor' titleColor='navyColor'>
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