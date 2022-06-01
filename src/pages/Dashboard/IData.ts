export interface Data {
    description: string;
    id: number;
    info: {
      date: string;
      place: string;
    };
    invited_people: [
      {
        id: number;
        name: string;
        confirmed_presence: boolean;
        avatar: string;
        username: string;
      }
    ];
    type: string;
    title: string;
    file: {
      url: string;
    };
  }