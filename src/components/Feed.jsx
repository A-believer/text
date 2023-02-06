import React, {useEffect, useState} from 'react'
import { Box, Stack, Typography } from "@mui/material"
// import { fetchFromAPI } from "../utils/fetchFromAPI"
import { Videos, Sidebar} from "./"

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);
  }, [selectedCategory])
  return (
    <Stack sx={{ flexDirection: {sx: "column", md: "row"}}}>
      <Box sx={{ height: {sx: "auto", md: "92vh"}, borderRight: "1px solid #3d3d3d", px: {sx: 0, md: 2}}}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={ setSelectedCategory} />
      </Box>
    </Stack>
  )
}

export default Feed