( params ) => {
  let raw_approved = api.run('this.get_records');
  let approved = [];
  for (let i = 0; i < raw_approved.length; i++) {
    if (raw_approved[i].fields.slackId && !(approved.includes(raw_approved[i].fields.slackId))) {
      approved.push(raw_approved[i].fields.slackId);
    }
  }
  //if ()
  
  return approved;//.includes('ULBCAQ66BH');
}
