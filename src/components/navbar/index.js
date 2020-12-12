import React from 'react'
import {
    Link
  } from "react-router-dom";
import { Navbar,Nav, } from "react-bootstrap";
const Index = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand >Blog app</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link > <Link to="/">Blogs</Link></Nav.Link>
            <Nav.Link > <Link to="/add-blog">Add Blog</Link></Nav.Link>
            </Nav>
        </Navbar>
        </>
    )
}

export default Index
