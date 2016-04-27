import {WorxPhotos} from './collections'

export default Astro.Class.create({
  name: 'WorxPhoto',
  collection: WorxPhotos,
  secured: false,
  fields: {
    metadata: {
      type: Object,
      default: () => {}
    },
    uri: {
      type: String,
      transient: true
    },
    md5: {
      type: String,
      optional: true
    },
    length: {
      type: Number,
      optional: true
    },
    chunkSize: {
      type: Number,
      optional: true
    },
    uploadDate: {
      type: Date,
      default: new Date()
    },
    filename: {
      type: String,
      optional: true
    },
    contentType: {
      type: String,
      optional: true
    },
    aliases: {
      type: [String],
      optional: true
    }
  },
  events: {
    afterInit({currentTarget: self}) {
      self.uri = '/gridfs/worx-photos/' + self._id;
    },
    afterSave({currentTarget: self}) {
      self.uri = '/gridfs/worx-photos/' + self._id;
    }
  }
});