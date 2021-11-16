import { Button, FormControlLabel, Grid, makeStyles, Radio, RadioGroup, Typography } from '@material-ui/core'
import React from 'react'
import { Add } from '@material-ui/icons'

const FillInBlank = (props) => {
    const { question } = props
    const classes = useStyles()
    return (
        <Grid item xs={12} className={classes.innerBody}>
            <b>Note:</b>Just Put the Blank inside paranthesis <b>[]</b>
        </Grid>
    )
}

export default FillInBlank

const useStyles = makeStyles({
    innerBody: {
        minHeight: 100,
        padding: '20px 30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
