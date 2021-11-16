import { Button, Grid, makeStyles, Menu, MenuItem } from "@material-ui/core";
import React, { useState } from "react";
import assesmentTypes from "../../../config/assessmentTypes";
import CreateQuestion from "../../Utills/Question/ShowMidTermAssesment/showQuestion_show";
import FillInBlank from "../../Utills/Question/ShowMidTermAssesment/QuestionShowBody/FillinBlank.create";
import MultipleChoice from "../../Utills/Question/ShowMidTermAssesment/QuestionShowBody/MultipleChoice.create";
import ShortAnswer from "../../Utills/Question/ShowMidTermAssesment/QuestionShowBody/ShortAnswer.create";
import TrueFalse from "../../Utills/Question/ShowMidTermAssesment/QuestionShowBody/TrueFalse.create";
import Note from "../../Utills/Question/ShowMidTermAssesment/QuestionShowBody/Note.create";
import Matching from "../../Utills/Question/ShowMidTermAssesment/QuestionShowBody/Matching.create";
import { Add } from "@material-ui/icons";
import colors from "../../../assets/colors";

const AssesmentList = () => {
  const [data, setData] = useState([
    {
      type: assesmentTypes[0],
      question: "Type Your Question Here",
      options: ["Option 1", "Option 2", "Option 3"],
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

  const getCurrentItem = (index) => {
    return data[index];
  };

  const setItemAgain = (newItem, index) => {
    const newItems = data;
    newItems[index] = newItem;
    setData([...newItems]);
  };

  const handleMultipleChoiceAdd = (index) => {
    const item = getCurrentItem(index);
    const options = item.options;
    options.push(`option ${options.length + 1}`);
    item.options = options;
    setItemAgain(item, index);
  };

  const handlePairAdd = (index) => {
    const item = getCurrentItem(index);
    const options = item.options;
    options.push({
      first: "option 1",
      second: "option 2",
    });
    item.options = options;
    setItemAgain(item, index);
  };

  const getQuestion = (question, index) => {
    if (question.type === assesmentTypes[0])
      return (
        <CreateQuestion
          handleTypeChange={(type) => handleTypeChange(type, index)}
          question={question}
        >
          <MultipleChoice
            handleAdd={() => handleMultipleChoiceAdd(index)}
            question={question}
          />
        </CreateQuestion>
      );

    if (question.type === assesmentTypes[1])
      return (
        <CreateQuestion
          handleTypeChange={(type) => handleTypeChange(type, index)}
          question={question}
        >
          <ShortAnswer question={question} />
        </CreateQuestion>
      );

    if (question.type === assesmentTypes[2])
      return (
        <CreateQuestion
          handleTypeChange={(type) => handleTypeChange(type, index)}
          question={question}
        >
          <TrueFalse question={question} />
        </CreateQuestion>
      );

    if (question.type === assesmentTypes[3])
      return (
        <CreateQuestion
          handleTypeChange={(type) => handleTypeChange(type, index)}
          question={question}
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
        >
          <Matching
            handleAdd={() => handlePairAdd(index)}
            question={question}
          />
        </CreateQuestion>
      );
  };

  const classes = useStyles();



  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const createQuestion = (type) => {
    const items = data
    items.push(JSON.parse(JSON.stringify(data[type])))
    setData([...items])
    handleClose()
  }

  return (
    <div className={classes.questionsWrapper}>
      {data &&
        data.map((question, index) => {
          return getQuestion(question, index);
        })}
    </div>
  );
};

export default AssesmentList;

const useStyles = makeStyles({
  questionsWrapper: {
    marginTop: 20,
  },
  addQuestionWrapper: {
    marginTop: 20
  },
  addQuestion: {
    border: "0.5px solid rgba(0, 0, 0, 0.3)",
    borderRadius: 10,
    padding: '15px 28px',
    maxWidth: 200,
    display: 'flex',
    alignItem: 'center',
    color: colors.primary
  }
});
