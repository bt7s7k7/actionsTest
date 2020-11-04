const { project } = require("ucpem")
project.script("hello", async ([what]) => console.log("Hello " + what), { desc: "Says hello", argc: 1 })
