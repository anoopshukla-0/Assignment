// Task Manager Module
class TaskManager {
    constructor() {
        this.tasks = this.loadTasks();
        this.filteredTasks = [...this.tasks];
        this.init();
    }

    init() {
        this.bindEvents();
        this.render();
        this.updateStats();
        this.initScrollToTop();
    }

    bindEvents() {
        // Form submission
        document.getElementById('taskForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addTask();
        });

        // Search with debounce
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', this.debounce((e) => {
            this.searchTasks(e.target.value);
        }, 300));

        // Clear all tasks
        document.getElementById('clearAllBtn').addEventListener('click', () => {
            if (confirm('Are you sure you want to clear all tasks?')) {
                this.clearAllTasks();
            }
        });
    }

    addTask() {
        const taskInput = document.getElementById('taskInput');
        const categorySelect = document.getElementById('categorySelect');
        const text = taskInput.value.trim();
        const category = categorySelect.value;

        if (!text) return;

        const newTask = {
            id: Date.now(),
            text,
            category,
            completed: false,
            createdAt: new Date().toISOString()
        };

        this.tasks.unshift(newTask);
        this.saveTasks();
        this.searchTasks(document.getElementById('searchInput').value);
        this.updateStats();
        
        // Clear form
        taskInput.value = '';
        taskInput.focus();

        // Show success animation
        this.showNotification('Task added successfully!', 'success');
    }

    toggleTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            this.saveTasks();
            this.searchTasks(document.getElementById('searchInput').value);
            this.updateStats();
            
            const message = task.completed ? 'Task completed! 🎉' : 'Task marked as pending';
            this.showNotification(message, task.completed ? 'success' : 'info');
        }
    }

    deleteTask(id) {
        if (confirm('Are you sure you want to delete this task?')) {
            this.tasks = this.tasks.filter(t => t.id !== id);
            this.saveTasks();
            this.searchTasks(document.getElementById('searchInput').value);
            this.updateStats();
            this.showNotification('Task deleted', 'info');
        }
    }

    searchTasks(query) {
        const searchTerm = query.toLowerCase().trim();
        if (!searchTerm) {
            this.filteredTasks = [...this.tasks];
        } else {
            this.filteredTasks = this.tasks.filter(task =>
                task.text.toLowerCase().includes(searchTerm) ||
                task.category.toLowerCase().includes(searchTerm)
            );
        }
        this.render();
    }

    clearAllTasks() {
        this.tasks = [];
        this.filteredTasks = [];
        this.saveTasks();
        this.render();
        this.updateStats();
        this.showNotification('All tasks cleared', 'info');
    }

    render() {
        const taskList = document.getElementById('taskList');
        const emptyState = document.getElementById('emptyState');
        const clearAllBtn = document.getElementById('clearAllBtn');

        if (this.filteredTasks.length === 0) {
            taskList.style.display = 'none';
            emptyState.style.display = 'block';
            clearAllBtn.style.display = 'none';
        } else {
            taskList.style.display = 'block';
            emptyState.style.display = 'none';
            clearAllBtn.style.display = this.tasks.length > 0 ? 'inline-flex' : 'none';
        }

        taskList.innerHTML = this.filteredTasks.map(task => `
            <li class="task-item ${task.completed ? 'completed' : ''}" data-id="${task.id}">
                <input 
                    type="checkbox" 
                    class="task-checkbox" 
                    ${task.completed ? 'checked' : ''}
                    onchange="taskManager.toggleTask(${task.id})"
                >
                <span class="task-text ${task.completed ? 'completed' : ''}">${this.escapeHtml(task.text)}</span>
                <span class="task-category category-${task.category}">${task.category}</span>
                <div class="task-actions">
                    <button class="btn btn-danger" onclick="taskManager.deleteTask(${task.id})">
                        🗑️
                    </button>
                </div>
            </li>
        `).join('');
    }

    updateStats() {
        const total = this.tasks.length;
        const completed = this.tasks.filter(t => t.completed).length;
        const pending = total - completed;

        document.getElementById('totalTasks').textContent = total;
        document.getElementById('completedTasks').textContent = completed;
        document.getElementById('pendingTasks').textContent = pending;
    }

    initScrollToTop() {
        const backToTopBtn = document.getElementById('backToTop');
        
        // Throttled scroll event
        window.addEventListener('scroll', this.throttle(() => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }, 100));

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            z-index: 10000;
            animation: slideInRight 0.3s ease;
            font-weight: 500;
        `;
        notification.textContent = message;

        // Add animation keyframes if not already added
        if (!document.querySelector('#notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = `
                @keyframes slideInRight {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideOutRight {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }

        document.body.appendChild(notification);

        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    // Utility functions
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // In-memory storage (since localStorage is not available in Claude.ai artifacts)
    loadTasks() {
        // In a real environment, this would use localStorage:
        // return JSON.parse(localStorage.getItem('tasks') || '[]');
        
        // For demo purposes, return some sample tasks
        return [
            {
                id: 1,
                text: "Review project proposal",
                category: "work",
                completed: false,
                createdAt: new Date().toISOString()
            },
            {
                id: 2,
                text: "Buy groceries",
                category: "personal",
                completed: true,
                createdAt: new Date().toISOString()
            },
            {
                id: 3,
                text: "Study JavaScript modules",
                category: "study",
                completed: false,
                createdAt: new Date().toISOString()
            }
        ];
    }

    saveTasks() {
        // In a real environment, this would use localStorage:
        // localStorage.setItem('tasks', JSON.stringify(this.tasks));
        
        // For demo purposes, we'll just keep tasks in memory
        console.log('Tasks saved:', this.tasks);
    }
}

// Initialize the application
window.taskManager = new TaskManager();

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + Enter to add task
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        const taskInput = document.getElementById('taskInput');
        if (taskInput.value.trim()) {
            document.getElementById('taskForm').dispatchEvent(new Event('submit'));
        }
    }
    
    // Escape to clear search
    if (e.key === 'Escape') {
        const searchInput = document.getElementById('searchInput');
        if (searchInput.value) {
            searchInput.value = '';
            taskManager.searchTasks('');
        }
    }
});

// Focus task input on page load
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('taskInput').focus();
});