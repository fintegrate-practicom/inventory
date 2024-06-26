import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IComponent } from '../../interfaces/IComponent';

 const SingleComponent: React.FunctionComponent< {component:IComponent}> = ({ component }) => {
  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={component.componentImages[0]}
        title={component.componentName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {component.componentName}
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
         price: { component.componentBuyPrice}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {component.componentDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      </>
    );
  }
   export default SingleComponent;