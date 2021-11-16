import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import colors from '../../../assets/colors'

const FolderPriceTag = (props) => {

    const classes = useStyles()

    const { price } = props

    return (
        <Grid container className={classes.wrapper}>
            <Typography className={classes.priceValue}>
                ${price}
            </Typography>
            <Typography className={classes.priceText}>
                Price
            </Typography>
        </Grid>
    )
}

export default FolderPriceTag

const useStyles = makeStyles({
    wrapper: {
        background: colors.white,
        border: "0.5px solid rgba(0, 0, 0, 0.3)",
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100%'
    },
    priceValue: {
        fontSize: 24,
        fontWeight: 'bolder',
        color: colors.primary,
    },
    priceText: {
        fontSize: 14,
        color: colors.primary
    }
})