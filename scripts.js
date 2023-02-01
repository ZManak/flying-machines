const civilAircrafts = [
    'assets/avion-civil-1.jpg',
    'assets/avion-civil-2.jpg',
    'assets/avion-civil-3.jpg',
    'assets/avion-civil-4.jpg',
    'assets/avion-civil-5.jpg'
];

const militaryAircrafts = [
    'assets/avion-militar-1.jpg',
    'assets/avion-militar-2.jpg',
    'assets/avion-militar-3.jpg',
    'assets/avion-militar-4.jpg',
    'assets/avion-militar-5.jpg'
];

const civilHelicopters = [
    'assets/helicoptero-civil-1.jpg',
    'assets/helicoptero-civil-2.jpg',
    'assets/helicoptero-civil-3.jpg',
    'assets/helicoptero-civil-4.jpg',
    'assets/helicoptero-civil-5.jpg'
];

const militaryHelicopter = [
    'assets/helicoptero-militar-1.jpg',
    'assets/helicoptero-militar-2.jpg',
    'assets/helicoptero-militar-3.jpg',
    'assets/helicoptero-militar-4.jpg',
    'assets/helicoptero-militar-5.jpg'
];

class Gallery {
    constructor(civilImages, militaryImages) {
        this.civilImages = civilImages;
        this.militaryImages = militaryImages;
    }

    getRandomCivil() {
        let randomCivil = this.civilImages[Math.floor(Math.random() * 5)];
        return randomCivil;
    }

    getRandomMilitary() {
        let randomMilitary = this.militaryImages[Math.floor(Math.random() * 5)]
        return randomMilitary;
    }

    getAll() {
        let allImages = this.civilImages.concat(this.militaryImages);
        return allImages;
    }
}

class Painter {
    constructor() {
        this.gallery = this.createGallery();
    }

    createGallery() {
        let section = document.createElement('section');
        document.body.appendChild(section);
        return section
    }

    createImageTag(imageUrl) {
        let url = imageUrl;
        let picture = document.createElement('img');
        picture.setAttribute('src', url);
        return picture;
    }

    paintSingleImage(imageUrl) {
        let url = imageUrl;
        let gallery = this.gallery;
        let picture = this.createImageTag(url);
        gallery.appendChild(picture);
    }

    paintMultipleImages(arrayOfImages) {
        let pictures = arrayOfImages;
        pictures.forEach(pic => {
            this.paintSingleImage(pic)
        });
    }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();