import "./styles.css"

/* Content Area */
const contentArea = document.getElementById("content");

function loadContent(pageName) {
    // Remove previous content
    contentArea.replaceChildren();

    switch(pageName) {
        case "home": 
            loadHome(); 
            break;
        case "about": 
            loadAbout(); 
            break;
        case "menu": 
            loadMenu(); 
            break;
        case "booking": 
            loadBooking(); 
            break;
        default: 
            console.log("Unhandled pageName: "+pageName); 
            break;
    }
}

/* Make a nav button */
function createButton(id, text, onClick) {
    const button = document.createElement("button");

    button.type = "button";
    button.id = id;
    button.textContent = text;
    button.addEventListener("click", onClick);

    return button;
}


/* Load contents */

function loadHome() {
    const titleCard = document.createElement("div");
    titleCard.id = "title";
    titleCard.classList.add("content-to-top");

    const titleText = document.createElement("div");
    titleText.id = "title-text";

    const titleSubtitle = document.createElement("h3");
    titleSubtitle.classList.add("glowing-text");
    titleSubtitle.textContent = "Far Over..."

    const title = document.createElement("h2");
    title.textContent = "The Misty Mountain Inn";

    titleText.appendChild(titleSubtitle);
    titleText.appendChild(title);
    titleCard.appendChild(titleText);

    contentArea.appendChild(titleCard);
    contentArea.classList.remove("content-to-center");
    contentArea.classList.add("content-to-top");
}

function loadAbout() {
    const aboutCard = document.createElement("div");
    aboutCard.id = "about";
    aboutCard.classList.add("card", "filled");

    const aboutTitle = document.createElement("h1");
    aboutTitle.textContent = "About Us";
    aboutTitle.classList.add("card-hero");

    const aboutFirst = document.createElement("p");
    aboutFirst.textContent = "The Misty Mountain Inn is open to all who dwell on the path of the light. Founded in the year 238 of the Fourth Age, our inn is in the heart of Khazad-dûm. Our founder, Bombur III Stoneladdle, has dedicated his life to restoring the culinary history of the dwarves under the mountain. Our fare is based upon ancient texts recovered by the company of Durin VII after he reclaimed the mines from their cruel occupiers.";

    const aboutSecond = document.createElement("p");
    aboutSecond.textContent = "Join us and experience the past! Taste the food and drink that our ancestors once enjoyed in these very hallowed halls. As a central trading hub of the western Hither Lands, we share the cuisine of all those who travel through our halls. We have room and board available to all dwarf-friends, with rooms specially designed for parties of dwarves, men, elves, and even hobbits!";

    aboutCard.appendChild(aboutTitle);
    aboutCard.appendChild(aboutFirst);
    aboutCard.appendChild(aboutSecond);

    contentArea.appendChild(aboutCard);
    contentArea.classList.remove("content-to-top");
    contentArea.classList.add("content-to-center");

}

function loadMenu() {
    // Make menu card
    const menuCard = document.createElement("div");
    menuCard.id = "menu-card";
    menuCard.classList.add("card", "filled");

    // Make title
    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "Menu";
    menuTitle.classList.add("card-hero");

    // Make menu content
    const menuContent = document.createElement("div");
    menuContent.id = "menu-content";

    // Make menu buttons
    const mealsButton = createButton(
        "meals-button",
        "Meals",
        () => {
            makeMealsMenu();
            mealsButton.setAttribute("aria-pressed", "true");
            breadsButton.setAttribute("aria-pressed", "false");
            drinksButton.setAttribute("aria-pressed", "false");
            dessertsButton.setAttribute("aria-pressed", "false");
        }
    );

    const breadsButton = createButton(
        "breads-button",
        "Breads",
        () => {
            makeBreadsMenu();
            mealsButton.setAttribute("aria-pressed", "false");
            breadsButton.setAttribute("aria-pressed", "true");
            drinksButton.setAttribute("aria-pressed", "false");
            dessertsButton.setAttribute("aria-pressed", "false");
        }
    );

    const drinksButton = createButton(
        "drinks-button",
        "Drinks",
        () => {
            makeDrinksMenu();
            mealsButton.setAttribute("aria-pressed", "false");
            breadsButton.setAttribute("aria-pressed", "false");
            drinksButton.setAttribute("aria-pressed", "true");
            dessertsButton.setAttribute("aria-pressed", "false");
        }
    );

    const dessertsButton = createButton(
        "desserts-button",
        "Desserts",
        () => {
            makeDessertsMenu();
            mealsButton.setAttribute("aria-pressed", "false");
            breadsButton.setAttribute("aria-pressed", "false");
            drinksButton.setAttribute("aria-pressed", "false");
            dessertsButton.setAttribute("aria-pressed", "true");
        }
    );

    mealsButton.setAttribute("aria-pressed", "true");

    // Make menu functions

    // Return a menu item div with the given details
    function makeMenuItem(title, id, description, price) {
        const menuItem = document.createElement("article");
        menuItem.id = id;
        menuItem.classList.add("menu-item");

        const itemTitle = document.createElement("h3");
        itemTitle.textContent = title;
        itemTitle.classList.add("menu-item-title");

        const itemDescription = document.createElement("p");
        itemDescription.textContent = description;
        itemDescription.classList.add("menu-item-description");

        const itemPrice = document.createElement("p");
        itemPrice.textContent = price;
        itemPrice.classList.add("menu-item-price");

        menuItem.appendChild(itemTitle);
        menuItem.appendChild(itemDescription);
        menuItem.appendChild(itemPrice);

        return menuItem;
    }

    function makeMealsMenu() {
        const coneyStew = makeMenuItem(
            "Coney Stew",
            "coney-stew",
            "A delightful, hearty stew made from free-range coneys and homegrown root vegetables.",
            "4 silver"
        );
    
        const roastMutton = makeMenuItem(
            "Roast Mutton",
            "roast-mutton",
            "Succulent roast mutton haunch, seasoned with fresh garden herbs.",
            "5 silver"
        );

        const shireAppleSalad = makeMenuItem(
            "Shire-Apple Salad",
            "shire-apple-salad",
            "A refreshing salad made with fresh, leafy greens; crisp, tart Shire-grown apples; and creamy blue cheese.",
            "5 silver"
        );

        const dwarfKingsFeast = makeMenuItem(
            "Dwarf-King's Feast",
            "dwarf-kings-feast",
            "A filling meal fit for the dwarven kings of old. Comes with a portion of coney stew, a haunch of roast mutton, and a bowl of Shire-Apple Salad.",
            "12 silver"
        );

        // Clear old menu
        menuContent.replaceChildren();

        // Pack menu items
        menuContent.appendChild(coneyStew);
        menuContent.appendChild(roastMutton);
        menuContent.appendChild(shireAppleSalad);
        menuContent.appendChild(dwarfKingsFeast);
    }

    function makeBreadsMenu() {
        const lembasBread = makeMenuItem(
            "Lembas Bread",
            "lembas-bread",
            "A plain Elvish bread. A single bite can sustain a grown man for an entire day (or a hobbit for a few hours).",
            "2 silver"
        );
    
        const seedBread = makeMenuItem(
            "Seed Bread",
            "seed-bread",
            "An herby seed bread, handmade every morning. A perfect complement to any dish.",
            "2 silver"
        );

        const bilboSignature = makeMenuItem(
            "Bilbo's Signature",
            "bilbos-signature",
            "A warm loaf of sourdough bread. Perfect with butter and honey.",
            "3 silver"
        );

        const gondorianFlatbread = makeMenuItem(
            "Gondorian Flatbread",
            "gondorian-flat-bread",
            "Flatbread in the style of the men of Gondor. Perfect when paired with our roast mutton!",
            "2 silver"
        );

        // Clear old menu
        menuContent.replaceChildren();

        // Pack menu items
        menuContent.appendChild(lembasBread);
        menuContent.appendChild(seedBread);
        menuContent.appendChild(bilboSignature);
        menuContent.appendChild(gondorianFlatbread);
    }

    function makeDrinksMenu() {
        const lonelyMountainRed = makeMenuItem(
            "Lonely Mountain Red Wine",
            "lonely-mountain-red",
            "A full-bodied red wine, fermented by our kin at Erebor. Aged in oak barrels, deep in the vaults of the Lonely Mountain.",
            "2 silver"
        );
        
        const greenDragonAle = makeMenuItem(
            "Green Dragon Ale",
            "green-dragon-ale",
            "A hoppy ale with a citrusy finish. Crafted by the Shire's master brewers at the honorable Green Dragon Inn.",
            "3 silver"
        );

        const rohirrimMead = makeMenuItem(
            "Rohirrim Mead",
            "rohirrim-mead",
            "Sweet and rich, this mead hails from the land of the horse-lords. The pride of Edoras, this mead is brewed following generations of tradition.",
            "3 silver"
        );

        const elvishMiruvor = makeMenuItem(
            "Elvish Miruvor",
            "elvish-miruvor",
            "The mystical Elvish cordial, Miruvor, is a closely guarded recipe passed down through the ages. One sip will cure all your road weariness.",
            "8 silver (While supplies last)"
        );

        // Clear old menu
        menuContent.replaceChildren();

        // Pack menu items
        menuContent.appendChild(lonelyMountainRed);
        menuContent.appendChild(greenDragonAle);
        menuContent.appendChild(rohirrimMead);
        menuContent.appendChild(elvishMiruvor);
    }

    function makeDessertsMenu() {
        const caveMushroomCake = makeMenuItem(
            "Cave Mushroom Cake",
            "cave-mushroom-cake",
            "A light and fluffy cake made with the sweet and earthy cave mushrooms picked right here in Khazad-dûm.",
            "3 silver"
        );

        const caradhrasSnowCones = makeMenuItem(
            "Caradhras Snow Cones",
            "caradhras-snow-cones",
            "Enjoy a frosty treat made from the snow of our mightiest peak, Caradhras. Comes in lemon, green apple, mixed berry, and honey flavors.",
            "2 silver"
        );

        // Clear old menu
        menuContent.replaceChildren();

        // Pack menu items
        menuContent.appendChild(caveMushroomCake);
        menuContent.appendChild(caradhrasSnowCones);
    }

    // Make buttons bar
    const menuNav = document.createElement("nav");
    menuNav.id = "menu-nav";

    menuNav.appendChild(mealsButton);
    menuNav.appendChild(breadsButton);
    menuNav.appendChild(drinksButton);
    menuNav.appendChild(dessertsButton);

    // Make first screen
    makeMealsMenu();

    // Pack everything
    menuCard.appendChild(menuTitle);
    menuCard.appendChild(menuNav);
    menuCard.appendChild(menuContent);

    contentArea.appendChild(menuCard);
    contentArea.classList.remove("content-to-top");
    contentArea.classList.add("content-to-center");
}

function loadBooking() {
    // Make card
    const bookingCard = document.createElement("div");
    bookingCard.id = "booking";
    bookingCard.classList.add("card", "filled");

    // Make title
    const bookingTitle = document.createElement("h1");
    bookingTitle.textContent = "Book A Room";
    bookingTitle.classList.add("card-hero");

    // Make form
    const bookingForm = document.createElement("form");
    bookingForm.id = "booking-form";

    // Make name
    const nameGroup = document.createElement("div");
    nameGroup.id = "name-group";

    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "name");
    nameLabel.textContent = "Party Name";

    const nameInput = document.createElement("input");
    nameInput.id = "name";
    nameInput.name = "name";
    nameInput.required = true;
    nameInput.type = "text";
    nameInput.setAttribute("placeholder", "The Company of Thorin Oakenshield");

    nameGroup.appendChild(nameLabel);
    nameGroup.appendChild(nameInput);

    // Make room selection
    const roomGroup = document.createElement("div");
    roomGroup.id = "room-group";

    const roomLabel = document.createElement("label");
    roomLabel.setAttribute("for", "room");
    roomLabel.textContent = "Room Size";

    const roomInput = document.createElement("select");
    roomInput.id = "room";
    roomInput.name = "room";
    roomInput.required = true;

    const manRoom = document.createElement("option");
    manRoom.setAttribute("value", "man-sized");
    manRoom.textContent = "Man / Elf";

    const dwarfRoom = document.createElement("option");
    dwarfRoom.setAttribute("value", "dwarf-sized");
    dwarfRoom.textContent = "Dwarf";

    const hobbitRoom = document.createElement("option");
    hobbitRoom.setAttribute("value", "hobbit-sized");
    hobbitRoom.textContent = "Hobbit";

    roomInput.appendChild(manRoom);
    roomInput.appendChild(dwarfRoom);
    roomInput.appendChild(hobbitRoom);

    roomGroup.appendChild(roomLabel);
    roomGroup.appendChild(roomInput);

    // Make start date
    const dateGroup = document.createElement("div");
    dateGroup.id = "date-group";

    const dateLabel = document.createElement("label");
    dateLabel.setAttribute("for", "start-date");
    dateLabel.textContent = "Start Date";

    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.id = "start-date";
    dateInput.name = "start-date";
    dateInput.required = true;

    const today = new Date();
    const localToday = new Date(
        today.getTime() - today.getTimezoneOffset() * 60_000
    ).toISOString().slice(0, 10);

    dateInput.value = localToday;
    dateInput.min = localToday;

    dateGroup.appendChild(dateLabel);
    dateGroup.appendChild(dateInput);

    // Make length of stay
    const lengthGroup = document.createElement("div");
    lengthGroup.id = "length-group";

    const lengthLabel = document.createElement("label");
    lengthLabel.setAttribute("for", "length");
    lengthLabel.textContent = "Length of Stay";

    const lengthInput = document.createElement("input");
    lengthInput.type = "number";
    lengthInput.id = "length";
    lengthInput.name = "length";
    lengthInput.setAttribute("min", "1");
    lengthInput.setAttribute("max", "20");
    lengthInput.setAttribute("value", "1");
    lengthInput.required = true;

    lengthGroup.appendChild(lengthLabel);
    lengthGroup.appendChild(lengthInput);

    // Make submit button
    const submitDiv = document.createElement("div");
    submitDiv.id = "submit-div";

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Submit";

    submitDiv.appendChild(submitButton);

    // Pack form
    bookingForm.appendChild(nameGroup);
    bookingForm.appendChild(roomGroup);
    bookingForm.appendChild(dateGroup);
    bookingForm.appendChild(lengthGroup);
    bookingForm.appendChild(submitDiv);

    // Pack card
    bookingCard.appendChild(bookingTitle);
    bookingCard.appendChild(bookingForm);

    contentArea.appendChild(bookingCard);
    contentArea.classList.remove("content-to-top");
    contentArea.classList.add("content-to-center");

    bookingForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(bookingForm);
        const partyName = formData.get("name");
        const roomSize = formData.get("room");
        const startDate = formData.get("start-date");
        const lengthOfStay = formData.get("length");

        console.log({
            partyName,
            roomSize,
            startDate,
            lengthOfStay
        });

        const confirmation = document.createElement("p");
        confirmation.setAttribute("role", "status");

        confirmation.textContent =
            `Thank you, ${partyName}! Your booking request has been received.`;

        bookingCard.appendChild(confirmation);
    });
}

function loadFooter() {
    const footer = document.querySelector("footer");
    footer.replaceChildren();

    const goblinPolicy = document.createElement("p");
    goblinPolicy.textContent = "The Misty Mountain Inn will not cancel reservations in the event of orc or goblin raid.";

    const tolkienPolicy = document.createElement("p");
    tolkienPolicy.textContent = "I do not own or claim the rights to any of the names, places, or characters from the works of J.R.R. Tolkien. This webpage is fully an educational endeavor and will generate no profits.";
    
    footer.appendChild(goblinPolicy);
    footer.appendChild(tolkienPolicy);
}

function loadHeader() {
    const header = document.querySelector("header");
    header.replaceChildren();

    const headerHero = document.createElement("h2");
    headerHero.textContent = "The Misty Mountain Inn";

    const headerNav = document.createElement("nav");

    const homeButton = createButton(
        "home-button",
        "Home",
        () => {
            loadContent("home"); 
            homeButton.setAttribute("aria-pressed", "true");
            aboutButton.setAttribute("aria-pressed", "false");
            menuButton.setAttribute("aria-pressed", "false");
            bookingButton.setAttribute("aria-pressed", "false");
        }
    );

    const aboutButton = createButton(
        "about-button",
        "About Us",
        () => {
            loadContent("about"); 
            homeButton.setAttribute("aria-pressed", "false");
            aboutButton.setAttribute("aria-pressed", "true");
            menuButton.setAttribute("aria-pressed", "false");
            bookingButton.setAttribute("aria-pressed", "false");
        }
    );

    const menuButton = createButton(
        "menu-button",
        "Our Menu",
        () => {
            loadContent("menu"); 
            homeButton.setAttribute("aria-pressed", "false");
            aboutButton.setAttribute("aria-pressed", "false");
            menuButton.setAttribute("aria-pressed", "true");
            bookingButton.setAttribute("aria-pressed", "false");
        }
    );

    const bookingButton = createButton(
        "booking-button",
        "Book a Room",
        () => {
            loadContent("booking"); 
            homeButton.setAttribute("aria-pressed", "false");
            aboutButton.setAttribute("aria-pressed", "false");
            menuButton.setAttribute("aria-pressed", "false");
            bookingButton.setAttribute("aria-pressed", "true");
        }
    );

    headerNav.appendChild(homeButton);
    headerNav.appendChild(aboutButton);
    headerNav.appendChild(menuButton);
    headerNav.appendChild(bookingButton);

    header.appendChild(headerHero);
    header.appendChild(headerNav);

    homeButton.setAttribute("aria-pressed", "true");
}

// When page first loads, load the title card
loadHeader();
loadFooter();
loadHome();