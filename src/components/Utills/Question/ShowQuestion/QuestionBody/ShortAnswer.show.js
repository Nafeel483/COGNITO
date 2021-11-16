import {  Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { Add } from '@material-ui/icons'
import colors from '../../../../../assets/colors'

const ShortAnswer = (props) => {
    const { question } = props
    const { options }  = question

    const classes = useStyles()
    return (
            <Grid item xs={12} className={classes.innerBody}>
                <Grid xs={12} className={classes.shortAnswerWrapper}>
                    <Typography variant="span">
                        {'Alia'}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="span" className={classes.originalAnswer}>
                        <b>Original Answer</b>
                    </Typography>

                    <Typography className={classes.detail} variant="span">
                        Narendra Damodardas Modi is an Indian politician serving as the 14th and current prime minister of India since 2014.
                    </Typography>
                </Grid>
            </Grid>
    )
}

export default ShortAnswer

const useStyles = makeStyles({
    innerBody: {
        minHeight: 100,
        padding: '20px 30px'
    },
    shortAnswerWrapper: {
        textAlign: 'justify',
        background: '#FAFBFC',
        border: '2px solid #DFE1E6',
        boxSizing: 'border-box',
        borderRadius: 3,
        fontSize: 12,
        padding: 13
    },
    originalAnswer: {
        color: colors.lightGreen,
        display: 'block',
        marginTop: 15
    },
    detail: {
        color: colors.lightGreen
    }
})
