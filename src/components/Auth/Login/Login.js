import { makeStyles } from '@material-ui/styles'
import ImageTile from './ImageTile'
import './login.css'
import LoginForm from './LoginForm'

const Login = () => {
    const classes = useStyles()
    
    return (
        <div className={classes.login}>
            <div className={classes.tileWrapper}>
                <ImageTile/>
            </div>
            <div className={classes.formTile}>
                <LoginForm />
            </div>
        </div>
    )
}

export default Login



const useStyles = makeStyles(theme => {
    return {
    login: {
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column'
        }
    },
    tileWrapper: {
        position: 'relative'
    },
    formTile: {
        display: 'inline-block',
        margin: 'auto',
        textAlign: 'center'
    }
}})