import { HttpResponseHandler } from "./httpResponses";
import { EHttpStatusCode } from "./EHttpStatusCode";

describe("HttpResponseHandler", () => {
  it("when ok is called without type should return json response with status 200", () => {
    const data = { message: "success" };
    const response = HttpResponseHandler.ok(data);

    expect(response).toEqual({
      body: data,
      statusCode: EHttpStatusCode.OK,
      type: "json",
    });
  });

  it("when ok is called with type 'message' should return response with status 200 and type 'message'", () => {
    const data = "OK message";
    const response = HttpResponseHandler.ok(data, "message");

    expect(response).toEqual({
      body: data,
      statusCode: EHttpStatusCode.OK,
      type: "message",
    });
  });

  it("when okNoData is called should return status 200 with message body", () => {
    const response = HttpResponseHandler.okNoData();

    expect(response).toEqual({
      statusCode: EHttpStatusCode.OK,
      body: "OK",
      type: "message",
    });
  });

  it("when notFound is called should return status 404 and message body", () => {
    const message = "Resource not found";
    const response = HttpResponseHandler.notFound(message);

    expect(response).toEqual({
      statusCode: EHttpStatusCode.NOT_FOUND,
      body: message,
      type: "message",
    });
  });

  it("when created is called should return status 201 and data", () => {
    const data = { id: 1, name: "Created" };
    const response = HttpResponseHandler.created(data);

    expect(response).toEqual({
      body: data,
      statusCode: EHttpStatusCode.CREATED,
    });
  });
});
