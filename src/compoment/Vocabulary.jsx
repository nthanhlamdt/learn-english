import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Container } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import '../css/vocabulary.css'

function Vocabulary(props) {
  document.onkeydown = function(event) {
    if (event.key === 'Enter') {
      event.preventDefault()
      document.getElementById('generate').click()
    }
  }

  return (
    <Container id='vocabulary'>
      <h2>CÁC TỪ VỰNG HÔM NAY </h2>
      <TableContainer id='table-container' component={Paper} >
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Câu</TableCell>
              <TableCell align="left">Từ vựng</TableCell>
              <TableCell align="left">Phiên Âm</TableCell>
              <TableCell align="left">Nghĩa</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="left">{row.nameVocabulary}</TableCell>
                <TableCell align="left">{row.spelling}</TableCell>
                <TableCell align="left">{row.meaning}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display:'flex', justifyContent:'right', marginTop: 5, width: '100%' }}>
        <Button style={{ width: '90px' }} variant="contained" onClick={props.onNext} id='generate'>Next</Button>
      </Box>
    </Container>
  )
}

export default Vocabulary