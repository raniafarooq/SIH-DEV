
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Stack from '@mui/joy/Stack';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Typography from '@mui/joy/Typography';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

import DropZone from '../components/DropZone';
import FileUpload from '../components/FileUpload';
import CountrySelector from '../components/CountrySelector';
import EditorToolbar from '../components/EditorToolbar';
import Grid from '@mui/material/Grid';
import { useColorScheme } from '@mui/joy';
import { useNavigate } from 'react-router-dom';

export default function AddNewArrivingTrainForm() {

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    //code to submit form data to backend
  };
  return (

    <Box sx={{ flex: 1, width: '100%' }}>


      <Box
        sx={{
          position: 'sticky',
          top: { sm: -100, md: -110 },
          bgcolor: 'background.body',
          zIndex: 10,
        }}
      >


        <Box sx={{ px: { xs: 2, md: 6 } }}>

          <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2, borderBlock: 0.6 }}>
            Schedule Maintainence
          </Typography>
        </Box>


      </Box>

      <form onSubmit={handleSubmit}>

        {/* CARDS */}
        <Card>
          {/* Card1 */}
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Schedule Maintainence Form</Typography>
          </Box>
          <Divider />
          <Stack
            direction="row"
            spacing={3}
            sx={{ display: { xs: 'flex', md: 'flex' }, my: 1 }}
          >

            <Stack spacing={2} sx={{ flexGrow: 1 }}>
              <Stack spacing={1}>

                Form
                
                
              </Stack>
            </Stack>
          </Stack>

          {/* SAVE AND CANCEL BUTTONS */}

          <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
            <Button size="sm" variant="outlined" color="neutral" 
            onClick={() => {
              // console.log("hi");
              // navigate('/dashboard/manage-siding')
            }}>
              Cancel
            </Button>
            <Button size="sm" variant="solid" type="submit">
              Save
            </Button>
          </CardActions>

        </Card>





        {/* </Stack> */}


      </form>









    </Box>
  );
}