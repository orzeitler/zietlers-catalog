import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, Menu, MenuItem, Typography } from "@material-ui/core";
import {FavoriteBorderOutlined} from '@material-ui/icons';
import { Link } from 'react-scroll'

import useStyles from './styles';

const NavBar = () => {
    const classes = useStyles();

    return (
       <>
           <AppBar position={'fixed'} className={classes.appBar} color={"inherit"}>
               <Toolbar>
                   <Typography>
                       <Link to={'/'}>
                       <img src={logo} alt={'The Zeitlers Catalog'} className={classes.image} />
                       </Link>
                       The Zeitlers Catalog
                   </Typography>
                   <div className={classes.navMenu}>
                       <div className={classes.navItem}>
                          <Link to={'/'}>About</Link>
                      </div>
                   </div>
                   <div className={classes.button}>
                       <IconButton aria-label={'Show cart items'} color={"inherit"}>
                           <Badge badgeContent={2} color={"secondary"}>
                               <FavoriteBorderOutlined/>
                           </Badge>
                       </IconButton>
                   </div>
                   <div className={classes.menuButton}>
                       <FavoriteBorderOutlined/>
                   </div>
               </Toolbar>
           </AppBar>
       </>
    )

}

export default NavBar;