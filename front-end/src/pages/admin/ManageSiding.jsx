import {useState} from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';

import Sidebar from './components/Sidebar';
import OrderTable from './components/OrderTable';
import OrderList from './components/OrderList';
import Header from './components/Header';


import AddSidingForm from './Forms/AddSidingForm';
import Add from '@mui/icons-material/Add';
import UpdateSidingForm from './Forms/UpdateSidingForm';
import DeleteSidingForm from './Forms/DeleteSidingForm';


export default function ManageSiding() {


  // Conditionally Rendering Forms 
  const [showForm, setShowForm] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);

  function handleAddClick() {
    setShowForm(false);
    setShowAddForm(true);
    setShowUpdateForm(false);
    setShowDeleteForm(false);
  }

  function handleUpdateClick() {
     setShowForm(false);
    setShowAddForm(false);
    setShowUpdateForm(true);
    setShowDeleteForm(false);
  }

  function handleDeleteClick() {
    setShowForm(false);
    setShowAddForm(false);
    setShowUpdateForm(false);
    setShowDeleteForm(true);
  }


  // This means that the component has been entered..

  // Here launch an axios request to fetch data from the DataBase...
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   axios.get('http://localhost:3000/api/...')
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
























  return (

    <>

    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100dvh' }}>

        <Header />
        <Sidebar />

       

        <Box
          component="main"
          className="MainContent"
          sx={{
            px: { xs: 2, md: 6 },
            pt: {
              xs: 'calc(12px + var(--Header-height))',
              sm: 'calc(12px + var(--Header-height))',
              md: 3,
            },
            pb: { xs: 2, sm: 2, md: 3 },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            height: '100dvh',
            gap: 1,
          }}
        >
        {/* The upper nav section */}
        
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Breadcrumbs
              size="sm"
              aria-label="breadcrumbs"
              separator={<ChevronRightRoundedIcon fontSize="sm" />}
              sx={{ pl: 0 }}
            >
              <Link
                underline="none"
                color="neutral"
                href="/dashboard"
                aria-label="Home"
              >
                <HomeRoundedIcon />
              </Link>
              <Link
                underline="hover"
                color="neutral"
                href="#some-link"
                fontSize={12}
                fontWeight={500}
              >
                Dashboard
              </Link>
              <Typography color="primary" fontWeight={500} fontSize={12}>
                Manage Sidings
              </Typography>
            </Breadcrumbs>
          </Box>
          
          {/* Manage Siding Heading */}
          <Box
            sx={{
              display: 'flex',
              mb: 1,
              gap: 1,
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'start', sm: 'center' },
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}
          >
            <Typography level="h2" component="h1">
              Manage Sidings
            </Typography>


           <Box
           sx={{display:'flex',
           justifyContent:'space-between', gap:1
           }}
           >
             <Button
              color="primary"
              size="md"
              id='add'
              onClick={handleAddClick}
              startDecorator={<Add />}

            >
              Add Siding
            </Button>


              <Button
              color="primary"
              id='update'
              onClick={handleUpdateClick}

              size="md"

            >
              Update Siding
            </Button>

              <Button
              color="primary"
              size="md"
              id='delete'
              onClick={handleDeleteClick}

            >
              Delete Siding
            </Button>

           </Box>

           



          </Box>

          {/* The main content of the page */}

          {showForm && <OrderTable />}
         
          

          {
            showUpdateForm && <UpdateSidingForm />
          }
              

          {
            showDeleteForm && <DeleteSidingForm />
          }  


           {
            showAddForm && <AddSidingForm />
          }
          
          {/* <OrderList /> */}

          





        </Box>

          

      </Box>


      


    </CssVarsProvider>




    </>


  );
}
