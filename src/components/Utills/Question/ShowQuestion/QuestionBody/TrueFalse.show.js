import { Button, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import colors from '../../../../../assets/colors'

const TrueFalse = (props) => {
    const { question } = props
    const classes = useStyles()
    return (
        <Grid item xs={12} className={classes.innerBody}>
            <Button className={classes.true}>True</Button>
            <Button className={classes.false}>False</Button>
        </Grid>
    )
}

export default TrueFalse

const useStyles = makeStyles({
    innerBody: {
        minHeight: 100,
        padding: '20px 30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    true: {
        backgroundColor: colors.accent,
        padding: '10px 60px',
        color: colors.primary
    },
    false: {
        backgroundColor: colors.btnRed,
        padding: '10px 60px',
        color: colors.primaryRed
    },
})
