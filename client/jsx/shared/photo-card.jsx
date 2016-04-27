import {default as React, PropTypes} from 'react'
import Card from 'material-ui/Card'
import CardMedia from 'material-ui/Card/CardMedia'
import CardTitle from 'material-ui/Card/CardTitle'

const PhotoCard = ({overlayText, src}) => {
  console.log('overlay text', overlayText);
  return (
    <Card>
      <CardMedia
        overlay={<CardTitle title={overlayText} style={{paddingTop: 2, paddingBottom: 10, }} />}
      >
        <img src={src} width="100%" />
      </CardMedia>
    </Card>
  )
};

PhotoCard.propTypes = {
  overlayText: PropTypes.string,
  src: PropTypes.string.isRequired
};

export default PhotoCard;