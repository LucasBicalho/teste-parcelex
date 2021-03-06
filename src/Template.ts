class Template {
  getHTML(body = "", styles = "", scripts = "") {
    const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Web site created using create-react-app"
          />
          <title>Parcelex</title>
          <link rel="preconnect" href="https://fonts.gstatic.com">
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
          <style>${styles}</style>
        </head>
        <body>
          <div id="root">
            ${body}
          </div>
          ${scripts}
          <script src="bundle_client.js"></script>
        </body>
      </html>
    `;
    return html;
  }
}

export default new Template();
