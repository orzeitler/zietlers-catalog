import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, Menu, MenuItem, Typography } from "@material-ui/core";
import {FavoriteBorderOutlined} from '@material-ui/icons';
import logo from '../../images/homeLogo.png'

import useStyles from './styles';

const NavBar = () => {
    const classes = useStyles();

    return (
       <>
           <AppBar position={'fixed'} className={classes.appBar} color={"inherit"}>
               <Toolbar>
                   <Typography>
                       <img src={logo} alt={'The Zeitlers Catalog'} className={classes.image} />
                       The Zeitlers Catalog
                   </Typography>
                   <div className={classes.grow}/>
                   <div className={classes.button}>
                       <IconButton aria-label={'Show cart items'} color={"inherit"}>
                           <Badge badgeContent={2} color={"secondary"}>
                               <FavoriteBorderOutlined/>
                           </Badge>
                       </IconButton>
                   </div>
               </Toolbar>
           </AppBar>
       </>
    )

}

export default NavBar;