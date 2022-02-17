function loadClient() {
    gapi.client.setApiKey("AIzaSyCYXVUXYdjLi5O-bJLmxgrpzQtiBv_T_ic");
    return gapi.client
        .load("https://www.googleapis.com/discovery/v1/apis/webfonts/v1/rest")
        .then(
            function () {
                console.log("GAPI client loaded for API");
            },
            function (err) {
                console.error("Error loading GAPI client for API", err);
            }
        );
}
// Make sure the client is loaded before calling this method.
function execute() {
    return gapi.client.webfonts.webfonts.list({}).then(
        function (response) {
            let ranFontIndex = Math.floor(
                Math.random() * response.result.items.length
            );
            console.log(ranFontIndex);
            console.log("Response", response.result.items[ranFontIndex]);
            let fontName = response.result.items[ranFontIndex].family;

            WebFont.load({
                google: {
                    families: [fontName],
                },
            });

            $("#setwords").css("font-family", fontName);

            console.log("Font name:", fontName);
            let fontCategory = response.result.items[ranFontIndex].category;
            console.log("Font Category:", fontCategory);
        },
        function (err) {
            console.error("Execute error", err);
        }
    );
}
gapi.load("client");