const prettyMdPdf = require("pretty-markdown-pdf")

prettyMdPdf.convertMd({ markdownFilePath: "./notes/lectures.md", outputFilePath: "./dist/javascript-notes.pdf" });
