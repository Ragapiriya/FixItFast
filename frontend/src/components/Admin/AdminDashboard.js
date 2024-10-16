import AdminReservations from './AdminReservation';
import AdminUsers from './AdminUsers';

const AdminDashboard = () => {
    return (
        <div>
            <b>
                <h1 style={{textAlign:'center'}}>Admin Dashboard</h1>
                </b> 
           <AdminReservations/>
           <AdminUsers/>
        </div>
    );
}

export default AdminDashboard;
 