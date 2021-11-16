import React from 'react'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'
import assets from '../../../assets/assets'
import colors from '../../../assets/colors';

const ImageTile = () => {
    const classes = useStyles()
    
    return (
        <div className={`${classes.imageTile} image-tile`}>
            <div className={classes.logoWrapper}>
                <img src={assets.logo1} alt="login"  style={{ width: '150px', height: '60px' }}/>
            </div>
            <div className={classes.descriptionWrapper}>
                <Typography className={classes.description} variant="h6" component="h6" gutterBottom>
                    Revolutionizing <br/>the way of Study
                </Typography>
            </div>
        </div>
    )
}

export default ImageTile


const useStyles = makeStyles(theme => ({
    logoWrapper: {
        paddingLeft: 40,
        paddingTop: 40
    },
    descriptionWrapper: {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: 19,
        textAlign: 'center'
    },
    description: {
        textAlign: 'center',
        fontSize: 24,
        color: colors.white,
        fontWeight: 600
    },
    imageTile: {
        width: '50vw',
        height: '100vh',
        background: `url(${assets.loginSlide})`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.down('md')]: {
            width: '100vw !important' 
        }
    }

}))
