const NO_IMAGE_SELECTED_ERROR = 'no image selected';

export default () => {
  return new Promise((resolve, reject) => {
    MeteorCamera.getPicture((error, data) => {
      error ? reject(error) : resolve(data);
    });
  });
};