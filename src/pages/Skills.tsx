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
  ],
  dataScienceAndMachineLearning: [
    { name: 'PyTorch', logo: 'pytorch.png' },
    { name: 'TensorFlow', logo: 'Tensorflow.png' },
    { name: 'Keras', logo: 'keras.png' },
    { name: 'Scikit-learn', logo: 'scikit_learn.png' },
    { name: 'LangChain', logo: 'langchain.png' },
    { name: 'LlamaIndex', logo: 'llamaindex.png' },
    { name: 'FastAPI', logo: 'FastAPI.svg' },
    { name: 'OpenCV', logo: 'opencv.png' },
    { name: 'Crew AI', logo: 'crew_ai.png' },
    { name: 'Airflow', logo: 'airflow.png' },
    { name: 'SageMaker', logo: 'AWS SageMaker.png' },
    { name: 'Ollama', logo: 'ollama2.png' },
    { name: 'Hugging Face', logo: 'Hugging Face.png' },
    { name: 'Streamlit', logo: 'streamlit.png' },
    { name: 'Flask', logo: 'flask.png' },
    { name: 'MLflow', logo: 'MLflow.png' },
    { name: 'NLTK', logo: 'nltk.png' },
    { name: 'Groq', logo: 'groq.png' },
    { name: 'PySpark', logo: 'pyspark.png' },
  ],
  devopsAndCloud: [
    { name: 'Shell', logo: 'bash.svg' },
    { name: 'Git', logo: 'git.png' },
    { name: 'GitHub', logo: 'github.png' },
    { name: 'Docker', logo: 'docker.png' },
    { name: 'Kubernetes', logo: 'kubernets.svg' },
    { name: 'Terraform', logo: 'terraform.png' },
    { name: 'AWS', logo: 'aws.svg' },
    { name: 'Azure', logo: 'azure.png' },
    { name: 'Google Cloud', logo: 'gcp.png' },
    { name: 'Civo Cloud', logo: 'civo.jpg' },
    { name: 'Amazon S3', logo: 'amazons3.png' },  
    { name: 'Apache Kafka', logo: 'kafka.png' },
    { name: 'NGNIX', logo: 'nginx.svg' },
    { name: 'Jenkins', logo: 'Jenkins.png' },
    { name: 'Prometheus', logo: 'prometheus.webp' },
    { name: 'Grafana', logo: 'grafana.png' },
    { name: 'Vercel', logo: 'vercel.jpeg' },
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
    { name: 'MaterialUI', logo: 'materialUi.png' },
    { name: 'Tailwind CSS', logo: 'Tailwind_CSS.png' },
    { name: 'Bootstrap', logo: 'boostrap.svg' },
    { name: 'GraphQL', logo: 'graphql.png' },
    { name: 'Figma', logo: 'figma.png' },
    { name: 'JEST', logo: 'jest.png' },
  ],
  databasesAndAnalysisTools: [
    { name: 'MongoDB', logo: 'mongodb.png' },
    { name: 'MySQL', logo: 'mysql.svg' },
    { name: 'PostgreSQL', logo: 'postgresql.svg' },
    { name: 'Redis', logo: 'redis.svg' },
    { name: 'ChromaDB', logo: 'chromadb.png' },
    { name: 'Pinecone', logo: 'pinecone.jpg' },
    { name: 'Cassandra', logo: 'cassandra.svg' },
    { name: 'Tableau', logo: 'Tableau.png' },
    { name: 'Excel', logo: 'excel.png' },
  ],
  tools: [
    { name: 'VS Code', logo: 'vscode.svg' },
    { name: 'Jupyter', logo: 'jupyter.png' },
    { name: 'IntelliJ', logo: 'intellij.svg' },
    { name: 'Postman', logo: 'postman.svg' },
    { name: 'Bruno', logo: 'bruno.png' },
    { name: 'Firebase', logo: 'firebase.svg' },
    { name: 'MatLAB', logo: 'Matlab.png' },
    { name: 'Stripe', logo: 'stripe.png' },
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