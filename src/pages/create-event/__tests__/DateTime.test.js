import { render, screen } from "@testing-library/react";
import DatalistField from "../fields/DatalistField";

test("Render CreateEvent Component", () => {
    render(<CreateEvent/>);

    const hderid = screen.getByTestId("date-time-panel");
    expect(hderid).toBeInTheDocument();
});

test("Render CreateEvent Component", () => {
    render(<CreateEvent/>);

    const hderid = screen.getByTestId("start-date-time-flex");
    expect(hderid).toBeInTheDocument();
});

test("Render CreateEvent Component", () => {
    render(<CreateEvent/>);

    const hderid = screen.getByTestId("end-date-time-flex");
    expect(hderid).toBeInTheDocument();
});

test("Render CreateEvent Component", () => {
    render(<CreateEvent/>);

    const hderid = screen.getByTestId("time-zone");
    expect(hderid).toBeInTheDocument();
});
