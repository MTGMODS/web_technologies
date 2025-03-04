function showStudentName() {
    console.log("Ім'я: Богдан");
    return a + b;
}

document.getElementById("header").onclick = showStudentName;

header.addEventListener('click', function() {
    showStudentName();
});

// document.getElementById("btn1").onclick = showStudentName;
btn1.onclick = showStudentName;




