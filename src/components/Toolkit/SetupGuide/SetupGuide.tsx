
import React, { useRef, useState } from 'react'
import styles from './SetupGuide.module.css'
import { Button } from '@/components/button/Button'

interface IQuestion {
    id: string
    main: string
    answers: string[]
    value: string
    changeValue: any
}

const questions = [
    {
        id: '1',
        main: 'How do you plan to use Edgevana? ',
        answers: [
            'High Performant Validator',
            'Public Full Node Producer', 
            'RPC (full program IDs)', 
            'Web3 Developer', 
            'Web2 Developer'
        ]
    },
    {
        id: '2',
        main: 'Is this your first time trying to run a node? If not, where have you participated in the past?',
        answers: [
            'QuickNode',
            'Amazon Managed Blockchain', 
            'Azure Blockchain Workbench', 
            'Alchemy', 
            'Blockdaemon',
            'This will be my first deployment!'
        ]
    }
]

export const SetupGuide: React.FC = () => {
    
    const [questionNum, setQuestionNum] = useState(1)

    const next = () => {
        if (questionNum > 1) {
            return
        }
        setQuestionNum(questionNum + 1)
    }

    const [first, setFirst] = useState('High Performant Validator')
    const [second, setSecond] = useState('QuickNode')


    const renderQuestion = () => {
        switch(questionNum) {
            case 1: {
                return <Question
                    id={questions[0].id} 
                    main={questions[0].main} 
                    answers={questions[0].answers} 
                    value={second}
                    changeValue={setSecond}
                />
            }
            case 2: {
                return <Question
                    id={questions[1].id} 
                    main={questions[1].main} 
                    answers={questions[1].answers} 
                    value={second}
                    changeValue={setSecond}
                />
            }
        }
    }

    return (
        <div className={styles.setupGuide}>
            <div className={styles.header}>
                <h3>Setup Guide</h3>
                <p className={styles.title}>Unlock your highest potential with our personalized guide!</p>
                <p className={styles.subtitle}>{questionNum - 1}/7 Questions answered</p>
            </div>
            <div className={styles.occupancy}>
                <div style={{width: `${(100/7) * questionNum}%`}} ></div>
            </div>
            {renderQuestion()}
            <div className={styles.buttons}>
                <Button onClick={next} title='Cancel' disabled></Button>
                <Button onClick={next} title='Next' disabled={questionNum > 1}></Button>
            </div>
        </div>
    )
}

const Question: React.FC<IQuestion> = ({id, main, answers, value, changeValue}) => {
    return (
        <div className={styles.questionsBlock}>
                <div className={styles.questionsBlock__head}>
                    <div className={styles.circleId}>{id}</div>
                    <p>{main}</p>
                </div>
                <div className={styles.list}>
                    {answers.map(elem => {
                        return <label className={styles.label + " " + (value === elem ? styles.selected : '')} key={elem}>
                                <input checked={value === elem} className={styles.radio} onChange={() => changeValue(elem)} type='radio' name='question'/>{elem}
                            </label>
                    })}
                </div>
            </div>  
    )
}
