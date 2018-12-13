import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Dashboard extends React.Component<RouteComponentProps<{}>, {}> {
    componentWillMount() {
        fetch('api/dashboard/test', { method: 'GET', credentials: 'include'})
            .then((response: Response) => response.json()) // Transform the data into json
            .then((data: DashboardResponse) => {
                console.log(data);
        });
    }
    render() {
        return(
            <div>
                This is where the dashboard goes
            </div>
        )
    }
}

interface DashboardResponse {

}