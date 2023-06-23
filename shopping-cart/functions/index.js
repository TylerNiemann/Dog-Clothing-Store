require('dotenv').config();
const functions = require("firebase-functions")
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const stripe = require('stripe')(functions.config().stripe.api_key);
const cors = require('cors');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const YOUR_DOMAIN = 'https://web-store-6ff8b.web.app/';

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
    try {
        cart = JSON.parse(req.body.cart);
    }
    catch (error) {
        console.log('Error parsing JSON:', error, cart);
    }

  const session = await stripe.checkout.sessions.create({
   line_items: generateLineItems(cart),
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/#/components/Success`,
    cancel_url: `${YOUR_DOMAIN}/#/components/ShoppingCart`,
    automatic_tax: {enabled: true},
  });
  res.redirect(303, session.url);
});

exports.app = functions.https.onRequest(app);
