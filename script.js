function toTable() {
    var fname = document.getElementById("first-name").value
    var lname = document.getElementById("last-name").value
    var address = document.getElementById("address").value
    var pincode = document.getElementById("pincode").value
    var state = document.getElementById("state").value
    var country = document.getElementById("country").value

    var male = document.getElementById("male")
    var female = document.getElementById("female")
    if (male.checked == false && female.checked == false) {
        alert("Please choose a gender")
    }
    // var gender= document.getElementById("gender").value
    var f1 = ""
    var f2 = ""
    var f3 = ""
    var f4 = ""
    var f5 = ""
    let fcount = 0
    let food1 = document.getElementById("food1")
    if (food1.checked == true) {
        f1 = food1.value
        fcount++
    }
    let food2 = document.getElementById("food2")
    if (food2.checked == true) {
        f2 = food2.value
        fcount++
    }
    let food3 = document.getElementById("food3")
    if (food3.checked == true) {
        f3 = food3.value
        fcount++
    }
    let food4 = document.getElementById("food4")
    if (food4.checked == true) {
        f4 = food4.value
        fcount++
    }
    let food5 = document.getElementById("food5")
    if (food5.checked == true) {
        f5 = food5.value
        fcount++
    }

    var toTable = document.getElementById("table")

    if (fcount < 2) {
        alert("Minimum two foods should be selected")
    } else {
        toTable.innerHTML += `<tr>
            <td>${fname}</td>
            <td>${lname}</td>
            <td>${address}</td>
            <td>${pincode}</td>
            <td>${male.value} ${female.value}</td>
            <td>${f1} ${f2} ${f3} ${f4} ${f5}</td>
            <td>${state}</td>
            <td>${country}</td>
            </tr>
            `
        document.getElementById("form").reset();
    }

    function reset() {
        document.getElementById("form").reset();
    }
}