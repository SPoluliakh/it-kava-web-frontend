'use client';
import { Box, Button, Container, Stack, ThemeProvider } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { theme } from '@/common/theme';
import { IconButton } from '@/common/components';
import { ServiceItem } from '@/features/home/Services/components/ServiceItem';

export default function AboutPage() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Container>
          <h1>UI Kit</h1>
          <Stack gap={2}>
            <ServiceItem href="/" text="Service" />

            <Stack gap={2} direction="row" sx={{ alignItems: 'center' }}>
              <Button>Label</Button>
              <Button disabled>Label</Button>
            </Stack>
            <Stack gap={2} direction="row" sx={{ alignItems: 'center' }}>
              <Button startIcon={<ChevronLeft />}>Label</Button>
              <Button disabled startIcon={<ChevronLeft />}>
                Label
              </Button>
            </Stack>
            <Stack gap={2} direction="row" sx={{ alignItems: 'center' }}>
              <Button endIcon={<ChevronRight />}>Label</Button>
              <Button disabled endIcon={<ChevronRight />}>
                Label
              </Button>
            </Stack>

            <Stack gap={2} direction="row" sx={{ alignItems: 'center' }}>
              <Button variant="contained">Label</Button>
              <Button variant="contained" disabled>
                Label
              </Button>
            </Stack>

            <Stack gap={2} direction="row" sx={{ alignItems: 'center' }}>
              <Button variant="contained" startIcon={<ChevronLeft />}>
                Label
              </Button>
              <Button variant="contained" disabled startIcon={<ChevronLeft />}>
                Label
              </Button>
            </Stack>
            <Stack gap={2} direction="row" sx={{ alignItems: 'center' }}>
              <Button variant="contained" endIcon={<ChevronRight />}>
                Label
              </Button>
              <Button variant="contained" disabled endIcon={<ChevronRight />}>
                Label
              </Button>
            </Stack>

            <Stack gap={2} direction="row" sx={{ alignItems: 'center' }}>
              <IconButton color="primary" href="#">
                <ChevronRight />
              </IconButton>
              <IconButton color="primary" disabled>
                <ChevronRight />
              </IconButton>
              <IconButton variant="filled">
                <ChevronRight />
              </IconButton>
              <IconButton variant="filled" disabled>
                <ChevronRight />
              </IconButton>
              <IconButton variant="icon">
                <ChevronRight />
              </IconButton>
              <IconButton variant="icon" disabled>
                <ChevronRight />
              </IconButton>
            </Stack>

            <Stack gap={2} sx={{ backgroundColor: 'primary.c900', p: 3 }}>
              <Stack gap={2} direction="row" sx={{ alignItems: 'center' }}>
                <Button variant="contained" color="secondary">
                  Label
                </Button>
                <Button variant="contained" color="secondary" startIcon={<ChevronLeft />}>
                  Label
                </Button>
                <Button variant="contained" color="secondary" endIcon={<ChevronRight />}>
                  Label
                </Button>
              </Stack>
              <Stack gap={2} direction="row" sx={{ alignItems: 'center' }}>
                <Button variant="contained" color="secondary" disabled>
                  Label
                </Button>
                <Button variant="contained" color="secondary" disabled startIcon={<ChevronLeft />}>
                  Label
                </Button>
                <Button variant="contained" color="secondary" disabled endIcon={<ChevronRight />}>
                  Label
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
