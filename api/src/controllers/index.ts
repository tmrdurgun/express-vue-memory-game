import { Router } from 'express';
import Dashboard from './memory/Memory';

// Init router and path
const router = Router();
const path = '/api';

// Add sub-routes
router.use(Dashboard.path, Dashboard.router);

// Export the base-router
export default { router, path };
