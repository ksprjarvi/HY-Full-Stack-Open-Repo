sequenceDiagram
participant browser
participant server

    Note: When user opens a SPA.

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    server->>browser: Sends a one HTML-document and Javascript logic for that page.
