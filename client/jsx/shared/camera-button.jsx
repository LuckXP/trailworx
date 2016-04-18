import React from 'react'

const NO_IMAGE_SELECTED_ERROR = 'no image selected';

class Component extends React.Component {

  getPicture() {
    const {onPictureTaken, onNoImageSelected, onError} = this.props;
    MeteorCamera.getPicture((error, data) => {
      if (error) {
        if (error.reason === NO_IMAGE_SELECTED_ERROR) {
          onNoImageSelected(error);
        } else {
          onError(error);
        }
        return;
      }
      onPictureTaken(this.dataURItoBlob(data));
    });
  }

  dataURItoBlob(dataURI) {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ab],{ type: mimeString });
    blob.name = mimeString;
    return blob;
  }

  render() {
    const {children, ...props} = this.props;
    const newProps = {
      ...props,
      onClick: () => this.getPicture()
    };
    return React.cloneElement(children, newProps);
  }
}

Component.propTypes = {
  onPictureTaken: React.PropTypes.func.isRequired,
  onNoImageSelected: React.PropTypes.func,
  onError: React.PropTypes.func,
  children: React.PropTypes.element.isRequired
};

Component.defaultProps = {
  onNoImageSelected: () => {},
  onError: () => {}
};

export default Component;