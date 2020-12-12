import React from 'react';
import {Link} from "react-router-dom";
import { Card } from "react-bootstrap";


const BlogList = ({blog}) => {
    return (<Card className="mt-2" key={blog.id}>
        <Card.Body>
          <Card.Title>{blog.title}</Card.Title>
          <Card.Text>
            {blog.description}
          </Card.Text>
          <Link to={'/blog-details/'+blog.id} className="btn btn-info m-1" > Details</Link>
          <Link to={'/edit-blog/'+blog.id} className="btn btn-info m-1" > Edit</Link>
        </Card.Body>
      </Card>

    )
}

export default BlogList
