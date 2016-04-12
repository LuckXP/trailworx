'use strict';

import Vote from './vote'

export default Astro.Class({
  name: 'VoteManager',
  fields: {

    votes: {
      type: 'array',
      nested: 'Vote',
      simpleValidator: 'required',
      default: () => []
    }
  
  },

  methods: {
  	getVoteCount() { 
  		return this.votes.reduce( (total, vote) => total + (vote.voteDirection ? 1 : -1), 0 );
  	},

  	hasUserVoted(userId) {
  		return votes.some( vote => vote.userId === userId )
  	},

  	submitVote(userId, voteDirection) {
  		if(!this.hasUserVoted(userId)) {
  			votes.push(new Vote({userId, voteDirection}));
  		}
  	}
  }
});