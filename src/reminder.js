( params ) => {
  let users = stash.get("db");
  for (let i = 0; i < users.length; i++) {
    if (users[i][1] != true) {
      api.run('this.post_tos', {userid: users[i].fields.slackId, message: 'REMINDER'});
    }
  }  
  return 0;
}
