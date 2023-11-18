import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import {Videos} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {

  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {

    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
    }, []);

  return (
    <Box p={2} sx={{ 
      overflow:'auto', height:'90vh',flex:2 }}
    >
      <Typography variant='h4' fontWeight="bold" mb={2} sx={{
        color: 'white'}}
      >
        Search results for:<span style={{ color: '#7A7A7A'}}> 
          {searchTerm}
        </span> videos
      </Typography>
      <Videos videos={[videos]}/>
    </Box>
  )
}

export default SearchFeed