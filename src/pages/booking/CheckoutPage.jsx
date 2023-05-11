import { useEffect, useState } from "react";
import { MainCheckoutPage } from "./MainCheckoutPage";
import { TimeOutPage } from "./TimeOutPage";
import { CancelSessionPage } from "./CancelSessionPage";
import { BackToTicketsMessage } from "./BackToTicketsMessage";

export function CheckoutPage({ event, ticketsType, checkout, setCheckout, setModal }) {
  const [showTimeoutMessage, setShowTimeoutMessage] = useState(false);
  const [showCloseMessage, setShowCloseMessage] = useState(false);
  const [showBackToTicketsMessage, setShowBackToTicketsMessage] = useState(false);

  useEffect(() => {

  }, [showTimeoutMessage, showCloseMessage, showBackToTicketsMessage]);

  if (!showTimeoutMessage && !showCloseMessage && !showBackToTicketsMessage && checkout) {
    console.log("this is checkout page");
    return (
      <MainCheckoutPage
        event={event}
        ticketsType={ticketsType}
        setShowTimeoutMessage={setShowTimeoutMessage}
        setShowCloseMessage={setShowCloseMessage}
        setShowBackToTicketsMessage={setShowBackToTicketsMessage}
      />
    );
  } else if (showTimeoutMessage && checkout) {
    console.log("this is timeout page");
    return <TimeOutPage setCheckout={setCheckout} />;
  } else if (showCloseMessage && checkout) {
    console.log("this is close message");
    return <CancelSessionPage setModal={setModal} setShowCloseMessage={setShowCloseMessage} setCheckout={setCheckout} />;
  } else if (showBackToTicketsMessage && checkout) {
    console.log("this is back to tickets message");
    return <BackToTicketsMessage setCheckout={setCheckout} setShowBackToTicketsMessage={setShowBackToTicketsMessage}  />;
  }

  // Return null or fallback component if none of the conditions match
  return null;
}