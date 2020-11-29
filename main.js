function swap() {
    var first = document.getElementById('first');
    var second =document.getElementById('second');
    var tex =document.getElementById('tex');
    var tex1 =document.getElementById('tex1');
    document.getElementById('output').value = "";
    if (first.checked) {
        tex.value = "Я люблю мальчиков!";      
        tex1.value ="Я люблю девочек!";
    }
    else if (second.checked) {
        tex.value ="Я люблю девочек!";
        tex1.value = "Я люблю мальчиков!";
    }
}

function vibor() {
    var first = document.getElementById('first');
    var second = document.getElementById('second');
    if (first.checked || second.checked) {
        document.getElementById('output').value = "Вы пидор.";
    }
    
    else {
       document.getElementById('output').value ="Вы не ответили на вопрос";
    }
}