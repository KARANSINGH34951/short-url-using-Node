# URL Shortener

URL Shortener is a web application that allows users to shorten long URLs for easier sharing and management. This project is built using Node.js and demonstrates server-side scripting, database management, and RESTful API development.

## Features

- **Shorten URLs**: Convert long URLs into short, manageable links.
- **Redirect**: Redirect users to the original URL when they access the shortened link.
- **API Endpoints**: Provide RESTful API endpoints for URL shortening and redirection.

## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web framework for Node.js to handle routing and middleware.
- **MongoDB**: NoSQL database for storing URL mappings.

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/KARANSINGH34951/short-url-using-Node
    ```
2. **Navigate to the project directory:**
    ```bash
    cd url-shortener
    ```
3. **Install dependencies:**
    ```bash
    npm install
    ```
4. **Set up environment variables:**
    Create a `.env` file in the root directory and add your MongoDB connection string:
    ```
    MONGODB_URI=your_mongodb_connection_string
    ```
5. **Start the server:**
    ```bash
    npm start
    ```

## Usage

1. **Access the application:**
    Open your browser and go to `http://localhost:3000`.
2. **Shorten a URL:**
    Enter a long URL in the input field and click "Shorten".
3. **Use the shortened URL:**
    Copy the shortened URL and share it. Accessing this URL will redirect to the original long URL.

## API Endpoints

- **POST /shorten**: Shortens a given long URL.
    - **Request Body**: `{ "longUrl": "http://example.com" }`
    - **Response**: `{ "shortUrl": "http://short.url/abc123" }`

- **GET /:shortUrl**: Redirects to the original long URL.

## Folder Structure

```
url-shortener/
├── config/
│   ├── db.js
├── controllers/
│   ├── urlController.js
├── models/
│   ├── Url.js
├── routes/
│   ├── urlRoutes.js
├── views/
│   ├── index.html
├── .env
├── .gitignore
├── package.json
├── server.js
└── ...
```

## Contributing

Contributions are welcome! Please fork the repository and use a feature branch. Pull requests are warmly welcomed.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or feedback, feel free to contact me at [ceitkaransingh2026@gmail.com].
