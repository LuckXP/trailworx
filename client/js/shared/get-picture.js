export default () => {
  return new Promise((resolve, reject) => {
    MeteorCamera.getPicture((error, data) => {
      error ? reject(error) : resolve(data);
    });
  });
};