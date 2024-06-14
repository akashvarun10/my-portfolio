// // import { useState } from 'react';
// // import { AppBar, Toolbar, Button, Stack, Box, IconButton } from '@mui/material';
// // import { Link } from 'react-scroll';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import brandImage from '/src/images/Intro/brand.png';

// // const Navbar = () => {
// //   const [showNav, setShowNav] = useState(false);

// //   const toggleNav = () => {
// //     setShowNav((prevState) => !prevState);
// //   };

// //   return (
// //     <AppBar
// //       position="fixed"
// //       sx={{
// //         top: 0,
// //         left: 0,
// //         right: 0,
// //         backgroundColor: '#76885B',
// //         padding: '5px 10px',
// //         margin: 'auto',
// //       }}
// //     >
// //       <Toolbar sx={{ justifyContent: 'space-between' }}>
// //         <Box>
// //           <img src={brandImage} alt="Brand" style={{ height: '40px' }} />
// //         </Box>
// //         <IconButton
// //           onClick={toggleNav}
// //           color="inherit"
// //           aria-label="Toggle navigation"
// //           sx={{ display: { xs: 'block', md: 'none' } }}
// //         >
// //           <MenuIcon />
// //         </IconButton>
// //         <Stack
// //           direction="row"
// //           spacing={2}
// //           alignItems="center"
// //           sx={{
// //             display: { xs: showNav ? 'flex' : 'none', md: 'flex' },
// //             flexDirection: { xs: 'column', md: 'row' },
// //             '& .nav-elements': {
// //               display: 'flex',
// //               flexDirection: 'row',
// //               alignItems: 'center',
// //               justifyContent: 'space-between',
// //               flexWrap: 'wrap',
// //             },
// //             '& .nav-elements ul': {
// //               listStyle: 'none',
// //               margin: 0,
// //               padding: 0,
// //               display: 'flex',
// //               flexDirection: 'row',
// //               justifyContent: 'space-between',
// //               flexWrap: 'wrap',
// //             },
// //             '& .nav-elements li': {
// //               margin: '10px',
// //             },
// //             '@media (max-width: 768px)': {
// //               '& .nav-elements': {
// //                 flexDirection: 'column',
// //               },
// //               '& .nav-elements ul': {
// //                 flexDirection: 'column',
// //               },
// //               '& .nav-elements li': {
// //                 marginBottom: '10px',
// //               },
// //             },
// //             '@media (max-width: 480px)': {
// //               '& .nav-elements': {
// //                 padding: '10px',
// //               },
// //               '& .nav-elements ul': {
// //                 padding: 0,
// //               },
// //               '& .nav-elements li': {
// //                 marginBottom: '5px',
// //               },
// //             },
// //           }}
// //         >
// //           <Button color="inherit">
// //             <Link to="hero" smooth duration={500} style={{ color: 'inherit', textDecoration: 'none' }}>
// //               Home
// //             </Link>
// //           </Button>
// //           <Button color="inherit">
// //             <Link to="about" smooth duration={500} style={{ color: 'inherit', textDecoration: 'none' }}>
// //               About
// //             </Link>
// //           </Button>
// //           <Button color="inherit">
// //             <Link to="skills" smooth duration={500} style={{ color: 'inherit', textDecoration: 'none' }}>
// //               Skills
// //             </Link>
// //           </Button>
// //           <Button color="inherit">
// //             <Link to="experience" smooth duration={500} style={{ color: 'inherit', textDecoration: 'none' }}>
// //               Resume
// //             </Link>
// //           </Button>
// //           <Button color="inherit">
// //             <Link to="project" smooth duration={500} style={{ color: 'inherit', textDecoration: 'none' }}>
// //               Projects
// //             </Link>
// //           </Button>
// //           <Button color="inherit">
// //             <Link to="services" smooth duration={500} style={{ color: 'inherit', textDecoration: 'none' }}>
// //               Services
// //             </Link>
// //           </Button>
// //           <Button color="inherit">
// //             <Link to="contact" smooth duration={500} style={{ color: 'inherit', textDecoration: 'none' }}>
// //               Contact
// //             </Link>
// //           </Button>
// //         </Stack>
// //       </Toolbar>
// //     </AppBar>
// //   );
// // };

// // export default Navbar;

// import { useState } from 'react';
// import { AppBar, Toolbar, Button, Stack, Box, IconButton } from '@mui/material';
// import { Link } from 'react-scroll';
// import MenuIcon from '@mui/icons-material/Menu';
// import brandImage from '/src/images/Intro/brand.png';

// const Navbar = () => {
//   const [showNav, setShowNav] = useState(false);

//   const toggleNav = () => {
//     setShowNav((prevState) => !prevState);
//   };

//   return (
//     <AppBar
//       position="fixed"
//       sx={{
//         top: 0,
//         left: 0,
//         right: 0,
//         backgroundColor: '#76885B',
//         padding: '5px 10px',
//         margin: 'auto',
//       }}
//     >
//       <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
//         <Box sx={{ flexShrink: 0, marginRight: 'auto' }}>
//           <img src={brandImage} alt="Brand" style={{ height: '40px' }} />
//         </Box>
//         <IconButton
//           onClick={toggleNav}
//           color="inherit"
//           aria-label="Toggle navigation"
//           sx={{ display: { xs: 'block', md: 'none' } }}
//         >
//           <MenuIcon />
//         </IconButton>
//         <Stack
//           direction="row"
//           spacing={2}
//           alignItems="center"
//           sx={{
//             display: { xs: showNav ? 'flex' : 'none', md: 'flex' },
//             flexDirection: { xs: 'column', md: 'row' },
//             flexWrap: 'wrap',
//             justifyContent: 'space-between',
//             '& .nav-elements': {
//               display: 'flex',
//               flexDirection: 'row',
//               alignItems: 'center',
//               justifyContent: 'space-between',
//               flexWrap: 'wrap',
//             },
//             '& .nav-elements ul': {
//               listStyle: 'none',
//               margin: 0,
//               padding: 0,
//               display: 'flex',
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               flexWrap: 'wrap',
//             },
//             '& .nav-elements li': {
//               margin: '10px',
//             },
//             '@media (max-width: 768px)': {
//               '& .nav-elements': {
//                 flexDirection: 'column',
//               },
//               '& .nav-elements ul': {
//                 flexDirection: 'column',
//               },
//               '& .nav-elements li': {
//                 marginBottom: '10px',
//               },
//             },
//             '@media (max-width: 480px)': {
//               '& .nav-elements': {
//                 padding: '10px',
//               },
//               '& .nav-elements ul': {
//                 padding: 0,
//               },
//               '& .nav-elements li': {
//                 marginBottom: '5px',
//               },
//             },
//           }}
//         >
//           <Button color="inherit">
//             <Link to="home" smooth duration={500} style={{ color: 'inherit', textDecoration: 'none' }}>
//               Home
//             </Link>
//           </Button>
//           <Button color="inherit">
//             <Link to="about" smooth duration={500} style={{ color: 'inherit', textDecoration: 'none' }}>
//               About
//             </Link>
//           </Button>
//           <Button color="inherit">
//             <Link to="skills" smooth duration={500} style={{ color: 'inherit', textDecoration: 'none' }}>
//               Skills
//             </Link>
//           </Button>
//           <Button color="inherit">
//             <Link to="resume" smooth duration={500} style={{ color: 'inherit', textDecoration: 'none' }}>
//               Resume
//             </Link>
//           </Button>
//           <Button color="inherit">
//             <Link to="project" smooth duration={500} style={{ color: 'inherit', textDecoration: 'none' }}>
//               Projects
//             </Link>
//           </Button>
//           <Button color="inherit">
//             <Link to="services" smooth duration={500} style={{ color: 'inherit', textDecoration: 'none' }}>
//               Services
//             </Link>
//           </Button>
//           <Button color="inherit">
//             <Link to="contact" smooth duration={500} style={{ color: 'inherit', textDecoration: 'none' }}>
//               Contact
//             </Link>
//           </Button>
//         </Stack>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;




// // // // // // // // import { useState } from 'react';
// // // // // // // // import { AppBar, Toolbar, Button, Stack, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
// // // // // // // // import { Link } from 'react-scroll';
// // // // // // // // import MenuIcon from '@mui/icons-material/Menu';
// // // // // // // // import brandImage from '/src/images/Intro/brand.png';

// // // // // // // // const Navbar = () => {
// // // // // // // //   const [showNav, setShowNav] = useState(false);

// // // // // // // //   const toggleNav = () => {
// // // // // // // //     setShowNav((prevState) => !prevState);
// // // // // // // //   };

// // // // // // // //   const closeNav = () => {
// // // // // // // //     setShowNav(false);
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <AppBar
// // // // // // // //       position="fixed"
// // // // // // // //       sx={{
// // // // // // // //         top: 0,
// // // // // // // //         left: 0,
// // // // // // // //         right: 0,
// // // // // // // //         backgroundColor: '#76885B',
// // // // // // // //         padding: '5px 10px',
// // // // // // // //         margin: 'auto',
// // // // // // // //       }}
// // // // // // // //     >
// // // // // // // //       <Toolbar sx={{ justifyContent: 'space-between' }}>
// // // // // // // //         <Box sx={{ flexShrink: 0 }}>
// // // // // // // //           <img src={brandImage} alt="Brand" style={{ height: '40px' }} />
// // // // // // // //         </Box>
// // // // // // // //         <IconButton
// // // // // // // //           onClick={toggleNav}
// // // // // // // //           color="inherit"
// // // // // // // //           aria-label="Toggle navigation"
// // // // // // // //           sx={{ display: { xs: 'block', md: 'none' } }}
// // // // // // // //         >
// // // // // // // //           <MenuIcon />
// // // // // // // //         </IconButton>
// // // // // // // //         <Stack
// // // // // // // //           direction="row"
// // // // // // // //           spacing={2}
// // // // // // // //           alignItems="center"
// // // // // // // //           sx={{
// // // // // // // //             display: { xs: 'none', md: 'flex' },
// // // // // // // //           }}
// // // // // // // //         >
// // // // // // // //           {['Home', 'About', 'Skills', 'Resume', 'Projects', 'Services', 'Contact'].map((item) => (
// // // // // // // //             <Button key={item} color="inherit">
// // // // // // // //               <Link to={item.toLowerCase()} smooth duration={500} style={{ color: 'inherit', textDecoration: 'none' }}>
// // // // // // // //                 {item}
// // // // // // // //               </Link>
// // // // // // // //             </Button>
// // // // // // // //           ))}
// // // // // // // //         </Stack>
// // // // // // // //         <Drawer anchor="right" open={showNav} onClose={closeNav}>
// // // // // // // //           <List sx={{ width: 250 }}>
// // // // // // // //             {['Home', 'About', 'Skills', 'Resume', 'Projects', 'Services', 'Contact'].map((item) => (
// // // // // // // //               <ListItem button key={item} onClick={closeNav}>
// // // // // // // //                 <ListItemText>
// // // // // // // //                   <Link to={item.toLowerCase()} smooth duration={500} style={{ color: 'inherit', textDecoration: 'none' }}>
// // // // // // // //                     {item}
// // // // // // // //                   </Link>
// // // // // // // //                 </ListItemText>
// // // // // // // //               </ListItem>
// // // // // // // //             ))}
// // // // // // // //           </List>
// // // // // // // //         </Drawer>
// // // // // // // //       </Toolbar>
// // // // // // // //     </AppBar>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Navbar;


// // // import React, { useState } from 'react';
// // // import { AppBar, Toolbar, Button, Stack, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
// // // import { Link } from 'react-scroll';
// // // import MenuIcon from '@mui/icons-material/Menu';
// // // import brandImage from '/src/images/Intro/brand.png';

// // // const Navbar = () => {
// // //   const [showNav, setShowNav] = useState(false);

// // //   const toggleNav = () => {
// // //     setShowNav((prevState) => !prevState);
// // //   };

// // //   const closeNav = () => {
// // //     setShowNav(false);
// // //   };

// // //   return (
// // //     <AppBar
// // //       position="fixed"
// // //       sx={{
// // //         top: 0,
// // //         left: 0,
// // //         right: 0,
// // //         backgroundColor: '#76885B',
// // //         padding: '5px 10px',
// // //         margin: 'auto',
// // //       }}
// // //     >
// // //       <Toolbar sx={{ justifyContent: 'space-between' }}>
// // //         <Box sx={{ flexShrink: 0 }}>
// // //           <img src={brandImage} alt="Brand" style={{ height: '40px' }} />
// // //         </Box>
// // //         <IconButton
// // //           onClick={toggleNav}
// // //           color="inherit"
// // //           aria-label="Toggle navigation"
// // //           sx={{ display: { xs: 'block', md: 'none' } }}
// // //         >
// // //           <MenuIcon />
// // //         </IconButton>
// // //         <Stack
// // //           direction={{ xs: 'column', md: 'row' }}
// // //           spacing={{ xs: 0, md: 2 }}
// // //           alignItems={{ xs: 'center', md: 'center' }}
// // //           justifyContent={{ xs: 'flex-start', md: 'flex-end' }}
// // //           sx={{
// // //             display: { xs: 'none', md: 'flex' },
// // //           }}
// // //         >
// // //           {['Home', 'About', 'Skills', 'Resume', 'Projects', 'Services', 'Contact'].map((item) => (
// // //             <Button key={item} color="inherit">
// // //               <Link to={item.toLowerCase()} smooth duration={500} style={{ color: 'inherit', textDecoration: 'none' }}>
// // //                 {item}
// // //               </Link>
// // //             </Button>
// // //           ))}
// // //         </Stack>
// // //         <Drawer anchor="right" open={showNav} onClose={closeNav}>
// // //           <List sx={{ width: 250 }}>
// // //             {['Home', 'About', 'Skills', 'Resume', 'Projects', 'Services', 'Contact'].map((item) => (
// // //               <ListItem button key={item} onClick={closeNav}>
// // //                 <ListItemText>
// // //                   <Link to={item.toLowerCase()} smooth duration={500} style={{ color: 'inherit', textDecoration: 'none' }}>
// // //                     {item}
// // //                   </Link>
// // //                 </ListItemText>
// // //               </ListItem>
// // //             ))}
// // //           </List>
// // //         </Drawer>
// // //       </Toolbar>
// // //     </AppBar>
// // //   );
// // // };

// // // export default Navbar;
// // // // // // import React, { useState } from 'react';
// // // // // // import { AppBar, Toolbar, Button, Stack, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
// // // // // // import { Link } from 'react-scroll';
// // // // // // import MenuIcon from '@mui/icons-material/Menu';
// // // // // // import brandImage from '/src/images/Intro/brand.png';

// // // // // // const Navbar = () => {
// // // // // //   const [showNav, setShowNav] = useState(false);

// // // // // //   const toggleNav = () => {
// // // // // //     setShowNav((prevState) => !prevState);
// // // // // //   };

// // // // // //   const closeNav = () => {
// // // // // //     setShowNav(false);
// // // // // //   };

// // // // // //   return (
// // // // // //     <AppBar
// // // // // //       position="fixed"
// // // // // //       sx={{
// // // // // //         top: 0,
// // // // // //         left: 0,
// // // // // //         right: 0,
// // // // // //         backgroundColor: '#76885B',
// // // // // //         padding: '5px 10px',
// // // // // //         margin: 'auto',
// // // // // //       }}
// // // // // //     >
// // // // // //       <Toolbar sx={{ justifyContent: 'space-between' }}>
// // // // // //         <Box sx={{ flexShrink: 0 }}>
// // // // // //           <img src={brandImage} alt="Brand" style={{ height: '40px' }} />
// // // // // //         </Box>
// // // // // //         <Stack
// // // // // //           direction="row"
// // // // // //           spacing={2}
// // // // // //           alignItems="center"
// // // // // //           sx={{ display: { xs: 'none', md: 'flex' } }}
// // // // // //         >
// // // // // //           {['Home', 'About', 'Skills', 'Resume', 'Projects', 'Services', 'Contact'].map((item) => (
// // // // // //             <Button key={item} color="inherit">
// // // // // //               <Link to={item.toLowerCase()} smooth duration={500} style={{ color: 'inherit', textDecoration: 'none' }}>
// // // // // //                 {item}
// // // // // //               </Link>
// // // // // //             </Button>
// // // // // //           ))}
// // // // // //         </Stack>
// // // // // //         <IconButton
// // // // // //           onClick={toggleNav}
// // // // // //           color="inherit"
// // // // // //           aria-label="Toggle navigation"
// // // // // //           sx={{ display: { xs: 'block', md: 'none' }, ml: 'auto' }}
// // // // // //         >
// // // // // //           <MenuIcon />
// // // // // //         </IconButton>
// // // // // //         <Drawer anchor="right" open={showNav} onClose={closeNav}>
// // // // // //           <List sx={{ width: 250 }}>
// // // // // //             {['Home', 'About', 'Skills', 'Resume', 'Projects', 'Services', 'Contact'].map((item) => (
// // // // // //               <ListItem button key={item} onClick={closeNav}>
// // // // // //                 <ListItemText>
// // // // // //                   <Link to={item.toLowerCase()} smooth duration={500} style={{ color: 'inherit', textDecoration: 'none' }}>
// // // // // //                     {item}
// // // // // //                   </Link>
// // // // // //                 </ListItemText>
// // // // // //               </ListItem>
// // // // // //             ))}
// // // // // //           </List>
// // // // // //         </Drawer>
// // // // // //       </Toolbar>
// // // // // //     </AppBar>
// // // // // //   );
// // // // // // };

// // // // // // export default Navbar;




// // // // // import { useState } from 'react';
// // // // // import { AppBar, Toolbar, Button, Stack, Box, IconButton} from '@mui/material';
// // // // // import { Link } from 'react-scroll';
// // // // // import MenuIcon from '@mui/icons-material/Menu';
// // // // // import brandImage from '/src/images/Intro/brand.png';

// // // // // const Navbar = () => {
// // // // //   const [showNav, setShowNav] = useState(false);

// // // // //   const toggleNav = () => {
// // // // //     setShowNav((prevState) => !prevState);
// // // // //   };

// // // // //   const closeNav = () => {
// // // // //     setShowNav(false);
// // // // //   };

// // // // //   return (
// // // // //     <AppBar
// // // // //       position="fixed"
// // // // //       sx={{
// // // // //         top: 0,
// // // // //         left: 0,
// // // // //         right: 0,
// // // // //         backgroundColor: '#76885B',
// // // // //         padding: '5px 10px',
// // // // //         margin: 'auto',
// // // // //       }}
// // // // //     >
// // // // //       <Toolbar sx={{ justifyContent: 'space-between' }}>
// // // // //         <Box sx={{ flexShrink: 0 }}>
// // // // //           <img src={brandImage} alt="Brand" style={{ height: '40px' }} />
// // // // //         </Box>
// // // // //         <IconButton
// // // // //           onClick={toggleNav}
// // // // //           color="inherit"
// // // // //           aria-label="Toggle navigation"
// // // // //           sx={{ display: { xs: 'block', md: 'none' } }}
// // // // //         >
// // // // //           <MenuIcon />
// // // // //         </IconButton>
// // // // //         <Stack
// // // // //           direction={{ xs: 'column', md: 'row' }}
// // // // //           spacing={{ xs: 0, md: 2 }}
// // // // //           alignItems={{ xs: 'flex-start', md: 'center' }}
// // // // //           justifyContent={{ xs: 'flex-start', md: 'flex-end' }}
// // // // //           sx={{
// // // // //             display: { xs: showNav ? 'flex' : 'none', md: 'flex' },
// // // // //             width: { xs: '100%', md: 'auto' },
// // // // //             marginTop: { xs: '10px', md: 0 },
// // // // //           }}
// // // // //         >
// // // // //           {['Home', 'About', 'Skills', 'Resume', 'Projects', 'Services', 'Contact'].map((item) => (
// // // // //             <Button key={item} color="inherit" onClick={closeNav}>
// // // // //               <Link to={item.toLowerCase()} smooth duration={500} style={{ color: 'inherit', textDecoration: 'none' }}>
// // // // //                 {item}
// // // // //               </Link>
// // // // //             </Button>
// // // // //           ))}
// // // // //         </Stack>
// // // // //       </Toolbar>
// // // // //     </AppBar>
// // // // //   );
// // // // // };

// // // // // export default Navbar;




// // // // // import { useState } from 'react';
// // // // // import { AppBar, Toolbar, Button, Stack, Box, IconButton} from '@mui/material';
// // // // // import { Link } from 'react-scroll';
// // // // // import MenuIcon from '@mui/icons-material/Menu';
// // // // // import brandImage from '/src/images/Intro/brand.png';

// // // // // const Navbar = () => {
// // // // //   const [showNav, setShowNav] = useState(false);

// // // // //   const toggleNav = () => {
// // // // //     setShowNav((prevState) => !prevState);
// // // // //   };

// // // // //   const closeNav = () => {
// // // // //     setShowNav(false);
// // // // //   };

// // // // //   return (
// // // // //     <AppBar
// // // // //       position="fixed"
// // // // //       sx={{
// // // // //         top: 0,
// // // // //         left: 0,
// // // // //         right: 0,
// // // // //         backgroundColor: '#76885B',
// // // // //         padding: '5px 10px',
// // // // //         margin: 'auto',
// // // // //       }}
// // // // //     >
// // // // //       <Toolbar sx={{ justifyContent: 'space-between' }}>
// // // // //         <Box sx={{ flexShrink: 0 }}>
// // // // //           <img src={brandImage} alt="Brand" style={{ height: '40px' }} />
// // // // //         </Box>
// // // // //         <IconButton
// // // // //           onClick={toggleNav}
// // // // //           color="inherit"
// // // // //           aria-label="Toggle navigation"
// // // // //           sx={{ display: { xs: 'block', md: 'none' } }}
// // // // //         >
// // // // //           <MenuIcon />
// // // // //         </IconButton>
// // // // //         <Stack
// // // // //           direction={{ xs: 'column', md: 'row' }}
// // // // //           spacing={{ xs: 0, md: 2 }}
// // // // //           alignItems={{ xs: 'flex-start', md: 'center' }}
// // // // //           justifyContent={{ xs: 'flex-start', md: 'flex-end' }}
// // // // //           sx={{
// // // // //             display: { xs: showNav ? 'flex' : 'none', md: 'flex' },
// // // // //             width: { xs: '100%', md: 'auto' },
// // // // //             marginTop: { xs: '10px', md: 0 },
// // // // //           }}
// // // // //         >
// // // // //           {['Home', 'About', 'Skills', 'Resume', 'Projects', 'Services', 'Contact'].map((item) => (
// // // // //             <Button key={item} color="inherit" onClick={closeNav}>
// // // // //               <Link to={item.toLowerCase()} smooth duration={500} style={{ color: 'inherit', textDecoration: 'none' }}>
// // // // //                 {item}
// // // // //               </Link>
// // // // //             </Button>
// // // // //           ))}
// // // // //         </Stack>
// // // // //       </Toolbar>
// // // // //     </AppBar>
// // // // //   );
// // // // // };

// // // // // export default Navbar;

// // // import { useState } from 'react';
// // // import { AppBar, Toolbar, Button, Stack, Box, IconButton } from '@mui/material';
// // // import { Link } from 'react-scroll';
// // // import MenuIcon from '@mui/icons-material/Menu';
// // // import brandImage from '/src/images/Intro/brand.png';

// // // const Navbar = () => {
// // //   const [showNav, setShowNav] = useState(false);

// // //   const toggleNav = () => {
// // //     setShowNav((prevState) => !prevState);
// // //   };

// // //   const closeNav = () => {
// // //     setShowNav(false);
// // //   };

// // //   return (
// // //     <AppBar position="fixed" sx={{ top: 0, left: 0, right: 0, backgroundColor: '#76885B' }}>
// // //       <Toolbar sx={{ justifyContent: 'space-between', paddingX: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
// // //         <Box sx={{ flexShrink: 0, marginRight: { xs: 2, sm: 4 } }}>
// // //           <img src={brandImage} alt="Brand" style={{ height: '40px' }} />
// // //         </Box>
// // //         <IconButton
// // //           onClick={toggleNav}
// // //           color="inherit"
// // //           aria-label="Toggle navigation"
// // //           sx={{ display: { xs: 'block', md: 'none' } }}
// // //         >
// // //           <MenuIcon />
// // //         </IconButton>
// // //         <Stack
// // //           direction={{ xs: 'column', md: 'row' }}
// // //           spacing={{ xs: 1, md: 2, lg: 3 }}
// // //           alignItems="center"
// // //           justifyContent={{ xs: 'flex-start', md: 'flex-end' }}
// // //           sx={{
// // //             display: { xs: showNav ? 'flex' : 'none', md: 'flex' },
// // //             width: { xs: '100%', md: 'auto' },
// // //             marginTop: { xs: 2, md: 0 },
// // //           }}
// // //         >
// // //           {['Home', 'About', 'Skills', 'Resume', 'Projects', 'Services', 'Contact'].map((item) => (
// // //             <Button key={item} color="inherit" onClick={closeNav} sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>
// // //               <Link to={item.toLowerCase()} smooth duration={500} style={{ color: 'inherit', textDecoration: 'none' }}>
// // //                 {item}
// // //               </Link>
// // //             </Button>
// // //           ))}
// // //         </Stack>
// // //       </Toolbar>
// // //     </AppBar>
// // //   );
// // // };

// // // export default Navbar;


// // import { useState } from 'react';
// // import { AppBar, Toolbar, Button, Stack, Box, IconButton } from '@mui/material';
// // import { Link } from 'react-scroll';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import brandImage from '/src/images/Intro/brand.png';

// // const Navbar = () => {
// //   const [showNav, setShowNav] = useState(false);

// //   const toggleNav = () => {
// //     setShowNav((prevState) => !prevState);
// //   };

// //   const closeNav = () => {
// //     setShowNav(false);
// //   };

// //   return (
// //     <AppBar position="fixed" sx={{ top: 0, left: 0, right: 0, backgroundColor: '#76885B' }}>
// //       <Toolbar sx={{ justifyContent: 'space-between', paddingX: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
// //         <Box sx={{ flexShrink: 0, marginRight: { xs: 2, sm: 4 } }}>
// //           <img src={brandImage} alt="Brand" style={{ height: '40px' }} />
// //         </Box>
// //         <IconButton
// //           onClick={toggleNav}
// //           color="inherit"
// //           aria-label="Toggle navigation"
// //           sx={{ display: { xs: 'block', md: 'none' } }}
// //         >
// //           <MenuIcon />
// //         </IconButton>
// //         <Stack
// //           direction={{ xs: 'column', md: 'row' }}
// //           spacing={{ xs: 1, md: 2, lg: 3 }}
// //           alignItems="center"
// //           justifyContent={{ xs: 'flex-start', md: 'flex-end' }}
// //           sx={{
// //             display: { xs: showNav ? 'flex' : 'none', md: 'flex' },
// //             width: { xs: '100%', md: 'auto' },
// //             marginTop: { xs: 2, md: 0 },
// //           }}
// //         >
// //           {['Home', 'About', 'Skills', 'Resume', 'Projects', 'Services', 'Contact'].map((item) => (
// //             <Button key={item} color="inherit" onClick={closeNav} sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>
// //               <Link to={item.toLowerCase()} smooth duration={500} style={{ color: 'inherit', textDecoration: 'none' }}>
// //                 {item}
// //               </Link>
// //             </Button>
// //           ))}
// //         </Stack>
// //       </Toolbar>
// //     </AppBar>
// //   );
// // };

// // export default Navbar;


// import { useState } from 'react';
// import { AppBar, Toolbar, Button, Stack, Box, IconButton } from '@mui/material';
// import { Link } from 'react-scroll';
// import MenuIcon from '@mui/icons-material/Menu';
// import brandImage from '/src/images/Intro/brand.png';

// const Navbar = () => {
//   const [showNav, setShowNav] = useState(false);

//   const toggleNav = () => {
//     setShowNav((prevState) => !prevState);
//   };

//   const closeNav = () => {
//     setShowNav(false);
//   };

//   return (
//     <AppBar position="fixed" sx={{ top: 0, left: 0, right: 0, backgroundColor: '#76885B' }}>
//       <Toolbar sx={{ justifyContent: 'space-between', paddingX: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
//         <Box sx={{ flexShrink: 0, marginRight: { xs: 2, sm: 4 } }}>
//           <img src={brandImage} alt="Brand" style={{ height: '40px' }} />
//         </Box>
//         <IconButton
//           onClick={toggleNav}
//           color="inherit"
//           aria-label="Toggle navigation"
//           sx={{ display: { xs: 'block', md: 'none' } }}
//         >
//           <MenuIcon />
//         </IconButton>
//         <Stack
//           direction={{ xs: 'column', md: 'row' }}
//           spacing={{ xs: 1, md: 2, lg: 3 }}
//           alignItems="center"
//           justifyContent={{ xs: 'flex-start', md: 'flex-end' }}
//           sx={{
//             display: { xs: showNav ? 'flex' : 'none', md: 'flex' },
//             width: { xs: '100%', md: 'auto' },
//             marginTop: { xs: 2, md: 0 },
//           }}
//         >
//           {['Home', 'About', 'Skills', 'Resume', 'Projects', 'Services', 'Contact'].map((item) => (
//             <Button key={item} color="inherit" onClick={closeNav} sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>
//               <Link to={item.toLowerCase()} smooth duration={500} style={{ color: 'inherit', textDecoration: 'none' }}>
//                 {item}
//               </Link>
//             </Button>
//           ))}
//         </Stack>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;





// import { useState } from 'react';
// import { AppBar, Toolbar, Button, Stack, Box, IconButton } from '@mui/material';
// import { Link } from 'react-scroll';
// import MenuIcon from '@mui/icons-material/Menu';
// import brandImage from '../images/Intro/brand.png'; // Adjust path as per your folder structure

// const Navbar = () => {
//   const [showNav, setShowNav] = useState(false);

//   const toggleNav = () => {
//     setShowNav((prevState) => !prevState);
//   };

//   const closeNav = () => {
//     setShowNav(false);
//   };

//   return (
//     <AppBar position="fixed" sx={{ top: 0, left: 0, right: 0, backgroundColor: '#76885B' }}>
//       <Toolbar sx={{ justifyContent: 'space-between', paddingX: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
//         <Box sx={{ flexShrink: 0, marginRight: { xs: 2, sm: 4 } }}>
//           <img src={brandImage} alt="Brand" style={{ height: '40px' }} />
//         </Box>
//         <IconButton
//           onClick={toggleNav}
//           color="inherit"
//           aria-label="Toggle navigation"
//           sx={{ display: { xs: 'block', md: 'none' } }}
//         >
//           <MenuIcon />
//         </IconButton>
//         <Stack
//           direction={{ xs: 'column', md: 'row' }}
//           spacing={{ xs: 1, md: 2, lg: 3 }}
//           alignItems="center"
//           justifyContent={{ xs: 'flex-start', md: 'flex-end' }}
//           sx={{
//             display: { xs: showNav ? 'flex' : 'none', md: 'flex' },
//             width: { xs: '100%', md: 'auto' },
//             marginTop: { xs: 2, md: 0 },
//           }}
//         >
//           {['Home', 'About', 'Skills', 'Resume', 'Projects', 'Services', 'Contact'].map((item) => (
//             <Button key={item} color="inherit" onClick={closeNav} sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>
//               <Link to={item.toLowerCase()} smooth duration={500} style={{ color: 'inherit', textDecoration: 'none' }}>
//                 {item}
//               </Link>
//             </Button>
//           ))}
//         </Stack>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;


// import { useState } from 'react';
// import { AppBar, Toolbar, Button, Stack, Box, IconButton } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import brandImage from '../images/Intro/brand.png'; // Adjust path as per your folder structure

// const Navbar = () => {
//   const [showNav, setShowNav] = useState(false);

//   const toggleNav = () => {
//     setShowNav((prevState) => !prevState);
//   };

//   const closeNav = () => {
//     setShowNav(false);
//   };

//   const handleScroll = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       closeNav();
//     }
//   };
  

//   return (
//     <AppBar position="fixed" sx={{ top: 0, left: 0, right: 0, backgroundColor: '#76885B' }}>
//       <Toolbar sx={{ justifyContent: 'space-between', paddingX: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
//         <Box sx={{ flexShrink: 0, marginRight: { xs: 2, sm: 4 } }}>
//           <img src={brandImage} alt="Brand" style={{ height: '40px' }} />
//         </Box>
//         <IconButton
//           onClick={toggleNav}
//           color="inherit"
//           aria-label="Toggle navigation"
//           sx={{ display: { xs: 'block', md: 'none' } }}
//         >
//           <MenuIcon />
//         </IconButton>
//         <Stack
//           direction={{ xs: 'column', md: 'row' }}
//           spacing={{ xs: 1, md: 2, lg: 3 }}
//           alignItems="center"
//           justifyContent={{ xs: 'flex-start', md: 'flex-end' }}
//           sx={{
//             display: { xs: showNav ? 'flex' : 'none', md: 'flex' },
//             width: { xs: '100%', md: 'auto' },
//             marginTop: { xs: 2, md: 0 },
//           }}
//         >
//           {['Home', 'About', 'Skills', 'Resume', 'Projects', 'Services', 'Contact'].map((item) => (
//             <Button key={item} color="inherit" onClick={() => handleScroll(item.toLowerCase())} sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>
//               {item}
//             </Button>
//           ))}
//         </Stack>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;
// src/components/Navbar.tsx
import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Stack, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeToggleButton from './ThemeToggleButton';
import brandImage from '../images/Intro/brand.png';

const Navbar: React.FC = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav((prevState) => !prevState);
  };

  const closeNav = () => {
    setShowNav(false);
  };

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeNav();
    }
  };

  return (
    <AppBar position="fixed" sx={{ top: 0, left: 0, right: 0, backgroundColor: '#76885B' }}>
      <Toolbar sx={{ justifyContent: 'space-between', paddingX: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
        <Box sx={{ flexShrink: 0, marginRight: { xs: 2, sm: 4 } }}>
          <img src={brandImage} alt="Brand" style={{ height: '40px' }} />
        </Box>
        <IconButton
          onClick={toggleNav}
          color="inherit"
          aria-label="Toggle navigation"
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 1, md: 2, lg: 3 }}
          alignItems="center"
          justifyContent={{ xs: 'flex-start', md: 'flex-end' }}
          sx={{
            display: { xs: showNav ? 'flex' : 'none', md: 'flex' },
            width: { xs: '100%', md: 'auto' },
            marginTop: { xs: 2, md: 0 },
          }}
        >
          {['Home', 'About', 'Skills', 'Resume', 'Projects', 'Services', 'Contact'].map((item) => (
            <Button key={item} color="inherit" onClick={() => handleScroll(item.toLowerCase())} sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>
              {item}
            </Button>
          ))}
          <ThemeToggleButton />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
