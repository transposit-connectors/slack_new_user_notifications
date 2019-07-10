( params ) => {
  let users = api.run('this.get_records');
  for (let i = 0; i < users.length; i++) {
    if (users[i].fields.approved != true) {
      api.run('this.post_tos', {userid: users[i].fields.slackId, message: 'REMINDER'});
    }
  }  
  return 0;
}
