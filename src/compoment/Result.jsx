import TableMUI from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Container } from '@mui/material'
import '../css/result.css'

function Result(props) {
  return (
    <Container>
      <h2>ĐIỂM BẠN ĐẠT ĐƯỢC LÀ: {props.point}</h2>
      <TableContainer id='result' component={Paper}>
        <TableMUI size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Câu</TableCell>
              <TableCell align="left">Từ vựng</TableCell>
              <TableCell align="left">Nghĩa</TableCell>
              <TableCell align="left">Trả lời</TableCell>
              <TableCell align="left">Kết quả</TableCell>
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
                <TableCell align="left">{row.meaning}</TableCell>
                <TableCell align="left">{row.answer}</TableCell>
                <TableCell align="left">{row.check}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableMUI>
      </TableContainer>
    </Container>
  )
}

export default Result