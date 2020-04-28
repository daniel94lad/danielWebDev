import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Pyparty from '../../images/PyPartyImg01.JPG';
import Bonanza from '../../images/Bonanza.jpg';
import ArtPorta from '../../images/ArtPortafolio.png';

import CodePart from '../../images/CodePart.jpg';
import ColorPart from '../../images/ColorPart.jpg';
import AboutMe from '../../images/About-me.svg';
import CVDoc from '../../pdf/Daniel Lopez T. - CV (Eng) 2020_Vlow.pdf';

import UXIcon from '../../images/UX-Icon.svg';
import WebIcon from '../../images/WebDev-Icon.svg';
import GameIcon from '../../images/Game-Icon.svg';

import Bunny01 from '../../images/Bunnys-02.JPG';
import Unreal01 from '../../images/Unreal-05.JPG';
import Orquesta01 from '../../images/Orquesta-01.jpg';

import LogoArduino from '../../images/Arduino-Logo.svg';
import LogoUnreal from '../../images/Unity-Logo.svg';
import LogoUnity from '../../images/Unity-Logo.svg';
import LogoPainter from '../../images/Painter-Logo.svg';
import LogoC from '../../images/C-Logo.svg';
import LogoMaya from '../../images/Maya-Logo.svg';

class Content extends Component{
    constructor(props){
        super(props)
        this.state = {
            isHovered:false,
            projects:[
                {
                    name: 'Art-Portafolio',
                    photo: ArtPorta,
                    techs: ['Javascript','React','Django'],
                    story: 'Webpage about art contribution of literary and audiovisual projects with the style of a free E-commerce. (Prototype of an  Art web platform)',
                    webpage: 'https://github.com/daniel94lad/Uber-Meseros'
                    
                },
                {
                    name: 'PyParty',
                    photo: Pyparty,
                    techs: ['Javascript','React','Redux','Django'],
                    story: 'Pagina web con el proposito de facilitar la creacion, coordinacion, locacion y suministro de recursos de reuniones formales e informales.',
                    webpage: 'https://github.com/daniel94lad/Uber-Meseros'
                    
                },
                {
                    name: 'Bonanza Convertion',
                    photo: Bonanza,
                    techs: ['Unity','Android','iOS'],
                    story: 'Un juego de mesa de origen frances que por primera vez es llevado al terreno de los videojuegos como una app',
                    webpage:'https://google.com/'
                },

            ],
            games:[
                {
                    name: 'Bunnys Game',
                    photo: Bunny01,
                    description: 'Third person shooter',
                    softwares:[LogoUnity,LogoC,LogoMaya,LogoPainter]
                },
                {
                    name: 'Unreal game',
                    photo: Unreal01,
                    description: 'First person Shooter',
                    softwares:[LogoUnreal,LogoC,LogoPainter,LogoMaya]
                },
                {
                    name: 'Orchrestras prototype',
                    photo: Orquesta01,
                    description: 'Physical interface',
                    softwares:[LogoUnity,LogoC,LogoArduino]
                }
            ],
        }
        this.handleHover = this.handleHover.bind(this)
    }
    handleHover(){
        this.setState(prevState => ({
            isHovered: !prevState.isHovered
        }));
    }
    render(){
        const ChangeCodeClass = this.state.isHovered ? "col-6 Code-BackTwo p-0 h-100" : "col-6 Code-Back p-0 h-100";
        const ChangeColorClass = this.state.isHovered ? "col-6 Color-BackTwo p-0 h-100" : "col-6 Color-Back p-0 h-100";
        const{projects,games} = this.state
        return(
            <div>
                <div className="container-fluid p-0">
                    <div className="row Back-Welcome m-0 align-items-center justify-content-center">
                        <div className="col-12 Welcome-Words">
                            <div className="HiAnimated d-flex justify-content-center">
                                <div className="Main-Welcome" style={{color:'white'}}>
                                    <h1>Hello, <b>I´m</b> Daniel</h1>
                                </div>
                            </div>
                            <hr className="division-line mb-3" style={{width:'30%', border:'0.5px'}}/>
                            <div className="d-flex justify-content-center text-center"  style={{color:'white'}}>
                                <h4>Full-Stack Developer / Animation &#38; Digital Arts (BA)</h4>
                            </div>
                        </div>
                        <div className="color-overlay">
                        </div>
                    </div>
                </div>
                <div className="container-fluid" id="Ame">
                    <div className="row">
                        <div className=" d-md-flex col-12 col-lg-6 p-0">
                            <div className="row AboutBackground m-0 w-100 h-100">
                                
                                <div className={ChangeCodeClass}>
                                    <img src={CodePart} alt="CodeBack" className="w-100 h-100"/>
                                </div>
                                
                                <div className={ChangeColorClass}>
                                    <img src={ColorPart} alt="ColorBack" className="w-100 h-100"/>
                                </div>
                                <img src={AboutMe} className="About-Img" alt="AboutImg"/>
                            </div>
                            
                        </div>
                        <div className="Main-Obj-Area col-12 col-lg-6 mw-100 mh-100 mt-4 mb-4" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                        <div className="card text-center border-light bg-transparent">
                            <div className="card-body text-center">
                                <h5 className="card-title Card-Obj-Title mb-1" style={{color:'whitesmoke'}}><b style={{color:'rgb(24, 27, 31)'}}>| </b>About me</h5>
                                <i  style={{color:'whitesmoke'}}><strong>3D Artist + Designer &#38; Web Developer</strong></i>
                                <div className="card-text Card-Obj-Text mt-2 text-left mb-4">
                                <ul style={{color:'rgb(24, 27, 31)'}}>
                                    <li type="circle">Acquainted to work on an share knowledge community and usual self-improvement environment</li>
                                    <li type="circle"><i>I work knowing that the only way to reach the best, it´s through the failure.</i></li>
                                </ul>
                                <div className="text-center AboutParagraph" style={{color:'whitesmoke'}}>
                                    Currently developing personal projects with a focus on the areas of E-commerce / Art-Share-Platform / B2B and cooperating on the growing of a start-up involved in medical topics (B2E).
                                </div>
                                </div>
                                <div className="d-flex justify-content-around"> 
                                <Link to={CVDoc} target="_blank" download>
                                    <button className="btn btn-light w-30">
                                        <svg className="bi bi-download mr-2" width="1.2em" height="1.2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M.5 8a.5.5 0 01.5.5V12a1 1 0 001 1h12a1 1 0 001-1V8.5a.5.5 0 011 0V12a2 2 0 01-2 2H2a2 2 0 01-2-2V8.5A.5.5 0 01.5 8z" clipRule="evenodd"/>
                                            <path fillRule="evenodd" d="M5 7.5a.5.5 0 01.707 0L8 9.793 10.293 7.5a.5.5 0 11.707.707l-2.646 2.647a.5.5 0 01-.708 0L5 8.207A.5.5 0 015 7.5z" clipRule="evenodd"/>
                                            <path fillRule="evenodd" d="M8 1a.5.5 0 01.5.5v8a.5.5 0 01-1 0v-8A.5.5 0 018 1z" clipRule="evenodd"/>
                                        </svg>
                                        Download CV-(ENG)
                                    </button>
                                </Link>
                                <Link to="/Contact">
                                    <button className="btn btn-outline-light w-30">
                                        Send message
                                    </button>
                                </Link>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid Main-Services">
                    <div className="row">
                        <div className="col-12 col-md-4 text-center mb-3">
                            <img className="Service-Icon"  src={UXIcon} alt="UX-Icon"/>
                            <h4>UX/UI Design</h4>
                            <div className="d-none justify-content-center d-md-flex">
                                <p className="text-justify">
                                    Comprehensible mock-ups &#38; approached to the MVP.<br/>
                                    Designs based on the functionality and the scalability.<br/>
                                    Knowledge of professional tools for web-design.<br/>
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 text-center mb-3">
                            <img className="Service-Icon"  src={WebIcon} alt="Web-Icon"/>
                            <h4>Web Development</h4>
                            <div className="d-none justify-content-center d-md-flex">
                                <p className="text-justify">
                                    Plannification, testing and transmedia experience.<br/>
                                    Project management applying agile methodologies.<br/>
                                    Soporte y conversion a ultimas practicas en el mercado<br/>
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 text-center mb-3">
                            <img className="Service-Icon"  src={GameIcon} alt="Game-Icon"/>
                            <h4>Game Development</h4>
                            <div className="d-none justify-content-center d-md-flex">
                                <p className="text-justify">
                                    Experience developing projects on 2D/3D and VR.<br/>
                                    Creation and optimization of props for virtual environments.<br/>
                                    Knowledge of connection and creation of physical interfaces.<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid Main-Projects" id="Projects">
                    <div id="stars"></div>
                    <div id="stars2"></div>
                    <div className="row">
                        <div className="col-12">
                            <h2 className="mt-2">Web Projects</h2>
                            <hr className="division-line"/>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 d-flex justify-content-center">
                                        <div className="card-deck justify-content-center">
                                            {projects.map(project=>{
                                                const{name,photo,techs,story,webpage}=project;
                                                return(
                                                    <div key={name}>
                                                        <div className="card text-white border-light bg-secondary mb-3" style={{maxWidth:"22rem"}}>
                                                            <div className="card-body Card-Project" style={{padding:'0'}}>
                                                                <h4 className="card-header">{name}</h4>
                                                                <img className="card-img-top" src={photo} alt="Cardcap"/>
                                                                {techs.map(tech=>{
                                                                    return(
                                                                        <span key={tech} className="badge badge-pill badge-light mr-2 mt-2">{tech}</span>
                                                                    )
                                                                })}
                                                                <p className="card-text mt-2 mb-2 bg-dark" style={{padding:'0.5em 1em',borderTop:'solid 2px white',borderBottom:'solid 2px white'}}>{story}</p>
                                                                <a rel='noopener noreferrer' target="_blank" href={webpage}><button className="btn btn-sm btn-outline-light mb-2 btn-lg">To the project</button></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid Game-Projects">
                    <div className="row">
                        <div className="col-12 pr-5 pl-5">
                            <h2 className="mt-2">Games</h2>
                            <hr className="division-line" style={{backgroundColor:'gray',height:'2px'}}/>
                            <div  className="card-columns mt-3 mb-3">
                                {games.map(game=>{
                                    const{name,photo,description,softwares} = game;
                                    return(
                                        <div key={name} className="d-flex justify-content-center">
                                            <div className="card mb-4" >
                                                <div className="front">
                                                    <img className="card-img" src={photo} alt="IMG-game"/>
                                                </div>
                                                <div className="back">
                                                    <div className="details">
                                                        <h3>{name}</h3>
                                                        <p>{description}</p>
                                                        <div className="d-flex justify-content-center">
                                                        {softwares.map(software=>{
                                                            return(
                                                                <div className="mr-auto ml-auto"  style={{width:'5rem'}} key={software}>
                                                                    <img src={software}  alt={`str(${software})`}/>
                                                                </div>
                                                            )
                                                        })}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Content;