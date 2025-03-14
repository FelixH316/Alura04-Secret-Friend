// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/*
AUTHOR:     FELIX ARMENTA
DATE:       2025-03-13
PROJECT:    SECRET FRIEND
*/

let friendsList = []

function addBuddy()
{
    let friend = document.getElementById("amigo").value;

    if (friend === "" || friend === " ")
    {
        alert("Please, insert a name");
    }
    else
    {
        friendsList.push(friend);
        cleanField("amigo");
        displayList();
    }
}

function displayList()
{
    displayString = ""
    lastElement = false;

    for (let i = 0; i < friendsList.length; i++)
    {
        (i+1) >= friendsList.length ? lastElement = true : lastElement = false;
        displayString += `${friendsList[i]}${lastElement == false ? ", " : "."}`;
        lastElement = false;
    }
    assignTextElement("ul", displayString);
}

function raffleFriend()
{
    if (friendsList.length > 1)
    {
        randomy = Math.random();
        console.log(randomy);
        randomy *= friendsList.length;
        console.log(randomy);
        index = Math.floor(randomy);
        console.log(index);
        //index = Math.floor(Math.random() * friends_list.length);
        assignTextElement("ul", `Your secret friend is: ${friendsList[index]}`);
    }
    else if (friendsList.length == 1)
    {
        assignTextElement("ul", `Your secret friend is: ${friendsList[0]}`);
    }
    else
    {
        assignTextElement("ul", `In order to have a secret friend, you first need some buddies`);
    }
}

function cleanField(id)
{
    document.querySelector(`#${id}`).value = "";
    return 0;
}

function assignTextElement(element, text)
{
    let titulo = document.querySelector(element);
    titulo.innerHTML = text;
    return 0;
}