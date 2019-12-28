export interface IMyuser{
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    role: string;
}
export interface IEvent{
    Event_id: string;
    Event_name: string;
    Event_description: string;
    Event_category: string;
    Event_start_date : string;
    Event_end_date: string;
    Event_start_time: string;
    Event_end_time: string;
    Event_location: string;
    Allow_registration: boolean;
    Event_image: ImageBitmap;
    Adult_ticket_price: Number;
    Child_ticket_price: Number;
}

export interface IRegistration{
    Registration_id: string;
    Event_name: string;
    First_name: string;
    Last_name: string;
    Email_id: string;
    Contact: string;
    Address: string;
    Total_adult_qty: Number;
    Total_child_qty: Number;
}