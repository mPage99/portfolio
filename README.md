# 🧠 Michael Page – Developer Portfolio (WIP)

Welcome to my personal software development portfolio. This site showcases a curated selection of my projects, focused on backend systems, system-level programming, API development, and more.

---
## 🚀 Featured Projects

### 1. 💽 Disk Scheduling Visualizer
An interactive visualization tool demonstrating various disk scheduling algorithms:
- FCFS (First Come First Served)
- SSTF (Shortest Seek Time First)
- LOOK
- C-LOOK
- Built with Node.js, Express, and Chart.js
- Core algorithms implemented in C for performance

### 2. 🌐 TypeScript HTTP Server
A lightweight HTTP server implementation built from scratch:
- Raw TCP socket handling
- Custom HTTP protocol implementation
- Built with TypeScript for type safety
- Modular request/response architecture

### 3. 📱 iOS Weapon Collection Game
A native iOS collection-based exploration game:
- Built with Swift and UIKit using MVC architecture
- SQLite database integration for weapon management
- Custom touch-based movement controls
- Real-time game world rendering
- Interactive object system with multiple game elements
- Progress tracking and filtering system

---
## 📁 Project Structure
```
web1/
├── block_visualizer/            # Disk Scheduling Project
│   ├── node_modules/
│   ├── public/                  # Static assets
│   │   ├── httpserver.html      # HTTP Server project page
│   │   ├── index.html           # Main visualization page
│   │   ├── main.js              # Chart & visualization logic
│   │   └── styles.css           # Shared styles
│   ├── disk_scheduler/          # C implementation of algorithms
│   ├── server.js                # Express server
│   ├── *_steps.csv              # Algorithm output files
│   └── package.json             # Project dependencies
├── styles/                      # Global stylesheet directory
├── images/                      # Image assets
│   ├── image.png
│   ├── image2.png
│   ├── image3.png
│   ├── image4.png
│   └── me_hiking.png
└── index.html                   # Portfolio landing page
```
---

## 🌟 Features

- 📊 Interactive algorithm visualizations
- 🖥️ Custom HTTP server implementation
- 📱 Mobile-friendly responsive layout
- 🔄 Real-time data processing
- 🎨 Modern, clean UI design
---

## 🛠️ Tech Stack

### Frontend
- HTML5 / CSS3
- JavaScript (vanilla)
- Chart.js for visualizations
- Responsive design
- Font Awesome icons

### Backend
- Node.js
- Express.js
- TypeScript
- C (for algorithm implementations)

---
## 📌 To Do

- [ ] Add another new project 
- [ ] Allow user to send input to Disk Scheduling Sim & show completion times
- [ ] Improve directory structure / implement MVC or another pattern
- [ ] Deploy (via GitHub Pages / Vercel / Netlify)
- [ ] Allow user to interact with the HTTP server 
