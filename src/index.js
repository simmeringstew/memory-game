import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const animals = [
    {
        clicked: false,
        src: "./images/cheetah.jpeg",
        id: 1
    },
    {
        clicked: false,
        src: "./images/crocodile.jpeg",
        id: 2
    },
    {
        clicked: false,
        src: "./images/elephant.jpeg",
        id: 3
    },
    {
        clicked: false,
        src: "./images/giraffe.jpeg",
        id: 4
    },
    {
        clicked: false,
        src: "./images/gorilla.jpeg",
        id: 5
    },
    {
        clicked: false,
        src: "./images/hippopotamus.jpeg",
        id: 6
    },
    {
        clicked: false,
        src: "./images/hyena.jpeg",
        id: 7
    },
    {
        clicked: false,
        src: "./images/lion.jpeg",
        id: 8
    },
    {
        clicked: false,
        src: "./images/ostrich.jpeg",
        id: 9
    },
    {
        clicked: false,
        src: "./images/rhino.jpeg",
        id: 10
    },
    {
        clicked: false,
        src: "./images/wildebeest.jpeg",
        id: 11
    },
    {
        clicked: false,
        src: "./images/zebra.jpeg",
        id: 12
    }
];

ReactDOM.createRoot(document.getElementById("root")).render(<App animalTemplate={animals} />);
