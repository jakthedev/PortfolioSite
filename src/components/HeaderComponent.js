import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, Jumbotron,
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import NavbarText from "reactstrap/lib/NavbarText";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handelLogin = this.handelLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handelLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + "Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
    }




}
    render() {
        return(
            // by using the react fragment you dont add in an extra node element into the dom
            // you add in the react element directly into the DOM. This is the reason why we are using
            // the react fragment
            <>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src='assets/images/logo192.png' height="30"
                                 width="41" alt='Dope Food Site'/> </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavbarText>
                                    <NavLink className="nav-link" to='/home'>
                                        <span className="fa fa-home fa-lg"/> Home
                                    </NavLink>
                                </NavbarText>
                                <Navbar>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"> </span> Contact Us
                                    </NavLink>
                                </Navbar>
                       </Nav>
            </>
    );
    }
}

export  default  Header