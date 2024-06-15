import { useState, FormEvent } from 'react';
import { TextField, Button, CircularProgress, FormControl, InputLabel, MenuItem, Select, Typography, Paper, Chip } from '@mui/material';

const AddProject = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [github, setGithub] = useState('');
  const [demo, setDemo] = useState('');
  const [includeDemo, setIncludeDemo] = useState(false); // New state for including demo
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const images = [
    'amazon_s3.svg',
    'android-studio.svg',
    'Apache Kafka.png',
    'apache.svg',
    'AWS Lambda.png',
    'AWS SageMaker.png',
    'AWS.svg',
    'azure.png',
    'bash.svg',
    'boostrap.svg',
    'bruno.png',
    'c.svg',
    'c++.svg',
    'cassandra.svg',
    'chromadb.png',
    'crew_ai.png',
    'css.png',
    'Dart.png',
    'django.svg',
    'docker.png',
    'EC2 Auto Scaling.svg',
    'excel.png',
    'express.png',
    'FastAPI.svg',
    'figma.png',
    'firebase.svg',
    'flask.svg',
    'flutter.png',
    'gcp.png',
    'git.svg',
    'github.svg',
    'gitlab.svg',
    'Go.svg',
    'graphql.png',
    'groq.webp',
    'heroku.svg',
    'html.png',
    'Hugging Face.png',
    'intellij.svg',
    'java.svg',
    'javascript.svg',
    'Jenkins.png',
    'jest.png',
    'json.svg',
    'julia.png',
    'jupyter.png',
    'keras.png',
    'kubernets.svg',
    'langchain.png',
    'linux.svg',
    'llamaindex.png',
    'materialUi.png',
    'Matlab.png',
    'MLflow.png',
    'mongodb.png',
    'mongodb.svg',
    'mysql.svg',
    'nextjs.png',
    'nginx.svg',
    'nltk.png',
    'nodejs.png',
    'npm.svg',
    'ollama.png',
    'openai.png',
    'opencv.png',
    'oracledb.png',
    'overleaf.svg',
    'pinecone.png',
    'postgresql.svg',
    'postman.svg',
    'prometheus.png',
    'pycharm.svg',
    'pyspark.png',
    'python.svg',
    'pytorch.png',
    'r-lang.svg',
    'raspberry_pi.svg',
    'react-native.svg',
    'react.svg',
    'redis.svg',
    'redux.svg',
    'ruby.svg',
    'rust.svg',
    'sass.svg',
    'scikit_learn.png',
    'shopify.webp',
    'stackoverflow.svg',
    'streamlit.png',
    'swift.png',
    'Tableau.png',
    'Tailwind_CSS.png',
    'Tensorflow.png',
    'terraform.png',
    'travis-ci.svg',
    'typescript.svg',
    'vscode.svg',
    'xcode.png'
  ];

  const handleSubmitPassword = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const envPassword = import.meta.env.VITE_REACT_APP_PASSWORD;

    // Check if the password matches the expected value
    if (password === envPassword) {
      setIsAuthenticated(true);
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  const handleSubmitProject = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const project = { title, description, category, github, demo: includeDemo ? demo : '', images: selectedImages };

    try {
      setLoading(true);
      const response = await fetch(import.meta.env.VITE_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(project),
      });

      if (response.ok) {
        console.log('Project added successfully');
        // Reset form fields
        setTitle('');
        setDescription('');
        setCategory('');
        setGithub('');
        setDemo('');
        setSelectedImages([]);
        setIncludeDemo(false);
      } else {
        setError('Failed to add project');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to add project');
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', marginTop: '20px' }}>
        <form onSubmit={handleSubmitPassword}>
          <TextField
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained">Submit</Button>
          {error && <Typography color="error">{error}</Typography>}
        </form>
      </Paper>
    );
  }

  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', marginTop: '20px' }}>
      <form onSubmit={handleSubmitProject}>
        <TextField
          label="Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Description"
          multiline
          rows={4}
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <FormControl fullWidth>
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value as string)}
          >
            <MenuItem value="Data Science">Data Science</MenuItem>
            <MenuItem value="Machine Learning/AI">Machine Learning/AI</MenuItem>
            <MenuItem value="Web Development">Web Development</MenuItem>
            <MenuItem value="Cloud & DevOps">Cloud & DevOps</MenuItem>
            <MenuItem value="Freelance">Freelance</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="GitHub"
          fullWidth
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        />
        <FormControl fullWidth>
          <InputLabel id="include-demo-label">Include Demo</InputLabel>
          <Select
            labelId="include-demo-label"
            id="include-demo"
            value={includeDemo ? 'yes' : 'no'}
            onChange={(e) => setIncludeDemo(e.target.value === 'yes')}
          >
            <MenuItem value="yes">Yes</MenuItem>
            <MenuItem value="no">No</MenuItem>
          </Select>
        </FormControl>
        {includeDemo && (
          <TextField
            label="Demo"
            fullWidth
            value={demo}
            onChange={(e) => setDemo(e.target.value)}
          />
        )}
        <FormControl fullWidth>
          <InputLabel id="image-label">Images</InputLabel>
          <Select
            labelId="image-label"
            id="image"
            multiple
            value={selectedImages}
            onChange={(e) => setSelectedImages(e.target.value as string[])}
          >
            {images.map((img) => (
              <MenuItem key={img} value={img}>
                <img src={`public/${img}`} alt={img} width={20} height={20} />
                &nbsp;{img}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {selectedImages.map((img, index) => (
          <Chip key={index} label={
            <span>
              <img src={`public/${img}`} alt={img} width={20} height={20} />
              &nbsp;{img}
            </span>
          } />
        ))}
        <Button
          type="submit"
          variant="contained"
          disabled={loading}
          startIcon={loading ? <CircularProgress size={20} /> : null}
        >
          {loading ? 'Adding Project...' : 'Add Project'}
        </Button>
        {error && <Typography color="error">{error}</Typography>}
      </form>
    </Paper>
  );
};

export default AddProject;