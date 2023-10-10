import React, { useState, useEffect, useContext } from 'react';

import { styled, Box, TextareaAutosize, Button, InputBase, FormControl  } from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}));

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});

const StyledFormControl = styled(FormControl)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`;

const InputTextField = styled(InputBase)`
    flex: 1;
    margin: 0 30px;
    font-size: 25px;
`;

const Textarea = styled(TextareaAutosize)`
    width: 100%;
    border: none;
    margin-top: 50px;
    font-size: 18px;
    &:focus-visible {
        outline: none;
    }
`;

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: '',
    createdDate: new Date()
}

const Update = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {id} = useParams();

    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState('');
    const { account } = useContext(DataContext);

    const url = post.picture ? post.picture : 'https://i.ibb.co/nsZSJpf/pexels-wendy-wei-1540343.jpghttps://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    

    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getPostById(id);
            if (response.isSuccess) {
                setPost(response.data);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        const getImage = async () => {
          if (file) {
            const formData = new FormData();
            formData.append('name', file.name);
            formData.append('file', file);
    
            try {
              const response = await fetch('http://localhost:8000/file/upload', {
                method: 'POST',
                body: formData,
              });
    
              if (response.ok) {
                const responseData = await response.json();
                setPost({ ...post, picture: responseData });
              } else {
                console.log(response)
                // Handle the error
              }
            } catch (error) {
                console.log(error)
              // Handle network error
            }
          }
        };
    
        getImage();
        post.categories = location.search?.split('=')[1] || 'All';
        post.username = account.username;
      }, [file]);
    
    
    // useEffect(() => {
        // const getImage = async () => {
            // if(file) {
                // const data = new FormData();
                // console.log(file)
                // data.append("name", file.name);
                // data.append("file", file);
                // console.log("data", data.get('file'))
                // const response = await API.uploadFile(data);
                // post.picture = response.data;
            // }
        // }
        // getImage();
        // post.categories = location.search?.split('=')[1] || 'All';
        // post.username = account.username;

    // }, [file] )

    const updateBlogPost = async () => {
        const response = await API.updatePost(post);
        console.log(response)
        if(response.isSuccess){
            navigate(`/details/${id}`);
        }
    }

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    return (
        <Container>
            <Image src={url} alt="post" />

            <StyledFormControl>
                <label htmlFor="fileInput">
                    <Add fontSize="large" color="action" />
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                />
                
                <InputTextField onChange={(e) => handleChange(e)} name='title' value = {post.title} placeholder="Title" />
                <Button onClick={() => updateBlogPost()} variant="contained" color="primary">Update</Button>
            </StyledFormControl>

            <Textarea
                minRows={5}
                placeholder="Tell your story..."
                name='description'
                onChange={(e) => handleChange(e)}
                value={post.description}
            />
        </Container>
    )
}

export default Update;