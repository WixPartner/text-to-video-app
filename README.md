# Text to Video App

## Overview
Welcome to the Text to Video App repository! This project is developed by Ai Devwood Studios and leverages HuggingFace's powerful text-to-video model to convert text prompts into engaging video content. The application is fully functional and deployable to a GitHub page, allowing users to navigate to the page and use the application seamlessly.

## Features
- **Text-to-Video Conversion:** Convert text prompts into video using HuggingFace's API.
- **User-Friendly Interface:** A simple and intuitive web interface for users to generate videos.
- **Continuous Deployment:** Automatic deployment to GitHub pages using GitHub Actions.

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- Python (v3.6 or later)
- Git

### Installation

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/your-org/text-to-video-app.git
   cd text-to-video-app
   ```

2. **Install Node.js Dependencies:**
   ```sh
   npm install
   ```

3. **Set Up Python Environment:**
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   pip install -r requirements.txt
   ```

4. **Configure HuggingFace API Key:**
   - Obtain your HuggingFace API key from [HuggingFace](https://huggingface.co/)
   - Create a `.env` file in the root directory and add your API key:
     ```
     HUGGINGFACE_API_KEY=your_api_key_here
     ```

### Running the Application

1. **Start the Development Server:**
   ```sh
   npm start
   ```

2. **Access the Application:**
   - Open your browser and navigate to `http://localhost:3000`

### Deployment

- The application is configured to deploy automatically to GitHub pages upon pushing to the `main` branch. Ensure the `GITHUB_TOKEN` is set in your repository's secrets for deployment.

## Usage

1. **Enter Text Prompt:**
   - Type your desired text prompt into the text area.

2. **Generate Video:**
   - Click the "Generate Video" button to convert your text into a video.

3. **View Video:**
   - The generated video will be displayed in the video player.

## Contributing

We welcome contributions from the community! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```sh
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```sh
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [HuggingFace](https://huggingface.co/) for providing the text-to-video model and API.
- Ai Devwood Studios for developing and maintaining this project.

## Contact

For any inquiries or support, please contact us at support@aidevwoodstudios.com.

Happy Coding!
