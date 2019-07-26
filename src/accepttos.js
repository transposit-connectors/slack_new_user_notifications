({ http_event }) => {
  let body = JSON.parse(http_event.parsed_body.payload);
  stash.put(body.user.id, true);
  return { status_code: 200 };
}
