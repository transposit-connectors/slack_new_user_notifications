({ http_event, db }) => {
  let body = JSON.parse(http_event.body);
  if (body.challenge) {
    // https://api.slack.com/events/url_verification
	return {
      status_code: 200,
      headers: { "Content-Type": "text/plain" },
      body: body.challenge
    };
  }
  else {
    db.push(`/${body.event.team}/${body.event.user}`, true);
  }
  return { status_code: 200 };
}
