import {WorxPhotos} from './collections'

export default Astro.Class({
  name: 'WorxPhoto',
  collection: WorxPhotos,
  behaviors: ['timestamp'],
  fields: {
    userId: {
      type: 'string',
      simpleValidator: 'required'
    },
    worxId: {
      type: 'string',
      simpleValidator: 'required'
    },
    md5: {
      type: 'string',
      simpleValidator: 'required'
    },
    uri: {
      type: 'string',
      transient: true
    },
    metadata: {
      type: 'object'
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
  methods: {
    setDataUri(dataUrl) {
      this.set('uri', dataUrl);
    }
  },
  events: {
    afterInit() {
      this.set('uri', '/gridfs/worx-photos/' + this.md5);
    }
  }
});