import React, {useState, useEffect} from 'react'
import courses from '../../Data/courses'
import { Typography, 
    Paper, 
    makeStyles, 
    TextField,
    Button,
    AppBar, 
    CardContent, 
    CardMedia, 
    Card,
    List,
    ListItem,
    ListItemIcon,
    Divider,
    Toolbar,withStyles, Container } from '@material-ui/core'

import categories from '../../Data/categories'


const useStyles = makeStyles(theme => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    link : {
      textDecoration : 'none',
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      margin: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));


export default function Category (props) {
    const classes = useStyles()

    const course =  courses.find((course) => props.match.params.course === course.name),
        category = categories.find((category) => (props.match.params.category) === category.name) 

    return(
        <div>
            <AppBar position="relative">
                <Toolbar>
                  <Typography variant="h6" color="inherit" noWrap>
                      {course.name+' '+category.name}
                  </Typography>
                </Toolbar>
            </AppBar>
            <Card className={classes.card}>
              <Container maxWidth="md">
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" >
                        {category.name}
                    </Typography>
                      { <category.component  {...props}/>}
                    <br/>
                </CardContent>
              </Container>
            </Card>
        </div>
    )
}