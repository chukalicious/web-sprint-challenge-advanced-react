import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const component = render(<CheckoutForm />);
  /* console.log(component.debug()); */
  const header = component.getByText(/Checkout Form/i);
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  const component = render(<CheckoutForm />);
  const button = component.getByText("Checkout");
  fireEvent.click(button, "leftClick");
  const paragraph = component.getByText(
    "You have ordered some plants! Woo-hoo!"
  );
  expect(paragraph).toBeInTheDocument();
  console.log(component.debug());
});
