import { useState, FormEvent } from 'react';
import { TextField, Button, CircularProgress, FormControl, InputLabel, MenuItem, Select, Typography, Paper, Chip, Grid } from '@mui/material';

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
    'amazons3.png',
    'android-studio.svg',
    'apache.svg',
    'appwrite.png',
    'airflow.png',
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
    'clerk.webp',
    'crew_ai.png',
    'css.png',
    'Dart.png',
    'django.svg',
    'docker.png',
    'EC2 Auto Scaling.svg',
    'excel.png',
    'expressjs.png',
    'FastAPI.svg',
    'figma.png',
    'firebase.svg',
    'flask.png',
    'flutter.png',
    'grafana.png',
    'gcp.png',
    'git.png',
    'github.png',
    'gitlab.svg',
    'Go.svg',
    'graphql.png',
    'groq.png',
    'gpt.webp',
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
    'kafka.png',
    'keras.png',
    'kubernets.svg',
    'langchain.png',
    'linux.png',
    'llamaindex.png',
    'materialUi.png',
    'Matlab.png',
    'MLflow.png',
    'mongodb.png',
    'mongodb.svg',
    'mysql.svg',
    'next.png',
    'nginx.svg',
    'nltk.png',
    'nodejs.png',
    'npm.svg',
    'ollama2.png',
    'opencv.png',
    'oracledb.png',
    'overleaf.png',
    'pinecone.jpg',
    'prisma.png',
    'postgresql.svg',
    'postman.svg',
    'prometheus.webp',
    'pycharm.svg',
    'pyspark.png',
    'python.svg',
    'pytorch.png',
    'r-lang.svg',
    'rabbitmq.png',
    'raspberry_pi.svg',
    'react-native.svg',
    'react.svg',
    'redis.svg',
    'redux.svg',
    'ruby.svg',
    'rust.png',
    'sass.svg',
    'scikit_learn.png',
    'shell.svg',
    'shopify.webp',
    'stackoverflow.svg',
    'streamlit.png',
    'stripe.png',
    'supabase.png',
    'swift.png',
    'Tableau.png',
    'Tailwind_CSS.png',
    'Tensorflow.png',
    'terraform.png',
    'travis-ci.svg',
    'typescript.svg',
    'vercel.jpeg',
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
      <Grid container justifyContent="center" alignItems="center" sx={{ height: '100vh' }}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper elevation={3} sx={{ padding: '20px' }}>
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
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ height: '100vh' }}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Paper elevation={3} sx={{ padding: '20px' }}>
          <form onSubmit={handleSubmitProject}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Title"
                  fullWidth
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Description"
                  multiline
                  rows={4}
                  fullWidth
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="GitHub"
                  fullWidth
                  value={github}
                  onChange={(e) => setGithub(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
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
              </Grid>
              {includeDemo && (
                <Grid item xs={12}>
                  <TextField
                    label="Demo"
                    fullWidth
                    value={demo}
                    onChange={(e) => setDemo(e.target.value)}
                  />
                </Grid>
              )}
              <Grid item xs={12}>
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
                        <img src={`src/assets/${img}`} alt={img} width={20} height={20} />
                        &nbsp;{img}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                {selectedImages.map((img, index) => (
                  <Chip key={index} label={
                    <span>
                      <img src={`/src/assets/${img}`} alt={img} width={20} height={20} />
                      &nbsp;{img}
                    </span>
                  } />
                ))}
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={loading}
                  startIcon={loading ? <CircularProgress size={20} /> : null}
                >
                  {loading ? 'Adding Project...' : 'Add Project'}
                </Button>
                {error && <Typography color="error">{error}</Typography>}
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AddProject;


