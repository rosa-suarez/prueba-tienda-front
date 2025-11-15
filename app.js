const api1 = async () => {
    try{
        const respuesta = await fetch("https://prueba-tienda-back.onrender.com/");
        if(!respuesta.ok) throw new Error('Error en la respuesta');
        const datos = await respuesta.json();
        alert("El servidor ha respondido, revisa la consola");
        console.log(datos);
        document.getElementById("mostrar").innerHTML = datos.message;
    }catch (error){
        console.error("Error al llamar a la API:", error);
        alert("Error al llamar al servidor: " + error.message);
    }
};

const api2 = async () => {
    try{
        const respuesta = await fetch("https://prueba-tienda-back.onrender.com/datos");
        if(!respuesta.ok) throw new Error('Error en la respuesta');
        const datos = await respuesta.json();
        alert("El servidor ha respondido, revisa la consola");
        console.log(datos);
        acum="";
        datos.members.forEach(member => {
            acum += ` 🔸Nombre: ${member.name}<br>`;
            acum += ` 🔸Edad: ${member.age}<br>`;
            acum += ` 🔸Identidad secreta: ${member.secretIdentity}<br>`;
            acum += ` 🔸Poderes: `;
            member.powers.forEach(power => {
                acum += `${power}, `
            });
            acum += `<br>`;
            acum += `<br>`;
            document.getElementById("mostrar").innerHTML = acum;
        });
    }catch (error){
        console.error("Error al llamar a la API:", error);
        alert("Error al llamar al servidor: " + error.message);
    }
};