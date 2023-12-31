/*

Descrizione:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.

Bonus: 1- al click su una thumb, visualizzare in grande l'immagine corrispondente 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
Consigli del giorno:
regola d'oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell'esercizio svolto qualche giorno fa: è già tutto pronto!
il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe

*/

const { createApp } = Vue

createApp({
    data() {
        return {

            activeImage: 0,
            activePlay: true,

            slides: [
                {
                    image: 'img/01.webp',
                    picTitle: "Marvel's Spiderman Miles Morale",
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                },
                {
                    image: 'img/02.webp',
                    picTitle: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                },
                {
                    image: 'img/03.webp',
                    picTitle: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                },
                {
                    image: 'img/04.webp',
                    picTitle: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                },
                {
                    image: 'img/05.webp',
                    picTitle: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],



        }
    },
    methods: {
        next() {

            this.activeImage++
            if (this.activeImage > this.slides.length - 1) {
                this.activeImage = 0
            }
        },
        prev() {

            this.activeImage--
            if (this.activeImage < 0) {
                this.activeImage = this.slides.length - 1
            };
        },
        play() {
            this.carouselPlay = setInterval(this.next, 3000);
            this.activePlay = false;
        },
        pause() {
            clearInterval(this.carouselPlay);
        },
        activeOnClick(index) {
            this.activeImage = index;
        }


    },
    beforeMount() {
        this.play()
    }
}).mount('#app')
