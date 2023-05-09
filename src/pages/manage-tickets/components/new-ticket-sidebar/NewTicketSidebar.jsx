import styles from "./NewTicketSidebar.module.css";

import Panel from "../../../../layouts/UI/Panel";
import HorizontalFlex from "../../../../layouts/UI/HorizontalFlex";
import PanelChanger from "../../../../layouts/UI/PanelChanger";
import InputField from "../../../create-event/fields/InputField";
import BasicDatePicker from "../../../create-event/fields/BasicDatePicker";
import DatalistField from "../../../create-event/fields/DatalistField";
import Dropdown from "../dropdown/Dropdown";

function NewTicketSidebar() {
    return (
        <>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Add tickets</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <form class="row g-3">
                        <div className={styles["form-body"]}>
                            <Panel
                                style={{ width: "100%" }}
                            >
                                <HorizontalFlex width="100%" id="location-panel-changers">
                                    <PanelChanger id="venue-panel-changer">Paid</PanelChanger>
                                    <PanelChanger id="online-panel-changer">Free</PanelChanger>
                                    <PanelChanger id="to-be-announced-panel-changer">Donation</PanelChanger>
                                </HorizontalFlex>
                                <InputField
                                    title="Name"
                                    required={true}
                                    maxLength={50}
                                />
                                <InputField
                                    title="Available Quantity"
                                    required={true}
                                    value={5}
                                />
                                <InputField
                                    title="Price"
                                    required={true}
                                    disable={true}
                                />
                                <Dropdown
                                    options={["Select a ticket type", "Ticket Type 1", "Ticket Type 2"]}
                                    width="100%"
                                    id="ticket-type-dropdown"
                                    disable={false}
                                />
                                <HorizontalFlex width="100%" id="start-date-time-flex">
                                    <BasicDatePicker
                                        title="Start Date *"
                                        width="50%"
                                        required={1}

                                        value={Date.now()}
                                        id="start-date"
                                        disabled={false}

                                    />

                                    <DatalistField
                                        options={[
                                            "12:00 AM",
                                            "12:30 AM",
                                            "1:00 AM",
                                            "1:30 AM",
                                            "2:00 AM",
                                            "2:30 AM",
                                            "3:00 AM",
                                            "3:30 AM"]}
                                        title="Start Time"
                                        defaultValue="10:00 PM"
                                        id="start-time"
                                        width="50%"
                                    />


                                </HorizontalFlex>
                                <HorizontalFlex width="100%" id="end-date-time-flex">
                                    <BasicDatePicker
                                        title="End Date *"
                                        width="50%"
                                        required={1}

                                        value={Date.now()}
                                        id="end-date"
                                        disabled={false}

                                    />

                                    <DatalistField
                                        options={[
                                            "12:00 AM",
                                            "12:30 AM",
                                            "1:00 AM",
                                            "1:30 AM",
                                            "2:00 AM",
                                            "2:30 AM",
                                            "3:00 AM",
                                            "3:30 AM"]} title="End Time"
                                        defaultValue="10:00 PM"
                                        id="end-time"
                                        width="50%"
                                    />


                                </HorizontalFlex>
                            </Panel>
                            <div className={styles["form-footer"]}>
                                <button type="submit" className={`btn btn-primary ${styles["button"]} ${styles["btn-primary"]}`}>Add Ticket</button>
                                <button type="button" className={`btn btn-secondary ${styles["button"]} ${styles["btn-secondary"]}`} data-bs-dismiss="offcanvas" aria-label="Close">Cancel</button>
                            </div>
                        </div>
                    </form>
                </div >
            </div >
        </>
    )
}

export default NewTicketSidebar;