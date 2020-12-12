import React,{useState,useEffect} from 'react'

const BlogForm = (props) => {
    const [title,setTitle] =  useState("");
    const [description, setDescription] = useState("");

    const handleSubmit =(e) =>{
        e.preventDefault();
        props.setValues({
            title,
            description
        });
    }
    useEffect(() => {
        if (props.title && props.description) {
            setTitle(props.title);
            setDescription(props.description);
        }
    }, []);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="" id="" value={title}  onChange={(e)=> setTitle(e.target.value)} />
                </div>
                <div>
                    <textarea name="" id="" cols="30" rows="10" value={description} onChange={(e)=> setDescription(e.target.value)} ></textarea>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default BlogForm
