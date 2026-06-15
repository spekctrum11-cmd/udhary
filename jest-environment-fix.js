const JSDOMEnvironment = require('jest-environment-jsdom').default || require('jest-environment-jsdom');

class FixJSDOMEnvironment extends JSDOMEnvironment {
  constructor(...args) {
    super(...args);
    // Expose Node's native Web API globals to the sandbox global context
    this.global.fetch = fetch;
    this.global.Headers = Headers;
    this.global.Request = Request;
    this.global.Response = Response;
  }
}

module.exports = FixJSDOMEnvironment;
