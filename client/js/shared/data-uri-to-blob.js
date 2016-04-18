export default (dataURI) => {
  const [prefix, base64] = dataURI.split(',');
  const byteString = atob(base64);
  const mimeString = prefix.split(":")[1].split(";")[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  const blob = new Blob([ab], { type: mimeString });
  blob.name = mimeString;
  return blob;
};
