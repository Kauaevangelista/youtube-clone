import { Stack, Box } from "@mui/material";
import { ChannelCard, VideoCard } from "./";

interface Props {
 videos: any[] | null;
 direction?: string;
}

const Videos = ({ videos, direction }: Props) => {
//  if(!videos?.length) return <Loader />;
 
 return (
 //@ts-ignore
 <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
 {console.log(videos)}
 {videos!.map((item: any, idx: number) => (
 <Box key={idx}>
 {item.id.videoId && <VideoCard video={item} /> }
 {item.id.channelId && <ChannelCard channelDetail={item} />}
 </Box>
 ))}
 </Stack>
 );
}

export default Videos;
