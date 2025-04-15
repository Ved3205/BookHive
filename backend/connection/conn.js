const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://<id>:<password>@cluster0.qvn7q.mongodb.net/BookHive?retryWrites=true&w=majority&appName=Cluster0").then((res) => console.log("Connected"));
