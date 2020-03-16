export const skins = `
<Layout cols={2} gap={0} justifyItems="center" alignItems="center">
  <ToggleButton tooltipContent="Crop & Rotate">
    <Icons.CropRotate />
  </ToggleButton>
  <ToggleButton tooltipContent="Crop & Rotate" skin="dark" >
    <Icons.CropRotate />
  </ToggleButton>
</Layout>
`;

export const selected = `
<Layout cols={2} gap={0} justifyItems="center">
  <ToggleButton tooltipContent="Crop & Rotate" selected>
    <Icons.CropRotate />
  </ToggleButton>
  <ToggleButton tooltipContent="Crop & Rotate" skin="dark" selected>
    <Icons.CropRotate />
  </ToggleButton>
</Layout>
`;

export const disabled = `
<Layout cols={2} gap={0} justifyItems="center">
  <ToggleButton tooltipContent="Crop & Rotate" disabled>
    <Icons.CropRotate />
  </ToggleButton>
  <ToggleButton tooltipContent="Crop & Rotate" skin="dark" disabled>
    <Icons.CropRotate />
  </ToggleButton>
</Layout>
`;

export const custom = `
<Layout cols={3} gap={0} justifyItems="center">
  <Box direction="vertical" align="center">
    <p>An &lt;a/&gt; tag</p>
    <ToggleButton as="a" href="https://www.wix.com" target="_blank"><Icons.CropRotate /></ToggleButton>
  </Box>
  <Box direction="vertical" align="center">
    <p>A react router &lt;Link/&gt; tag</p>
    <ToggleButton as={Link} to="/home"><Icons.CropRotate /></ToggleButton>
  </Box>
  <Box direction="vertical" align="center">
    <p>A native &lt;button/&gt; tag</p>
    <ToggleButton as="button" onClick={() => alert('yay')}><Icons.CropRotate /></ToggleButton>
  </Box>
</Layout>
`;

export const sizes = `
<Layout cols={4} gap={0} justifyItems="center">
  <Box direction="vertical" align="center">
    <ToggleButton size="tiny" labelValue="Tiny"><Icons.CropRotate /></ToggleButton>
  </Box>
  <Box direction="vertical" align="center">
    <ToggleButton size="small" labelValue="Small"><Icons.CropRotate /></ToggleButton>
  </Box>
  <Box direction="vertical" align="center">
    <ToggleButton size="medium" labelValue="Medium"><Icons.CropRotate /></ToggleButton>
  </Box>
  <Box direction="vertical" align="center">
    <ToggleButton size="large" labelValue="Large"><Icons.CropRotate /></ToggleButton>
  </Box>
</Layout>
`;

export const labelPlacements = `
<div style={{ textAlign: 'center' }}>
  <Container fluid>
    <Row>
      <Col span="4">
        <code>labelPlacement="tooltip"</code>.<br />
        Hover over ToggleButton to see tooltip with label
      </Col>
      <Col span="4">
        <code>labelPlacement="end"</code>
      </Col>
      <Col span="4">
        <code>labelPlacement="bottom"</code>
      </Col>
    </Row>
    <Row>
      <Col span="4">
        <ToggleButton labelValue="Label" labelPlacement="tooltip"><Icons.CropRotate /></ToggleButton>
      </Col>
      <Col span="4">
        <ToggleButton labelValue="Label" labelPlacement="end"><Icons.CropRotate /></ToggleButton>
      </Col>
      <Col span="4">
        <ToggleButton labelValue="Label" labelPlacement="bottom"><Icons.CropRotate /></ToggleButton>
      </Col>
    </Row>
  </Container>
</div>
`;
