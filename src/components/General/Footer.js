import React,{Component} from 'react';
import Logo from '../../images/Mylogo-D1.svg';
import Github from '../../images/github.svg';
import Linked from '../../images/Linkedin.svg';
import '../../css/NavBack.css';
class Footer extends Component{
    render(){
        return(
            <div className='Special-Back container-fluid Main-Footer'>
                <div className="row justify-content-around align-items-center">
                    <div className="col-8 col-md-1 d-flex d-sm-block">
                        <img style={{width:'2.5rem'}} src={Logo} alt='My-logo'/>
                        <h4 className="d-block d-sm-none" style={{color:'white'}}>&#123; Daniel LT &#125;</h4>
                    </div>
                    <div className="col-0 col-md-9 text-center d-none d-sm-block">
                        <h5 style={{color:'white'}}>© 2020 Daniel LT</h5>
                    </div>
                    <div className="col-4 col-md-2 text-right d-flex d-sm-block ">
                        <a className="mr-3" href='https://github.com/daniel94lad/' rel='noopener noreferrer' target="_blank"><img style={{width:'2.5rem'}} src={Github} alt='Git'/></a>
                        <a href='https://linkedin.com/in/daniellopezlad' rel='noopener noreferrer' target="_blank"><img style={{width:'2.5rem'}} src={Linked} alt='Linkedin'/></a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;