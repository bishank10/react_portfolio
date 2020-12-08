import img from "./images/congo.png";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));



 
 
 

export default function TitlebarGridList() {
   
        
          
       const   title = 'Image';
        const  author= 'author';
    
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <h2></h2>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
       
          <GridListTile >
            <img src={img} alt={title} />
            <GridListTileBar
              title={title}
              subtitle={<span>by: {author}</span>}
            />
          </GridListTile>
          <GridListTile >
            <img src={img} alt={title} />
            <GridListTileBar
              title={title}
              subtitle={<span>by: {author}</span>}
            />
          </GridListTile>
          <GridListTile >
            <img src={img} alt={title} />
            <GridListTileBar
              title={title}
              subtitle={<span>by: {author}</span>}
            />
          </GridListTile>
          <GridListTile >
            <img src={img} alt={title} />
            <GridListTileBar
              title={title}
              subtitle={<span>by: {author}</span>}
            />
          </GridListTile>
       
      </GridList>
    </div>
  );
}
