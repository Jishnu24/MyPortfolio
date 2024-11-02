// script.js

// Define the blog data
let blogData = [
    {
        id: 1,
        image: 'https://picsum.photos/200/300',
        description: 'This is the first blog post.'
    },
    {
        id: 2,
        image: 'https://picsum.photos/200/301',
        description: 'This is the second blog post.'
    },
    {
        id: 3,
        image: 'https://picsum.photos/200/302',
        description: 'This is the third blog post.'
    }
];

// Function to render the blog elements
function renderBlogElements() {
    const blogContainer = document.getElementById('blog-container');
    blogContainer.innerHTML = '';

    blogData.forEach((blog) => {
        const blogElement = document.createElement('div');
        blogElement.classList.add('blog-element');

        const image = document.createElement('img');
        image.src = blog.image;
        blogElement.appendChild(image);

        const description = document.createElement('p');
        description.classList.add('description');
        description.textContent = blog.description;
        blogElement.appendChild(description);

        const actions = document.createElement('div');
        actions.classList.add('actions');

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => {
            // Edit button click handler
            console.log(`Edit button clicked for blog ${blog.id}`);
        };
        actions.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => {
            // Delete button click handler
            console.log(`Delete button clicked for blog ${blog.id}`);
            // Remove the blog element from the data array
            blogData = blogData.filter((b) => b.id !== blog.id);
            renderBlogElements();
        };
        actions.appendChild(deleteButton);

        blogElement.appendChild(actions);

        blogContainer.appendChild(blogElement);
    });
}

// Function to add a new blog element
function addNewBlog() {
    const newBlog = {
        id: blogData.length + 1,
        image: 'https://picsum.photos/200/300',
        description: 'This is a new blog post.'
    };
    blogData.push(newBlog);
    renderBlogElements();
}

// Add event listener to the add new blog button
document.getElementById('add-new-blog-btn').addEventListener('click', addNewBlog);

// Initial render of blog elements
renderBlogElements();