## Fusion Fest 🎭

Welcome to the **Fusion Fest** website repository! This project is a dynamic web platform developed to showcase the vibrant cultural fest of NMIMS University, known as 'Chaar Din ka Sapna.' The site provides comprehensive information about the fest, including event schedules, artist line-ups, registration details, and more.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

- **Event Listings**: Detailed information about various events, competitions, and activities.
- **Artist Profiles**: Insights into the artists performing at the fest.
- **Registration System**: Secure user registration and login functionality.
- **Dynamic Scheduling**: Real-time updates of event schedules.
- **Interactive Elements**: Engaging UI components for an enhanced user experience.

## Technologies Used

- **Frontend**:
  - HTML5
  - CSS3
  - JavaScript
- **Backend**:
  - MySQL (Database)
- **Development Environment**:
  - XAMPP (Apache Server and MySQL)

## Setup Instructions

To set up the project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Harsh1260/Harsh1260.github.io.git
   ```

2. **Install XAMPP**:
   - Download and install XAMPP from the [official website](https://www.apachefriends.org/index.html).

3. **Configure the Project**:
   - Place the cloned repository in the `htdocs` directory of your XAMPP installation.
   - Start the Apache and MySQL services from the XAMPP control panel.

4. **Set Up the Database**:
   - Access phpMyAdmin by navigating to `http://localhost/phpmyadmin/` in your browser.
   - Create a new database named `fusion_fest`.
   - Import the provided SQL file (`fusion_fest.sql`) located in the repository to set up the necessary tables.

5. **Configure Database Connection**:
   - Open the `config.php` file in the project directory.
   - Ensure the database credentials (host, username, password, database name) match your local setup.

6. **Run the Application**:
   - Navigate to `http://localhost/Harsh1260.github.io/` in your browser to access the website.

## Usage

- **Home Page**: Overview of Fusion Fest with highlights and announcements.
- **Events**: Browse through the list of events with detailed descriptions.
- **Artists**: Learn about the performers and their profiles.
- **Register/Login**: Create an account or log in to register for events.
- **Schedule**: View the latest event schedules and timings.

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

Please ensure your code adheres to the project's coding standards and includes appropriate documentation.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

Special thanks to the NMIMS University community and all contributors who made this project possible.

---

*Note: This project is a work in progress. Some features may not be fully implemented yet. Stay tuned for updates!*
