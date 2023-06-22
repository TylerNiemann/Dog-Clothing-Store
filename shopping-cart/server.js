require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_API_KEY);
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const YOUR_DOMAIN = 'http://localhost:3000';

const generateLineItems = (array) => {
  const lineItems = array.map((item) => {
    return {
      price_data: {
        currency: 'usd',
        unit_amount: parseInt(item.price * 100),
        product_data: {
          name: item.itemName,
        },
      },
      quantity: item.qty || 1,
    };
  });

  return lineItems;
};

app.post('/create-checkout-session', async (req, res) => {
  const cart = JSON.parse(req.body.cart);

  const session = await stripe.checkout.sessions.create({
   line_items: generateLineItems(cart),
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/Shopping-cart#/components/Success`,
    cancel_url: `${YOUR_DOMAIN}/Shopping-cart#/components/ShoppingCart`,
    automatic_tax: {enabled: true},
  });
  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));