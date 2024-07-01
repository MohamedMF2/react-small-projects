import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Accordion } from "./Accordion";

jest.mock("./data", () => [
  {
    id: "1",
    question: "What are accordion components?",
    answer:
      "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
  },
  {
    id: "2",
    question: "What are they used for?",
    answer:
      "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
  },
  {
    id: "3",
    question: "Accordion as a musical instrument",
    answer:
      "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
  },
  {
    id: "4",
    question: "Can I create an accordion component with a different framework?",
    answer:
      "Yes of course, it is very possible to create an accordion component with another framework.",
  },
]);

describe("Accordion", () => {
  test("renders Accordion component", () => {
    render(<Accordion />);
    expect(
      screen.getByText("What are accordion components?")
    ).toBeInTheDocument();
    expect(screen.getByText("What are they used for?")).toBeInTheDocument();
    expect(
      screen.getByText("Accordion as a musical instrument")
    ).toBeInTheDocument();
  });

  test("toggles content when title is clicked", () => {
    render(<Accordion />);
    const question1 = screen.getByText("What are accordion components?");
    fireEvent.click(question1);
    expect(
      screen.getByText(
        "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action."
      )
    ).toBeInTheDocument();
    fireEvent.click(question1);
    expect(
      screen.queryByText(
        "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action."
      )
    ).not.toBeInTheDocument();
  });

  test("allows multiple selection when enabled", () => {
    render(<Accordion />);
    const enableMultiSelectionButton = screen.getByText(
      "Enable Multi Selection"
    );
    fireEvent.click(enableMultiSelectionButton);

    const question1 = screen.getByText("What are accordion components?");
    const question2 = screen.getByText("What are they used for?");

    fireEvent.click(question1);
    fireEvent.click(question2);

    expect(
      screen.getByText(
        "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action."
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options."
      )
    ).toBeInTheDocument();
  });

  test("single selection mode works correctly", () => {
    render(<Accordion />);
    const question1 = screen.getByText("What are accordion components?");
    const question2 = screen.getByText("What are they used for?");

    fireEvent.click(question1);
    expect(
      screen.getByText(
        "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action."
      )
    ).toBeInTheDocument();
    fireEvent.click(question2);
    expect(
      screen.getByText(
        "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options."
      )
    ).toBeInTheDocument();
    expect(
      screen.queryByText(
        "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action."
      )
    ).not.toBeInTheDocument();
  });
});
