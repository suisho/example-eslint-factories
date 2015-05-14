import App from "./components/App.jsx"
import React from "react";
import router from "./router.jsx";
import insertCss from "insert-css"

console.info("Start")
var container = document.body;
router(container)

insertCss(require("normalize.css"))
insertCss(require("./style/main.styl"))
