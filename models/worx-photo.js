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
    }
  },
  methods: {
    url() {
      return '/gridfs/worx-photos/' + this.md5;
    }
  }
});