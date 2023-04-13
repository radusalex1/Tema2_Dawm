export interface IEvent{
    id:number,
    name:string,
    location:string,
    startDate:Date,
    endDate:Date,
    points:number,
    organizer:any,
    description:string
}

// <td>{{ data.name }}</td>
//     <td>{{ data.location }}</td>
//     <td>{{ data.startDate }}</td>
//     <td>{{ data.startDate }}</td>
//     <td>{{ data.endDate }}</td>
//     <td>{{ data.points }}</td>
//     <td>{{ data.organizer}}</td>