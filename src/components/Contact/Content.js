import React,{Component} from 'react';
import * as emailjs from 'emailjs-com';
import Linked from '../../images/Linkedin.svg';
import Map from '../../images/Map-Icon.svg';
import Cellphone from '../../images/Cell-Icon.svg';
import Logo from '../../images/Mylogo-D1.svg';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';

class Content extends Component{
    state={
        modalIsOpen:false,
        name:'',
        email:'',
        subject:'',
        message:'',
    } 
    handleSubmit(e){
        e.preventDefault();
        
        const {name, email, subject, message} = this.state
        console.log(name)
        let templateParams = {
            from_name: email,
            to_name: 'daniel94lad@gmail.com',
            subject: subject,
            message_html: message,
        }
        emailjs.send(
            'gmail',
            'mywebpage',
            templateParams,
            'user_TwegsvFrCoaqTtlznGkb9'
        )
        this.resetForm()
    }

    resetForm(){
        this.setState({
            name:'',
            email:'',
            subject:'',
            message:'',
        })
    }
    toogleModal()
    {
        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        })
    }
    handleChange=(param,e)=>{
        this.setState({ [param]:e.target.value})
    }

    handleButtonComplete()
    {
        if(this.state.name ===  '' || this.state.email=== '' ||this.subject=== '' || this.state.message=== '')
        {
            return true;
        }else
        {
            return false;
        }
    }
    handleNameValidate()
    {
        if(this.state.name === '')
        {
            return 'form-control is-invalid'
        }
        else
        {
            return 'form-control is-valid'
        }
    }
    handleEmailValidate()
    {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if( emailRex.test(this.state.email))
        {
            return 'form-control is-valid'
        }
        else
        {
            return 'form-control is-invalid'
        }
    }
    handleSubjectValidate()
    {
        if(this.state.subject === '')
        {
            return 'form-control is-invalid'
        }
        else
        {
            return 'form-control is-valid'
        }
    }
    handleMessageValidate()
    {
        if(this.state.message === '')
        {
            return 'form-control is-invalid'
        }
        else
        {
            return 'form-control is-valid'
        }
    }
    render(){
        return(
            <div>
                <div className="Contact-Info container vw-100 mb-4 mt-4">
                    <div className="row">
                        <div className="col-12 col-lg-4 MainIcons mb-4">
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center">
                                    <h1>Contact</h1>
                                </div>
                                <div className="col-12 d-flex justify-content-center mt-5">
                                    <img className="Contact-icons" src={Cellphone} alt='Cellphone'/>
                                </div>
                                <div className="col-12 d-flex justify-content-center mt-3 ">
                                    <h5 className="Contact-words">33-31-04-27-18</h5>
                                </div>
                                <div className="col-12 d-flex justify-content-center mt-5">
                                    <img className="Contact-icons" src={Map} alt='Cellphone'/>
                                </div>
                                <div className="col-12 d-flex justify-content-center mt-3 ">
                                    <h5 className="Contact-words">Mexico,GDL. 45080</h5>
                                </div>
                                <div className="col-12 d-flex justify-content-center mt-5">
                                    <a href='https://linkedin.com/in/daniellopezlad' rel='noopener noreferrer' target="_blank"><img style={{width:'2.5rem'}} src={Linked} alt='Linkedin'/></a>
                                </div>
                                <div className="col-12 d-flex justify-content-center mt-3 ">
                                    <h5 className="Contact-words">daniellopezlad</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-8 ">
                            <h1 className="text-md-center text-lg-left mb-5">Get in touch!</h1>
                            <form onSubmit={this.handleSubmit.bind(this)}>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" name="email" value={this.state.email} onChange={this.handleChange.bind(this,'email')} className={this.handleEmailValidate()}   placeholder="Enter email"/>
                                <div className="invalid-feedback">
                                    Please add your email.
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" name="name" value={this.state.name} onChange={this.handleChange.bind(this,'name')} className={this.handleNameValidate()}   placeholder="Name"/>
                                <div className="invalid-feedback">
                                    Please add your name.
                                </div>                            
                            </div>
                            <div className="form-group">
                                <label>Subject</label>
                                <input type="text" name="subject" value={this.state.subject} onChange={this.handleChange.bind(this,'subject')} className={this.handleSubjectValidate()} placeholder="Subject"/>
                                <div className="invalid-feedback">
                                    Please add your subject.
                                </div>                            
                            </div>
                            <div className="form-group text-md-center text-lg-left">
                                <label>Message</label>
                                <textarea name="message" value={this.state.message} onChange={this.handleChange.bind(this,'message')} className={this.handleMessageValidate()} rows="8"></textarea>
                                <div className="invalid-feedback">
                                    Please add your message.
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn btn-block btn-info" disabled={this.handleButtonComplete(this)} onClick={this.toogleModal.bind(this)}>Submit</button>
                                <Modal isOpen={this.state.modalIsOpen} centered={true} className="ModalContact">
                                    <ModalHeader className="justify-content-center">
                                        Thank you !
                                    </ModalHeader>
                                    <ModalBody className="justify-content-center text-center">
                                        <div className="row">
                                            <div className="col-12 mb-2">
                                                <img src={Logo} alt="myLogo"/> 
                                            </div>
                                            <div className="col-12 mt-3 mb-0">
                                                <p className="mb-0">I´ll answer as soon as possible</p>
                                            </div>
                                        </div>
                                    </ModalBody>
                                    <ModalFooter >
                                        <Link to="/" style={{width:'100%', textDecoration:'none'}}>
                                            <Button color="info" size="lg"  onClick={this.toogleModal.bind(this)} block>Close</Button>
                                        </Link>
                                    </ModalFooter>
                                </Modal>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Content;