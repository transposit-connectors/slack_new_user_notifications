( params ) => {
  let users = stash.get("keys");
  for (let i = 0; i < users.length; i++) {
    if (!stash.get(users[i])) {
      api.run('this.post_tos', {userid: users[i], message: 'REMINDER'});
    }
  }  
  return 0;
}
