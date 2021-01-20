const https = require("https");

jest.mock("https", () => {
  return {
    request: jest
      .fn()
      .mockReturnValue({ onError: jest.fn(), on: jest.fn(), end: jest.fn() }),
  };
});

/** eslint-env jest **/
describe("test block", () => {
  // let mockedFn = jest.fn().mockReturnValue({ doSomething: jest.fn() });
  it("should work llike i expect it to", () => {
    const testValue = '"random value"';
    const resp = https.request({});
    resp.end(testValue);

    const httpsmockedRequest = https.request as jest.Mock;

    expect(
      httpsmockedRequest.mock.results[0].value.end.mock.calls[0][0]
    ).toEqual(testValue);
  });
});
