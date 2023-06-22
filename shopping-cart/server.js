require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_API_KEY);
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const YOUR_DOMAIN = 'http://localhost:3000';

app.post('/create-checkout-session', async (req, res) => {
  const { total } = req.body;
  const unitAmount = parseInt(total * 100);

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          unit_amount: unitAmount,
          product_data:{
            name: "Total",
          },
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/Shopping-cart#/components/Success`,
    cancel_url: `${YOUR_DOMAIN}/Shopping-cart#/components/ShoppingCart`,
    automatic_tax: {enabled: true},
  });
  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));