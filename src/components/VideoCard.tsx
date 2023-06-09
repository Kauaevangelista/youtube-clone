import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

interface Props {
 video: {
  id: {
   videoId: string;
  };
  snippet: {
   thumbnails: {
    high: {
     url: string;
    };
   };
   title: string;
   channelId?: string;
   channelTitle?: string;
  };
 };
}

const VideoCard = ({ video: { id: { videoId }, snippet } }: Props) => (
 <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0, transition: '0.7s', border: '1px solid transparent', "&:hover": {
   border: "1px solid #FC1503",
 }, }}>
 <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
    {/* @ts-ignore */}
 <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
 sx={{ width: { xs: '100%', sm: '358px', md: "320px"}, height: 180 }} 
 />
 </Link>
 <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
 <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
 <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
 {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
 </Typography>
 </Link>
 <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
 <Typography variant="subtitle2" color="gray">
 {snippet?.channelTitle || demoChannelTitle}
 <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
 </Typography>
 </Link>
 </CardContent>
 </Card>
);

export default VideoCard
