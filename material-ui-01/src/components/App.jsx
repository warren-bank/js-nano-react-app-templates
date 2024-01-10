import React from "react";

import Hover from "./styled/Hover";

import { styled, Typography, Stack, Avatar, Link, Paper, Card, CardContent } from "@mui/material";
import { deepOrange } from '@mui/material/colors';
import { Assignment } from '@mui/icons-material';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: '80%',
  backgroundColor: '#eee',
  padding: theme.spacing(2),
  ...theme.typography.body2,
  margin: 'auto',
  textAlign: 'center',
}));

const DemoCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  ...theme.typography.body2,
  margin: 'auto',
  textAlign: 'center',
}));

export default () => (
  <>
    <h1>Welcome to React Vite Micro App!</h1>
    <p>Hard to get more minimal than this React app.</p>
    <hr/>
    <Typography variant="h6">
      <Stack direction="row" alignItems="center" spacing={2}>
        <Avatar alt="Demo" sx={{ bgcolor: deepOrange[500] }}><Assignment /></Avatar>
        <span>Demo:</span>
        <Link target="_blank" rel="noreferrer" href="https://mui.com/material-ui/all-components/" underline="hover">@mui/material</Link>
      </Stack>
    </Typography>
    <hr/>
    <DemoPaper elevation={3}>
      <DemoCard sx={{ maxWidth: '50%' }}>
        <CardContent>
          <Hover>
            <Typography variant="h5">
              Hover to change color.
            </Typography>
          </Hover>
        </CardContent>
      </DemoCard>
    </DemoPaper>
  </>
);
