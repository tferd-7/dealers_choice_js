const path = require('path');

const express = require('express');

const app = express();

app.use(require('morgan')('dev'));

app.use('/public', express.static(path.join(__dirname, 'public')));

function titleize (str) {
	str = str.toLowerCase().split(' ');
	for (var i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	return str.join(' ');
};

const stories = {
    "monster_mash": `A Vertical Diet signature offering, the MONSTER MASH is what you need to become a MASS MONSTER.  \n
    A delicious and easy to digest mixture of red meat and rice blended together with a boiled chicken bone broth, this digests easy, ensuring u can always EAT MORE. \n  
    A side of sweet potatoes provides additional potassium, fiber and carbs to fuel your training.  This treat is enjoyed by fellow giants Hafthor Bjornsson and Brian Shaw.`,
    "octuple_bypass_burger": `If you're serious about BEING BIGGER THAN OCEAN and HOTTER THAN THE SUN, you'll fork over $21.28 for the Octuple Bypass Burger at the Heart Attack Grill. \n
    The burger weighs in at 19,900 calories. The Octuple Bypass Burger has eight patties, which is 4 pounds of meat, 40 pieces of bacon, some chili and, of course, cheese. \n
    It's about a foot and a half tall. It has enough calories in it to last a normal human being about 10 days. This is only for the most DEDICATED.`,
    "mutant_mass": `Designed specifically for the strongest bodybuilders and weightlifters that walk the earth, MUTANT MASS has been building muscle in more than 100 countries! \n
    Rich Piana blessed us with the most powerful gainer commercially available. \n 
    Each serving feeds your muscles with a massive 1,100 calories, 56 grams of pure protein, 192 grams of carbs and 12 grams of fat. \n
    When added to your diet and training plan, nothing packs on mass like MUTANT MASS.`
};

const images = {
    "monster_mash": `<img src="https://excelev8.com/wp-content/uploads/2018/12/Ground-Beef-Monster-Mash-Deluxe-Sweet-Potatos-Pic-e1544139198432.jpg">`,
    "octuple_bypass_burger": `<img src="https://alcapones.com/blog/wp-content/uploads/heart-attack-grill-burger.jpeg">`,
    "mutant_mass": `<img src="https://5.imimg.com/data5/VZ/JV/ZO/SELLER-35880889/mutant-mass-gainer-500x500.jpg">`
}

const h4 = (url) => {
    if (url === '/entrees/monster_mash') {
        return stories.monster_mash;
    }
    else if (url === '/entrees/octuple_bypass_burger') {
        return stories.octuple_bypass_burger;
    }
    else if (url === '/drinks/mutant_mass') {
        return stories.mutant_mass;
    }
};

const img_src = (url) => {
    if (url === '/entrees/monster_mash') {
        return images.monster_mash;
    }
    else if (url === '/entrees/octuple_bypass_burger') {
        return  images.octuple_bypass_burger;
    }
    else if (url === '/drinks/mutant_mass') {
        return images.mutant_mass;
    }
};


app.get('/', (req, res, next) => {
    res.send(`
    <html>
    <head>
        <link rel='stylesheet' href='/public/styles.css' />
    </head>
    <body>
        <nav class="navigationWrapper">
            <div class="logoWrapper">
                <a href='/'><span class="logo">H H</span></a>
            </div>
            <div class="navigation">
                <a href='/snacks'>Snacks</a>
                <a href='/entrees'>Entrees</a>
                <a href='/drinks'>Drinks</a>
            </div>
        </nav>
        <div class="headers">
            <h1>HARDGAINER HOTLINE</h1>
            <h3>"The site where SIZE IS THE PRIZE and SWOLE IS THE GOAL"</h3>
            <h5>Are you ready to do WHATEVER IT TAKES?</h5>
        </div>
        <div class="tenor-gif-embed" data-postid="10138356" data-share-method="host" data-width="100%" data-aspect-ratio="1.7777777777777777">
            <a href="https://tenor.com/view/rich-piana-lets-get-big-come-on-gif-10138356"></a><a href="https://tenor.com/search/richpiana-gifs"></a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>
        </div>
    </body>
    </html>
    `);
});


app.get('/snacks', (req, res, next) => {
    res.send(`
    <html>
    <head>
        <link rel='stylesheet' href='/public/styles.css' />
    </head>
    <body>
        <nav class="navigationWrapper">
            <div class="logoWrapper">
                <a href='/'><span class="logo">H H</span></a>
            </div>
            <div class="navigation">
                <a href='/snacks' class='active'>Snacks</a>
                <a href='/entrees'>Entrees</a>
                <a href='/drinks'>Drinks</a>
            </div>
        </nav>
        <div class="headers">
            <h1>SORRY PAL, NO SNACKING</h1>
            <h3>YOU GOTTA EAT BIG MEALS</h3>
        </div>
        <div class="renav">
            <a href='/'>Go back to atone for your sins</a>
        </div>
        <div class="tenor-gif-embed" data-postid="10137948" data-share-method="host" data-width="100%" data-aspect-ratio="1.7777777777777777"><a href="https://tenor.com/view/rich-piana-gif-10137948"></a> from <a href="https://tenor.com/search/richpiano-gifs"></a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>
    </body>
    </html>
    `);
});

app.get('/entrees', (req, res, next) => {
    res.send(`
    <html>
    <head>
        <link rel='stylesheet' href='/public/styles.css' />
    </head>
    <body>
        <nav class="navigationWrapper">
            <div class="logoWrapper">
                <a href='/'><span class="logo">H H</span></a>
            </div>
            <div class="navigation">
                <a href='/snacks'>Snacks</a>
                <a href='/entrees' class='active'>Entrees</a>
                <a href='/drinks'>Drinks</a>
            </div>
        </nav>
        <div class="headers">
            <h1>ENTREES</h1>
            <h4>Here are your options if you want to EAT TO GROW</h4>
            <h6>Click the product to LEARN MORE</h6>
        </div>
        <div class="products">
            <li><a href='/entrees/monster_mash'>Monster Mash</a></li>
            <li><a href='/entrees/octuple_bypass_burger'>Octuple Bypass Burger</a></li>
        </div>
    </body>
    </html>
    `);
});

app.get('/entrees/:id', (req, res, next) => {
    res.send(`
    <html>
    <head>
        <link rel='stylesheet' href='/public/styles.css' />
    </head>
    <body>
        <nav class="navigationWrapper">
            <div class="logoWrapper">
                <a href='/'><span class="logo">H H</span></a>
            </div>
            <div class="navigation">
                <a href='/snacks'>Snacks</a>
                <a href='/entrees' class='active'>Entrees</a>
                <a href='/drinks'>Drinks</a>
            </div>
        </nav>
        <div class="headers">
            <h1>${req.params.id.split('_').map(word => titleize(word)).join(' ')}</h1>
        </div>
        <div class="description">
            ${h4(req.url)}  
        </div>
        <div class="productImg">
            ${img_src(req.url)}
        </div>
    </body>
    </html>
    `);
});

app.get('/drinks', (req, res, next) => {
    res.send(`
    <html>
    <head>
        <link rel='stylesheet' href='/public/styles.css' />
    </head>
    <body>
        <nav class="navigationWrapper">
            <div class="logoWrapper">
                <a href='/'><span class="logo">H H</span></a>
            </div>
            <div class="navigation">
                <a href='/snacks'>Snacks</a>
                <a href='/entrees'>Entrees</a>
                <a href='/drinks' class='active'>Drinks</a>
            </div>
        </nav>
        <div class="headers">
            <h1>DRINKS</h1>
            <h4>There's only so much food you can digest. YOU MUST DRINK YOUR CALORIES TOO</h4>
            <h6>Click the product to LEARN MORE</h6>
        </div>
        <div class="products">
            <li><a href='/drinks/mutant_mass'>Mutant Mass</a></li>
        </div>
    </body>
    </html>
    `);
});


app.get('/drinks/:id', (req, res, next) => {
    res.send(`
    <html>
    <head>
        <link rel='stylesheet' href='/public/styles.css' />
    </head>
    <body>
        <nav class="navigationWrapper">
            <div class="logoWrapper">
                <a href='/'><span class="logo">H H</span></a>
            </div>
            <div class="navigation">
                <a href='/snacks'>Snacks</a>
                <a href='/entrees'>Entrees</a>
                <a href='/drinks' class='active'>Drinks</a>
            </div>
        </nav>
        <div class="headers">
            <h1>${req.params.id.split('_').map(word => titleize(word)).join(' ')}</h1>
        </div>
        <div class="description">
            ${h4(req.url)}  
        </div>
        <div class="productImg">
            ${img_src(req.url)}
        </div>
    </body>
    </html>
    `);
});



const port = process.env.PORT || 3500;

app.listen(port , () => console.log(`listening on port ${port}`));