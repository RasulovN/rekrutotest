const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config()

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  const name = req.query.name || 'Welcome';
  const message = req.query.message || '';

  const html = `
    <html>
        <style>
        .ms-container{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .form-control{
            display: grid;
        }
        .chat{
          text-align: center;
        }
    </style>
      <body>

        <div class="chat">
        <h1>Hello ${name}!</h1>
        <p>${message}</p>
        </div>

        <br />
        <br />

        <h5>addition</h5>
        <div class="ms-container">
        <form action="https://rekruto.onrender.com/?" method="get">
           <div class="form-control">
            <label for="name">Name</label>
            <input type="text" name="name" id="name"  placeholder="name...">
           </div> <br />
           <div class="form-control">
            <label for="message">Message</label>
            <textarea rows="5" cols="20" name="message" id="message" placeholder="Давай дружить!"></textarea>
        </div> <br />
           <div class="form-control">
               <button type="submit">Send</button>
           </div>
        </form>
      </div>
      </body>
    </html>
  `;

  res.send(html);
});

try {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
  
} catch (error) {
  console.log(error);
}
