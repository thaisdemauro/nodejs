const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res){
    const items = [
        {
            title: "K",
    message: "Bafinho de amor"
},
  {
      title: "I",
message: "Nervosinha"
},
  { 
      title: "S",
message: "Preguicinha"
},

{ 
    title: "S",
message: "Boneca neca da vida"
},

    ];

    const subtitle = "É um bb filhote, idosa e que solta pum"
    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
    });

});

app.get("/sobre", function (req, res){
    res.render("pages/about");
});

app.listen(8080);
console.log("funcionando");
