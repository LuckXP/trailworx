import {default as React, PropTypes} from 'react'
import Card from 'material-ui/Card'
import CardHeader from 'material-ui/Card/CardHeader'
import CardMedia from 'material-ui/Card/CardMedia'
import CardTitle from 'material-ui/Card/CardTitle'
import CardText from 'material-ui/Card/CardText'
import UserAvatar from './user-avatar'

const PhotoCard = ({overlayText, src, description, creator, worx}) => {
  const displayCardText = description ? <CardText>{description}</CardText> : null;
  const displayCardHeading = creator ? <CardHeader
    title={"Added by " + creator.profile.name}
    subtitle={"on " + worx.createdAt.toString().substr(0, 15)}
    avatar={<UserAvatar user={ creator } />}
  /> : null;
  console.log(creator);
  return (
    <Card>
      {displayCardHeading}
      <CardMedia
        overlay={<CardTitle title={overlayText} style={{paddingTop: 2, paddingBottom: 10, }} />}
      >
        <img src={src} width="100%" />
      </CardMedia>
      {displayCardText}
    </Card>
  )
};

PhotoCard.propTypes = {
  overlayText: PropTypes.string,
  src: PropTypes.string.isRequired
};

export default PhotoCard;