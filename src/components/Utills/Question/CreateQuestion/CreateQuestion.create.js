import { Grid, makeStyles, Typography } from '@material-ui/core'
import Select from '../../Inputs/Select'
import React, { useState } from 'react'
import colors from '../../../../assets/colors'
import assesmentTypes, { getAssesmentOptions } from '../../../../config/assessmentTypes'
import { Add, DeleteOutline } from '@material-ui/icons'
import TextField from "../../Inputs/TextField";


const CreateQuestion = (props) => {
  const { question, handleTypeChange, deleteOption } = props
  const options = getAssesmentOptions()
  const [addCardName, setAddCardName] = React.useState(question.question ? question.question : "");

  const classes = useStyles()

  const handleChange = (e) => {
    setAddCardName(e.target.value)
  }


  return (
    <Grid container xs={12} className={classes.questionOuterWrapper}>
      {/* <Grid item xs={12} md={8}>
                <Select 
                    handleValueChange={handleTypeChange}
                    placeholder={question.type} 
                    options={options} 
                    selectedValue={question.type}
                />
            </Grid> */}
      <Grid item xs={12} md={10} className={classes.questionBody}>
        <Grid item xs={12} className={classes.bodyHeader} style={getStyles(question.type)}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <Typography className={classes.headerTitle} variant="span" component="span">
                {question.type}
              </Typography>
              <TextField
                placeholder={"Type Question..."}
                size="small"
                className={classes.searchInput}
                onChange={handleChange}
                value={addCardName}
                inputProps={{
                  className: classes.searchInput,
                }}
              />
              {/* 
              <Typography className={classes.question} variant="span" component="span">
                {question.type === assesmentTypes[3] ? (<b>[New Zeland] </b>) : ''}
                {question.type === assesmentTypes[4] ? '' : question.question}
              </Typography> */}
            </div>
            <div style={{ marginTop: 10 }}>
              <DeleteOutline onClick={() => props.deleteOption(props.id)} />
            </div>
          </div>
        </Grid>
        {props.children}
      </Grid>
    </Grid>
  )
}

export default CreateQuestion

const getStyles = (type) => {
  return {
    height: assesmentTypes[4] === type ? 50 : 80,
    borderBottom: assesmentTypes[4] === type ? 'none' : '0.5px solid rgba(0, 0, 0, 0.3)'
  }
}

const useStyles = makeStyles({
  questionOuterWrapper: {
    marginTop: 20
  },
  questionBody: {
    marginTop: 20,
    border: '0.5px solid rgba(0, 0, 0, 0.3)',
    borderRadius: 10
  },
  bodyHeader: {
    height: 100,
    borderBottom: '0.5px solid rgba(0, 0, 0, 0.3)',
    padding: 10
  },
  headerTitle: {
    textTransform: 'uppercase',
    color: colors.primary,
    opacity: 0.4,
    fontSize: 12,
    fontWeight: 'bold',
    display: 'block',
    marginBottom: 5,
  },
  innerBody: {
    minHeight: 100,
    padding: '20px 30px'
  },
  question: {
    fontWeight: "normal",
    fontSize: 19
  },
  searchInput: {
    width: '300px',
    height: 12,
    marginTop: 10,
  },
})
