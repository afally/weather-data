import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Articles from "../../components/Articles/Articles";
import { rest } from "msw";
import { setupServer } from "msw/node";

// Mocked API response
const mockArticles = [
  {
    title: "Article 1",
    author: "Author 1",
    description: "Description 1",
    imageUrl: "url1",
    source: {
      Id: "source1",
      name: "News Source 1",
    },
    publishedAt: "2023-07-26",
    url: "url1",
  },
  {
    title: "Article 2",
    author: "Author 2",
    description: "Description 2",
    imageUrl: "url2",
    source: {
      Id: "source2",
      name: "News Source 2",
    },
    publishedAt: "2023-07-25",
    url: "url2",
  },
];

//function for waitForLoadingToComplete
const waitForLoadingToComplete = async () => {
  await waitFor(() => {
    const loadingElement = screen.getByText("Loading...");
    expect(loadingElement).toBeInTheDocument();
  });

  await waitFor(() => {
    const loadingElement = screen.queryByText("Loading...");
    expect(loadingElement).not.toBeInTheDocument();
  });
};

const server = setupServer(
  rest.get("http://localhost:3001", (req, res, ctx) => {
    // Access query parameters using "req.url.searchParams"
    const apiKey = req.url.searchParams.get("apiKey");

    if (apiKey === process.env.VALID_API_KEY) {
      return res(ctx.json({ data: mockArticles }));
    } else {
      // Handle invalid apiKey case
      return res(ctx.status(401), ctx.json({ message: "Unauthorized" }));
    }
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Articles Component", () => {
  test("renders articles when it is loading", async () => {
    render(<Articles />);

    await waitFor(() => {
      const loadingElement = screen.getByText("Loading...");
      expect(loadingElement).toBeInTheDocument();
    });
    const articleElement = screen.queryByText(/Article \d/);
    expect(articleElement).not.toBeInTheDocument();
  });

  test("renders articles when data is available", async () => {
    render(<Articles />);
    await waitForLoadingToComplete();

    await waitFor(() => {
      expect(screen.getByText(/Article 1/i)).toBeInTheDocument();
    });
    expect(screen.getByText(/Article 2/i)).toBeInTheDocument();
  });
  test("renders error message when data fetch fails", async () => {
    server.use(
      rest.get("http://localhost:3001", (req, res, ctx) => {
        // Return a 401 status to simulate a server error for this specific test
        return res(ctx.status(401), ctx.json({ message: "Unauthorized" }));
      })
    );

    render(<Articles />);

    //  wait for the error message to appear
    await waitFor(() => {
      expect(screen.getByText("Failed to fetch articles.")).toBeInTheDocument();
    });
  });

  test("clears the search form when 'Clear Filter' button is clicked", async () => {
    render(<Articles />);
    await waitForLoadingToComplete();

    const startDateInput = screen.getByLabelText("Start date");
    fireEvent.change(startDateInput, { target: { value: "2023-07-25" } });

    // Set the end date
    const endDateInput = screen.getByLabelText("End date");
    fireEvent.change(endDateInput, { target: { value: "2023-07-26" } });

    // Click the 'Clear Filter' button
    const clearButton = screen.getByText(/CLEAR FILTER/i);
    fireEvent.click(clearButton);

    // Expect the inputs to be cleared
    expect(startDateInput).toHaveValue("");
    expect(endDateInput).toHaveValue("");
  });
  test("filters articles by start date", async () => {
    render(<Articles />);
    await waitForLoadingToComplete();

    const startDateInput = screen.getByLabelText(/Start date/i);
    fireEvent.change(startDateInput, { target: { value: "2023-07-25" } });

    const searchButton = screen.getByText("Search");
    fireEvent.click(searchButton);

    // Articles filtered based on the start date should be displayed
    expect(screen.getByText(/Article 1/i)).toBeInTheDocument(); // Used a regular expression with "i" flag for case-insensitive matching
    expect(screen.getByText(/Article 2/i)).toBeInTheDocument();
  });

  test("filters articles by end date", async () => {
    render(<Articles />);
    await waitForLoadingToComplete();

    const endDateInput = screen.getByLabelText(/End date/i);
    fireEvent.change(endDateInput, { target: { value: "07/26/2023" } });

    const searchButton = screen.getByText("Search");
    fireEvent.click(searchButton);

    expect(screen.queryByText("Article 1")).not.toBeInTheDocument();
    expect(screen.getByText(/Article 2/i)).toBeInTheDocument(); //
  });

  test("orders articles by date in descending order", async () => {
    render(<Articles />);
    await waitForLoadingToComplete();

    const orderBySelect = screen.getByLabelText("Order By");
    fireEvent.mouseDown(orderBySelect);
    const optionDateDescending = screen.getByText("Date (Descending)");
    fireEvent.click(optionDateDescending);

    const searchButton = screen.getByText("Search");
    fireEvent.click(searchButton);

    // Articles should be displayed in descending order of date
    const articles = screen.getAllByText(/Article \d/);
    expect(articles[0]).toHaveTextContent("Article 1");
    expect(articles[1]).toHaveTextContent("Article 2");
  });
  test("orders articles by date in ascending order", async () => {
    render(<Articles />);
    await waitForLoadingToComplete();

    // Wait for the articles to be rendered
    await waitFor(() => {
      expect(screen.getByText(/Article 1/i)).toBeInTheDocument();
    });
    expect(screen.getByText(/Article 2/i)).toBeInTheDocument();

    const article1Element = screen.getByText(/Article 1/i);
    const article2Element = screen.getByText(/Article 2/i);

    expect(
      article1Element.compareDocumentPosition(article2Element) &
        Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeGreaterThan(0); // Expecting article1Element to appear before article2Element
  });
});
