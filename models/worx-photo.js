import {WorxPhotos} from './collections'

export default Astro.Class({
  name: 'WorxPhoto',
  collection: WorxPhotos,
  fields: {
    metadata: {
      type: 'object',
      simpleValidator: 'required',
      default: () => {}
    },
    uri: {
      type: 'string',
      transient: true
    },
    md5: {
      type: 'string'
    },
    length: {
      type: 'number'
    },
    chunkSize: {
      type: 'number'
    },
    uploadDate: {
      type: 'date'
    },
    filename: {
      type: 'string'
    },
    contentType: {
      type: 'string'
    },
    aliases: {
      type: 'array'
    }
  },
  events: {
    afterInit() {
      this.set('uri', '/gridfs/worx-photos/' + this._id);
    },
    afterSave() {
      this.set('uri', '/gridfs/worx-photos/' + this._id);
    }
  }
});