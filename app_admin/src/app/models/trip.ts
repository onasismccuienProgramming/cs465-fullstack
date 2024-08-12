export interface Trip {
    _id: string, // Internal primary key in MongoDB
    code: string,
    name: string,
    lingth: string,
    start: Date,
    resort: string,
    perPerson: string,
    image: string,
    description: string
}