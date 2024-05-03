let text=document.getElementById("text")
function insertValue(x)
{
    text.value += x;

}

function AllClear()
{
    text.value=" ";
}

function Dell()
{
    text.value= text.value.slice(0,-1);
}

function Equal()
{
    text.value = eval(text.value);
}