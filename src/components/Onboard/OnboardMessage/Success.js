import { Grid, Typography, Button, Checkbox } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import assets from '../../../assets/assets'
import colors from '../../../assets/colors'

const Success = (props) => {

    const [latestNews, setLatestNews] = useState(true)
    const [termPolicy, setTermPolicy] = useState(true)

    const history = useHistory()

    const handleNextClick = () => {
        history.push('/home')
    }

    const changeNews = () => {
        setLatestNews(!latestNews)
    }
    const changeTermPolicy = () => {
        setTermPolicy(!termPolicy)
    }
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <img src={assets.logo1} style={{ width: '250px', height: '100px' }} />
            <Typography
                variant="h6"
                component="h6"
                gutterBottom
                style={{ color: colors.textPrimary, marginTop: 35 }}
            >
                Congratulations
                </Typography>
            <Typography
                variant="span"
                component="span"
                gutterBottom
                style={{ color: colors.textPrimary }}
            >
                You have successfully registered
                </Typography>
            <img src={assets.successMessage} style={{ width: 300 }} />

            <Typography
                variant="span"
                component="span"
                gutterBottom
                style={{
                    color: colors.textPrimary, marginTop: 80,
                    textAlign: 'center',
                    width: '37%', alignSelf: 'center'
                }}
            >
                <Checkbox
                    checked={latestNews}
                    onChange={changeNews}
                    color="secondary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                /> {"Don’t miss out on latest updates and tips from Cognito. Subscribe to our Newsletter and agree to receive market emails"}
            </Typography>
            <Typography
                variant="span"
                component="span"
                gutterBottom
                style={{
                    color: colors.textPrimary, marginTop: 5,
                    textAlign: 'center',
                    alignSelf: 'center',
                    width: '50%',
                }}
            >
                <Checkbox
                    checked={termPolicy}
                    onChange={changeTermPolicy}
                    color="secondary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                /> {"Accept Terms & Conditions and Privacy & Security Policy"}
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={handleNextClick}
                style={{ width: 200 }}
            >
                Start Exploring
                </Button>

        </Grid>
    )
}

export default Success
