let botonBorrar     = document.getElementsByClassName("borrar");
let botonActualizar = document.getElementsByClassName("actualizar");
let botonMostrar    = document.getElementsByClassName("mostrar");

let body = document.getElementById("body");

let table = document.createElement("table");
table.classList.add("tablaDeUsuarios");
body.appendChild(table);

let thead= document.createElement("thead");
thead.classList.add("encabezado");
table.appendChild(thead);

let tr =document.createElement("tr");
thead.appendChild(tr);

let thName  = document.createElement("th");
thName.classList.add("titulo");
thName.innerText="NOMBRE";

let thEmail = document.createElement("th");
thEmail.classList.add("titulo");
thEmail.innerText="EMAIL";

let thID    = document.createElement("th");
thID.classList.add("titulo");
thID.innerText="ID";

let thAcciones= document.createElement("th");
thAcciones.classList.add("titulo");
thAcciones.innerText="ACCION";


tr.appendChild(thID);
tr.appendChild(thName);
tr.appendChild(thEmail);
tr.appendChild(thAcciones);
/////////////////////////////////////////////////
let tbody= document.createElement("tbody");
tbody.classList.add("cuerpoDeLaTabla");
table.appendChild(tbody);

let promesa = fetch("https://memin.io/public/api/v2/users")
.then(response =>{
    return response.json()
}).then(data =>{
    data.data.forEach(function (elemento) {
        let trContenido = document.createElement("tr");
        tbody.appendChild(trContenido);

            let tdID= document.createElement("td");
            tdID.innerText=elemento.id;

            let tdName= document.createElement("td");
            tdName.innerText=elemento.name;

            let tdEmail= document.createElement("td");
            tdEmail.innerText=elemento.email;

            let tdAcciones= document.createElement("td");
                let buttonDelete  = document.createElement("button");
                buttonDelete.classList.add("borrar")
                tdAcciones.appendChild(buttonDelete);
                buttonDelete.setAttribute("type","button");
                buttonDelete.setAttribute("value",elemento.id);
                buttonDelete.setAttribute("onclick",eliminar(${elemento.id}));
                buttonDelete.innerText="Eliminar";

               

                let buttonUpdate  = document.createElement("button");
                buttonUpdate.classList.add("actualizar");
                tdAcciones.appendChild(buttonUpdate);

                buttonUpdate.setAttribute("type","button");
                buttonUpdate.setAttribute("value",elemento.id);
                buttonUpdate.innerText="Actualizar";

                let buttonDetails = document.createElement("button");
                buttonDetails.classList.add("crear");
                tdAcciones.appendChild(buttonDetails);
                buttonDetails.setAttribute("type","button");
                buttonDetails.setAttribute("value",elemento.id);
                buttonDetails.innerText="Ver detalles";

            trContenido.appendChild(tdID);
            trContenido.appendChild(tdName);
            trContenido.appendChild(tdEmail);
            trContenido.appendChild(tdAcciones);


       
       
    });
})

function eliminar(elementoID){
    fetch(https://memin.io/public/api/v2/users/${elementoID},{
        method: "DELETE"
    })