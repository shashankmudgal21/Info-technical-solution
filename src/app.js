const express = require("express");
const app = express();
const routes = require("./routes/main");
const hbs = require('hbs');
const mongoose = require('mongoose');
const Detail = require('./models/details');
const Slider = require('./models/slider');
const Service = require("./models/service");
const bodyParser = require("body-parser")
const Contact = require("./models/contact");
//static file
app.use(bodyParser.urlencoded({
  extended:true
  }));
app.use('/static',express.static("public"));
app.use("", routes);


app.set('view-engine','hbs');
app.set("views","views");


hbs.registerPartials('views/partials');


// db connenction
mongoose.connect("mongodb://localhost/website_tut",()=>{
  console.log("database connected");
  

  // Service.create([
  //   {
  //     icon:'fa-thin fa-star',
  //     title:'Provide best course',
  //     description:'we provide best course that helps student to placed',
  //     linkText:'Check',
  //     link:'https://www.udemy.com/'
  //   },
  //   {
  //     icon:'fa-thin fa-pen-nib',
  //     title:'Project preparation',
  //     description:'we provide best project that helps student to placed',
  //     linkText:'Check',
  //     link:'https://www.udemy.com/'
  //   },
  //   {
  //     icon:'fa-thin fa-face-smile',
  //     title:'Dsa preparation',
  //     description:'we provide best Dsa course that helps student to placed',
  //     linkText:'Check',
  //     link:'https://www.udemy.com/'
  //   }
  // ]);
      //   Slider.create([
      //     {
      //       title:"Learn java in very easy manner",
      //       subTitle:"java is one of the most popular programming language",
      //       imageUrl:"/static/images/s1.jpg"
      //    },
      //     {
      //       title:"Learn django which is the framework of python",
      //       subTitle:"django is very popular in development",
      //       imageUrl:"/static/images/s2.jpg"
      //    },
      //     {
      //       title:"Learn node.js",
      //       subTitle:"Node.js is used at backend",
      //       imageUrl:"/static/images/s3.jpg"
      //    }
      // ]);
      // Detail.create({
      //   brandName:"Info technical solution",
      //   brandIconUrl:"data:image/png;base64,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" ,
      //   links:[
      //     {
      //       label:"Home",
      //       url:"/"
      //     },
      //     {
      //       label:"Services",
      //       url:"/services"
      //     },
      //     {
      //       label:"Gallery",
      //       url:"/gallery"
      //     },
      //     {
      //       label:"About",
      //       url:"/about"
      //     },
      //     {
      //       label:"Contact-us",
      //       url:"/contact"
      //     }
      //   ]
      // })
})


app.listen(process.env.PORT | 3000, () => {
  console.log("server is started");
});
