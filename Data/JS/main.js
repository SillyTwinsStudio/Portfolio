console.log(`
⣾⣾⣾⣾⣾⣾⣾⠿⠿⢛⣋⣙⣋⣩⣭⣭⣭⣭⣍⣉⡛⠻⢿⣾⣾⣾⣾
⣿⣿⣿⠟⣋⣥⣴⣾⣾⣾⣾⡆⣾⣾⣾⣾⣾⣾⡿⠟⠛⠗⢦⡙⢿⣾⣾
⣿⡟⡡⠾⠛⠻⢿⣿⣿⣿⡿⠃⣿⡿⣿⠿⠛⠉⠠⠴⢶⡜⣦⡀⡈⢿⣾
⡿⢀⣰⡏⣼⠋⠁⢲⡌⢤⣠⣾⣷⡄⢄⠠⡶⣾⡀⠀⣸⡷⢸⡷⢹⠈⣾
⡇⢘⢿⣇⢻⣤⣠⡼⢃⣤⣾⣿⣿⣿⢌⣷⣅⡘⠻⠿⢛⣡⣿⠀⣾⢠⣾
⣷⠸⣮⣿⣷⣨⣥⣶⣾⣾⣾⣾⣾⣾⣾⣾⣾⣾⣾⣾⣾⡟⢁⡼⠃⣼⣾
⣿⡆⢻⣿⣾⣾⣾⣾⣾⣾⣾⣾⣾⣾⣾⣾⣾⣾⣾⣿⣿⢃⡞⣱⠆⣾⣾
⣿⣿⠈⣿⣾⣾⣾⣾⣾⣾⣾⣾⣾⣾⣾⣾⣾⣾⣾⣾⠁⣼⢸⡿⢸⣾⣾
⣿⣿⡇⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢿⡌⠃⣿⣾⣾
⣿⣿⣿⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢋⣿⠙⣷⢸⣷⠀⣿⣾⣾
⣿⣿⣿⡇⢻⣿⣿⣿⡿⠿⢿⣿⣿⣿⠟⠋⣡⡈⠻⣇⢹⣿⣿⢠⣿⣾⣾
⣿⣿⣿⣿⠘⣿⣿⣿⣿⣯⣽⣉⣿⣟⣛⠷⠙⢿⣷⣌⠀⢿⡇⣼⣿⣾⣾  ৹○( tengo microplasticos en los webos )
⣿⣿⣿⡿⢀⣾⣾⣾⣾⣾⣾⣾⣾⣾⣾⣾⣶⣤⡙⢿⢗⣀⣁⠈⢻⣾⣾
⣿⡿⢋⣴⣿⣎⣿⣾⣾⣾⣾⣾⣾⣾⣾⣾⣾⣾⣿⣦⡉⣯⣿⣷⠆⠙⢿
⣏⠀⠈⠧⠡⠉⠙⢿⣾⣾⣾⣾⣾⣾⣾⣾⣾⣾⣾⣾⠃⠉⢉⣁⣀⣀⣾
`);



 /*$      /$$           /$$
| $$$    /$$$          |__/
| $$$$  /$$$$  /$$$$$$  /$$ /$$$$$$$
| $$ $$/$$ $$ |____  $$| $$| $$__  $$
| $$  $$$| $$  /$$$$$$$| $$| $$  \ $$
| $$\  $ | $$ /$$__  $$| $$| $$  | $$
| $$ \/  | $$|  $$$$$$$| $$| $$  | $$
|__/     |__/ \_______/|__/|__/  |_*/

//Localization keys
const locales = {
    en: {
        //Locale
        key: 'en',
        //Page
        title: "Twin Studio",
        //Sidebar
        sidebar: {
            home: 'Home',
            about: 'Washi',
            images: 'Screenshots',
            team: 'Team',
            projects: 'Projects',
            contact: 'Contact',
            localization: 'English'
        },
        //Home
        home: {
            description: 'Double the twins, double the fun',
        },
        //About
        about: {
            title: 'Hackoon',
            features: 'Features',
            feature: [
                'Block-based visual programming',
                'Multiple worlds with different esthetics',
                'New mechanics each level',
                'Physics and logic based puzzles',
                'Native support for controller and keyboard/mouse'
            ],
            content: `
                Trash panda by day, hacker raccoon by night. While peacefully browsing cat videos, our resident raccoon fell for the oldest trick in the book: a free trash pop-up. One click later, a devastating virus hijacked his laptop, sucked all its games into a digital vortex, and fused them into a chaotic, glitched-out mega-world.
                <br><br>
                Now, it is up to you to venture inside the machine to clean up the mess. Explore three distinct, corrupted dimensions where you'll have to complete levels to fix the games. Fortunately, you are not alone in this digital landfill; Boti, an adorable little assistant robot, is by your side to help navigate the madness.
                <br><br>
                Grab, drag, and place logic blocks in a visual interface to rewire the world around you. Change the temperature to freeze water, alter the weight of objects to trigger scales, and rewrite the behavior of platforms to reach places you couldn't before. Fix the glitches, outsmart the bugs, and get your games back online!`,
            images: 'Check out some screenshots!'
        },
        //Team
        team: {
            alex: 'Programmer, UI/UX Designer, Level Designer',
            racu: 'Technical Artist, 3D Modeler & Animator'
        },
        //Projects
        projects: {
            title: 'Other Projects',
            list: {
                tochimochi: {
                    title: 'Tochimochi',
                    content: `
                        Second place in the international edition of the <a href="https://itch.io/jam/game-jam-internacional-cutn-buenos-aires" target="_blank">GameScholars gamejam</a>.
                        <br><br>
                        In Tochimochi you will help your new virtual friend, Mochi, complete the mission of seeing his granny. To do that, you will have to merge both the real and virtual world to complete puzzles using your computer and your phone.
                    `,
                    button: 'Download&nbsp<i>Tochimochi</i>'
                },
                hardcore_kitty: {
                    title: 'Hardcore Kitty',
                    content: `
                        Third place in the 6º edition of the <a href="https://itch.io/jam/6-edicin-game-jam-game-scholars" target="_blank">GameScholars gamejam</a>.
                        <br><br>
                        In Hardcore Kitty, you play as a cat working for a delivery company.
                        <br><br>
                        Your goal is to find pickup points, collect food, and deliver it to the drop-off points, performing tricks and flips on your skateboard along the way.
                    `,
                    button: 'Download&nbsp<i>Hardcore Kitty</i>'
                },
                spyw4re: {
                    title: 'Spyw4re',
                    content: `
                        Second place out of 25 in the 5º edition of the <a href="https://itch.io/jam/5-edicin-game-jam-game-scholars" target="_blank">GameScholars gamejam</a>.
                        <br><br>
                        In Spyw4re, you are a CCTV operator in an asylum. The building is falling down and a patient is still inside, so you'll need to help him get out.
                        <br><br>
                        In order to leave, you'll need to solve some puzzles and defeat some enemies, but don't think it will be that easy, someone doesn't want you to help him...
                    `,
                    button: 'Download&nbsp<i>Spyw4re</i>'
                }
            }
        },
        //Footer
        footer: {
            title: "Contact"
        },
        //Presentation
        presentation: {
            title: 'HIIII!!!',
            content: "So coming from the presentation huh?<br><br>If you like the game, let us know by leaving a comment!"
        }
    }, 
    es: {
        //Locale
        key: 'es',
        //Page
        title: "Twin Studio",
        //Sidebar
        sidebar: {
            home: 'Inicio',
            about: 'Washi',
            images: 'Capturas',
            team: 'Equipo',
            projects: 'Proyectos',
            contact: 'Contacto',
            localization: 'Español'
        },
        //Home
        home: {
            description: 'Doble de gemelos, doble de diversión',
        },
        //About
        about: {
            title: 'Hackoon',
            features: 'Características',
            feature: [
                'Programacion visual por bloques',
                'Multiples mundos con diferentes estéticas',
                'Nuevas mecánicas cada nivel',
                'Puzles basados en fisicas y lógica',
                'Soporte nativo para mando y teclado/ratón'
            ],
            content: `
                Trash panda de día, mapache hacker de noche. Mientras navegaba tranquilamente viendo vídeos de gatitos, nuestro mapache residente cayó en el truco más viejo del mundo: un pop-up de basura gratis. Un clic después, un virus devastador secuestró su portátil, absorbió todos sus juegos en un vórtice digital y los fusionó en un megamundo caótico y lleno de fallos.
                <br><br>
                Ahora, depende de ti adentrarte en la máquina para solucionar el desastre. Explora tres dimensiones distintas y corruptas donde tendrás que completar niveles para arreglar los juegos. Afortunadamente, no estás solo en este vertedero digital; Boti, un adorable robot asistente, está a tu lado para ayudarte a navegar por la locura.
                <br><br>
                Coge, arrastra y coloca bloques de lógica en una interfaz visual para reprogramar el mundo que te rodea. Cambia la temperatura para congelar el agua, altera el peso de los objetos para activar balanzas y reescribe el comportamiento de las plataformas para llegar a lugares que antes eran inalcanzables. ¡Corrige los fallos, sé más listo que los errores de código y recupera tus juegos!`,
            images: '¡Mira algunas capturas!'
        },
        //Team
        team: {
            alex: 'Programador, Diseñador de UI/UX, Diseñador de Niveles',
            racu: 'Artista Técnico, Modelador & Animador 3D'
        },
        //Projects
        projects: {
            title: 'Otros Proyectos',
            list: {
                tochimochi: {
                    title: 'Tochimochi',
                    content: `
                        Segundo puesto en la edicion international de la <a href="https://itch.io/jam/game-jam-internacional-cutn-buenos-aires" target="_blank">gamejam de GameScholars</a>.
                        <br><br>
                        En Tochimochi ayudarás a tu nuevo amigo virtual, Mochi, a completar la misión de ver a su abuela. Para ello, tendrás que combinar el mundo real con el virtual para resolver puzles usando tu ordenador y tu móvil.
                    `,
                    button: 'Descargar&nbsp<i>Tochimochi</i>'
                },
                hardcore_kitty: {
                    title: 'Hardcore Kitty',
                    content: `
                        Tercer puesto en la 6º edicion de la <a href="https://itch.io/jam/6-edicin-game-jam-game-scholars" target="_blank">gamejam de GameScholars</a>.
                        <br><br>
                        En Hardcore Kitty tomarás el rol de un gato que trabaja en una empresa de reparto.
                        <br><br>
                        Tu objetivo es encontrar puntos de recogida, coger la comida y llevarla hasta los puntos de entrega haciendo trucos y piruetas con el skate por el camino.
                    `,
                    button: 'Descargar&nbsp<i>Hardcore Kitty</i>'
                },
                spyw4re: {
                    title: 'Spyw4re',
                    content: `
                        Segundo puesto de 25 en la 5º edicion de la <a href="https://itch.io/jam/5-edicin-game-jam-game-scholars" target="_blank">gamejam de GameScholars</a>.
                        <br><br>
                        En Spyw4re, eres un operador de CCTV en un asilo. El edificio se está derrumbando y un paciente todavía está dentro, por lo que tendrás que ayudarlo a salir.
                        <br><br>
                        Para lograrlo, tendrás que resolver algunos acertijos y derrotar a algunos enemigos, pero no creas que será tan fácil, alguien no quiere que lo ayudes...
                    `,
                    button: 'Descargar&nbsp<i>Spyw4re</i>'
                }
            }
        },
        //Footer
        footer: {
            title: "Contacto"
        },
        //Presentation
        presentation: {
            title: 'HOLAAA!!!',
            content: "Conque vienes de la presentación eh?<br><br>¡Si te gusta el juego haznoslo saber dejando un comentario!"
        }
    }
}

let loc = locales.en;

//Appear animation manager
const animator = new AppearAnimation();

//Sidebar
class Sidebar {

    //Sidebar
    #sidebar = document.getElementById('sidebar');

    toggle = (toggle) => {
        //Fix toggle
        if (typeof toggle !== 'boolean') toggle = !this.#sidebar.hasAttribute('open');

        //Toggle sidebar
        if (toggle) {
            this.#sidebar.setAttribute('open', '');
            document.body.setAttribute('sidebar', '');
        } else {
            this.#sidebar.removeAttribute('open');
            document.body.removeAttribute('sidebar', '');
        }
    }

    //State
    #home = document.getElementById('sidebar-home');
    #about = document.getElementById('sidebar-about');
    #images = document.getElementById('sidebar-images');
    #team = document.getElementById('sidebar-team');
    #projects = document.getElementById('sidebar-projects');
    #footer = document.getElementById('sidebar-footer');
    #localization = document.getElementById('sidebar-localization');

    constructor() {
        new CurrentPageIndicator(['home', 'about', 'images', 'team', 'projects', 'footer']);
    }

    localize = () => {
        this.#home.innerText = loc.sidebar.home;
        this.#about.innerText = loc.sidebar.about;
        this.#images.innerText = loc.sidebar.images;
        this.#team.innerText = loc.sidebar.team;
        this.#projects.innerText = loc.sidebar.projects;
        this.#footer.innerText = loc.sidebar.contact;
        this.#localization.innerText = loc.sidebar.localization;
    }

}

const sidebar = new Sidebar();

//Navigation
function goTo(id) {
    //Scroll to element
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });

    //Close sidebar
    sidebar.toggle(false);
}



 /*$   /$$
| $$  | $$
| $$  | $$  /$$$$$$  /$$$$$$/$$$$   /$$$$$$
| $$$$$$$$ /$$__  $$| $$_  $$_  $$ /$$__  $$
| $$__  $$| $$  \ $$| $$ \ $$ \ $$| $$$$$$$$
| $$  | $$| $$  | $$| $$ | $$ | $$| $$_____/
| $$  | $$|  $$$$$$/| $$ | $$ | $$|  $$$$$$$
|__/  |__/ \______/ |__/ |__/ |__/ \______*/

class HomePage {

    //State
    #description = document.getElementById('homeDescription');

    constructor() {}

    localize = () => {
        this.#description.innerText = loc.home.description;
    }

}

const home = new HomePage();



  /*$$$$$  /$$                             /$$
 /$$__  $$| $$                            | $$
| $$  \ $$| $$$$$$$   /$$$$$$  /$$   /$$ /$$$$$$
| $$$$$$$$| $$__  $$ /$$__  $$| $$  | $$|_  $$_/
| $$__  $$| $$  \ $$| $$  \ $$| $$  | $$  | $$
| $$  | $$| $$  | $$| $$  | $$| $$  | $$  | $$ /$$
| $$  | $$| $$$$$$$/|  $$$$$$/|  $$$$$$/  |  $$$$/
|__/  |__/|_______/  \______/  \______/    \__*/

class AboutPage {

    //State
    #title = document.getElementById('aboutTitle');
    #content = document.getElementById('aboutContent');
    #features = document.getElementById('aboutFeatures');
    #images = document.getElementById('aboutImages');

    localize = () => {
        this.#title.innerText = loc.about.title;
        this.#content.innerHTML = loc.about.content;
        this.#features.innerText = loc.about.features;
        for (let i = 0; i < loc.about.feature.length; i++) {
            const element = document.getElementById(`aboutFeature${i}`);
            const feature = loc.about.feature[i];
            element.innerText = feature;
        }
        this.#images.innerText = loc.about.images;
    }

}

const about = new AboutPage();



 /*$$$$$
|_  $$_/
  | $$   /$$$$$$/$$$$   /$$$$$$   /$$$$$$   /$$$$$$   /$$$$$$$
  | $$  | $$_  $$_  $$ |____  $$ /$$__  $$ /$$__  $$ /$$_____/
  | $$  | $$ \ $$ \ $$  /$$$$$$$| $$  \ $$| $$$$$$$$|  $$$$$$
  | $$  | $$ | $$ | $$ /$$__  $$| $$  | $$| $$_____/ \____  $$
 /$$$$$$| $$ | $$ | $$|  $$$$$$$|  $$$$$$$|  $$$$$$$ /$$$$$$$/
|______/|__/ |__/ |__/ \_______/ \____  $$ \_______/|_______/
                                 /$$  \ $$
                                |  $$$$$$/
                                 \_____*/

class ImagesPage {

    //Components
    #background = document.getElementById('images');

    //Items
    #itemsParent = document.getElementById('imagesItems');
    #items = []
    #images = [
        '0.webp',
        '1.webp',
        '2.webp',
        '3.webp',
        '4.webp',
    ]
    #current = 0


    //State
    constructor() {
        //Add arrow events
        document.getElementById('imagesArrowPrevious').onclick = this.previous;
        document.getElementById('imagesArrowNext').onclick = this.next;

        //Create image previews
        for (let i = 0; i < this.#images.length; i++) {
            const item = document.createElement('img');
            item.classList.add('imagesItem');
            item.src = `Data/Images/Carousel/${this.#images[i]}`;
            item.onclick = () => this.select(i);
            this.#itemsParent.appendChild(item);
            this.#items.push(item);
        }

        //Select first
        this.select(0);
    }

    localize = () => {}

    //Navigation
    previous = () => {
        this.select(this.#current > 0 ? this.#current - 1 : this.#images.length - 1);
    }

    next = () => {
        this.select(this.#current < this.#images.length - 1 ? this.#current + 1 : 0);
    }

    select = (index) => {
        this.#items[this.#current].removeAttribute('selected');
        this.#current = index;
        this.#items[this.#current].setAttribute('selected', '');
        this.#background.style.setProperty('--image', `url('../Images/Carousel/${this.#images[index]}')`);
    }

}

const images = new ImagesPage();



 /*$$$$$$$
|__  $$__/
   | $$  /$$$$$$   /$$$$$$  /$$$$$$/$$$$
   | $$ /$$__  $$ |____  $$| $$_  $$_  $$
   | $$| $$$$$$$$  /$$$$$$$| $$ \ $$ \ $$
   | $$| $$_____/ /$$__  $$| $$ | $$ | $$
   | $$|  $$$$$$$|  $$$$$$$| $$ | $$ | $$
   |__/ \_______/ \_______/|__/ |__/ |_*/

const Buddies = {
    Alex: {
        id: 'alex',
        image: 'Data/Images/Team/alex.webp',
        name: 'Alex',
        button: {
            name: 'Portfolio',
            url: 'https://botpa.vercel.app/'
        }
    },
    Raul: {
        id: 'racu',
        image: 'Data/Images/Team/raul.webp',
        name: 'Raúl',
        button: {
            name: 'Itch.io',
            url: 'https://racurrandom.itch.io/'
        }
    }
}

class TeamPage {

    //Buddies
    #buddies = [
        Buddies.Alex,
        Buddies.Raul
    ];

    eachbuddy = (fun) => {
        for (let i = 0; i < this.#buddies.length; i++) fun(this.#buddies[i], i);
    }

    //State
    #title = document.getElementById('teamTitle');

    constructor() {
        //Shuffle buddies
        Util.shuffleArray(this.#buddies, this.#buddies.length);

        //Apply info to buddies
        this.eachbuddy((buddy, index) => {
            //Get elements
            const img = document.getElementById(`teamBuddy${index}-img`);
            const name = document.getElementById(`teamBuddy${index}-name`);
            const button = document.getElementById(`teamBuddy${index}-button`);

            //Update buddy
            img.src = buddy.image;
            name.innerText = buddy.name;
            if (buddy.button) {
                button.style.display = 'flex';
                button.innerText = buddy.button.name;
                button.href = buddy.button.url;
            } else {
                button.style.display = 'none';
            }
        });
    }

    localize = () => {
        this.#title.innerText = loc.sidebar.team;
        this.eachbuddy((buddy, index) => {
            const desc = document.getElementById(`teamBuddy${index}-desc`);
            desc.innerText = loc.team[buddy.id];
        });
    }

}

const team = new TeamPage();



 /*$$$$$$                                               /$$
| $$__  $$                                             | $$
| $$  \ $$ /$$$$$$   /$$$$$$  /$$  /$$$$$$   /$$$$$$$ /$$$$$$   /$$$$$$$
| $$$$$$$//$$__  $$ /$$__  $$|__/ /$$__  $$ /$$_____/|_  $$_/  /$$_____/
| $$____/| $$  \__/| $$  \ $$ /$$| $$$$$$$$| $$        | $$   |  $$$$$$
| $$     | $$      | $$  | $$| $$| $$_____/| $$        | $$ /$$\____  $$
| $$     | $$      |  $$$$$$/| $$|  $$$$$$$|  $$$$$$$  |  $$$$//$$$$$$$/
|__/     |__/       \______/ | $$ \_______/ \_______/   \___/ |_______/
                        /$$  | $$
                       |  $$$$$$/
                        \_____*/

const Projects = {
    spyw4re: {
        id: 'spyw4re',
        image: 'spyw4re.webp',
        button: 'https://botpa.itch.io/spyw4re',
        buddies: [
            Buddies.Alex,
            Buddies.Raul
        ]
    },
    tochimochi: {
        id: 'tochimochi',
        image: 'tochimochi.webp',
        button: 'https://botpa.itch.io/tochimochi',
        buddies: [
            Buddies.Alex,
            Buddies.Raul
        ]
    },
    hardcore_kitty: {
        id: 'hardcore_kitty',
        image: 'hardcore_kitty.webp',
        button: 'https://botpa.itch.io/hardcore-kitty',
        buddies: [
            Buddies.Alex,
            Buddies.Raul
        ]
    }
}

class ProjectsPage {

    //Projects
    #projects = [
        Projects.spyw4re,
        Projects.tochimochi,
        Projects.hardcore_kitty
    ];

    //State
    #title = document.getElementById('projectsTitle');

    constructor() {}

    localize = () => {
        this.#title.innerText = loc.projects.title;
        for (let i = 0; i < this.#projects.length; i++) {
            //Get elements
            const image = document.getElementById(`project${i}-image`);
            const buddies = document.getElementById(`project${i}-buddies`);
            const title = document.getElementById(`project${i}-title`);
            const content = document.getElementById(`project${i}-content`);
            const button = document.getElementById(`project${i}-button`);

            //Update project info
            const project = this.#projects[i];
            image.src = `Data/Images/Projects/${project.image}`;
            buddies.innerHTML = '';
            for (const buddy of project.buddies) {
                const a = document.createElement('a');
                a.classList.add('projectBuddy');
                a.target = '_blank';
                a.href = buddy.button.url;
                a.title = buddy.name;
                const img = document.createElement('img');
                img.src = buddy.image;
                a.appendChild(img);
                buddies.appendChild(a);
            }
            title.innerText = loc.projects.list[project.id].title;
            content.innerHTML = loc.projects.list[project.id].content;
            button.innerHTML = loc.projects.list[project.id].button;
            button.href = project.button;
        }
    }

}

const projects = new ProjectsPage();



 /*$$$$$$$                    /$$
| $$_____/                   | $$
| $$     /$$$$$$   /$$$$$$  /$$$$$$    /$$$$$$   /$$$$$$
| $$$$$ /$$__  $$ /$$__  $$|_  $$_/   /$$__  $$ /$$__  $$
| $$__/| $$  \ $$| $$  \ $$  | $$    | $$$$$$$$| $$  \__/
| $$   | $$  | $$| $$  | $$  | $$ /$$| $$_____/| $$
| $$   |  $$$$$$/|  $$$$$$/  |  $$$$/|  $$$$$$$| $$
|__/    \______/  \______/    \___/   \_______/|_*/

class Footer {

    //State
    #title = document.getElementById('footerTitle');

    constructor() {}

    localize = () => {
        this.#title.innerText = loc.footer.title;
    }

}

const footer = new Footer();



 /*$                                     /$$ /$$                       /$$     /$$
| $$                                    | $$|__/                      | $$    |__/
| $$        /$$$$$$   /$$$$$$$  /$$$$$$ | $$ /$$ /$$$$$$$$  /$$$$$$  /$$$$$$   /$$  /$$$$$$  /$$$$$$$
| $$       /$$__  $$ /$$_____/ |____  $$| $$| $$|____ /$$/ |____  $$|_  $$_/  | $$ /$$__  $$| $$__  $$
| $$      | $$  \ $$| $$        /$$$$$$$| $$| $$   /$$$$/   /$$$$$$$  | $$    | $$| $$  \ $$| $$  \ $$
| $$      | $$  | $$| $$       /$$__  $$| $$| $$  /$$__/   /$$__  $$  | $$ /$$| $$| $$  | $$| $$  | $$
| $$$$$$$$|  $$$$$$/|  $$$$$$$|  $$$$$$$| $$| $$ /$$$$$$$$|  $$$$$$$  |  $$$$/| $$|  $$$$$$/| $$  | $$
|________/ \______/  \_______/ \_______/|__/|__/|________/ \_______/   \___/  |__/ \______/ |__/  |_*/

//Recover saved locale & load it
switch (DB.get('locale', 'none', DB.STRING)) {
    //Nothing saved
    case 'none':
        //Check device language
        const deviceLanguage = navigator.language;

        //Device is not in spanish
        if (deviceLanguage.startsWith('es')) loc = locales.es;

        //Save locale
        DB.set('locale', loc.key);
        break;

    //English saved
    case 'en':
        loc = locales.en;
        break;

    //Spanish saved
    case 'es':
        loc = locales.es;
        break;
}

//Localization functions
function swapLocale() {
    //Get new locale key
    const newKey = loc.key == 'es' ? 'en' : 'es';

    //Load new locale
    DB.set('locale', newKey);
    loc = locales[newKey];

    //Hide sidebar & localize page
    sidebar.toggle(false);
    localize();
}

function localize() {
    //Sidebar
    sidebar.localize();

    //Pages
    home.localize();
    about.localize();
    images.localize();
    projects.localize();
    team.localize();
    footer.localize();
}

localize()