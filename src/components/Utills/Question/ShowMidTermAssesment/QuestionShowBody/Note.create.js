import { Button, FormControlLabel, Grid, makeStyles, Radio, RadioGroup, Typography } from '@material-ui/core'
import React from 'react'
import { Add } from '@material-ui/icons'

const Note = (props) => {
    const { question } = props
    const classes = useStyles()
    return (
        <Grid item xs={12} className={classes.innerBody}>
            . Type here
        </Grid>
    )
}

export default Note

const useStyles = makeStyles({
    innerBody: {
        minHeight: 100,
        padding: '20px 30px'
    }
})
