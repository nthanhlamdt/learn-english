import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function CardDay(props) {
  const navigate = useNavigate()

  const handleClick = (style) => {
    navigate(`/learn-day/${props.id}`)
    localStorage.setItem('STYLE-LEARN', style)
  }

  return (
    <Card sx={{ width: 300, borderRadius: 2, display: 'inline-block', margin: 3 }}>
      <CardActionArea onClick={() => handleClick('Anh-Việt')}>
        <Box
          sx={
            {
              width: '100%',
              height: '140px',
              backgroundColor: 'black',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '60px',
              fontWeight: 'bold'
            }
          }>
          {props.title}
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.intro}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => handleClick('Anh-Việt')}>
          Anh-Việt
        </Button>
        <Button size="small" color="primary" onClick={() => handleClick('Việt-Anh')}>
          Việt-Anh
        </Button>
      </CardActions>
    </Card>
  )
}

export default CardDay
