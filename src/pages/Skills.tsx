import React from 'react';
import { Typography, Divider } from '@mui/material';
import styled from '@emotion/styled';
import Navbar from '../components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeContext } from '../theme/ThemeContext';

interface Skill {
  name: string;
  logo: string;
}

interface SkillsData {
  programmingLanguages: Skill[];
  dataScienceAndMachineLearning: Skill[];
  devopsAndCloud: Skill[];
  webAndAppDevelopment: Skill[];
  databasesAndAnalysisTools: Skill[];
  tools: Skill[];
}

const SkillsContainer = styled('section')`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;

const SkillList = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const SkillItem = styled('div')`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
    z-index: 2;
  }

  &:hover::after {
    content: attr(data-name);
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    color: #76885b;
    padding: 4px 8px;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    white-space: nowrap;
    z-index: 3;
  }
`;

const SkillItemImg = styled('img')`
  width: 36px;
  height: 36px;
  object-fit: contain;
`;

const CategoryTitleContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
`;

const CategoryTitleText = styled(Typography)`
  font-weight: bold;
  font-size: 18px;
  margin: 0 10px;
`;

const skillsData: SkillsData = {
  programmingLanguages: [
    { name: 'Python', logo: 'python.svg' },
    { name: 'JavaScript', logo: 'javascript.svg' },
    { name: 'TypeScript', logo: 'typescript.svg' },
    { name: 'Julia', logo: 'julia.png' },
    { name: 'Java', logo: 'java.svg' },
    { name: 'C++', logo: 'c++.svg' },
    { name: 'C', logo: 'c.svg' },
    { name: 'Go', logo: 'Go.svg' },
    { name: 'R', logo: 'r-lang.svg' },
    { name: 'Rust', logo: 'rust.png' },
    { name: 'Dart', logo: 'Dart.png' },
    { name: 'Ruby', logo: 'ruby.svg' },
  ],
  dataScienceAndMachineLearning: [
    { name: 'PyTorch', logo: 'pytorch.png' },
    { name: 'TensorFlow', logo: 'Tensorflow.png' },
    { name: 'Keras', logo: 'keras.png' },
    { name: 'Scikit-learn', logo: 'scikit_learn.png' },
    { name: 'SageMaker', logo: 'AWS SageMaker.png' },
    { name: 'LangChain', logo: 'langchain.png' },
    { name: 'LlamaIndex', logo: 'llamaindex.png' },
    { name: 'FastAPI', logo: 'FastAPI.svg' },
    { name: 'OpenCV', logo: 'opencv.png' },
    { name: 'Crew AI', logo: 'crew_ai.png' },
    { name: 'Ollama', logo: 'ollama2.png' },
    { name: 'Hugging Face', logo: 'Hugging Face.png' },
    { name: 'Streamlit', logo: 'streamlit.png' },
    { name: 'Flask', logo: 'flask.png' },
    { name: 'MLflow', logo: 'MLflow.png' },
    { name: 'NLTK', logo: 'nltk.png' },
    { name: 'MatLAB', logo: 'Matlab.png' },
    { name: 'Groq', logo: 'groq.png' },
    { name: 'PySpark', logo: 'pyspark.png' },
  ],
  devopsAndCloud: [
    { name: 'Bash', logo: 'bash.svg' },
    { name: 'Git', logo: 'git.png' },
    { name: 'GitHub', logo: 'github.png' },
    { name: 'Docker', logo: 'docker.png' },
    { name: 'Kubernetes', logo: 'kubernets.svg' },
    { name: 'Terraform', logo: 'terraform.png' },
    { name: 'AWS', logo: 'aws.svg' },
    { name: 'Azure', logo: 'azure.png' },
    { name: 'Google Cloud', logo: 'gcp.png' },
    { name: 'Amazon S3', logo: 'amazons3.png' },
    { name: 'AWS EC2 Auto Scaling', logo: 'EC2 Auto Scaling.svg' },
    { name: 'AWS Lambda', logo: 'AWS Lambda.png' },
    { name: 'Apache', logo: 'apache.svg' },
    { name: 'Apache Kafka', logo: 'kafka.png' },
    { name: 'NGNIX', logo: 'nginx.svg' },
    { name: 'Gitlab', logo: 'gitlab.svg' },
    { name: 'Jenkins', logo: 'Jenkins.png' },
    { name: 'Travis-CI', logo: 'travis-ci.svg' },
    { name: 'Prometheus', logo: 'prometheus.png' },
    { name: 'Grafana', logo: 'grafana.png' },
    { name: 'Vercel', logo: 'vercel.jpeg' },
    { name: 'Heroku', logo: 'heroku.svg' },
  ],
  webAndAppDevelopment: [
    { name: 'HTML', logo: 'html.png' },
    { name: 'CSS', logo: 'css.png' },
    { name: 'Sass', logo: 'sass.svg' },
    { name: 'React', logo: 'react.svg' },
    { name: 'Redux', logo: 'redux.svg' },
    { name: 'Next.js', logo: 'next.png' },
    { name: 'Express.js', logo: 'expressjs.png' },
    { name: 'Node.js', logo: 'nodejs.png' },
    { name: 'NPM', logo: 'npm.svg' },
    { name: 'Bootstrap', logo: 'boostrap.svg' },
    { name: 'MaterialUI', logo: 'materialUi.png' },
    { name: 'Tailwind CSS', logo: 'Tailwind_CSS.png' },
    { name: 'GraphQL', logo: 'graphql.png' },
    { name: 'Django', logo: 'django.svg' },
    { name: 'Flutter', logo: 'flutter.png' },
    { name: 'React native', logo: 'react-native.svg' },
    { name: 'Vite', logo: 'vite.svg' },
    { name: 'Clerk', logo: 'clerk.webp' },
    { name: 'Cloudinary', logo: 'cloudinary.png' },
    { name: 'AppWrite', logo: 'appwrite.png' },
    { name: 'Swift', logo: 'swift.png' },
    { name: 'Figma', logo: 'figma.png' },
    { name: 'JEST', logo: 'jest.png' },
    { name: 'JSON', logo: 'json.svg' },
  ],
  databasesAndAnalysisTools: [
    { name: 'MongoDB', logo: 'mongodb.png' },
    { name: 'MySQL', logo: 'mysql.svg' },
    { name: 'Cassandra', logo: 'cassandra.svg' },
    { name: 'PostgreSQL', logo: 'postgresql.svg' },
    { name: 'Redis', logo: 'redis.svg' },
    { name: 'ChromaDB', logo: 'chromadb.png' },
    { name: 'Pinecone', logo: 'pinecone.jpg' },
    { name: 'Oracle', logo: 'oracledb.png' },
    { name: 'Tableau', logo: 'Tableau.png' },
    { name: 'Excel', logo: 'excel.png' },
  ],
  tools: [
    { name: 'VS Code', logo: 'vscode.svg' },
    { name: 'PyCharm', logo: 'pycharm.svg' },
    { name: 'Jupyter', logo: 'jupyter.png' },
    { name: 'IntelliJ', logo: 'intellij.svg' },
    { name: 'Postman', logo: 'postman.svg' },
    { name: 'Bruno', logo: 'bruno.png' },
    { name: 'Firebase', logo: 'firebase.svg' },
    { name: 'Supabase', logo: 'supabase.png' },
    { name: 'Prisma', logo: 'prisma.png' },
    { name: 'Stripe', logo: 'stripe.png' },
    { name: 'Android Studio', logo: 'android-studio.svg' },
    { name: 'Xcode', logo: 'xcode.png' },
    { name: 'GPT', logo: 'gpt.webp' },
    { name: 'StackOverflow', logo: 'stackoverflow.svg' },
    { name: 'Linux', logo: 'linux.png' },
    { name: 'Raspberry Pi', logo: 'raspberry_pi.svg' },
    { name: 'Overleaf', logo: 'overleaf.png' },
    { name: 'Shopify', logo: 'shopify.webp' },
  ],
};

const Skills: React.FC = () => {
  const themeContext = React.useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('Skills must be used within a ThemeProvider');
  }

  const { mode } = themeContext;

  const theme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <SkillsContainer id="skills">
        <Navbar />
        <Typography variant="h3" component="h2" style={{ textAlign: 'center', color: '#76885B' }}>
          My Skills
        </Typography>
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} style={{ width: '100%', marginBottom: '20px' }}>
            <CategoryTitleContainer>
              <Divider style={{ flexGrow: 1 }} />
              <CategoryTitleText variant="h6">
                {category
                  .replace(/([A-Z])/g, ' $1')
                  .replace(/^./, (str) => str.toUpperCase())
                  .replace('And', 'and')}
              </CategoryTitleText>
              <Divider style={{ flexGrow: 1 }} />
            </CategoryTitleContainer>
            <SkillList>
              {skills.map((skill: Skill) => (
                <SkillItem key={skill.name} data-name={skill.name}>
                  <SkillItemImg src={`${import.meta.env.VITE_SKILL_PATH}/${skill.logo}`} alt={skill.name} />
                </SkillItem>
              ))}
            </SkillList>
          </div>
        ))}
      </SkillsContainer>
    </ThemeProvider>
  );
};

export default Skills;