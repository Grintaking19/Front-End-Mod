import { render, screen } from "@testing-library/react";
import BasicInfo from "../BasicInfo";

test("Render BasicInfo Component", () => {
    render(<CreateEvent/>);

    const hderid = screen.getByTestId("basic-info-panel");
    expect(hderid).toBeInTheDocument();
});

test("Render BasicInfo Component", () => {
    render(<CreateEvent/>);

    const hderid = screen.getByTestId("event-title-input");
    expect(hderid).toBeInTheDocument();
});

test("Render BasicInfo Component", () => {
    render(<CreateEvent/>);

    const hderid = screen.getByTestId("type");
    expect(hderid).toBeInTheDocument();
});


test("Render BasicInfo Component", () => {
    render(<CreateEvent/>);

    const hderid = screen.getByTestId("category");
    expect(hderid).toBeInTheDocument();
});


test("Render BasicInfo Component", () => {
    render(<CreateEvent/>);

    const hderid = screen.getByTestId("subcategory");
    expect(hderid).toBeInTheDocument();
});

test("Render BasicInfo Component", () => {
    render(<CreateEvent/>);

    const hderid = screen.getByTestId("tags-subheader");
    expect(hderid).toBeInTheDocument();
});


