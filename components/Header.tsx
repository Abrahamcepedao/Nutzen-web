import type { NextPage } from 'next'
import Link from 'next/link'
import React, { useState } from 'react'

/* CSS */
import styles from '../styles/components/Header.module.css'

/* Hamburger */
import { Spiral as Hamburger } from 'hamburger-react'

/* Material UI */
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

/* Material UI - icons */
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import ContactPhoneRoundedIcon from '@mui/icons-material/ContactPhoneRounded';

/* Fontawesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Header: NextPage = () => {
    const [isOpen, setOpen] = useState(false)
    const [drawerOpen, setDrawerOpen] = useState(false)

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setDrawerOpen(open)
      setOpen(false)
    };


    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            className={styles.drawer}
        >
        <List>
            <Link href={"/./"}>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeRoundedIcon className={styles.menu__icon}/>
                        </ListItemIcon>
                        <ListItemText primary={"Inicio"} />
                    </ListItemButton>
                </ListItem>
            </Link>
            <Link href={"/./#productos"}>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <LocalGroceryStoreRoundedIcon className={styles.menu__icon}/>
                        </ListItemIcon>
                        <ListItemText primary={"Productos"} />
                    </ListItemButton>
                </ListItem>
            </Link>
            <Link href={"/./#tiendas"}>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <StorefrontRoundedIcon className={styles.menu__icon}/>
                        </ListItemIcon>
                        <ListItemText primary={"Tiendas"} />
                    </ListItemButton>
                </ListItem>
            </Link>
            <Link href={"/./recetas"}>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <MenuBookRoundedIcon className={styles.menu__icon}/>
                        </ListItemIcon>
                        <ListItemText primary={"Recetas"} />
                    </ListItemButton>
                </ListItem>
            </Link>
            <Link href={"/./#contacto"}>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ContactPhoneRoundedIcon className={styles.menu__icon}/>
                        </ListItemIcon>
                        <ListItemText primary={"Contacto"} />
                    </ListItemButton>
                </ListItem>
            </Link>
        </List>
        </Box>
    );

    const handleToggle = () => {
        setOpen(!isOpen)
        setDrawerOpen(!drawerOpen)
    }
    
    return (
        <div className={styles.header}>
            <div className={styles.header__container}>
                <Hamburger toggled={isOpen} toggle={handleToggle} color="#383434"/>
                
                {/* socials */}
                <div>
                    <a href="https://www.instagram.com/nutzenmx/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className={styles.icon}/>
                    </a>
                    <a href="https://www.facebook.com/nutzenmx/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className={styles.icon} style={{top: "-2px"}}/>
                    </a>
                </div>
            </div>

            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            >
                {list()}
            </Drawer>
        </div>
    )
}

export default Header