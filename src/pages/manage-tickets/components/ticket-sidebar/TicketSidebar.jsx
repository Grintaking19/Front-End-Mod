import styles from "./TicketSidebar.module.css";

import Panel from "../../../../layouts/UI/Panel";
import HorizontalFlex from "../../../../layouts/UI/HorizontalFlex";
import PanelChanger from "../../../../layouts/UI/PanelChanger";
import InputField from "../../../create-event/fields/InputField";
import BasicDatePicker from "../../../create-event/fields/BasicDatePicker";
import DatalistField from "../../../create-event/fields/DatalistField";
import Dropdown from "../dropdown/Dropdown";

import { TimeSlots, Languages, TimeZones } from "../../../create-event/Data";
import { PM_24hoursConvert } from "../../../create-event/date-and-time/DateTime";


import { useState, useEffect } from "react";

function TicketSidebar(props) {
    const { isNewTicket } = props;
    let ticket = isNewTicket ? {
        "ticketName": "",
        "ticketPriceType": "paid",
        "ticketPrice": 0,
        "ticketQuantity": 0,
        "ticketStatus": "scheduled",
        "currentReservation": 0,
        "ticketType": "Select a ticket type",
        "ticketDescription": "",
        "sellingStartingDate": new Date().toISOString().substring(0, 10),
        "sellingStartingTime": new Date().toISOString().substring(11, 16),
        "sellingEndingDate": new Date().toISOString().substring(0, 10),
        "sellingEndingTime": new Date().toISOString().substring(11, 16),
        "sellingStartTime": new Date().toISOString(),
        "sellingEndTime": new Date().toISOString() + 1,
    } : props.ticket;

    const [choosenPanel, setChoosenPanel] = useState(isNewTicket ? 1 : ticket.ticketPriceType === "paid" ? 1 : ticket.ticketPriceType === "free" ? 2 : 3);
    const panelChangeHandler = (index) => {
        setChoosenPanel(index)
        switch (index) {
            case 1:
                setTicketValues({
                    ...ticketValues,
                    ticketPriceType: "paid",
                });
                break;
            case 2:
                setTicketValues({
                    ...ticketValues,
                    ticketPriceType: "free",
                    ticketPrice: 0,
                });
                break;
            case 3:
                setTicketValues({
                    ...ticketValues,
                    ticketPriceType: "donation",
                    ticketPrice: 0,
                });
                break;
            default:
                break;
        }
    }
    const [ticketValues, setTicketValues] = useState(ticket);

    useEffect(() => {
        setTicketValues(props.ticket ? props.ticket : ticket);
    }, [props.ticket]);

    function handleInputChange(event) {
        const { name, value } = event.target;
        console.log(name, value);
        setTicketValues({
            ...ticketValues,
            [name]: value,
        });
        props.onChange({
            ...ticketValues,
            [name]: value,
        });
    }

    function handleSave() {
        console.log(ticketValues);
        if (isNewTicket)
            props.onAddTicket(ticketValues);
        else
            props.onEditTicket(ticketValues);
    }

    return (
        <>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 id="offcanvasRightLabel">{isNewTicket ? "Add Ticket" : "Edit Ticket"}</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" id="form-close"></button>
                </div>
                <div class="offcanvas-body">
                    <form class="row g-3">
                        <div className={styles["form-body"]}>
                            <Panel
                                style={{ width: "100%" }}
                            >
                                <HorizontalFlex width="100%" id="ticket-price-type-flex">
                                    <PanelChanger
                                        id="paid-panel-changer"
                                        onClick={() => panelChangeHandler(1)}
                                        className={(choosenPanel === 1) && "panel-changer-clicked"}
                                    >
                                        Paid
                                    </PanelChanger>
                                    <PanelChanger
                                        id="free-panel-changer"
                                        onClick={() => panelChangeHandler(2)}
                                        className={(choosenPanel === 2) && "panel-changer-clicked"}
                                    >
                                        Free
                                    </PanelChanger>
                                    <PanelChanger
                                        id="donation-panel-changer"
                                        onClick={() => panelChangeHandler(3)}
                                        className={(choosenPanel === 3) && "panel-changer-clicked"}
                                    >
                                        Donation
                                    </PanelChanger>
                                </HorizontalFlex>
                                <InputField
                                    title="Name"
                                    required={true}
                                    maxLength={50}
                                    value={ticketValues.ticketName}
                                    onChange={handleInputChange}
                                    name="ticketName"
                                />
                                <InputField
                                    title="Available Quantity"
                                    required={true}
                                    value={ticketValues.ticketQuantity}
                                    onChange={handleInputChange}
                                    name="ticketQuantity"
                                />
                                <InputField
                                    title="Price"
                                    required={true}
                                    value={ticketValues.ticketPrice}
                                    onChange={handleInputChange}
                                    name="ticketPrice"
                                />
                                <Dropdown
                                    options={["Select a ticket type", "Regular", "VIP", "VVIP"]}
                                    width="100%"
                                    id="ticket-type-dropdown"
                                    disable={false}
                                    selected={ticketValues.ticketType}
                                    onChange={handleInputChange}
                                    name="ticketType"
                                />
                                <HorizontalFlex width="100%" id="start-date-time-flex">
                                    <input type="date" className="form-control" id="start-date"
                                        onChange={handleInputChange}
                                        name="sellingStartingDate"
                                        value={ticketValues.sellingStartingDate}
                                    />
                                    <input type="time" className="form-control" id="start-time"
                                        onChange={handleInputChange}
                                        name="sellingStartingTime"
                                        value={ticketValues.sellingStartingTime}
                                    />

                                </HorizontalFlex>
                                <HorizontalFlex width="100%" id="end-date-time-flex">
                                    <input type="date" className="form-control" id="end-date"
                                        onChange={handleInputChange}
                                        name="sellingEndingDate"
                                        value={ticketValues.sellingEndingDate} />
                                    <input type="time" className="form-control" id="end-time"
                                        onChange={handleInputChange}
                                        name="sellingEndingTime"
                                        value={ticketValues.sellingEndingTime}
                                    />


                                </HorizontalFlex>
                            </Panel>
                            <div className={styles["form-footer"]}>
                                <button type="button" className={`btn btn-primary ${styles["button"]} ${styles["btn-primary"]}`} id="form-save-ticket-btn" onClick={handleSave}>{isNewTicket ? "Add Ticket" : "Save Ticket"}</button>
                                <button type="button" className={`btn btn-secondary ${styles["button"]} ${styles["btn-secondary"]}`} data-bs-dismiss="offcanvas" aria-label="Close" id="form-cancel-btn">Cancel</button>
                            </div>
                        </div>
                    </form>
                </div >
            </div >
        </>
    )
}

export default TicketSidebar;