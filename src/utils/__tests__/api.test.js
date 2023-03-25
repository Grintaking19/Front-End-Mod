import axios from "axios";
import { fetchData } from "../api";

jest.mock("axios");

describe("fetchData function", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should fetch data successfully", async () => {
    const expectedData = { id: 1, name: "Event 1" };
    axios.get.mockResolvedValueOnce({ data: expectedData });

    const result = await fetchData("/events/1");

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      `${process.env.REACT_APP_API_DOMAIN}/events/1`
    );
    expect(result).toEqual(expectedData);
  });

  it("handles errors correctly", async () => {
    const expectedError = new Error("Request failed with status code 404");
    jest.spyOn(console, "error").mockImplementation(() => {});
    axios.get.mockImplementationOnce(() => Promise.reject(expectedError));
    const result = await fetchData("/api/events");
    expect(result).toBeUndefined();
    expect(console.error).toHaveBeenCalledWith(expectedError);
    console.error.mockRestore();
  });
});
