
document.addEventListener("DOMContentLoaded", () => {
    var modal = document.getElementById('myModal')
    
    modal?.addEventListener("shown.bs.modal", (event) => {
        fetch('https://jsonplaceholder.typicode.com/comments?_limit=5')
        .then(response => response.json())
        .then(data => {
            const modalContent = document.getElementById('modalContent')!;
            modalContent.innerHTML = '';

            data.forEach(function(comment: any) {
            var commentDiv = document.createElement('div');
            commentDiv.classList.add('mb-3');
            commentDiv.innerHTML = `
                <h6>${comment.name}</h6>
                <p>${comment.body}</p>
                <hr>
            `;
            modalContent.appendChild(commentDiv);
        });
      })
      .catch(error => console.error('Error fetching comments:', error));
    })
})

document.addEventListener("DOMContentLoaded", () => {
    var modal = document.getElementById('sportsModal');
    
    modal?.addEventListener("shown.bs.modal", (event) => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
            const modalContent = document.getElementById('sportsModalContent')!;
            modalContent.innerHTML = '';

            var postDiv = document.createElement('div');
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
