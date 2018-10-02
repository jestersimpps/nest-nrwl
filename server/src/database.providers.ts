import * as mongoose from 'mongoose';

export const databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: async (): Promise<typeof mongoose> =>
            await mongoose.connect('mongodb://demo:abc123@ds121413.mlab.com:21413/demo',  { useNewUrlParser: true }),
    },
];