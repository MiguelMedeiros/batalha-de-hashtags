const tweetCountByChallenger = battle =>
  battle.tweets.reduce((acc, t) => {
    const index = battle.challangers.findIndex(
      x => t.challanger_id === x.challanger_id
    );
    acc[index]++;
    return acc;
  }, Array.from({ length: battle.challangers.length }).fill(0));

export default tweetCountByChallenger;
