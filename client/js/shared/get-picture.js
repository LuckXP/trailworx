const NO_IMAGE_SELECTED_ERROR = 'no image selected';

export default (onPictureTaken = () => {}, onNoImageSelected = () => {}, onError = () => {}) => {
  MeteorCamera.getPicture((error, data) => {
    if (error) {
      if (error.reason === NO_IMAGE_SELECTED_ERROR) {
        onNoImageSelected(error);
      } else {
        onError(error);
      }
      return;
    }
    onPictureTaken(data);
  });
};