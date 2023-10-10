import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { useSearchParams, Link } from "react-router-dom";

import { API } from "../../../service/api";


import Post from "./Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

        const [searchParms] = useSearchParams();
        const category = searchParms.get('category');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await API.getAllPosts({category: category || ''});
                if (response.isSuccess) {
                    setPosts(response.data);
                } else {
                    console.error("API call failed:", response.error);
                }
            } catch (error) {
                console.error("An error occurred while fetching data:", error);
            } finally {
                setLoading(false); // Set loading state to false when done
            }
        };

        fetchData();
    }, [category]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {posts && posts.length > 0 ? (
                posts.map((post) => (
                    <Grid item lg={3} sm={4} xs={12}>
                    <Link to={`/details/${post._id}`} style={
                        {textDecoration: 'none', color: 'inherit'}
                    }>
                        <Post post = {post}/>
                    </Link>
                    </Grid>
                ))
            ) : (
                <Box style={{ color: '#878787', margin : '30px 80px', fontSize: 18}}>
                    No data available to display
                    </Box>
            )}
        </>
    );
};

export default Posts;
