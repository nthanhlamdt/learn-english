import { useParams } from 'react-router-dom'
import Question from './Question'
import { Box } from '@mui/material'
import { vocabulary } from '../data/Vacabolary.js'
import { useState, useEffect } from 'react'
import Result from './Result.jsx'
import { randomNonRepeating } from '../funtion/random.js'
import Vocabulary from './Vocabulary.jsx'

const QUANTITY_VOCABULARY = 20
function Learned() {
  const { id } = useParams()
  const STYLELEARN = localStorage.getItem('STYLE-LEARN')

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [pointQuestion, setPointQuestion] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const [arrayQuestion, setArrayQuestion] = useState([])
  const [arrayResult, setArrayResult] = useState([])
  const [allVocubolary, setAllVocubolary] = useState([])

  useEffect(() => {
    const newQuestionArray = randomNonRepeating((id - 1) * QUANTITY_VOCABULARY, id*QUANTITY_VOCABULARY - 1, QUANTITY_VOCABULARY).map((i) => vocabulary[i])
    setArrayQuestion(newQuestionArray)
    const newAllVocubolary = []
    for (let i = (id - 1) * QUANTITY_VOCABULARY; i < id * QUANTITY_VOCABULARY; i++) {
      newAllVocubolary.push(vocabulary[i])
    }
    setAllVocubolary(newAllVocubolary)
  }, [id])

  const handleNext = () => {
    const currentQuestion = arrayQuestion[currentQuestionIndex - 1]
    const isCorrect = STYLELEARN === 'Việt-Anh' ? inputValue.toLowerCase() === currentQuestion?.nameVocabulary.toLowerCase().toLowerCase()
      : inputValue.toLowerCase() === currentQuestion?.meaning

    const newResult = {
      id: currentQuestionIndex,
      nameVocabulary: currentQuestion?.nameVocabulary,
      meaning: currentQuestion?.meaning,
      answer: inputValue,
      check: isCorrect ? 'True' : 'False',
      point: isCorrect ? pointQuestion + 1 : pointQuestion
    }

    if (currentQuestionIndex !== 0) {
      setArrayResult([...arrayResult, newResult])
    }

    if (isCorrect) {
      setPointQuestion(pointQuestion + 1)
    }

    setInputValue('')
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  const renderQuestion = () => {
    if (currentQuestionIndex === 0) {
      return <Vocabulary rows={allVocubolary} onNext={handleNext}/>
    }
    else if (currentQuestionIndex <= QUANTITY_VOCABULARY && currentQuestionIndex > 0) {
      return (
        <Question
          index={currentQuestionIndex}
          vocabulary={STYLELEARN === 'Việt-Anh' ? arrayQuestion[currentQuestionIndex-1]?.meaning : arrayQuestion[currentQuestionIndex-1]?.nameVocabulary}
          onNext={handleNext}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      )
    } else {
      return (
        <Result
          rows={arrayResult}
          point={pointQuestion}
        />
      )
    }
  }

  return (
    <Box sx={{ height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {renderQuestion()}
    </Box>
  )
}

export default Learned
