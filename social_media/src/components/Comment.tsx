import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const Comment = () => {
  return (
    <Card>
      <CardHeader avatar={<Avatar>R</Avatar>} title="User1"></CardHeader>
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque earum expedita eius aperiam adipisci illo
          animi unde qui porro? Ducimus facere aspernatur, cumque provident praesentium officiis! Ducimus corrupti sequi
          laborum!
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Comment;
