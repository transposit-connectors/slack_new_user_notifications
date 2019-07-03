( {db} ) => {
  try {
    const data = db.getData('/');
    Object.keys(data).forEach((team) => {
      Object.keys(data[team]).forEach((user) => {
        if (!data[team][user]) {
          api.run('this.post_tos', {attachments: api.run('this.attachment'), userid: body.event.user.id, message: 'REMINDER'});
          .then((result => {
            console.log(result.data);
          }));
        }
      });
    });
  } catch (error) { console.error(error); }
}
