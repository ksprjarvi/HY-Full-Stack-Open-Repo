sequenceDiagram
participant browser
participant server

    Note: There is a HTML form in a site, and the following happens when the submit button is pressed:

    Note: No attributes action or method, the POST request contains JSON formatted new note.
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note: No redirect. Status 201 created. Javascript handles the sending process, not HTML form normal process.
    Note: Javascript handles the page rendering with a new note.
