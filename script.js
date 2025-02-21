const text = document.getElementById("name");
const theme = document.getElementById("theme");
const card = document.getElementById("card");
const generate = document.getElementById("generate");
const download = document.getElementById("download");
const heading = document.getElementById("card-title");
const details = document.getElementById("card-greeting");

generate.addEventListener("click", () => {
    const textvalue = text.value.trim().charAt(0).toUpperCase() + text.value.trim().slice(1);
    const themevalue = theme.value;
    const thememessages = {Birthday: `Wishing you a day full of joy and laughter, ${textvalue}! 🥳✨ May this year bring you happiness and success! 🌟🎁

Enjoy your special day, ${textvalue}! 🎊💖`, Wedding: `May your love grow stronger with each passing day! 💕✨ Wishing you a lifetime of happiness, laughter, and beautiful memories together. 🥂💑

Congratulations, ${textvalue}! 🎊💍`, Valentines: `You're truly special, and today is just another reason to celebrate you! 💖💕 Wishing you a day filled with love, laughter, and sweet moments. 😍💌

Happy valentines day, ${textvalue}! ❤️🥰`, Friendship: `Friends like you make life brighter! ☀️✨ Thank you for always being there, sharing laughs, and making every moment special. Here's to a friendship that lasts forever! 🥂🎊

You're truly one of a kind, ${textvalue}! 💖😊`, Mother: `You are the heart of our home and the light in our lives. 🌟 Thank you for your endless love, care, and wisdom. Wishing you a day as beautiful and special as you are! 💕👩‍👧‍👦

Love you always, ${textvalue}! 💐💖`, Father: `You're my hero, my guide, and my biggest inspiration. 👏 Thank you for your strength, wisdom, and endless support. Hope your day is filled with love, laughter, and everything you enjoy! 🎈💪

Love you always, ${textvalue}! 🏆💙`}


    if (textvalue.trim() === ""){
        details.textContent = "Please enter a name"
        details.style.color = "red";
    };

    if (textvalue.trim() !== ""){
        details.textContent = thememessages[themevalue];
        download.style.display = "block";
    }
    if (themevalue === "Birthday" && textvalue.trim() !== ""){
        heading.textContent = `🎂 Happy Birthday, ${textvalue}!`
        heading.style.fontSize = "24px"
        details.style.color = "black";
    }
    else if (themevalue === "Wedding"){
        heading.textContent = `💍 Congratulations, ${textvalue}!`
        heading.style.fontSize = "22px"
        details.style.color = "black";
    }
    else if (themevalue === "Valentines"){
        heading.textContent = `💘 Happy Valentine's Day, ${textvalue}!`
        heading.style.fontSize = "20px"
        details.style.color = "black";
    }
    else if (themevalue === "Friendship"){
        heading.textContent = `🫂 Happy Friendship Day, ${textvalue}!`
        heading.style.fontSize = "20px"
        details.style.color = "black";
    }
    else if (themevalue === "Mother"){
        heading.textContent = `💖 Happy Mother’s Day, ${textvalue}!`
        heading.style.fontSize = "22px"
        details.style.color = "black";
    }
    else if (themevalue === "Father"){
        heading.textContent = `🛠️ Happy Father’s Day, ${textvalue}!`
        heading.style.fontSize = "22px"
        details.style.color = "black";
    }
    card.classList.remove("card");
})

download.addEventListener("click", () => {
    html2canvas(card).then((canvas) => {
        let link = (document.createElement("a"));
        link.href = canvas.toDataURL("image/png");
        link.download = "Greeting-Card.png";
        link.click();
    });
});