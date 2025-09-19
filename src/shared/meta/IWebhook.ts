export interface IWebhook {
  event: string;
  session: string;
  engine: string;
  payload: {
    id: string;
    timestamp: number;
    from: string;
    fromMe: boolean;
    source: string;
    to: string;
    body: string;
    hasMedia: boolean;
    ack: number;
    vCards: string[];
  };
}

export interface ISessionHash {
  mat_number: string;
  password: string;
}
