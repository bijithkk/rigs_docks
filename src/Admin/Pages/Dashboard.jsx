import { Box } from "@mui/material";
import OverView from "../Components/Dashboard/OverView";
import SalesGraph from "../Components/Dashboard/SalesGraph";
import DashboardTables from "../Components/Dashboard/DashboardTables";
import TransactionDashboard from "../Components/Dashboard/TransactionDashboard";

const Dashboard = () => {
  return (
    <div>
      <Box sx={{ px: 3, pt: 2 }}>
        {/* Dashboard Overview */}
        <OverView />

        {/* Sales Graph Below the Dashboard Content */}
        <Box sx={{ mt: 4 }}>
          {" "}
          {/* Adds spacing before the graph */}
          <SalesGraph />
        </Box>

        <Box sx={{ mt: 4 }}>
          <DashboardTables />
        </Box>

        <Box sx={{ mt: 4, mb: 4 }}>
          <TransactionDashboard />
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
