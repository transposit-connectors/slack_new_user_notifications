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
  
  if (!http_event.headers['X-Slack-Retry-Num']) {
    // Store a list of all keys
    let keys = [];
    if (stash.get("keys") != null)) {
      keys = stash.get("keys");
      keys.push(body.event.user.id);
    }
    stash.put("keys", keys);
    // Add the key value and post the ToS
    stash.put(body.event.user.id, false);
    api.run('this.post_tos', {userid: body.event.user.id, message: 'Welcome to the team! We\'re glad you\'re here.'});
  }
  return { status_code: 200 };
}
