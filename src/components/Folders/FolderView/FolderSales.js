import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import colors from '../../../assets/colors'

const FolderSales = () => {

    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            <Typography className={classes.title} variant="h6" component="h6">
                Sales
            </Typography>
            <div className={classes.salesWrapper}>
                <div className={classes.sold}>
                    <Typography className={classes.saleTitle} variant="h6" component="h6">
                        50
                    </Typography>
                    <Typography className={classes.saleDescriptioj} variant="span" component="span">
                        Copies Sold
                    </Typography>
                </div>
                <div className={classes.earned}>
                    <Typography className={classes.saleTitle} variant="h6" component="h6">
                        $1000
                    </Typography>
                    <Typography className={classes.saleDescription} variant="span" component="span">
                        Total Earned
                    </Typography>
                </div>
            </div>
                
            <div className={classes.viewList}>
                <Typography  variant="span" component="span">
                    View list
                </Typography>
            </div>
            
        </div>
    )
}

export default FolderSales


const useStyles = makeStyles({
    wrapper: {
        border: `0.5px solid rgba(0, 0, 0, 0.3)`,
        borderRadius: 10,
        padding: 10,
        textAlign: 'center',
        color: colors.primary,
        marginTop: 20
    },
    title: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 20
    },
    salesWrapper: {
        display: 'flex',
        marginTop: 10
    },
    sold: {
        width: '50%',
        borderRight: `0.5px dotted ${colors.primary}`
    },
    earned: {
        width: '50%',
    },
    saleDescription: {
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "normal"
    },
    saleTitle: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 30
    },
    viewList: {
        fontSize: 16,
        fontWeight: 500,
        marginTop: 10
    }
})

