// MergeMind Shared Test Suite Logic

// Helper to show modern toast notification
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  
  let icon = 'ℹ️';
  if (type === 'success') icon = '✅';
  if (type === 'warning') icon = '⚠️';
  if (type === 'danger') icon = '❌';

  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Sample conflict test cases
const sampleConflicts = {
  python: {
    title: "Python Arithmetic Conflict (calc.py)",
    filename: "calc.py",
    branchA: "feature/multiply",
    branchB: "feature/divide",
    codeA: `def calculate(a, b):
    # Feature A: Perform multiplication
    return a * b`,
    codeB: `def calculate(a, b):
    # Feature B: Perform safe division
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b`,
    resolved: `def calculate(a, b, op="multiply"):
    # MergeMind Resolved: Unified operation handler
    if op == "divide":
        if b == 0:
            raise ValueError("Cannot divide by zero")
        return a / b
    return a * b`
  },
  frontend: {
    title: "React Component Conflict (Header.jsx)",
    filename: "components/Header.jsx",
    branchA: "ui/dark-mode",
    branchB: "ui/redesign-v2",
    codeA: `<header className="nav-dark">
  <Logo variant="neon" />
  <DarkModeToggle active={true} />
</header>`,
    codeB: `<header className="nav-glassmorphism">
  <Logo variant="minimal" />
  <UserMenu avatarUrl={user.avatar} />
</header>`,
    resolved: `<header className="nav-glassmorphism dark">
  <Logo variant="minimal-neon" />
  <DarkModeToggle active={true} />
  <UserMenu avatarUrl={user.avatar} />
</header>`
  },
  config: {
    title: "Package JSON Dependencies Conflict (package.json)",
    filename: "package.json",
    branchA: "chore/update-react-19",
    branchB: "chore/add-lucide-icons",
    codeA: `"dependencies": {
  "react": "^19.1.0",
  "react-dom": "^19.1.0"
}`,
    codeB: `"dependencies": {
  "react": "^18.2.0",
  "lucide-react": "^0.460.0"
}`,
    resolved: `"dependencies": {
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "lucide-react": "^0.460.0"
}`
  }
};

// Global state / settings
const defaultSettings = {
  aiModel: 'Gemini 1.5 Pro',
  mergeStrategy: 'hybrid',
  autoCommit: true,
  strictSemanticCheck: true,
  telemetry: true
};

function getSettings() {
  const saved = localStorage.getItem('mergemind_settings');
  return saved ? JSON.parse(saved) : defaultSettings;
}

function saveSettings(settings) {
  localStorage.setItem('mergemind_settings', JSON.stringify(settings));
}

// Active page indicator
document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});

