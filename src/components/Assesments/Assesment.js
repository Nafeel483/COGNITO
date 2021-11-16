import { Fab, Grid, StylesProvider, Typography } from '@material-ui/core'
import React from 'react'
import colors from '../../assets/colors'
import assets from '../../assets/assets';
import AssesmentCards from './AssesmentCards/AssesmentCards';
import { useHistory } from 'react-router';
import { Add } from '@material-ui/icons';
import AssesmentPercentage from './AssesmentPercentage';


function Assesment() {

    const history = useHistory()

    const handleCreateClick = () => {
        history.push('/create-assesment')
    }

    return (
        <Grid container style={{ color: colors.primary }}>
            <Grid xs={12} md={7}>
                <div style={{ display: 'flex', alignItems: 'center', textAlign: 'justify' }}>
                    <Typography variant="h5" style={{ fontWeight: "bold", fontSize: 30 }}>
                        <b>Midterm</b> &nbsp;
                    </Typography>
                    <span style={{ fontSize: 16, color: colors.lightGrey }}>
                        5 Questions
                    </span>
                </div>
                <div style={{ textAlign: 'justify' }}>
                    <span style={{ fontSize: 18 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu, id purus orci, accumsan amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu, id purus orci, accumsan amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu, id purus orci, accumsan amet.
                    </span>
                </div>

                <Grid item xs={12}>
                    <AssesmentCards/>
                </Grid>

            </Grid>

            
            <Grid item xs={4}>
                <AssesmentPercentage/>
                <Fab onClick={handleCreateClick} style={styles.create} color="primary" variant="extended">
                    <Add />
                    Create
                </Fab>     
            </Grid>  
        </Grid>
    )
}

export default Assesment


const styles = {
    create: {
        float: 'right'
    }
}
