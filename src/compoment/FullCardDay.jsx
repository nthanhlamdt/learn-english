import CardDay from './CardDay'
import Box from '@mui/material/Box'

const QUANTITY_VOCABULARY = 20
function FullCardDay() {
  var fullDay = []
  var lengthVocabulary = 0
  var i = 1
  while (lengthVocabulary < 1000) {
    if (i === 1) {
      fullDay.push({
        title: `Day ${i}`,
        intro: `Học ${QUANTITY_VOCABULARY} từ vựng mới`
      })
      i++
    }
    else {
      fullDay.push({
        title: `Day ${i}`,
        intro: `Học ${QUANTITY_VOCABULARY} từ vựng mới và ôn ${QUANTITY_VOCABULARY * (i - 1)} từ vựng cũ`
      })
      i++
    }
    lengthVocabulary += 20
  }
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {fullDay.map((e, index) => (
        <CardDay
          key={index}
          id={index + 1} // Sử dụng index + 1 để đúng với số ngày
          title={e.title}
          intro={e.intro}
        />
      ))}
    </Box>
  )
}

export default FullCardDay
