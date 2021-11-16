import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import colors from '../../../assets/colors';

const Type = (props) => {
    const { selected, type: { name, icon, id } } = props
    const Icon = icon;
    const classes = useStyles()
    
    return (
        <div onClick={() => props.handleClick(id)} className={`${classes.typeWrapper} ${selected? classes.active: ''}`}>
            <div className={classes.iconWrapper}>
                <Icon/>
            </div>
            <div className={classes.textWrapper}>
                <Typography
                    variant="span"
                    component="span"
                    gutterBottom
                >
                    { name }
                </Typography>
            </div>
        </div>
    )
}

export default Type;

const useStyles = makeStyles({ 
    typeWrapper: {
        '&:hover': {
            background: colors.accent,
        },
        height: 60,
        background: colors.white,
        border: `1px solid ${colors.lightGrey}`,
        boxShadow: '0px 0px 0px #1A4242',
        borderRadius: '7.97105px',
        marginTop: 10,
        padding: 10,
        display: 'flex',
        justifyContent: 'flex-start'
    },
    active: {
        background: colors.accent
    },
    iconWrapper: {
        color: colors.primary,
        width: '15%',
        height: '100%',
        border: `1px solid ${colors.lightGreySecondary}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: colors.white
    },
    textWrapper: {
        paddingLeft: 30,
        display: 'flex',
        alignItems: 'center',
        color: colors.textPrimary,
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "19.1305px"
    }
})
