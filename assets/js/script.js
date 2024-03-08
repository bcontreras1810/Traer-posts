// Definimos una función asincrónica para obtener publicaciones desde una API 
const getPosts = async () => {
    try {
        // Realizamos una solicitud a la API usando fetch
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");

        // Esperamos la respuesta y la convertimos en formato JSON
        let data = await response.json();

        // Verificamos si los datos obtenidos no son nulos
        if (data !== null) {
            // Mostramos el resultado del request en HTML
            displayPosts(data);
        }
    } catch (error) {
        // Capturamos y mostramos errores en la consola
        console.log(error);
        alert('Ocurrió un error al obtener los posts');
    }
};

/** Función para mostrar los posts en HTML */
const displayPosts = (posts) => {
    try {
        // Obtenemos el elemento donde mostraremos los posts
        const postData = document.getElementById('post-data');

        // Creamos una lista desordenada para los posts
        const ul = document.createElement('ul');

        // Iteramos sobre los posts y creamos un elemento de lista para cada uno
        posts.forEach(post => {
            const li = document.createElement('li');
            li.textContent = `${post.title}: ${post.body}`
            ul.appendChild(li);
        });

        // Limpiamos el contenido anterior y mostramos la lista de posts
        postData.innerHTML = '';
        postData.appendChild(ul);
    } catch (error) {
        console.log(error);
        alert('Ocurrió un error al mostrar los posts');
    }
};


