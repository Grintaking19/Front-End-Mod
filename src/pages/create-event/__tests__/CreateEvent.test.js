import { render, screen } from "@testing-library/react";
import CreateEvent from "../CreateEvent";

test("Render CreateEvent Component", () => {
    render(<CreateEvent/>);

    const hderid = screen.getByTestId("navbar-div");
    expect(hderid).toBeInTheDocument();
});

test("Render CreateEvent Component", () => {
    render(<CreateEvent/>);

    const hderid = screen.getByTestId("container");
    expect(hderid).toBeInTheDocument();
});

test("Render CreateEvent Component", () => {
    render(<CreateEvent/>);

    const hderid = screen.getByTestId("navbar-div--static");
    expect(hderid).toBeInTheDocument();
});


test("Render CreateEvent Component", () => {
    render(<CreateEvent/>);

    const hderid = screen.getByTestId("container--static");
    expect(hderid).toBeInTheDocument();
});
