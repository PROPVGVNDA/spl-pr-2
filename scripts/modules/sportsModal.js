export function setupSportsModal() {
    document.addEventListener("DOMContentLoaded", () => {
        const modal = document.getElementById('sportsModal');
        modal?.addEventListener("shown.bs.modal", () => {
            fetch('https://jsonplaceholder.typicode.com/posts/1')
                .then(response => response.json())
                .then((data) => {
                const modalContent = document.getElementById('sportsModalContent');
                modalContent.innerHTML = '';
                const postDiv = document.createElement('div');
                postDiv.classList.add('mb-3');
                postDiv.innerHTML = `
            <h6>${data.title}</h6>
            <p>${data.body}</p>
            <hr>
          `;
                modalContent.appendChild(postDiv);
            })
                .catch(error => console.error('Error fetching the post:', error));
        });
    });
}
