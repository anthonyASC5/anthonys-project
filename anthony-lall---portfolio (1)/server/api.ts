import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true
}));

// Health check
app.get('/health', (_, res) => {
  res.json({ status: 'ok' });
});

// Placeholder API endpoint (ready for Gemini integration)
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // TODO: Integrate Google Generative AI SDK here
    // const { GoogleGenerativeAI } = require('@google/generative-ai');
    // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    // const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    // const result = await model.generateContent(message);

    // For now, return a placeholder response
    res.json({
      success: true,
      message: 'API endpoint ready for Gemini integration',
      received: message
    });
  } catch (error) {
    console.error('API error:', error);
    // Never expose internal details or API keys
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on port ${PORT}`);
  console.log(`📡 Frontend should proxy requests to /api to this server`);
});
