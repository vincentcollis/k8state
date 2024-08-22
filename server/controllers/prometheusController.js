import prometheusService from '../services/prometheusService.js';
const prometheusController = {
    // Middleware function to get all CPU usage metrics for pods
    fetchCpuUsage: async (_req, res, next) => {
        try {
            const metrics = await prometheusService.getCpuUsageForPods();
            res.locals.cpuData = metrics;
            next();
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error fetching CPU metrics from cluster' });
        }
    },
    // Middleware function to get all Memory usage metrics for pods
    fetchMemoryUsage: async (_req, res, next) => {
        try {
            const metrics = await prometheusService.getMemoryUsageForPods();
            res.locals.memoryData = metrics;
            next();
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error fetching Memory metrics from cluster' });
        }
    },
};
export default prometheusController;
