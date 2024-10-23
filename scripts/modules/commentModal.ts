import { Comment } from '../types/modalTypes';

export function setupCommentModal(): void {
  document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById('myModal');
    
    modal?.addEventListener("shown.bs.modal", () => {
      fetch('https://jsonplaceholder.typicode.com/comments?_limit=5')
        .then(response => response.json())
        .then((data: Comment[]) => {
          const modalContent = document.getElementById('modalContent')!;
          modalContent.innerHTML = '';

          data.forEach((comment: Comment) => {
            const commentDiv = document.createElement('div');
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
    });
  });
}
