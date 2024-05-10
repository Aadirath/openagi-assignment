const express = require('express');
const app = express();

// Example data for available components
const components = [
  { id: 1, type: 'LLM', name: 'GPT-3' },
  { id: 2, type: 'Agent', name: 'Customer Service Agent' },
  { id: 3, type: 'Tool', name: 'Data Analysis Tool' },
];

// GET /api/components endpoint
app.get('/api/components', (req, res) => {
  res.json(components);
});

// POST /api/workflows endpoint (replace with your actual logic)
app.post('/api/workflows', (req, res) => {
  const workflowData = req.body;
  console.log('Received workflow data:', workflowData);
  // Implement logic to process workflow data (component types, configurations)
  res.json({ message: 'Workflow received' });
});

const port = process.env.PORT || 5000; // Use environment variable for port

app.listen(port, () => console.log(`Server listening on port ${port}`));
