({ http_event, db }) => {
  let body = JSON.parse(http_event.body);
  db.push(`/${body.event.team}/${body.event.user}`, true);
  return { status_code: 200 };
}
