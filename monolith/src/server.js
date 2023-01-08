/*
Copyright 2019 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;


const body = document.querySelector('body');

const bg = document.createElement('div');
bg.classList.add('bg');
body.appendChild(bg);

const navbar = document.createElement('div');
navbar.classList.add('navbar');
bg.appendChild(navbar);

const logo = document.createElement('img');
logo.src = 'images/logo.png';
logo.classList.add('logo');
navbar.appendChild(logo);

const ul = document.createElement('ul');
navbar.appendChild(ul);

const home = document.createElement('li');
const homeLink = document.createElement('a');
homeLink.href = '#';
homeLink.textContent = 'Home';
home.appendChild(homeLink);
ul.appendChild(home);

const ticketBooking = document.createElement('li');
const ticketBookingLink = document.createElement('a');
ticketBookingLink.href = '#';
ticketBookingLink.textContent = 'Ticket Booking';
ticketBooking.appendChild(ticketBookingLink);
ul.appendChild(ticketBooking);

const chatbot = document.createElement('li');
const chatbotLink = document.createElement('a');
chatbotLink.href = '#';
chatbotLink.textContent = 'Chatbot';
chatbot.appendChild(chatbotLink);
ul.appendChild(chatbot);

const aboutUs = document.createElement('li');
const aboutUsLink = document.createElement('a');
aboutUsLink.href = '#';
aboutUsLink.textContent = 'About us';
aboutUs.appendChild(aboutUsLink);
ul.appendChild(aboutUs);

const para = document.createElement('div');
para.classList.add('para');
bg.appendChild(para);

const h1 = document.createElement('h1');
h1.textContent = 'Ticket Booking Chatbot';
para.appendChild(h1);

const p = document.createElement('p');
p.textContent = 'Click on the chat icon to interact with chat bot that will help you to search theatre in your location for particular film and will help you to book tickets';
para.appendChild(p);

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'style.css';
document.head.appendChild(link);

const script = document.createElement('script');
script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger-cx/bootstrap.js?v=1';
document.head.appendChild(script);

const dfMessenger = document.createElement('df-messenger');
dfMessenger.setAttribute('df-cx', true);
dfMessenger.setAttribute('chat-title', 'Movie_Ticket_Booker');
dfMessenger.setAttribute('agent-id', '438baaaf-2740-4922-a0c8-89ba4db50659');


//Start the server
app.listen(port, () => console.log(`Monolith listening on port ${port}!`));
