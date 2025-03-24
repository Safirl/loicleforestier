const projects = [
    {
        id: 1,
        title: 'Project 1',
        description: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. ',
        image: '/images/project1.png',
        category: 'dev',
        link: 'https://www.google.com',
        secondaryLink: 'https://www.google.com',
        secondaryLinkName: "Secondary Link"
    },
    {
        id: 2,
        title: 'Project 2',
        description: 'This is project 2 description',
        image: '/images/project2.png',
        category: 'movie',
        link: 'https://www.google.com',
        secondaryLink: 'https://www.google.com',
        secondaryLinkName: "Secondary Link"
    },
    {
        id: 3,
        title: 'Project 2',
        description: 'This is project 2 description',
        image: '/images/project2.png',
        category: 'movie',
        link: 'https://www.google.com',
        secondaryLink: 'https://www.google.com',
        secondaryLinkName: "Secondary Link"
    },
    {
        id: 4,
        title: 'Bild',
        description: 'Bild est une application pour aider les personnes qui interviennent auprès des personnes ayant un TSA (trouble du spectre autistique). Elle a été créée dans un workshop inter-promotions, à la suite d\'une demande de l\'association ptit dome, basée à Bordeaux.',
        image: "",
        category: 'dev',
        link: 'https://bild.ptitdom.fr/',
        secondaryLink: 'https://github.com/EmmaGuillaume/ptitdom',
        secondaryLinkName: "Github"
      },
      {
        id: 5,
        title: 'Skulleton',
        category: 'dev',
        description: 'Skulleton est un jeu réalisé sur Unity2D. Le personnage est un squelette touché par une malédiction qui l’empêche de quitter notre monde. Persuadé d’être encore en vie, il cherche à rejoindre sa famille en quittant le cimetière, mais celui-ci semble être sans fin, et ne pas vouloir se séparer de lui…',
        image: "",
        link: 'https://safirl.itch.io/skulleton',
        secondaryLink: 'https://github.com/Safirl/Skullette',
        secondaryLinkName: "Github"
      },
      {
        id: 6,
        category: 'dev',
        title: 'Nugget',
        description: 'Nugget est un jeu vidéo créé en une semaine utilisant une base de donnée et un système d\'intelligence artificielle.',
        image: "",
        link: 'https://safirl.itch.io/nugget-game',
        secondaryLink: 'https://github.com/Safirl/ZeldaLike',
        secondaryLinkName: "Github"
      },
      {
        id: 7,
        category: 'dev',
        title: 'Light of Abyss',
        description: 'Light Of Abyss est un jeu créé lors de ma deuxième Game Jam, à l\'ENSEIRB de Pessac. J\'ai pu y apporter mes nouvelles compétences développées de mon côté, approfondir le système de particules, découvrir le système d\'UI de Unity, et coder une partie du système de spawner dans le jeu pour le rendre infini.',
        image: "",
        link: 'https://larwive.itch.io/light-of-abyss',
        secondaryLink: '',
        secondaryLinkName: ""
      },
      {
        id: 8,
        category: 'movie',
        title: 'Dans ta serre',
        description: 'Projet étudiant d\'émission culturelle, nous devions créer un épisode pilote autour du thème suivant : Les plantes. Dans ta serre est alors né, mélangeant humour, culture et écologie. Un projet très enrichissant qui m\'a apporté un œil différent sur l\'audiovisuel que celui du cinéma.',
        image: "",
        link: 'https://www.youtube.com/watch?v=OEWmOXCXh24',
        secondaryLink: '',
        secondaryLinkName: ""
      },
      {
        id: 9,
        category: 'movie',
        title: 'Ciné Haïku : Voisin',
        description: 'Deuxième participation au concours ciné-Haïku. Des plans cette fois-ci construits autour du fantôme, avec un hommage fort à "A ghost story".',
        image: "",
        link: 'https://www.youtube.com/watch?v=wfGicOPzt0k',
        secondaryLink: '',
        secondaryLinkName: ""
      },
      {
        id: 10,
        category: 'movie',
        title: 'Ciné Haïku : Promesse',
        description: 'Film court de trente secondes, en seulement trois plans, pour exprimer le thème "Promesse" à la manière des haïkus japonais. Première participation au concours pour ma part et une collaboration avec Jead pour la musique.',
        image: "/images/project2.png",
        link: 'https://www.youtube.com/watch?v=QCWs_PdgSe4',
        secondaryLink: '',
        secondaryLinkName: ""
      },
      {
        id: 5,
        title: 'Skulleton',
        category: 'dev',
        description: 'Skulleton est un jeu réalisé sur Unity2D. Le personnage est un squelette touché par une malédiction qui l’empêche de quitter notre monde. Persuadé d’être encore en vie, il cherche à rejoindre sa famille en quittant le cimetière, mais celui-ci semble être sans fin, et ne pas vouloir se séparer de lui…',
        image: "",
        link: 'https://safirl.itch.io/skulleton',
        secondaryLink: 'https://github.com/Safirl/Skullette',
        secondaryLinkName: "Github"
      },
      {
        id: 5,
        title: 'Skulleton',
        category: 'dev',
        description: 'Skulleton est un jeu réalisé sur Unity2D. Le personnage est un squelette touché par une malédiction qui l’empêche de quitter notre monde. Persuadé d’être encore en vie, il cherche à rejoindre sa famille en quittant le cimetière, mais celui-ci semble être sans fin, et ne pas vouloir se séparer de lui…',
        image: "",
        link: 'https://safirl.itch.io/skulleton',
        secondaryLink: 'https://github.com/Safirl/Skullette',
        secondaryLinkName: "Github"
      },
      {
        id: 5,
        title: 'Skulleton',
        category: 'dev',
        description: 'Skulleton est un jeu réalisé sur Unity2D. Le personnage est un squelette touché par une malédiction qui l’empêche de quitter notre monde. Persuadé d’être encore en vie, il cherche à rejoindre sa famille en quittant le cimetière, mais celui-ci semble être sans fin, et ne pas vouloir se séparer de lui…',
        image: "",
        link: 'https://safirl.itch.io/skulleton',
        secondaryLink: 'https://github.com/Safirl/Skullette',
        secondaryLinkName: "Github"
      },
      {
        id: 5,
        title: 'Skulleton',
        category: 'dev',
        description: 'Skulleton est un jeu réalisé sur Unity2D. Le personnage est un squelette touché par une malédiction qui l’empêche de quitter notre monde. Persuadé d’être encore en vie, il cherche à rejoindre sa famille en quittant le cimetière, mais celui-ci semble être sans fin, et ne pas vouloir se séparer de lui…',
        image: "",
        link: 'https://safirl.itch.io/skulleton',
        secondaryLink: 'https://github.com/Safirl/Skullette',
        secondaryLinkName: "Github"
      },
      {
        id: 5,
        title: 'Skulleton',
        category: 'dev',
        description: 'Skulleton est un jeu réalisé sur Unity2D. Le personnage est un squelette touché par une malédiction qui l’empêche de quitter notre monde. Persuadé d’être encore en vie, il cherche à rejoindre sa famille en quittant le cimetière, mais celui-ci semble être sans fin, et ne pas vouloir se séparer de lui…',
        image: "",
        link: 'https://safirl.itch.io/skulleton',
        secondaryLink: 'https://github.com/Safirl/Skullette',
        secondaryLinkName: "Github"
      },
      {
        id: 5,
        title: 'Skulleton',
        category: 'dev',
        description: 'Skulleton est un jeu réalisé sur Unity2D. Le personnage est un squelette touché par une malédiction qui l’empêche de quitter notre monde. Persuadé d’être encore en vie, il cherche à rejoindre sa famille en quittant le cimetière, mais celui-ci semble être sans fin, et ne pas vouloir se séparer de lui…',
        image: "",
        link: 'https://safirl.itch.io/skulleton',
        secondaryLink: 'https://github.com/Safirl/Skullette',
        secondaryLinkName: "Github"
      },
      {
        id: 5,
        title: 'Skulleton',
        category: 'dev',
        description: 'Skulleton est un jeu réalisé sur Unity2D. Le personnage est un squelette touché par une malédiction qui l’empêche de quitter notre monde. Persuadé d’être encore en vie, il cherche à rejoindre sa famille en quittant le cimetière, mais celui-ci semble être sans fin, et ne pas vouloir se séparer de lui…',
        image: "",
        link: 'https://safirl.itch.io/skulleton',
        secondaryLink: 'https://github.com/Safirl/Skullette',
        secondaryLinkName: "Github"
      },
      {
        id: 5,
        title: 'Skulleton',
        category: 'dev',
        description: 'Skulleton est un jeu réalisé sur Unity2D. Le personnage est un squelette touché par une malédiction qui l’empêche de quitter notre monde. Persuadé d’être encore en vie, il cherche à rejoindre sa famille en quittant le cimetière, mais celui-ci semble être sans fin, et ne pas vouloir se séparer de lui…',
        image: "",
        link: 'https://safirl.itch.io/skulleton',
        secondaryLink: 'https://github.com/Safirl/Skullette',
        secondaryLinkName: "Github"
      },
      {
        id: 5,
        title: 'Skulleton',
        category: 'dev',
        description: 'Skulleton est un jeu réalisé sur Unity2D. Le personnage est un squelette touché par une malédiction qui l’empêche de quitter notre monde. Persuadé d’être encore en vie, il cherche à rejoindre sa famille en quittant le cimetière, mais celui-ci semble être sans fin, et ne pas vouloir se séparer de lui…',
        image: "",
        link: 'https://safirl.itch.io/skulleton',
        secondaryLink: 'https://github.com/Safirl/Skullette',
        secondaryLinkName: "Github"
      },
      {
        id: 5,
        title: 'Skulleton',
        category: 'dev',
        description: 'Skulleton est un jeu réalisé sur Unity2D. Le personnage est un squelette touché par une malédiction qui l’empêche de quitter notre monde. Persuadé d’être encore en vie, il cherche à rejoindre sa famille en quittant le cimetière, mais celui-ci semble être sans fin, et ne pas vouloir se séparer de lui…',
        image: "",
        link: 'https://safirl.itch.io/skulleton',
        secondaryLink: 'https://github.com/Safirl/Skullette',
        secondaryLinkName: "Github"
      },
      {
        id: 5,
        title: 'Skulleton',
        category: 'dev',
        description: 'Skulleton est un jeu réalisé sur Unity2D. Le personnage est un squelette touché par une malédiction qui l’empêche de quitter notre monde. Persuadé d’être encore en vie, il cherche à rejoindre sa famille en quittant le cimetière, mais celui-ci semble être sans fin, et ne pas vouloir se séparer de lui…',
        image: "",
        link: 'https://safirl.itch.io/skulleton',
        secondaryLink: 'https://github.com/Safirl/Skullette',
        secondaryLinkName: "Github"
      },
      {
        id: 5,
        title: 'Skulleton',
        category: 'dev',
        description: 'Skulleton est un jeu réalisé sur Unity2D. Le personnage est un squelette touché par une malédiction qui l’empêche de quitter notre monde. Persuadé d’être encore en vie, il cherche à rejoindre sa famille en quittant le cimetière, mais celui-ci semble être sans fin, et ne pas vouloir se séparer de lui…',
        image: "",
        link: 'https://safirl.itch.io/skulleton',
        secondaryLink: 'https://github.com/Safirl/Skullette',
        secondaryLinkName: "Github"
      },
      {
        id: 5,
        title: 'Skulleton',
        category: 'dev',
        description: 'Skulleton est un jeu réalisé sur Unity2D. Le personnage est un squelette touché par une malédiction qui l’empêche de quitter notre monde. Persuadé d’être encore en vie, il cherche à rejoindre sa famille en quittant le cimetière, mais celui-ci semble être sans fin, et ne pas vouloir se séparer de lui…',
        image: "",
        link: 'https://safirl.itch.io/skulleton',
        secondaryLink: 'https://github.com/Safirl/Skullette',
        secondaryLinkName: "Github"
      },
      {
        id: 5,
        title: 'Skulleton',
        category: 'dev',
        description: 'Skulleton est un jeu réalisé sur Unity2D. Le personnage est un squelette touché par une malédiction qui l’empêche de quitter notre monde. Persuadé d’être encore en vie, il cherche à rejoindre sa famille en quittant le cimetière, mais celui-ci semble être sans fin, et ne pas vouloir se séparer de lui…',
        image: "",
        link: 'https://safirl.itch.io/skulleton',
        secondaryLink: 'https://github.com/Safirl/Skullette',
        secondaryLinkName: "Github"
      },
      {
        id: 5,
        title: 'Skulleton',
        category: 'dev',
        description: 'Skulleton est un jeu réalisé sur Unity2D. Le personnage est un squelette touché par une malédiction qui l’empêche de quitter notre monde. Persuadé d’être encore en vie, il cherche à rejoindre sa famille en quittant le cimetière, mais celui-ci semble être sans fin, et ne pas vouloir se séparer de lui…',
        image: "",
        link: 'https://safirl.itch.io/skulleton',
        secondaryLink: 'https://github.com/Safirl/Skullette',
        secondaryLinkName: "Github"
      },
      {
        id: 5,
        title: 'Skulleton',
        category: 'dev',
        description: 'Skulleton est un jeu réalisé sur Unity2D. Le personnage est un squelette touché par une malédiction qui l’empêche de quitter notre monde. Persuadé d’être encore en vie, il cherche à rejoindre sa famille en quittant le cimetière, mais celui-ci semble être sans fin, et ne pas vouloir se séparer de lui…',
        image: "",
        link: 'https://safirl.itch.io/skulleton',
        secondaryLink: 'https://github.com/Safirl/Skullette',
        secondaryLinkName: "Github"
      },
      {
        id: 5,
        title: 'Skulleton',
        category: 'dev',
        description: 'Skulleton est un jeu réalisé sur Unity2D. Le personnage est un squelette touché par une malédiction qui l’empêche de quitter notre monde. Persuadé d’être encore en vie, il cherche à rejoindre sa famille en quittant le cimetière, mais celui-ci semble être sans fin, et ne pas vouloir se séparer de lui…',
        image: "",
        link: 'https://safirl.itch.io/skulleton',
        secondaryLink: 'https://github.com/Safirl/Skullette',
        secondaryLinkName: "Github"
      },
      {
        id: 5,
        title: 'Skulleton last',
        category: 'dev',
        description: 'Skulleton est un jeu réalisé sur Unity2D. Le personnage est un squelette touché par une malédiction qui l’empêche de quitter notre monde. Persuadé d’être encore en vie, il cherche à rejoindre sa famille en quittant le cimetière, mais celui-ci semble être sans fin, et ne pas vouloir se séparer de lui…',
        image: "",
        link: 'https://safirl.itch.io/skulleton',
        secondaryLink: 'https://github.com/Safirl/Skullette',
        secondaryLinkName: "Github"
      },
]

export default projects;
