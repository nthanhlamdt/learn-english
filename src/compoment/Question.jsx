import { FormControl, InputLabel, Input, FormHelperText, Box } from '@mui/material'
import Button from '@mui/material/Button'
import '../css/question.css'

function Question(props) {
  document.onkeydown = function(event) {
    if (event.key === 'Enter') {
      event.preventDefault()
      document.getElementById('generate').click(props.onNext)
    }
  }

  const handleChange = (event) => {
    props.setInputValue(event.target.value)
  }
  return (
    <Box id='question'>
      <h2>Câu hỏi { props.index }</h2>
      <FormControl className='question-form'>
        <InputLabel style={{ fontSize: 25, padding: '4px 0 20px' }} htmlFor="my-input">{props.vocabulary}</InputLabel>
        <Input
          id="input-question"
          aria-describedby="my-helper-text"
          value={props.inputValue}
          onChange={handleChange}
        />
        <FormHelperText id="my-helper-text">Điển nghĩa của từ vựng trên vào đây!!!</FormHelperText>
      </FormControl>
      <Box sx={{ display:'flex', justifyContent:'right', marginTop: 5, width: '100%' }}>
        <Button style={{ wihdth: '90px' }} variant="contained" onClick={props.onNext} id='generate'>Next</Button>
      </Box>
    </Box>
  )
}

export default Question
