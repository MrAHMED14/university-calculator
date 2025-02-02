## About This Project

This project is a web-based application designed to assist college students in calculating their grades and GPAs. It features a user-friendly interface that allows students to input their course units, grades, and credits, which are then used to compute their GPA. This project aims to simplify the grade calculation process for students.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- Package manager like: [pnpm](https://pnpm.io/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MrAHMED14/university-calculator.git
   cd university-calculator
   ```

2. Install the dependencies:

   ```bash
   pnpm install
   ```

### Running the Development Server

1. Start the development server:

   ```bash
   pnpm dev
   ```

2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the result.

### Building for Production

To create an optimized production build:

```bash
pnpm build
```

## TODO List

- [ ] Create a database to store the config of calculations
- [ ] Add a button on the manual calculator page to save the config
- [x] ~~Implement a feature to calculate GPA based on config~~
- [x] ~~Create a generic GPA calculator page~~
- [x] ~~Create a page to display all available configs~~
- [ ] Implement user authentication
