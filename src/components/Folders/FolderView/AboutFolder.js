import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import colors from '../../../assets/colors'

const AboutFolder = () => {

  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <table className={classes.table}>
        <tr>
          <td class="bTop" colspan="3">
            <Typography className={classes.title} variant="h6" component="h6">
              {"About"}
            </Typography>
          </td>
        </tr>
        {detail.map(row => {
          return (
            <tr className={classes.row}>
              <td>
                <Typography variant="span" component="span">
                  {row.key}
                </Typography>

              </td>
              <td className={classes.column}>
                <Typography variant="span" component="span">
                  {row.value}
                </Typography>
              </td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default AboutFolder

const useStyles = makeStyles({
  wrapper: {
    border: `0.5px solid rgba(0, 0, 0, 0.3)`,
    borderRadius: 10,
    padding: 10,
    marginTop: '20px'
  },
  title: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 24
  },
  table: {
    width: '100%',
    fontSize: 15,
    color: colors.primary
  },
  column: {
    textAlign: 'right'
  },
  row: {
    height: 50,
    fontWeight: 500,
    fontStyle: "normal",
    fontSize: 18
  }
})

const detail = [
  {
    key: 'Course Number',
    value: 'CSI 202'
  },
  {
    key: 'Instituition',
    value: 'LMU'
  },
  {
    key: 'Instructor',
    value: 'Dr. Tan'
  },
  {
    key: 'Textbook',
    value: 'Course 101'
  },
  {
    key: 'Textbook Edition  ',
    value: '3rd'
  },
  {
    key: 'Review',
    value: '4.5'
  }
]
