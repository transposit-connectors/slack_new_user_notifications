({ http_event, db }) => {
  let body = JSON.parse(http_event.parsed_body.payload);
  api.run('this.create_record', {id: body.user.id})
  return body;{ status_code: 200 };
}
