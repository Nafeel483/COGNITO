import { Button, Grid, makeStyles, Menu, MenuItem } from "@material-ui/core";
import React, { useState } from "react";
import assesmentTypes from "../../../config/assessmentTypes";
import CreateQuestion from "../../Utills/Question/CreateQuestion/CreateQuestion.create";
import FillInBlank from "../../Utills/Question/CreateQuestion/QuestionBody/FillinBlank.create";
import MultipleChoice from "../../Utills/Question/CreateQuestion/QuestionBody/MultipleChoice.create";
import ShortAnswer from "../../Utills/Question/CreateQuestion/QuestionBody/ShortAnswer.create";
import TrueFalse from "../../Utills/Question/CreateQuestion/QuestionBody/TrueFalse.create";
import Note from "../../Utills/Question/CreateQuestion/QuestionBody/Note.create";
import Matching from "../../Utills/Question/CreateQuestion/QuestionBody/Matching.create";
import { Add } from "@material-ui/icons";
import colors from "../../../assets/colors";
import QuestionSelectPopup from './QuestionSelectPopup';
import TextField from '../../Utills/Inputs/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


const AssesmentList = () => {
  const [addPair, SetAddPair] = useState(false)
  const [addIndex, SetAddIndex] = useState(null)
  const [firstPair, SetFirstPair] = useState('')
  const [secondPair, SetSecondPair] = useState('')
  const [multiName, SetMultiName] = useState('')
  const [addMuti, SetAdduti] = useState(false)


  const [data, setData] = useState([
    {
      type: assesmentTypes[0],
      question: "Type Your Question Here",
      options: ["Option 1",],
    },
    {
      type: assesmentTypes[1],
      question: "Who was current Prime Minister?",
      options: ["Smith John"],
    },
    {
      type: assesmentTypes[2],
      question: "Gandi was a peace Keeper?",
      options: ["Option 1"],
    },
    {
      type: assesmentTypes[3],
      question: " is the winner of WTC 2020-2021",
      options: ["Option 1"],
    },
    {
      type: assesmentTypes[4],
      question: " is the winner of WTC 2020-2021",
      options: ["Option 1"],
    },
    {
      type: assesmentTypes[5],
      question: "Match the countries with their Independance Year",
      options: [
        {
          first: "Pakistan",
          second: 1947,
        },
        {
          first: "India",
          second: 1947,
        },
        {
          first: "China",
          second: 1948,
        },
        {
          first: "Bangladesh",
          second: 1975,
        },
      ],
    },
  ]);

  const handleTypeChange = (type, index) => {
    let all = JSON.parse(JSON.stringify(data));
    const question = all[index];
    question.type = type;
    all[index] = question;
    setData(all);
  };
  const deleteQuestion = (key) => {
    let filterData = data
    let filter = filterData.filter((val, index) => index !== key)
    console.log("Nafeel---", filter)
    setData(filter)
  }

  const getCurrentItem = (index) => {
    return data[index];
  };

  const setItemAgain = (newItem, index) => {
    const newItems = data;
    newItems[index] = newItem;
    setData([...newItems]);
  };

  const openDialogMultiChoice = (index) => {
    SetAdduti(true)
    SetAddIndex(index)
  }

  const closeDialogMultiChoice = () => {
    SetAdduti(false)
  }

  const handleMultipleChoiceAdd = () => {
    const item = getCurrentItem(addIndex);
    const options = item.options;
    options.push(multiName);
    item.options = options;
    setItemAgain(item, addIndex);
    SetMultiName("")
    SetAdduti(false)
  };

  const handleMultipleChoiceRemove = (key, index) => {
    console.log("nafeell__", key, index)
    const item = getCurrentItem(index);
    const options = item.options;
    let deleteFilter = options?.filter((val, index) => (index !== key))
    item.options = deleteFilter;
    setItemAgain(item, index);
  };

  const openDialogPair = (index) => {
    SetAddPair(true)
    SetAddIndex(index)
  }

  const closeDialogPair = () => {
    SetAddPair(false)
  }
  const handleChangePairOption = (e) => {
    SetSecondPair(e.target.value)
  }
  const handleChangePairName = (e) => {
    SetFirstPair(e.target.value)
  }

  const handleChangeMultiName = (e) => {
    SetMultiName(e.target.value)
  }

  const handlePairAdd = () => {
    const item = getCurrentItem(addIndex);
    const options = item.options;
    options.push({
      first: firstPair,
      second: secondPair,
    });
    item.options = options;
    setItemAgain(item, addIndex);
    SetSecondPair('')
    SetFirstPair('')
    SetAddPair(false)
  };


  const handlePairRemove = (key, index) => {
    const item = getCurrentItem(index);
    const options = item.options;
    let deleteFilter = options?.filter((val, index) => (index !== key))
    item.options = deleteFilter;
    setItemAgain(item, index);
  };

  const getQuestion = (question, index) => {
    if (question.type === assesmentTypes[0])
      return (
        <>
          <CreateQuestion
            handleTypeChange={(type) => handleTypeChange(type, index)}
            deleteOption={deleteQuestion}
            question={question}
            id={index}
          >
            <MultipleChoice
              handleAdd={() => openDialogMultiChoice(index)}
              handleMultipleChoiceRemove={handleMultipleChoiceRemove}
              question={question}
              id={index}
            />
          </CreateQuestion>
        </>
      );

    if (question.type === assesmentTypes[1])
      return (
        <CreateQuestion
          handleTypeChange={(type) => handleTypeChange(type, index)}
          question={question}
          deleteOption={deleteQuestion}
          id={index}
        >
          <ShortAnswer question={question} />
        </CreateQuestion>
      );

    if (question.type === assesmentTypes[2])
      return (
        <CreateQuestion
          handleTypeChange={(type) => handleTypeChange(type, index)}
          question={question}
          deleteOption={deleteQuestion}
          id={index}
        >
          <TrueFalse question={question} />
        </CreateQuestion>
      );

    if (question.type === assesmentTypes[3])
      return (
        <CreateQuestion
          handleTypeChange={(type) => handleTypeChange(type, index)}
          question={question}
          deleteOption={deleteQuestion}
          id={index}
        >
          <FillInBlank question={question} />
        </CreateQuestion>
      );

    if (question.type === assesmentTypes[4])
      return (
        <>
          {/* <CreateQuestion
          handleTypeChange={(type) => handleTypeChange(type, index)}
          question={question}
        >
          <Note question={question} />
        </CreateQuestion> */}
        </>
      );

    if (question.type === assesmentTypes[5])
      return (
        <CreateQuestion
          handleTypeChange={(type) => handleTypeChange(type, index)}
          question={question}
          deleteOption={deleteQuestion}
          id={index}
        >
          <Matching
            handleAdd={() => openDialogPair(index)}
            handlePairRemove={handlePairRemove}
            question={question}
            id={index}
          />
        </CreateQuestion>
      );
  };

  const classes = useStyles();



  const [anchorEl, setAnchorEl] = React.useState(null);
  const [show, setShow] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickOpen = (event) => {
    event.stopPropagation();
    setShow(true);
  };
  const handleDialogClose = () => {
    setShow(false);
  };

  const createQuestion = (type) => {
    const items = data
    items.push(JSON.parse(JSON.stringify(data[type])))
    setData([...items])
    handleClose()
    handleDialogClose()
  }

  return (
    <>
      <Grid
        container
        justifyContent="center"
        xs={10}
        md={10}
        className={classes.headerModel}>
        <QuestionSelectPopup anchorEl={anchorEl}
          handleClose={handleClose} handleClick={handleClick}
          createQuestion={createQuestion} open={show} handleDialogClose={handleDialogClose} />
      </Grid>
      <div className={classes.questionsWrapper}>
        {data &&
          data.map((question, index) => {
            return getQuestion(question, index);
          })}

        <Grid
          container
          justifyContent="center"
          xs={10}
          md={10}
          className={classes.addQuestionWrapper}
        >
          <Button
            className={classes.addQuestion}
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClickOpen}
          >
            <Add style={{ color: colors.primary }} />
          Add Question
        </Button>



          {/* <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => {
              createQuestion(0);
            }}
          >
            MultipleChoice
          </MenuItem>
          <MenuItem
            onClick={() => {
              createQuestion(1);
            }}
          >
            Short Answer
          </MenuItem>
          <MenuItem
            onClick={() => {
              createQuestion(2);
            }}
          >
            True False
          </MenuItem>
          <MenuItem
            onClick={() => {
              createQuestion(3);
            }}
          >
            Fill in the Blanks
          </MenuItem>
          <MenuItem
            onClick={() => {
              createQuestion(4);
            }}
          >
            Note
          </MenuItem>
          <MenuItem
            onClick={() => {
              createQuestion(5);
            }}
          >
            Matching
          </MenuItem>
        </Menu> */}
        </Grid>
        <Button className={classes.saveButton}
          variant="contained" color="primary">
          Save
       </Button>
      </div>

      {
        <div>
          <Dialog open={addPair} onClose={closeDialogPair} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title" style={{ color: colors.primary }}>Create New Pair</DialogTitle>
            <DialogContent >
              <TextField
                autoFocus
                margin="dense"
                placeholder="Pair Name"
                onChange={handleChangePairName}
                value={firstPair}
                fullWidth
                style={{ minWidth: 500 }}
              />

              <TextField
                autoFocus
                margin="dense"
                fullWidth
                placeholder="Pair Option"
                onChange={handleChangePairOption}
                value={secondPair}
                style={{ minWidth: 500, marginTop: 30 }}
              />
            </DialogContent>
            <DialogActions style={{ justifyContent: 'center' }}>
              <Button onClick={handlePairAdd} variant="contained" color="primary">
                {"Add"}
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      }


      {
        <div>
          <Dialog open={addMuti} onClose={closeDialogMultiChoice} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title" style={{ color: colors.primary }}>Create New Multichoice Option</DialogTitle>
            <DialogContent >
              <TextField
                autoFocus
                margin="dense"
                placeholder="Type Option"
                onChange={handleChangeMultiName}
                value={multiName}
                fullWidth
                style={{ minWidth: 500 }}
              />
            </DialogContent>
            <DialogActions style={{ justifyContent: 'center' }}>
              <Button onClick={handleMultipleChoiceAdd} variant="contained" color="primary">
                {"Add"}
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      }
    </>
  );
};

export default AssesmentList;

const useStyles = makeStyles({
  questionsWrapper: {
    marginTop: 20,
  },
  addQuestionWrapper: {
    marginTop: 20,
    marginLeft: 10
  },
  addQuestion: {
    border: "0.5px solid rgba(0, 0, 0, 0.3)",
    borderRadius: 10,
    padding: '15px 28px',
    width: 300,
    display: 'flex',
    alignItem: 'center',
    color: colors.primary
  },
  saveButton: {
    padding: '15px 28px',
    width: 185,
    alignItem: 'center',
    marginTop: 20,
    marginLeft: '27%',
    borderRadius: 10,
  },
  headerModel: {
    marginLeft: '50%'
  }
});
