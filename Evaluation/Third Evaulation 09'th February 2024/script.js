const recipeList = document.getElementById('recipe-list');
const recipeFormModal = document.getElementById('recipe-form-modal');
const recipeForm = document.getElementById('recipe-form');
const addRecipeBtn = document.getElementById('add-recipe-btn');
const cancelBtn = document.getElementById('cancel-btn');
const searchBar = document.getElementById('search-bar');
const categoryFilter = document.getElementById('category-filter');
const filterFavoritesBtn = document.getElementById('filter-favorites');
const sortTitleBtn = document.getElementById('sort-title');
const sortCategoryBtn = document.getElementById('sort-category');

let recipes = JSON.parse(localStorage.getItem('recipes')) || [];

function renderRecipes(filteredRecipes = recipes) {
    recipeList.innerHTML = '';
    filteredRecipes.forEach((recipe) => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
            <h3>${recipe.title}</h3>
            <p><strong>Category:</strong> ${recipe.category}</p>
            <p><strong>Tags:</strong> ${recipe.tags.join(', ')}</p>
            <p class="${recipe.favorite ? 'favorite' : 'unfavorite'}">Favorite: ${recipe.favorite ? 'Favorite' : 'Unfavorite'}</p>
            <button onclick="editRecipe(${recipe.id})">Edit</button>
            <button onclick="deleteRecipe(${recipe.id})">Delete</button>
        `;
        recipeList.appendChild(recipeCard);
    });
}

function addRecipe(event) {
    event.preventDefault();
    const newRecipe = {
        id: Date.now(),
        title: document.getElementById('title').value,
        category: document.getElementById('category').value,
        ingredients: document.getElementById('ingredients').value.split(','),
        instructions: document.getElementById('instructions').value,
        tags: document.getElementById('tags').value.split(','),
        favorite: document.getElementById('favorite').checked,
    };
    recipes.push(newRecipe);
    localStorage.setItem('recipes', JSON.stringify(recipes));
    renderRecipes();
    closeModal();
}

function editRecipe(id) {
    const recipe = recipes.find(r => r.id === id);
    document.getElementById('title').value = recipe.title;
    document.getElementById('category').value = recipe.category;
    document.getElementById('ingredients').value = recipe.ingredients.join(',');
    document.getElementById('instructions').value = recipe.instructions;
    document.getElementById('tags').value = recipe.tags.join(',');
    document.getElementById('favorite').checked = recipe.favorite;
    recipeForm.onsubmit = (e) => updateRecipe(e, id);
    recipeFormModal.style.display = 'flex';
}

function updateRecipe(event, id) {
    event.preventDefault();
    const updatedRecipe = {
        id,
        title: document.getElementById('title').value,
        category: document.getElementById('category').value,
        ingredients: document.getElementById('ingredients').value.split(','),
        instructions: document.getElementById('instructions').value,
        tags: document.getElementById('tags').value.split(','),
        favorite: document.getElementById('favorite').checked,
    };
    recipes = recipes.map(r => r.id === id ? updatedRecipe : r);
    localStorage.setItem('recipes', JSON.stringify(recipes));
    renderRecipes();
    closeModal();
}

function deleteRecipe(id) {
    recipes = recipes.filter(r => r.id !== id);
    localStorage.setItem('recipes', JSON.stringify(recipes));
    renderRecipes();
}

function closeModal() {
    recipeFormModal.style.display = 'none';
    recipeForm.reset();
    recipeForm.onsubmit = addRecipe;
}

addRecipeBtn.addEventListener('click', () => {
    recipeFormModal.style.display = 'flex';
});

cancelBtn.addEventListener('click', closeModal);

searchBar.addEventListener('input', () => {
    const query = searchBar.value.toLowerCase();
    const filteredRecipes = recipes.filter(r => r.title.toLowerCase().includes(query));
    renderRecipes(filteredRecipes);
});

categoryFilter.addEventListener('change', () => {
    const category = categoryFilter.value;
    const filteredRecipes = category ? recipes.filter(r => r.category === category) : recipes;
    renderRecipes(filteredRecipes);
});

filterFavoritesBtn.addEventListener('click', () => {
    const filteredRecipes = recipes.filter(r => r.favorite);
    renderRecipes(filteredRecipes);
});

sortTitleBtn.addEventListener('click', () => {
    const sortedRecipes = [...recipes].sort((a, b) => a.title.localeCompare(b.title));
    renderRecipes(sortedRecipes);
});

sortCategoryBtn.addEventListener('click', () => {
    const sortedRecipes = [...recipes].sort((a, b) => a.category.localeCompare(b.category));
    renderRecipes(sortedRecipes);
});

renderRecipes();