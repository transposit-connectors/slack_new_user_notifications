({ http_event }) => {
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
    if (!http_event.headers['X-Slack-Retry-Num']) {
      api.run('this.create_record', {id: body.event.user.id})
      api.run('this.post_tos', {userid: body.event.user.id, message: 'Welcome to the team! We\'re glad you\'re here.'});
    }
  }
  return { status_code: 200 };
}
