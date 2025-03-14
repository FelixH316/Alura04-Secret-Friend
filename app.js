// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/*
AUTHOR:     FELIX ARMENTA
DATE:       2025-03-13
PROJECT:    SECRET FRIEND
*/

let friends_list = []

function agregarAmigo()
{
    let friend = document.getElementById("amigo").value;

    if (friend === "" || friend === " ")
    {
        alert("Please, insert a name");
    }
    else
    {
        friends_list.push(friend);
        cleanField("amigo");
        displayList();
    }
}

function displayList()
{
    displayString = ""
    
    for (let i = 0; i < friends_list.length; i++)
    {
        displayString += `${friends_list[i]}, `;
    }
    assignTextElement("ul", displayString);
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