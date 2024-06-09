document.addEventListener('DOMContentLoaded', function() {
    const likeIcons = document.querySelectorAll('.like-icon');
    const commentIcons = document.querySelectorAll('.comment-icon');
    const commentSections = document.querySelectorAll('.comments-section');
    const sendCommentButtons = document.querySelectorAll('.send-comment-btn');

    // Toggle like icon color on click
    likeIcons.forEach((icon, index) => {
        icon.addEventListener('click', function() {
            this.classList.toggle('liked');
        });
    });

    // Toggle comment section visibility on click
    commentIcons.forEach((icon, index) => {
        icon.addEventListener('click', function() {
            commentSections[index].classList.toggle('show');
        });
    });

    // Add new comment to the comments section
    sendCommentButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const commentSection = commentSections[index];
            const textarea = commentSection.querySelector('.comment-textarea');
            const pastComments = commentSection.querySelector('.past-comments');

            const newCommentText = textarea.value.trim();
            if (newCommentText !== "") {
                const newComment = document.createElement('p');
                newComment.textContent = newCommentText;
                pastComments.appendChild(newComment);
                textarea.value = "";  // Clear the textarea
            }
        });
    });
});
