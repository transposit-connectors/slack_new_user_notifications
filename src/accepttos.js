({ http_event, db }) => {
  let body = JSON.parse(http_event.parsed_body.payload);
  let records = stash.get("db");
  // Find the right record id in airtable
  let i = 0, record = records[0][0];
  while (records[i][0] != body.user.id) {
    i += 1;
    record = records[i].id;
  }
  records[i][1] = false;
  stash.put("db", records);
  return { status_code: 200 };
}
