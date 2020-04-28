import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../images/Mylogo-D1.svg';
import '../../css/NavBack.css';
class Navbar extends Component{
    constructor(props)
    {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed:true,
        };
    }
    toggleNavbar(){
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render(){
        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show text-center';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed': 'navbar-toggler navbar-toggler-right ';
        return(
            <div className="Special-Back container-fluid p-0 ">
                <div className="row ">
                    <div className="col-12">
                        <div className=" d-flex align-items-center justify-content-center">
                            <img src={Logo} style={{width:'2.5rem'}} className="navbar-brand mt-1" alt='Mylogo'></img>
                            <h3 style={{color:'white',fontWeight:'lighter',marginBottom:'0'}}>&#123; Daniel LT &#125;</h3>
                        </div>
                    </div>
                    <div className="col-12 ">
                        <div className="d-flex justify-content-center">
                            <nav className="navbar sticky-top navbar-expand-md navbar-dark justify-content-center ">
                            <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className={`${classOne}`} id="navbarNav">
                                <ul className="navbar-nav ml-auto" >
                                <li className="nav-item Navbar-Link mr-4 active" >
                                    <Link to='/'>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <h3 className="nav-link">Home</h3>
                                    </Link>
                                </li>
                                <li className="nav-item Navbar-Link mr-4" >
                                    <a href="/#Ame">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <h3 className="nav-link">About me</h3>
                                    </a>
                                </li>
                                <li className="nav-item Navbar-Link mr-4" >
                                    <a href="/#Projects">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <h3 className="nav-link">Projects</h3>
                                    </a>
                                </li>
                                <li className="nav-item Navbar-Link mr-4">
                                    <Link to='/Contact'>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <h3 className="nav-link">Contact</h3>
                                    </Link>
                                </li>
                                </ul>
                            </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
 export default Navbar;