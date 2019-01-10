import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Dashboard extends React.Component<RouteComponentProps<{}>, {}> {
    constructor(props: any) {
        super(props);

        this.GetDashboardData = this.GetDashboardData.bind(this);
    }

    GetDashboardData() {
        fetch('api/dashboard/test', { method: 'GET', credentials: 'same-origin' })
            .then((response: any) => response.text())
            .then((text) => console.log(text));
        //.then((response: Response) => response.json()) // Transform the data into json
            //.then((data: DashboardResponse) => {
            //    console.log(data);
            //});
    }

    componentDidMount() {
        this.GetDashboardData();
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