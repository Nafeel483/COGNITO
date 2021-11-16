import { Badge, Button, Grid, makeStyles, Menu, MenuItem, Typography } from '@material-ui/core'
import FolerSearch from '../Utills/Inputs/FolderSearch'
import { NotificationsNoneSharp } from '@material-ui/icons'
import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import './topbar.css'
import appActions from '../../redux/action/app.action';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive'

const Topbar = () => {
    const classes = useStyles()

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 960px)' })

    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useDispatch();
    const { navbar } = useSelector(store => store.app)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const toggleNavbar = () => {
        dispatch(appActions.toggleNavbar())
    }

    return (
        <div className={`topbar ${classes.topNavbarWrapper}`}>
            <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                className={classes.container}
            >


                {isTabletOrMobile && <Grid item xs={4} md={0}>
                    <MenuIcon onClick={toggleNavbar} />
                </Grid>}

                <Grid
                    xs={5}
                    md={3}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    style={{ marginTop: '20px'}}
                >
                    <FolerSearch
                        id="input-with-icon-adornment"
                        placeholder="Search"
                        className={classes.searchInput}
                        size="small"
                        inputProps={{
                            className: classes.searchInput
                        }}
                    />
                </Grid>
                <Grid
                    xs={3}
                    md={1}
                    item
                    style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '20px' }}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Typography>
                        <Badge variant="dot" color="primary">
                            <NotificationsNoneSharp className={classes.bell} />
                        </Badge>
                    </Typography>
                    <Button onClick={handleClick} aria-controls="simple-menu" aria-haspopup="true">
                        <Avatar alt="Cindy Baker" className={classes.small} src="https://material-ui.com/static/images/avatar/2.jpg" />
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={true}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>My account</MenuItem>
                        <MenuItem>Logout</MenuItem>
                    </Menu>
                </Grid>

            </Grid>
        </div>
    )
}

export default Topbar

const useStyles = makeStyles(theme => ({
    topNavbarWrapper: {
        height: 60,
    },
    container: {
        height: '100%',
    },
    searchInput: {
        height: 12,
    },
    bell: {
        // color: colors.white,
        fontSize: 25,
        marginLeft: 10,
        color: "#C2CFE0"
    },
    bellBadge: {
        color: "#F7685B",

    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
}))
