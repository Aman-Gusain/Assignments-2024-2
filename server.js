const express = require('express');
const cors = require('cors');
const data=[
  {
      "id": 100,
      "title": "Kingsglaive",
      "subtitle": "Final Fantasy XV",
      "description": "King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",
      "year": 2016,
      "imageUrl": "../images/Kingsglaive_Final_Fantasy_XV.jpg",
      "rating": 4.5
  },
  {
      "id": 200,
      "title": "Final Fantasy",
      "subtitle": "Spirits Within",
      "description": "A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",
      "year": 2001,
      "imageUrl": "../images/Final_Fantasy_Spirits_Within.jpg",
      "rating": 4.5
  },
  {
      "id": 300,
      "title": "Ghost In The Shell",
      "subtitle": "Ghost In The Shell",
      "description": "A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",
      "year": 2008,
      "imageUrl": "../images/Ghost_In_The_Shell_2_0.jpg",
      "rating": 5
  },
  {
      "id": 400,
      "title": "Appleseed Alpha",
      "subtitle": "Appleseed Alpha",
      "description": "A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",
      "year": 2014,
      "imageUrl": "../images/Appleseed_Alpha.jpg",
      "rating": 3.8
  },
  {
      "id": 500,
      "title": "Resident Evil",
      "subtitle": "Vendetta",
      "description": "Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",
      "year": 2014,
      "imageUrl": "../images/Resident_Evil_Vendetta.jpg",
      "rating": 4.2
  }
]
const app = express();
app.use(cors())

app.get('/', (req, res) => {
    res.json({
        data: data
    });
});

app.post('/movies', (request, response) => {
  const name = request.body.name
  // Check for error condition
  if(name == null){
    // Error handling logic: log the error
    console.log("input error")

    // Error handling logic: return error response
    response
      .status(400)
      .json({ message: "Mandatory field: name is missing. " })
  }else{
    // continue with normal processing             
    const productCreationResponse = { result: "success"}

    // return success response
    response.json(productCreationResponse)
  }
})

app.listen(8000, () => {
    console.log('server is listening on port 2020');
});
