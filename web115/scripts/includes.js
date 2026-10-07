```javascript
document.addEventListener("DOMContentLoaded", function () {
    var includes = document.querySelectorAll("[data-include]");

    includes.forEach(function (element) {
        var file = element.getAttribute("data-include");

        fetch(file)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error("Could not load " + file);
                }

                return response.text();
            })
            .then(function (html) {
                element.outerHTML = html;
            })
            .catch(function (error) {
                console.error(error);
            });
    });
});
```
