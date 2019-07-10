({ http_event, db }) => {
  let body = JSON.parse(http_event.parsed_body.payload);
  let records = api.run('this.get_records');
  // Find the right record id in airtable
  let i = 0, record = records[0].id;
  while (records[i].fields.slackId != body.user.id) {
    i += 1;
    record = records[i].id;
  }
  api.run('this.update_record', {record: record, id: body.user.id})
  return { status_code: 200 };
}
