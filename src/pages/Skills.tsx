// import React from 'react';
// import { Typography, Divider } from '@mui/material';
// import styled from '@emotion/styled';
// import Navbar from '../components/Navbar';

// interface Skill {
//   name: string;
//   logo: string;
// }

// interface SkillsData {
//   programmingLanguages: Skill[];
//   dataScienceAndMachineLearning: Skill[];
//   devopsAndCloud: Skill[];
//   webAndAppDevelopment: Skill[];
//   databasesAndAnalysisTools: Skill[];
//   tools: Skill[];
// }

// const SkillsContainer = styled('section')`
//   margin: 0;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 20px;
//   padding: 20px;
//   background-color: white;
// `;

// const SkillList = styled('div')`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 10px;
//   justify-content: center;
// `;

// const SkillItem = styled('div')`
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 40px;
//   height: 40px;
//   transition: transform 0.2s;

//   &:hover {
//     transform: scale(1.2);
//     z-index: 2;
//   }

//   &:hover::after {
//     content: attr(data-name);
//     position: absolute;
//     top: 50px;
//     left: 50%;
//     transform: translateX(-50%);
//     background-color: #fff;
//     color: #76885b;
//     padding: 4px 8px;
//     border-radius: 4px;
//     box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//     white-space: nowrap;
//     z-index: 3;
//   }
// `;

// const SkillItemImg = styled('img')`
//   width: 36px;
//   height: 36px;
//   object-fit: contain;
// `;

// const CategoryTitleContainer = styled('div')`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   margin-bottom: 10px;
// `;

// const CategoryTitleText = styled(Typography)`
//   font-weight: bold;
//   font-size: 18px;
//   margin: 0 10px;
// `;

// const skillsData: SkillsData = {
//   programmingLanguages: [
//     { name: 'Python', logo: 'src/images/python.svg' },
//     { name: 'JavaScript', logo: 'src/images/javascript.svg' },
//     { name: 'TypeScript', logo: 'src/images/typescript.svg' },
//     { name: 'Julia', logo: 'src/images/julia.png' },
//     { name: 'Java', logo: 'src/images/java.svg' },
//     { name: 'C++', logo: 'src/images/c++.svg' },
//     { name: 'C', logo: 'src/images/c.svg' },
//     { name: 'Go', logo: 'src/images/Go.svg' },
//     { name: 'R', logo: 'src/images/r-lang.svg' },
//     { name: 'Rust', logo: 'src/images/rust.svg' },
//     { name: 'Dart', logo: 'src/images/Dart.png' },
//     { name: 'Ruby', logo: 'src/images/ruby.svg' },
//   ],
//   dataScienceAndMachineLearning: [
//     { name: 'PyTorch', logo: 'src/images/pytorch.png' },
//     { name: 'TensorFlow', logo: 'src/images/Tensorflow.png' },
//     { name: 'Keras', logo: 'src/images/keras.png' },
//     { name: 'Scikit-learn', logo: 'src/images/scikit_learn.png' },
//     { name: 'SageMaker', logo: 'src/images/AWS SageMaker.png' },
//     { name: 'LangChain', logo: 'src/images/langchain.png' },
//     { name: 'LlamaIndex', logo: 'src/images/llamaindex.png' },
//     { name: 'FastAPI', logo: 'src/images/FastAPI.svg' },
//     { name: 'OpenCV', logo: 'src/images/opencv.png' },
//     { name: 'Crew AI', logo: 'src/images/crew_ai.png' },
//     { name: 'Ollama', logo: 'src/images/ollama.png' },
//     { name: 'Hugging Face', logo: 'src/images/Hugging Face.png' },
//     { name: 'Streamlit', logo: 'src/images/streamlit.png' },
//     { name: 'Flask', logo: 'src/images/flask.svg' },
//     { name: 'MLflow', logo: 'src/images/MLflow.png' },
//     { name: 'NLTK', logo: 'src/images/nltk.png' },
//     { name: 'MatLAB', logo: 'src/images/Matlab.png' },
//     { name: 'Groq', logo: 'src/images/groq.webp' },
//     { name: 'PySpark', logo: 'src/images/pyspark.png' },
//   ],
//   devopsAndCloud: [
//     { name: 'Bash', logo: 'src/images/bash.svg' },
//     { name: 'Git', logo: 'src/images/git.svg' },
//     { name: 'GitHub', logo: 'src/images/github.svg' },
//     { name: 'Docker', logo: 'src/images/docker.png' },
//     { name: 'Kubernetes', logo: 'src/images/kubernets.svg' },
//     { name: 'Terraform', logo: 'src/images/terraform.png' },
//     { name: 'AWS', logo: 'src/images/aws.svg' },
//     { name: 'Azure', logo: 'src/images/azure.png' },
//     { name: 'Google Cloud', logo: 'src/images/gcp.png' },
//     { name: 'Amazon S3', logo: 'src/images/amazon_s3.svg' },
//     { name: 'AWS EC2 Auto Scaling', logo: 'src/images/EC2 Auto Scaling.svg' },
//     { name: 'AWS Lambda', logo: 'src/images/AWS Lambda.png' },
//     { name: 'Apache', logo: 'src/images/apache.svg' },
//     { name: 'Apache Kafka', logo: 'src/images/Apache Kafka.png' },
//     { name: 'NGNIX', logo: 'src/images/nginx.svg' },
//     { name: 'Gitlab', logo: 'src/images/gitlab.svg' },
//     { name: 'Jenkins', logo: 'src/images/Jenkins.png' },
//     { name: 'Travis-CI', logo: 'src/images/travis-ci.svg' },
//     { name: 'Prometheus', logo: 'src/images/Prometheus.png' },
//     { name: 'Heroku', logo: 'src/images/heroku.svg' },
//   ],
//   webAndAppDevelopment: [
//     { name: 'HTML', logo: 'src/images/html.png' },
//     { name: 'CSS', logo: 'src/images/css.png' },
//     { name: 'Sass', logo: 'src/images/sass.svg' },
//     { name: 'React', logo: 'src/images/react.svg' },
//     { name: 'Redux', logo: 'src/images/redux.svg' },
//     { name: 'Next.js', logo: 'src/images/nextjs.png' },
//     { name: 'Express.js', logo: 'src/images/Express.png' },
//     { name: 'Node.js', logo: 'src/images/nodejs.png' },
//     { name: 'NPM', logo: 'src/images/npm.svg' },
//     { name: 'Bootstrap', logo: 'src/images/boostrap.svg' },
//     { name: 'MaterialUI', logo: 'src/images/materialUi.png' },
//     { name: 'Tailwind CSS', logo: 'src/images/Tailwind_CSS.png' },
//     { name: 'GraphQL', logo: 'src/images/graphql.png' },
//     { name: 'Django', logo: 'src/images/django.svg' },
//     { name: 'Flutter', logo: 'src/images/flutter.png' },
//     { name: 'React native', logo: 'src/images/react-native.svg' },
//     { name: 'Swift', logo: 'src/images/swift.png' },
//     { name: 'Figma', logo: 'src/images/figma.png' },
//     { name: 'JEST', logo: 'src/images/jest.png' },
//     { name: 'JSON', logo: 'src/images/json.svg' },
//   ],
//   databasesAndAnalysisTools: [
//     { name: 'MongoDB', logo: 'src/images/mongodb.png' },
//     { name: 'MySQL', logo: 'src/images/mysql.svg' },
//     { name: 'Cassandra', logo: 'src/images/cassandra.svg' },
//     { name: 'PostgreSQL', logo: 'src/images/postgresql.svg' },
//     { name: 'Firebase', logo: 'src/images/firebase.svg' },
//     { name: 'Redis', logo: 'src/images/redis.svg' },
//     { name: 'ChromaDB', logo: 'src/images/chromadb.png' },
//     { name: 'Pinecone', logo: 'src/images/pinecone.png' },
//     { name: 'Oracle', logo: 'src/images/oracledb.png' },
//     { name: 'Tableau', logo: 'src/images/Tableau.png' },
//     { name: 'Excel', logo: 'src/images/excel.png' },
//   ],
//   tools: [
//     { name: 'VS Code', logo: 'src/images/vscode.svg' },
//     { name: 'PyCharm', logo: 'src/images/pycharm.svg' },
//     { name: 'Jupyter', logo: 'src/images/jupyter.png' },
//     { name: 'IntelliJ', logo: 'src/images/intellij.svg' },
//     { name: 'Postman', logo: 'src/images/postman.svg' },
//     { name: 'Bruno', logo: 'src/images/bruno.png' },
//     { name: 'Android Studio', logo: 'src/images/android-studio.svg' },
//     { name: 'Xcode', logo: 'src/images/xcode.png' },
//     { name: 'GPT', logo: 'src/images/openai.png' },
//     { name: 'StackOverflow', logo: 'src/images/stackoverflow.svg' },
//     { name: 'Linux', logo: 'src/images/linux.svg' },
//     { name: 'Raspberry Pi', logo: 'src/images/raspberry_pi.svg' },
//     { name: 'Overleaf', logo: 'src/images/overleaf.svg' },
//     { name: 'Shopify', logo: 'src/images/shopify.webp' },


//   ],
// };

// const Skills: React.FC = () => {
//   return (
//     <SkillsContainer id="skills">
//       <Navbar />
//       <Typography variant="h4" component="h2" style={{ textAlign: 'center', color: '#76885B' }}>
//         My Skills
//       </Typography>
//       {Object.entries(skillsData).map(([category, skills]) => (
//         <div key={category} style={{ width: '100%', marginBottom: '20px' }}>
//           <CategoryTitleContainer>
//             <Divider style={{ flexGrow: 1 }} />
//             <CategoryTitleText variant="h6">
//               {category
//                 .replace(/([A-Z])/g, ' $1')
//                 .replace(/^./, (str) => str.toUpperCase())
//                 .replace('And', 'and')}
//             </CategoryTitleText>
//             <Divider style={{ flexGrow: 1 }} />
//           </CategoryTitleContainer>
//           <SkillList>
//             {skills.map((skill: Skill) => (
//               <SkillItem key={skill.name} data-name={skill.name}>
//                 <SkillItemImg src={skill.logo} alt={skill.name} />
//               </SkillItem>
//             ))}
//           </SkillList>
//         </div>
//       ))}
//     </SkillsContainer>
//   );
// };

// export default Skills;










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
    { name: 'Python', logo: 'src/images/python.svg' },
    { name: 'JavaScript', logo: 'src/images/javascript.svg' },
    { name: 'TypeScript', logo: 'src/images/typescript.svg' },
    { name: 'Julia', logo: 'src/images/julia.png' },
    { name: 'Java', logo: 'src/images/java.svg' },
    { name: 'C++', logo: 'src/images/c++.svg' },
    { name: 'C', logo: 'src/images/c.svg' },
    { name: 'Go', logo: 'src/images/Go.svg' },
    { name: 'R', logo: 'src/images/r-lang.svg' },
    { name: 'Rust', logo: 'src/images/rust.svg' },
    { name: 'Dart', logo: 'src/images/Dart.png' },
    { name: 'Ruby', logo: 'src/images/ruby.svg' },
  ],
  dataScienceAndMachineLearning: [
    { name: 'PyTorch', logo: 'src/images/pytorch.png' },
    { name: 'TensorFlow', logo: 'src/images/Tensorflow.png' },
    { name: 'Keras', logo: 'src/images/keras.png' },
    { name: 'Scikit-learn', logo: 'src/images/scikit_learn.png' },
    { name: 'SageMaker', logo: 'src/images/AWS SageMaker.png' },
    { name: 'LangChain', logo: 'src/images/langchain.png' },
    { name: 'LlamaIndex', logo: 'src/images/llamaindex.png' },
    { name: 'FastAPI', logo: 'src/images/FastAPI.svg' },
    { name: 'OpenCV', logo: 'src/images/opencv.png' },
    { name: 'Crew AI', logo: 'src/images/crew_ai.png' },
    { name: 'Ollama', logo: 'src/images/ollama.png' },
    { name: 'Hugging Face', logo: 'src/images/Hugging Face.png' },
    { name: 'Streamlit', logo: 'src/images/streamlit.png' },
    { name: 'Flask', logo: 'src/images/flask.svg' },
    { name: 'MLflow', logo: 'src/images/MLflow.png' },
    { name: 'NLTK', logo: 'src/images/nltk.png' },
    { name: 'MatLAB', logo: 'src/images/Matlab.png' },
    { name: 'Groq', logo: 'src/images/groq.webp' },
    { name: 'PySpark', logo: 'src/images/pyspark.png' },
  ],
  devopsAndCloud: [
    { name: 'Bash', logo: 'src/images/bash.svg' },
    { name: 'Git', logo: 'src/images/git.svg' },
    { name: 'GitHub', logo: 'src/images/github.svg' },
    { name: 'Docker', logo: 'src/images/docker.png' },
    { name: 'Kubernetes', logo: 'src/images/kubernets.svg' },
    { name: 'Terraform', logo: 'src/images/terraform.png' },
    { name: 'AWS', logo: 'src/images/aws.svg' },
    { name: 'Azure', logo: 'src/images/azure.png' },
    { name: 'Google Cloud', logo: 'src/images/gcp.png' },
    { name: 'Amazon S3', logo: 'src/images/amazon_s3.svg' },
    { name: 'AWS EC2 Auto Scaling', logo: 'src/images/EC2 Auto Scaling.svg' },
    { name: 'AWS Lambda', logo: 'src/images/AWS Lambda.png' },
    { name: 'Apache', logo: 'src/images/apache.svg' },
    { name: 'Apache Kafka', logo: 'src/images/Apache Kafka.png' },
    { name: 'NGNIX', logo: 'src/images/nginx.svg' },
    { name: 'Gitlab', logo: 'src/images/gitlab.svg' },
    { name: 'Jenkins', logo: 'src/images/Jenkins.png' },
    { name: 'Travis-CI', logo: 'src/images/travis-ci.svg' },
    { name: 'Prometheus', logo: 'src/images/Prometheus.png' },
    { name: 'Heroku', logo: 'src/images/heroku.svg' },
  ],
  webAndAppDevelopment: [
    { name: 'HTML', logo: 'src/images/html.png' },
    { name: 'CSS', logo: 'src/images/css.png' },
    { name: 'Sass', logo: 'src/images/sass.svg' },
    { name: 'React', logo: 'src/images/react.svg' },
    { name: 'Redux', logo: 'src/images/redux.svg' },
    { name: 'Next.js', logo: 'src/images/nextjs.png' },
    { name: 'Express.js', logo: 'src/images/Express.png' },
    { name: 'Node.js', logo: 'src/images/nodejs.png' },
    { name: 'NPM', logo: 'src/images/npm.svg' },
    { name: 'Bootstrap', logo: 'src/images/boostrap.svg' },
    { name: 'MaterialUI', logo: 'src/images/materialUi.png' },
    { name: 'Tailwind CSS', logo: 'src/images/Tailwind_CSS.png' },
    { name: 'GraphQL', logo: 'src/images/graphql.png' },
    { name: 'Django', logo: 'src/images/django.svg' },
    { name: 'Flutter', logo: 'src/images/flutter.png' },
    { name: 'React native', logo: 'src/images/react-native.svg' },
    { name: 'Swift', logo: 'src/images/swift.png' },
    { name: 'Figma', logo: 'src/images/figma.png' },
    { name: 'JEST', logo: 'src/images/jest.png' },
    { name: 'JSON', logo: 'src/images/json.svg' },
  ],
  databasesAndAnalysisTools: [
    { name: 'MongoDB', logo: 'src/images/mongodb.png' },
    { name: 'MySQL', logo: 'src/images/mysql.svg' },
    { name: 'Cassandra', logo: 'src/images/cassandra.svg' },
    { name: 'PostgreSQL', logo: 'src/images/postgresql.svg' },
    { name: 'Firebase', logo: 'src/images/firebase.svg' },
    { name: 'Redis', logo: 'src/images/redis.svg' },
    { name: 'ChromaDB', logo: 'src/images/chromadb.png' },
    { name: 'Pinecone', logo: 'src/images/pinecone.png' },
    { name: 'Oracle', logo: 'src/images/oracledb.png' },
    { name: 'Tableau', logo: 'src/images/Tableau.png' },
    { name: 'Excel', logo: 'src/images/excel.png' },
  ],
  tools: [
    { name: 'VS Code', logo: 'src/images/vscode.svg' },
    { name: 'PyCharm', logo: 'src/images/pycharm.svg' },
    { name: 'Jupyter', logo: 'src/images/jupyter.png' },
    { name: 'IntelliJ', logo: 'src/images/intellij.svg' },
    { name: 'Postman', logo: 'src/images/postman.svg' },
    { name: 'Bruno', logo: 'src/images/bruno.png' },
    { name: 'Android Studio', logo: 'src/images/android-studio.svg' },
    { name: 'Xcode', logo: 'src/images/xcode.png' },
    { name: 'GPT', logo: 'src/images/openai.png' },
    { name: 'StackOverflow', logo: 'src/images/stackoverflow.svg' },
    { name: 'Linux', logo: 'src/images/linux.svg' },
    { name: 'Raspberry Pi', logo: 'src/images/raspberry_pi.svg' },
    { name: 'Overleaf', logo: 'src/images/overleaf.svg' },
    { name: 'Shopify', logo: 'src/images/shopify.webp' },


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
        <Typography variant="h4" component="h2" style={{ textAlign: 'center', color: '#76885B' }}>
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
                  <SkillItemImg src={skill.logo} alt={skill.name} />
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























// // import React, { useContext } from 'react';
// // import { Typography, Divider } from '@mui/material';
// // import styled from '@emotion/styled';
// // import Navbar from '../components/Navbar';
// // import { ThemeContext } from '../theme/ThemeContext'; // Import the ThemeContext

// // interface Skill {
// //   name: string;
// //   logo: string;
// // }

// // interface SkillsData {
// //   programmingLanguages: Skill[];
// //   dataScienceAndMachineLearning: Skill[];
// //   devopsAndCloud: Skill[];
// //   webAndAppDevelopment: Skill[];
// //   databasesAndAnalysisTools: Skill[];
// //   tools: Skill[];
// // }

// // // const SkillsContainer = styled('section')<{ theme: any }>(({ theme }) => ({
// // //   display: 'flex',
// // //   flexDirection: 'column',
// // //   alignItems: 'center',
// // //   gap: 20,
// // //   padding: 20,
// // //   backgroundColor: theme.palette.background.default,
// // //   color: theme.palette.text.primary,
// // //   width: '100%',
// // //   maxWidth: 1200,
// // //   margin: "0 auto",
// // // }));

// // const SkillsContainer = styled('section')<{ theme: any }>(({ theme }) => ({
// //   display: 'flex',
// //   flexDirection: 'column',
// //   alignItems: 'center',
// //   gap: 20,
// //   padding: 20,
// //   backgroundColor: theme.palette.background.default,
// //   color: theme.palette.text.primary,
// //   width: '100%',
// //   maxWidth: 1200,
// //   margin: '0 auto',
// // }));

// // const SkillList = styled('div')({
// //   display: 'flex',
// //   flexWrap: 'wrap',
// //   gap: 10,
// //   justifyContent: 'center',
// // });

// // const SkillItem = styled('div')({
// //   position: 'relative',
// //   display: 'flex',
// //   alignItems: 'center',
// //   justifyContent: 'center',
// //   width: 40,
// //   height: 40,
// //   transition: 'transform 0.2s',
// //   '&:hover': {
// //     transform: 'scale(1.2)',
// //     zIndex: 2,
// //   },
// //   '&:hover::after': {
// //     content: 'attr(data-name)',
// //     position: 'absolute',
// //     top: 50,
// //     left: '50%',
// //     transform: 'translateX(-50%)',
// //     backgroundColor: '#fff',
// //     color: '#76885b',
// //     padding: '4px 8px',
// //     borderRadius: 4,
// //     boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
// //     whiteSpace: 'nowrap',
// //     zIndex: 3,
// //   },
// // });

// // const SkillItemImg = styled('img')({
// //   width: 36,
// //   height: 36,
// //   objectFit: 'contain',
// // });

// // const CategoryTitleContainer = styled('div')({
// //   display: 'flex',
// //   alignItems: 'center',
// //   justifyContent: 'center',
// //   width: '100%',
// //   marginBottom: 10,
// // });

// // const CategoryTitleText = styled(Typography)({
// //   fontWeight: 'bold',
// //   fontSize: 18,
// //   margin: '0 10px',
// // });

// // const skillsData: SkillsData = {
// //   programmingLanguages: [
// //     { name: 'Python', logo: 'src/images/python.svg' },
// //     { name: 'JavaScript', logo: 'src/images/javascript.svg' },
// //     { name: 'TypeScript', logo: 'src/images/typescript.svg' },
// //     { name: 'Julia', logo: 'src/images/julia.png' },
// //     { name: 'Java', logo: 'src/images/java.svg' },
// //     { name: 'C++', logo: 'src/images/c++.svg' },
// //     { name: 'C', logo: 'src/images/c.svg' },
// //     { name: 'Go', logo: 'src/images/Go.svg' },
// //     { name: 'R', logo: 'src/images/r-lang.svg' },
// //     { name: 'Rust', logo: 'src/images/rust.svg' },
// //     { name: 'Dart', logo: 'src/images/Dart.png' },
// //     { name: 'Ruby', logo: 'src/images/ruby.svg' },
// //   ],
// //   dataScienceAndMachineLearning: [
// //     { name: 'PyTorch', logo: 'src/images/pytorch.png' },
// //     { name: 'TensorFlow', logo: 'src/images/Tensorflow.png' },
// //     { name: 'Keras', logo: 'src/images/keras.png' },
// //     { name: 'Scikit-learn', logo: 'src/images/scikit_learn.png' },
// //     { name: 'SageMaker', logo: 'src/images/AWS SageMaker.png' },
// //     { name: 'LangChain', logo: 'src/images/langchain.png' },
// //     { name: 'LlamaIndex', logo: 'src/images/llamaindex.png' },
// //     { name: 'FastAPI', logo: 'src/images/FastAPI.svg' },
// //     { name: 'OpenCV', logo: 'src/images/opencv.png' },
// //     { name: 'Crew AI', logo: 'src/images/crew_ai.png' },
// //     { name: 'Ollama', logo: 'src/images/ollama.png' },
// //     { name: 'Hugging Face', logo: 'src/images/Hugging Face.png' },
// //     { name: 'Streamlit', logo: 'src/images/streamlit.png' },
// //     { name: 'Flask', logo: 'src/images/flask.svg' },
// //     { name: 'MLflow', logo: 'src/images/MLflow.png' },
// //     { name: 'NLTK', logo: 'src/images/nltk.png' },
// //     { name: 'MatLAB', logo: 'src/images/Matlab.png' },
// //     { name: 'Groq', logo: 'src/images/groq.webp' },
// //     { name: 'PySpark', logo: 'src/images/pyspark.png' },
// //   ],
// //   devopsAndCloud: [
// //     { name: 'Bash', logo: 'src/images/bash.svg' },
// //     { name: 'Git', logo: 'src/images/git.svg' },
// //     { name: 'GitHub', logo: 'src/images/github.svg' },
// //     { name: 'Docker', logo: 'src/images/docker.png' },
// //     { name: 'Kubernetes', logo: 'src/images/kubernets.svg' },
// //     { name: 'Terraform', logo: 'src/images/terraform.png' },
// //     { name: 'AWS', logo: 'src/images/aws.svg' },
// //     { name: 'Azure', logo: 'src/images/azure.png' },
// //     { name: 'Google Cloud', logo: 'src/images/gcp.png' },
// //     { name: 'Amazon S3', logo: 'src/images/amazon_s3.svg' },
// //     { name: 'AWS EC2 Auto Scaling', logo: 'src/images/EC2 Auto Scaling.svg' },
// //     { name: 'AWS Lambda', logo: 'src/images/AWS Lambda.png' },
// //     { name: 'Apache', logo: 'src/images/apache.svg' },
// //     { name: 'Apache Kafka', logo: 'src/images/Apache Kafka.png' },
// //     { name: 'NGINX', logo: 'src/images/nginx.svg' },
// //     { name: 'Gitlab', logo: 'src/images/gitlab.svg' },
// //     { name: 'Jenkins', logo: 'src/images/Jenkins.png' },
// //     { name: 'Travis-CI', logo: 'src/images/travis-ci.svg' },
// //     { name: 'Prometheus', logo: 'src/images/Prometheus.png' },
// //     { name: 'Heroku', logo: 'src/images/heroku.svg' },
// //   ],
// //   webAndAppDevelopment: [
// //     { name: 'HTML', logo: 'src/images/html.png' },
// //     { name: 'CSS', logo: 'src/images/css.png' },
// //     { name: 'Sass', logo: 'src/images/sass.svg' },
// //     { name: 'React', logo: 'src/images/react.svg' },
// //     { name: 'Redux', logo: 'src/images/redux.svg' },
// //     { name: 'Next.js', logo: 'src/images/nextjs.png' },
// //     { name: 'Express.js', logo: 'src/images/Express.png' },
// //     { name: 'Node.js', logo: 'src/images/nodejs.png' },
// //     { name: 'NPM', logo: 'src/images/npm.svg' },
// //     { name: 'Bootstrap', logo: 'src/images/boostrap.svg' },
// //     { name: 'MaterialUI', logo: 'src/images/materialUi.png' },
// //     { name: 'Tailwind CSS', logo: 'src/images/Tailwind_CSS.png' },
// //     { name: 'GraphQL', logo: 'src/images/graphql.png' },
// //     { name: 'Django', logo: 'src/images/django.svg' },
// //     { name: 'Flutter', logo: 'src/images/flutter.png' },
// //     { name: 'React native', logo: 'src/images/react-native.svg' },
// //     { name: 'Swift', logo: 'src/images/swift.png' },
// //     { name: 'Figma', logo: 'src/images/figma.png' },
// //     { name: 'JEST', logo: 'src/images/jest.png' },
// //     { name: 'JSON', logo: 'src/images/json.svg' },
// //   ],
// //   databasesAndAnalysisTools: [
// //     { name: 'MongoDB', logo: 'src/images/mongodb.png' },
// //     { name: 'MySQL', logo: 'src/images/mysql.svg' },
// //     { name: 'Cassandra', logo: 'src/images/cassandra.svg' },
// //     { name: 'PostgreSQL', logo: 'src/images/postgresql.svg' },
// //     { name: 'Firebase', logo: 'src/images/firebase.svg' },
// //     { name: 'Redis', logo: 'src/images/redis.svg' },
// //     { name: 'ChromaDB', logo: 'src/images/chromadb.png' },
// //     { name: 'Pinecone', logo: 'src/images/pinecone.png' },
// //     { name: 'Oracle', logo: 'src/images/oracledb.png' },
// //     { name: 'Tableau', logo: 'src/images/Tableau.png' },
// //     { name: 'Excel', logo: 'src/images/excel.png' },
// //   ],
// //   tools: [
// //     { name: 'VS Code', logo: 'src/images/vscode.svg' },
// //     { name: 'PyCharm', logo: 'src/images/pycharm.svg' },
// //     { name: 'Jupyter', logo: 'src/images/jupyter.png' },
// //     { name: 'IntelliJ', logo: 'src/images/intellij.svg' },
// //     { name: 'Postman', logo: 'src/images/postman.svg' },
// //     { name: 'Bruno', logo: 'src/images/bruno.png' },
// //     { name: 'Android Studio', logo: 'src/images/android-studio.svg' },
// //     { name: 'Xcode', logo: 'src/images/xcode.png' },
// //     { name: 'GPT', logo: 'src/images/openai.png' },
// //     { name: 'StackOverflow', logo: 'src/images/stackoverflow.svg' },
// //     { name: 'Linux', logo: 'src/images/linux.svg' },
// //     { name: 'Raspberry Pi', logo: 'src/images/raspberry_pi.svg' },
// //     { name: 'Overleaf', logo: 'src/images/overleaf.svg' },
// //     { name: 'Shopify', logo: 'src/images/shopify.webp' },
// //   ],
// // };

// // const Skills: React.FC = () => {
// //   const themeContext = useContext(ThemeContext); // Get the current theme mode from context

// //   if (!themeContext) {
// //     // Handle case where ThemeContext is not provided or not initialized
// //     return null; // or render a fallback UI
// //   }

// //   return (
// //     <SkillsContainer theme={themeContext.theme}>

// //       <Navbar />
// //       <Typography variant="h4" component="h2" style={{ textAlign: 'center', color: '#76885B' }}>
// //         My Skills
// //       </Typography>
// //       {Object.entries(skillsData).map(([category, skills]) => (
// //         <div key={category} style={{ width: '100%', marginBottom: '20px' }}>
// //           <CategoryTitleContainer>
// //             <Divider style={{ flexGrow: 1 }} />
// //             <CategoryTitleText variant="h6">
// //               {category
// //                 .replace(/([A-Z])/g, ' $1')
// //                 .replace(/^./, (str) => str.toUpperCase())
// //                 .replace('And', 'and')}
// //             </CategoryTitleText>
// //             <Divider style={{ flexGrow: 1 }} />
// //           </CategoryTitleContainer>
// //           <SkillList>
// //             {skills.map((skill: Skill) => (
// //               <SkillItem key={skill.name} data-name={skill.name}>
// //                 <SkillItemImg src={skill.logo} alt={skill.name} />
// //               </SkillItem>
// //             ))}
// //           </SkillList>
// //         </div>
// //       ))}
// //     </SkillsContainer>
// //   );
// // };

// // export default Skills;
