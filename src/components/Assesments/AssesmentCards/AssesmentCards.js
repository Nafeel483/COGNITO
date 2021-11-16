import { makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import assesmentTypes from '../../../config/assessmentTypes'
import ShowQuestion from '../../Utills/Question/ShowQuestion/ShowQuestion'
import FillInBlank from '../../Utills/Question/CreateQuestion/QuestionBody/FillinBlank.create'
import ShortAnswer from '../../Utills/Question/ShowQuestion/QuestionBody/ShortAnswer.show'
import TrueFalse from '../../Utills/Question/ShowQuestion/QuestionBody/TrueFalse.show'
import Note from '../../Utills/Question/CreateQuestion/QuestionBody/Note.create'
import Matching from '../../Utills/Question/CreateQuestion/QuestionBody/Matching.create'
import MultipleChoice from '../../Utills/Question/ShowQuestion/QuestionBody/MultipleChoice.show'

const AssesmentCards = () => {

    const [data, setData] = useState([
        {
            type: assesmentTypes[0],
            question: 'Who was elected as 11th Prime minister of India in 1993?',
            options: [
                'Muhammad Ali',
                'Atal Vargas',
                'Gandhi'
            ]
        },
        {
            type: assesmentTypes[2],
            question: 'Gandi was a peace Keeper?',
            options: [
                'Option 1',
            ]
        },
        {
            type: assesmentTypes[1],
            question: 'Who was current Prime Minister?',
            options: [
                'Option 1',
            ]
        },
        {
            type: assesmentTypes[3],
            question: ' is the winner of WTC 2020-2021',
            options: [
                'Option 1',
            ]
        },
        {
            type: assesmentTypes[4],
            question: ' is the winner of WTC 2020-2021',
            options: [
                'Option 1',
            ]
        },
        {
            type: assesmentTypes[5],
            question: 'Match the countries with their Independance Year',
            options: [
                'Option 1',
            ]
        }
    ])

    const handleTypeChange = (type, index) => {
        let all = JSON.parse(JSON.stringify(data))
        const question = all[index]
        question.type = type
        all[index] = question;
        setData(all)
    }


    const getQuestion = (question, index) => {
        if(question.type === assesmentTypes[0])
            return (
                <ShowQuestion
                    handleTypeChange={type => handleTypeChange(type, index)}
                    question={question}
                >
                    <MultipleChoice question={question}/>
                </ShowQuestion>
            )

        if(question.type === assesmentTypes[1])
            return (
            <ShowQuestion
                handleTypeChange={type => handleTypeChange(type, index)}
                question={question}
            >
                <ShortAnswer question={question}/>
            </ShowQuestion>
        )

        if(question.type === assesmentTypes[2])
            return (
            <ShowQuestion
                handleTypeChange={type => handleTypeChange(type, index)}
                question={question}
            >
                <TrueFalse question={question}/>
            </ShowQuestion>
        )

        // if(question.type === assesmentTypes[3])
        //     return (
        //     <CreateQuestion
        //         handleTypeChange={type => handleTypeChange(type, index)}
        //         question={question}
        //     >
        //         <FillInBlank question={question}/>
        //     </CreateQuestion>
        // )

        // if(question.type === assesmentTypes[4])
        //     return (
        //     <CreateQuestion
        //         handleTypeChange={type => handleTypeChange(type, index)}
        //         question={question}
        //     >
        //         <Note question={question}/>
        //     </CreateQuestion>
        // )

        // if(question.type === assesmentTypes[5])
        //     return (
        //     <CreateQuestion
        //         handleTypeChange={type => handleTypeChange(type, index)}
        //         question={question}
        //     >
        //         <Matching question={question}/>
        //     </CreateQuestion>
        // )
    } 


    const classes = useStyles()

    return (
        <div className={classes.questionsWrapper}>
            {data && data.map((question, index) => {
              return getQuestion(question, index)
            })}
        </div>
    )
}

export default AssesmentCards


const useStyles = makeStyles({
    questionsWrapper: {
        marginTop: 20
    }
})